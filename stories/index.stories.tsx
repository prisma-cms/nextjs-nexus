import React from 'react'

/**
 * Компонент для рендеринга
 */
const MyComponent: React.FC = () => {
  return <></>
}

export const WelcomeStory: StoryBook<typeof MyComponent> = {
  name: 'Welcome Story',
  render: MyComponent,
  args: {},
}

export default {
  title: 'Welcome Story',
  parameters: {},
}
