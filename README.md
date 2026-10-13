# 应龙 · 山鬼研究语料库（yinglong）

面向 Project「shan gui」的先秦楚文化与楚辞研究起步包：Markdown 语料 + 可读网页。

## 在线阅读（本地）

```bash
npm install
npm run dev -- -p 4327 -H 127.0.0.1
```

浏览器打开 [http://127.0.0.1:4327](http://127.0.0.1:4327)。

生产构建：

```bash
npm run build
npm run start -- -p 4327
```

## 发布

### Vercel（推荐）

```bash
npx vercel login          # 首次
npx vercel                # 预览
npx vercel --prod         # 生产
```

未登录时可临时匿名发布（约 60 分钟有效，需在 Vercel 认领后保留）：

```bash
npx vercel deploy --yes --temporary
```

仓库已含 `vercel.json`。将 GitHub 仓库 `4699784/yinglong` 导入 [Vercel Dashboard](https://vercel.com/new) 并绑定后，推送 `main` 即可持续发布。

### 容器 + 反向代理（可选）

需本机 Docker：

```bash
docker compose up --build
```

浏览器打开 [http://127.0.0.1:8088](http://127.0.0.1:8088)（Caddy 代理到 Next.js）。

## 文字与体例

- **古典正文**：统一使用**简体字**（据通行《楚辞》文本转写；个别异文在注文中说明）。
- **现代解说**：简体中文。
- **层次标记**：`[史实]` / `[传说]` / `[文学]` / `[争议]`
- 网页从 `docs/` 动态读取 Markdown，编辑语料后刷新即可。

## 目录导航

```
README.md
docs/
├── 先秦/           时代总论、楚史年表、主要史料
├── 荆楚文化/       地理、宗教神话、风俗与诗歌语境
├── 屈原/           生平、放逐传统、历史来源与争议
├── 楚辞/
│   ├── 概述.md
│   ├── 离骚/       全文 + 分段导读
│   ├── 九歌/       十一篇正文与题解
│   └── 山鬼/       全文、逐段注、文化背景、研究要点
└── 参考书目/
src/                Next.js 阅读站（App Router）
```

### 建议阅读顺序

1. 先秦概述 → 荆楚文化概述  
2. 屈原生平与史料  
3. 楚辞概述 → 九歌总论  
4. **重点**：`docs/楚辞/山鬼/`  
5. 离骚（对照自传性抒情）

## 许可与文本来源

先秦两汉经典原文属公有领域。整理说明与现代导读为仓库整理者撰写。详见 `docs/参考书目/`。
