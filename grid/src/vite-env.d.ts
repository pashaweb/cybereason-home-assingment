/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_HOST: string,
    readonly VITE_APP_VERSION: string,
    readonly VITE_APP_NAME: string,
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
