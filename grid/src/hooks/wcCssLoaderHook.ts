export const wcCssLoaderHook = (element: HTMLDivElement) => {
  if (process.env.NODE_ENV !== "development") {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${import.meta.env.VITE_APP_HOST}/${import.meta.env.VITE_APP_NAME}-v_${import.meta.env.VITE_APP_VERSION}.css`;
    element.appendChild(link);
  }
};
