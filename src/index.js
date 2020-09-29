import Vue from "vue";
import App from "./App";
import "./styles";

var app = new Vue({
  el: "#app",
  render(h) {
    return h(App);
  },
});

if (module.hot) {
  module.hot.accept();
}
