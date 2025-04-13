import { defineConfig } from "vitepress";

// Import lightbox diagram plugin
import lightbox from "vitepress-plugin-lightbox";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Silih-Silih Kambing",
  description: "Dokumentasi Animasi Silih-Silih Kambing",
  themeConfig: {
    search: {
      provider: "local",
    },
    sidebar: [
      {
        items: [
          { text: "Introduction", link: "/" },
          { text: "Storyboard", link: "https://drive.google.com/file/d/1rPCir-aATRFcG5sabPFIV6Oczoj8GIhv/view?usp=drive_link" },
          { text: "Script", link: "https://drive.google.com/file/d/1HZIr5_J__nsxNjsNGXm7Lf87NPV3HsbN/view?usp=drive_link" },
        ],
      },
      {
        text: "Animasi",
        items: [
          { text: "Add-ons dan Tools", link: "/animasi/addon" },
          { text: "Action Keys", link: "/animasi/action-keys" },
          { text: "Rigging Mulut", link: "/animasi/rigging-mulut" },
          {
            text: "Camera",
            collapsed: false,
            items: [
              { text: "Camera Follow", link: "/animasi/camera/camera-follow" },
              { text: "Switch Camera", link: "/animasi/camera/switch" },
            ],
          },
          { text: "Panduan Render", link: "/animasi/render" },
        ],
      },
      {
        text: "Karakter",
        items: [
          { text: "Anjing", link: "/karakter/anjing" },
          { text: "Kambing", link: "/karakter/kambing" },
        ],
      },
      {
        text: "Environment",
        items: [
          { text: "Hutan Pesta", link: "/environment/hutan-pesta" },
          { text: "Hutan", link: "/environment/hutan" },
          { text: "Padang Rumput", link: "/environment/padang-rumput" },
          { text: "Sungai", link: "/environment/sungai" },
          { text: "Tutorial", link: "/environment/tutorial" },
        ],
      },
    ],
    socialLinks: [
      // You can add any icon from simple-icons (https://simpleicons.org/):
      { icon: "youtube", link: "https://youtube.com/@nuvantaraa" },
      { icon: "github", link: "https://github.com/haghest" },
    ],
  },
  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
    },
  },
});
