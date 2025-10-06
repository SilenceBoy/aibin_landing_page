# Bin 的个人主页

这是一个为资深技术经理和 AI 产品经理 Bin 打造的个人主页。该网站旨在展示他在 AI 领域的技能、服务和思想领导力。它采用现代技术栈构建，具有简洁、响应式设计和流畅的动画效果。

## 技术栈

- **框架**: React 19 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React

## 如何开始

要获取本地副本并运行，请按照以下简单步骤操作。

### 环境要求

- Node.js (v18 或更高版本)
- npm

### 安装

1. 克隆仓库
   ```sh
   git clone https://github.com/your_username_/aibin_landing_page.git
   ```
2. 安装 NPM 依赖
   ```sh
   npm install
   ```

### 运行开发服务器

要在开发模式下运行应用程序，请执行以下命令：

```sh
npm run dev
```

在浏览器中打开 [http://localhost:5173](http://localhost:5173) 查看。页面将在您进行编辑时自动重新加载。

## 项目结构

```
/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About/
│   │   ├── ContactCTA/
│   │   ├── FeaturedContent/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Services/
│   │   └── ValueHighlights/
│   ├── hooks/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## 部署

要为生产环境构建应用程序，请运行以下命令：

```sh
npm run build
```

这将在 `dist` 文件夹中创建生产环境所需的文件。然后，您可以将此文件夹部署到您选择的托管服务提供商。
