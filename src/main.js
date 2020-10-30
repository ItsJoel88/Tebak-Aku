import App from "./App.svelte";
import "./Global.css";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
