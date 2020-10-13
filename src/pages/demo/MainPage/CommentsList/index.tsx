import { NetworkStatus } from '@apollo/client'
import ErrorMessage from '../../ErrorMessage'
import { CommentsListProps, UserAvatarAlign } from './interfaces'
import {
  CommentsConnectionDocument as allCommentsQueryDocument,
  useCommentsConnectionQuery,
  CommentsConnectionCommentFragment,
  CommentsConnectionQuery,
} from 'src/modules/gql/generated'

import {
  CommentsStyled,
  CommentStyled,
  CommentHeaderStyled,
  UserAvatarStyled,
} from './styles'

export const allPostsQueryVars = {
  skip: 0,
  first: 5,
}

export const CommentsList: React.FC<CommentsListProps> = (props) => {
  const { variables } = props

  const {
    loading,
    error,
    data,
    networkStatus,
    fetchMore,
  } = useCommentsConnectionQuery({
    variables,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  })

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore

  if (error) {
    console.error('CommentsList loading error', error)
    return <ErrorMessage message="Error loading posts." />
  }

  if (loading && !loadingMorePosts) {
    return <div>Loading</div>
  }

  // Filter issue: https://github.com/microsoft/TypeScript/issues/41090
  // const nodes: CommentsConnectionCommentFragment[] = (data?.commentsConnection.edges.map((edge) => edge?.node) || [])
  //   .filter(n => !!n)

  const comments: CommentsConnectionCommentFragment[] = (
    data?.commentsConnection?.edges.map((edge) => edge?.node) ?? []
  ).reduce((curr, next) => {
    if (next) {
      curr.push(next)
    }
    return curr
  }, [] as CommentsConnectionCommentFragment[])

  const count = data?.commentsConnection.aggregate.count ?? 0

  const loadMorePosts = () => {
    fetchMore({
      variables: {
        skip: comments.length,
      },

      /**
       * Здесь прописываем логику объединения новых поступивших данных и тех,
       * что уже находятся в кеше.
       * То есть логика такова, что мы не с сервера получаем каждый раз все больше и больше записей,
       * а только новые записи и объединяем их с теми, что уже в кеше находятся.
       */
      updateQuery: (prev, { fetchMoreResult }) => {
        const result = Object.assign({}, prev, {
          commentsConnection: {
            aggregate: fetchMoreResult?.commentsConnection.aggregate,
            edges: prev.commentsConnection.edges.concat(
              fetchMoreResult?.commentsConnection.edges ?? []
            ),
          },
        } as CommentsConnectionQuery)

        return result
      },
    })
  }

  const areMoreNodes = count && comments.length < count

  return (
    <section>
      <CommentsStyled id="comments">
        {comments.map((comment: CommentsConnectionCommentFragment) => {
          const {
            id,
            // uri,
            createdAt,
            contentText,
            CreatedBy: {
              // id: createdById,
              fullname,
              username,
              image,
            },
          } = comment

          return (
            <CommentStyled key={id} className="comment">
              <CommentHeaderStyled>
                <div className="createdBy">
                  <UserAvatarStyled url={image} align={UserAvatarAlign.Left} />{' '}
                  {fullname || username}
                </div>

                <div>{createdAt}</div>
              </CommentHeaderStyled>

              <div>{contentText}</div>
            </CommentStyled>
          )
        })}
      </CommentsStyled>

      {areMoreNodes && (
        <button onClick={() => loadMorePosts()} disabled={loadingMorePosts}>
          {loadingMorePosts ? 'Loading...' : 'Show More'}
        </button>
      )}

      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 10px;
        }
        div {
          align-items: center;
          display: flex;
        }
        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        button:before {
          align-self: center;
          border-style: solid;
          border-width: 6px 4px 0 4px;
          border-color: #ffffff transparent transparent transparent;
          content: '';
          height: 0;
          margin-right: 5px;
          width: 0;
        }
      `}</style>
    </section>
  )
}

export { allCommentsQueryDocument }

export default CommentsList
