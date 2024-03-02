import htmltext from "./template.html?raw";

const template = document.createElement("template");
template.innerHTML = htmltext;

export class TextApp extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("text-app", TextApp);
