const template = document.createElement("template");
template.innerHTML = `
  <div>
  <img 
    src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' 
    width='100%'
    alt='google logo' />
  </div>
    `;

export class ImageApp extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("image-app", ImageApp);
