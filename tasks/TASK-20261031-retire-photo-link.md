# TASK-20261031-retire-photo-link：移除下线写真站入口

- 状态：已完成
- 日期：2026-10-31
- 依据：用户明确 ai-photo.silencebin.com 已下线，暂不提供访问。
- 目标：移除页脚入口、清空相关内容配置链接、移除 JSON-LD sameAs；保留已有 ai-vision 入口。
- 验证：局部 ESLint、npm run build、git diff --check 均 exit 0；源码与 index.html 旧域名检查无残留。未运行全仓测试。
- 下一步：用户刷新本地页面验收；当前修改未提交、未推送。
- 阻塞：无。

## 追加：移除微信联系入口

- 用户要求：微信也去掉。
- 状态：已完成。移除联系区、页脚微信入口与二维码弹窗逻辑，保留公众号、小红书和邮箱。
- 涉及：`src/components/ContactCTA/ContactCTA.tsx`、`src/components/Footer/Footer.tsx`、`src/pages/HomePage.tsx`、`src/content/homeContent.js`。

- 追加验证：4个修改文件 ESLint、npm run build、git diff --check 均 exit 0；未运行全仓测试。待页面验收，未提交推送，无阻塞。

## 验收与合并

- 2026-10-31 用户回复「好，合并到main上吧」，页面验收通过并授权合并。
- 既有局部 ESLint、构建与差异检查通过；本轮不重复构建、不运行全仓测试。
- 在 dev 提交后快进合并 main 并推送两个远程分支；提交号与推送结果见 Git 历史及本轮交付回复。
- 无阻塞；线上部署状态未核验。
