/**
 * https://storybook.js.org/docs/get-started/nextjs
 */

import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

import nextConfigBase from "../next.config.js";

const fs = require("fs");

const themesPath = path.resolve(__dirname, "..", "themes.json");

if (fs.existsSync(themesPath)) {
  const themesString = fs.readFileSync(themesPath).toString();
  const appConfig = {
    theme: {
      themes: JSON.parse(themesString),
    },
  };
  process.env.STORYBOOK_APP_CONFIG = JSON.stringify(appConfig);
}

const config: StorybookConfig = {
  stories: ["../(src|stories)/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "storybook-addon-apollo-client",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(__dirname, "..", "next.config.mjs"),
    },
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  webpackFinal: async config => {
    const nextConfig = await nextConfigBase();

    if (config.module?.rules) {
      config.module.rules = config.module.rules.filter(rule => {
        let include = true;

        if (rule !== "..." && rule) {
          if (
            ["/\\.css$/", "/\\.(scss|sass)$/"].includes(rule.test?.toString() ?? "") ||
            /**
             * Сторибук импортирует медиафайлы инлайново.
             * Тоже пропускаем его и используем собственный лоадер
             */
            rule.type === "asset"
          ) {
            include = false;
          } else if (rule.test?.toString().includes("svg")) {
            /**
             * Этот пример взят из доки. Игнорим svg, чтобы наши лоадеры использовались
             */
            rule.exclude = /\.svg$/;
          }
        }

        return include;
      });
    }

    if (nextConfig.webpack) {
      // @ts-expect-error
      config = nextConfig.webpack(config);
    }

    if (config.module?.rules) {
      config.module.rules.forEach(rule => {
        if (rule !== "..." && rule) {
          if (Array.isArray(rule.use)) {
            rule.use.forEach(n => {
              if (n && typeof n === "object") {
                if (typeof n.options === "object") {
                  /**
                   * Сторибук не хочет понимать кастомные пути для статики,
                   * поэтому подменяем
                   */
                  if (n.options.publicPath?.startsWith("/_next/static")) {
                    n.options.publicPath = n.options.publicPath.replace("/_next/", "/");
                  }
                }
              }
            });
          }
        }
      });
    }

    return config;
  },
};
export default config;
