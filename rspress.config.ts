import * as path from 'path';
import { defineConfig } from 'rspress/config';
import { pluginPreview } from '@rspress/plugin-preview';

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
  ]
});
