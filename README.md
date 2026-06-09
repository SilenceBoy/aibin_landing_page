# Bin哥个人门面 Landing Page

这是 Bin哥的个人主页，用于展示 AI 应用实践、AI 全栈落地、内容增长和多模态商业表达能力。页面核心目标不是做单一的 AI 写真展示，而是作为个人门面，让访问者快速理解：

- 我是谁
- 我能解决什么问题
- 我有哪些可验证的能力和项目经验
- 可以通过哪些方式合作

当前视觉方向是「高级专业档案 + 艺术化项目索引」：暖白纸面、杂志感中文标题、低调铜色强调、圆形身份照、高级静物背景和案例配图。

## 技术栈

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## 本地运行

### 环境要求

- Node.js 18 或更高版本
- npm

### 安装依赖

```sh
npm install
```

### 启动开发服务

```sh
npm run dev
```

默认访问地址：

```text
http://localhost:5173
```

如果需要指定本机地址和端口：

```sh
npm run dev -- --host 127.0.0.1 --port 5173
```

## 常用命令

```sh
npm test
npm run lint
npm run build
npm run preview
```

- `npm test`：运行首页内容配置测试
- `npm run lint`：运行 ESLint
- `npm run build`：TypeScript 编译并生成生产构建
- `npm run preview`：预览生产构建

## 项目结构

```text
/
├── public/
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   ├── generated/                 # 首屏背景与案例配图
│   │   ├── hero-profile2.jpg           # 首页圆形身份照
│   │   ├── wx.JPG
│   │   ├── wxgzh.JPG
│   │   └── xhs.JPG
│   ├── components/
│   │   ├── CaseHighlights/
│   │   ├── ContactCTA/
│   │   ├── Footer/
│   │   ├── HardProof/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Outcome/
│   │   ├── Process/
│   │   ├── ProjectMetrics/
│   │   └── WaysToCollaborate/
│   ├── content/
│   │   ├── homeContent.d.ts
│   │   └── homeContent.js              # 首页核心内容与链接配置
│   ├── hooks/
│   ├── pages/
│   ├── App.tsx
│   ├── index.css                       # 全局视觉系统与页面样式
│   └── main.tsx
├── tests/
│   └── homeContent.test.mjs
├── index.html
├── package.json
└── README.md
```

## 内容维护

首页主要文案、链接和模块配置集中在：

```text
src/content/homeContent.js
```

常见维护入口：

- `heroConfig`：首屏标题、副标题、描述、CTA 和指标
- `portfolioConfig`：成果作品和案例卡片内容
- `cooperationConfig`：合作方式
- `contactConfig`：联系方式
- `notionLinks`：外部站点链接

如只改文案和链接，优先修改 `homeContent.js`，不要直接在组件里散落改文字。

## 视觉资产

新增高级视觉资产位于：

```text
src/assets/generated/
```

当前包含：

- `hero-premium-background.png`：首屏右侧高级背景
- `case-product-website.png`：产品 / 网站案例配图
- `case-knowledge-methodology.png`：知识资产 / 方法论案例配图
- `case-content-operations.png`：内容运营与影响力案例配图
- `case-commercial-visual.png`：多模态商业表达案例配图

这些图片用于表达项目能力和商业审美，不用于把主页定位成 AI 写真作品页。

## 设计原则

- 保留核心内容，不为了视觉效果改动个人定位
- 首屏以专业可信为主，人像只作为身份锚点
- 案例区使用与描述匹配的代表性配图
- 避免科技风、霓虹、蓝紫渐变、赛博感和过强的工具站气质
- 优先使用留白、字体、细线、暖色材质和真实图片建立高级感

## 部署

生成生产构建：

```sh
npm run build
```

构建产物会输出到：

```text
dist/
```

可将 `dist` 部署到 Vercel、Netlify、静态服务器或其他托管平台。
