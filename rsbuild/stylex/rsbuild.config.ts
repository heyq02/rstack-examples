import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import stylexPlugin from 'unplugin-stylex/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './public/index.html',
  },
  tools: {
    rspack: {
      plugins: [
        stylexPlugin({
          stylex: {
            // Prefer extracted CSS over runtime injection so production builds
            // load styles via the `/stylex.css` link in `public/index.html`.
            runtimeInjection: false,
          },
        }),
      ],
    },
  },
});
