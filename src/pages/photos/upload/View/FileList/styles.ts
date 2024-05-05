import styled from 'styled-components'
import { PhotosUploadFileStyled } from './File/styles'

export const PhotosUploadFileListStyled = styled.div`
  width: 100%;
  display: grid;
  /* grid-auto-columns: min-content; */
  grid-auto-flow: column;
  /* grid-auto-columns: 300px; */
  /* grid-auto-rows: auto; */
  /* grid-auto-columns: 300px; */
  /* grid-template-columns: repeat(auto-fill, 186px); */
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: 300px; */
  /* justify-content: space-evenly; */
  gap: 10px;

  ${PhotosUploadFileStyled} {
    border: 1px solid grey;
  }
`
