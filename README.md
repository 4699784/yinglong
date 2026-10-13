# 应龙 · 山鬼研究语料库（yinglong）

面向 Project「shan gui」的先秦楚文化与楚辞研究库：Markdown 语料 + Next.js 阅读站。  
**细读已全面加厚**（不限《山鬼》）：背景、经历、白话翻译、解析、鉴赏。

## 在线阅读

本地：

```bash
npm install
npm run dev -- -p 4327 -H 127.0.0.1
```

打开 [http://127.0.0.1:4327](http://127.0.0.1:4327)。建议从网页侧栏进入，或先打开 `docs/总览-细读地图.md`。

生产构建：`npm run build && npm run start -- -p 4327`

## 发布

### Vercel

已认领生产站示例：`https://speedy-sequoia-djgh1cn.vercel.app`（认领后需登录账号或提供 `VERCEL_TOKEN` 才能继续推送）。

```bash
npx vercel login
npx vercel link   # 选中已认领项目
npx vercel --prod
```

或把 `VERCEL_TOKEN` / `VERCEL_ORG_ID` / `VERCEL_PROJECT_ID` 配到 GitHub Secrets，推送 `main` 即走 `.github/workflows/vercel-deploy.yml`。

匿名临时发布：`npx vercel deploy --yes --temporary`（需在时限内认领）。

### 容器 + 反向代理

```bash
docker compose up --build
```

访问 [http://127.0.0.1:8088](http://127.0.0.1:8088)。

## 文字与体例

- 古典正文：简体（通行《楚辞》转写）  
- 现代解说／今译：简体  
- 标签：`[史实]` `[传说]` `[文学]` `[争议]` 等  

## 目录

```
docs/
├── 总览-细读地图.md
├── 先秦/           概述 + 历史脉络详述、政治外交、年表、史料
├── 荆楚文化/       概述 + 巫祭乐歌详论、社会生活与艺术、地理、名物
├── 屈原/           生平史料、经历详述、思想人格、作品系年、争议、接受
├── 楚辞/
│   ├── 概述.md
│   ├── 离骚/       细读指南、全文、白话全译、导读、解析、鉴赏
│   ├── 九歌/       总论、细读指南、十一篇正文 + 各篇细读
│   └── 山鬼/       最深专卷（经历/背景/翻译/注/解析/鉴赏）
└── 参考书目/
src/                Next.js 阅读站
```

### 建议阅读顺序

见 `docs/总览-细读地图.md`。

## 许可

先秦两汉经典原文属公有领域。今译与整理说明为仓库撰写。详见 `docs/参考书目/`。
