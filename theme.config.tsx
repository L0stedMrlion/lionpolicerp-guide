import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Guide",
    };
  },
  navigation: {
    prev: false,
    next: false,
  },
  primaryHue: 211,
  primarySaturation: 100,
  docsRepositoryBase:
    "https://github.com/L0stedMrlion/lionpolicerp-guide/tree/main",
  logo: (
    <div
      style={{
        paddingLeft: "50px",
        lineHeight: "38px",
        background:
          "url('https://cdn.discordapp.com/attachments/1178330264263462943/1229136630045081691/lionsproject_logo.png?ex=66484af0&is=6646f970&hm=6ff109822bd6782e7182b4c251a6788976e301198b7827b8e557d7e9c47c11ec&') no-repeat left",
        backgroundSize: "38px",
        fontWeight: 550,
      }}
    >
      🦁 Lion Police Roleplay™
    </div>
  ),
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
