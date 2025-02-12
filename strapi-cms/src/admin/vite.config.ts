import { mergeConfig, type UserConfig } from "vite";

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    server: {
      host: "0.0.0.0",
      port: 5173, // ✅ Keep this for local development
      strictPort: true,
      fs: {
        allow: [
          "/opt/node_modules", // this is the abs path OUTSIDE the project root causing the Vite error
          "/opt/app",
        ],
      },
      hmr: {
        protocol: 'wss',
        host: process.env.VITE_WS_HOST || 'cms.connex.glohow.com',
        port: process.env.VITE_WS_PORT || 1337,  // ✅ Force WebSocket to use port 1337
      },
    },
  });
};
