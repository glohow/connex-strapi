import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    server: {
      fs: {   
        allow: [
          '/opt/node_modules',// this is the abs path OUTSIDE the project root causing the Vite error
          '/opt/app',
        ],
      },
      hmr: {
        host: '172.18.0.3',
        Port: 1337,
    },
    },
  });
};
