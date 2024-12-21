import CodeDemo from "D:/Twritetime/blog-writetime/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/Twritetime/blog-writetime/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "D:/Twritetime/blog-writetime/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "D:/Twritetime/blog-writetime/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
