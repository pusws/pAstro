import { defineConfig } from 'astro/config';

// 检测是否在 GitHub Actions 环境中编译
const isGitHub = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  // 1. 根据环境自动切换主域名
  site: isGitHub 
    ? 'https://https://pastro.ndjp.net' 
    : 'https://pastro-2vp.pages.dev',
  
  // 2. 关键点：如果是 GitHub 则带上子路径，如果是 Cloudflare 则留空（根目录）
  base: isGitHub ? '/pAstro' : '', 
  
  // 你原有的其他配置保持不变...
});
