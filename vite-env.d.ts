/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SERVER_URL: string;  // Add any other environment variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  