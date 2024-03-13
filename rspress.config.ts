import * as path from 'path';
import { defineConfig } from 'rspress/config';
import { pluginPreview } from '@rspress/plugin-preview';
import { pluginApiDocgen } from "@rspress/plugin-api-docgen";

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Aoblog-doc',
  description: 'Rspack-based Static Site Generator',
  base: "/aoblog-fe-doc",
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
  plugins: [
    pluginPreview(),
    pluginApiDocgen({
      entries: {
        ActionRender: './src/api/Display/ActionRenderAPI.ts',
        FilterSelect: './src/api/Header/FilterSelectAPI.ts',
        HeaderGroup: './src/api/Header/HeaderGroupAPI.ts',
      },
      apiParseTool: 'react-docgen-typescript',
    }),
  ]
});
