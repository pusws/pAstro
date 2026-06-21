import { defineConfig } from 'astro/config';

// 1. 判断是否在 GitHub 环境
const isGitHub = process.env.GITHUB_ACTIONS === 'true';

// 2. 自动获取当前托管平台的临时/默认域名（无需手动配置，系统自带）
const currentPlatformUrl = 
  process.env.CF_PAGES_URL ||   // Cloudflare Pages 自动提供的当前构建 URL
  process.env.VERCEL_URL ||     // Vercel 自动提供的当前构建 URL
  process.env.URL ||            // Netlify 自动提供的当前构建 URL
  'https://yourfallback.com';   // 兜底域名

export default defineConfig({
  // 核心避坑点：只有 GitHub Pages 需要子路径，其他平台（不管绑定多少自定义域名）一律自动归零
  base: isGitHub ? '/pAstro' : '', 

  // 只需要在这里把默认的 github.io 改成你 GitHub 侧绑定的自定义主域名即可
  site: process.env.SITE || (isGitHub ? 'https://prohub.webn.cc' : currentPlatformUrl),
});
