import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
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

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const description =
    frontMatter.description || "Documentation Lion Police Roleplay";
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="lion.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </>
  );
}

const config: DocsThemeConfig = {
  navigation: {
    prev: false,
    next: false,
  },
  primaryHue: 205,
  primarySaturation: 59,
  docsRepositoryBase:
    "https://github.com/L0stedMrlion/lionpolicerp-guide/tree/main",
  logo: (
    <div
      style={{
        paddingLeft: "50px",
        lineHeight: "38px",
        background:
          "url('https://cdn.discordapp.com/attachments/1178330264263462943/1229136630045081691/lionsproject_logo.png?ex=666fd7f0&is=666e8670&hm=e78094ce174ae8a1c00200b666047c07051903f7f79bfcb034ad61fa566f4d77&') no-repeat left",
        backgroundSize: "38px",
        fontWeight: 550,
      }}
    >
      Lion Police Roleplay™ 3.0
    </div>
  ),
  useNextSeoProps: useNextSeoProps,
  head: useHead,
  project: {
    link: "https://github.com/L0stedMrlion/lionpolicerp-guide",
  },
  chat: {
    link: "https://discord.gg/Uewwf3tpz3",
  },
  toc: {
    backToTop: true,
  },
  footer: {
    text: "🦁 Lion's Project™ 3.0",
  },
};

export default config;
