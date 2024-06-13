import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, " ").split("/");
  const category = (arr[1][0] !== "#" && arr[1]) || "Lion Police Roleplay 3.0";
  const rawTitle = arr[arr.length - 1];
  const title =
    /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : "%s";

  return {
    titleTemplate: `${title} - ${
      rawTitle === category
        ? "Documentation"
        : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

const config: DocsThemeConfig = {
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
          "url('https://cdn.discordapp.com/attachments/1178330264263462943/1229136630045081691/lionsproject_logo.png?ex=666be370&is=666a91f0&hm=b5e6a42ec769b67fb210be8c0aabb45d565591759432e5f4bbf847ccbefeef3a&') no-repeat left",
        backgroundSize: "38px",
        fontWeight: 550,
      }}
    >
      Lion Police Roleplay™ 3.0
    </div>
  ),
  useNextSeoProps: useNextSeoProps,
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
