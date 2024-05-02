declare type StoryBook<C extends React.FC> = {
  name: string
  render: C
  args: Parameters<C>[0]
}
