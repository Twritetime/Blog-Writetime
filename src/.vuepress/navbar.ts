import { navbar } from "vuepress-theme-hope";
import { sfcPlugin } from "vuepress/markdown";

export default navbar([
  "/",
  "/demo/",
  {
    text: "文章",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Java",
        icon: "pen-to-square",
        prefix: "Java/",
        children: [
          { text: "八股文", icon: "pen-to-square", link: "八股文" },
          { text: "面经", icon: "pen-to-square", link: "面经" },
        ],
      },
      { text: "日常", 
        icon: "pen-to-square", 
        prefix: "日常/",
        children: [
          { text: "建站", icon: "pen-to-square", link: "建站" },
        ],
      },
      { text: "外贸", 
        icon: "pen-to-square", 
        prefix: "外贸/",
        children: [
          { text: "WhatsApp", icon: "pen-to-square", link: "WhatsApp注册" },
        ],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
