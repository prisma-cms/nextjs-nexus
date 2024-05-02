import React from "react";
import { Decorator, Preview } from "@storybook/react";
import { MockedProvider } from "@apollo/client/testing";
import { MINIMAL_VIEWPORTS, INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const Layout: React.FC<
  React.PropsWithChildren  
> = ({ children }) => {

  return <>{children}</>
};

export const decorators: Decorator[] = [
  (Story) => (
    <Layout>
      <Story />
    </Layout>
  ),
];

export const parameters: Preview["parameters"] = {
  layout: "fullscreen",
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...INITIAL_VIEWPORTS,
      galaxyFold: {
        name: "Galaxy Fold",
        styles: {
          width: "653px",
          height: "280px",
        },
      },
      oculusQuest: {
        name: "Oculus Quest",
        styles: {
          width: "800px",
          height: "450px",
        },
      },
    },
  },
  options: {
    storySort: {
      order: ["UI", "*"],
    },
  },
  apolloClient: {
    MockedProvider,
  },
};
 

export const globalTypes = {};
