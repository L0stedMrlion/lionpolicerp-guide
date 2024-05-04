import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s",
    };
  },
  navigation: {
    prev: false,
    next: false,
  },
  primaryHue: 222,
  primarySaturation: 52,
  docsRepositoryBase:
    "https://github.com/L0stedMrlion/lionpolicerp-guide/tree/main",
  logo: <span>🦁 Lion Police Roleplay™</span>,
  project: {
    link: "https://github.com/L0stedMrlion/lionpolicerp-guide",
  },
  chat: {
    link: "https://discord.gg/Uewwf3tpz3",
  },
  footer: {
    text: "🦁 Lion's Project™",
  },
};

export default config;
