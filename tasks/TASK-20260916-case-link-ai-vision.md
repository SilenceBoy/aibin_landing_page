# TASK-20260916-case-link-ai-vision：「产品 / 网站」案例链接改为 ai-vision

- 状态：待验证
- 账本任务：未建卡（Hook 判定本条请求为非实质任务，未分配账本 ID；按协议 Agent 不手工 register）
- 双链版本：不适用（无账本任务）
- 绑定事件：不适用（无账本任务）
- 活动设备：silence_mini_pro
- 负责人：Claude Code
- 创建时间：2026-09-16 01:59
- 最近更新：2026-09-16 02:09
- 关联分支/提交：dev（用户决定不提交）
- 验收人：人工

## 目标

1. 首页「产品 / 网站」卡片「查看案例」按钮链接由 `https://ai-photo.silencebin.com` 改为 `https://ai-vision.silencebin.com`。
2. （02:06 用户确认追加）卡片副标题改为新站名「Bin哥AI光影时空」。
3. （02:06 用户确认追加）页脚「我的站点」与 `index.html` JSON-LD `sameAs` 补充 ai-vision，原 ai-photo 保留。
4. 不提交（用户决定）。

## 验收标准

- [x] 「产品 / 网站」卡片「查看案例」按钮 href 为 `https://ai-vision.silencebin.com`，新标签页打开
- [x] 卡片副标题显示「Bin哥AI光影时空」
- [x] 页脚「我的站点」新增指向 `https://ai-vision.silencebin.com` 的链接，原「AI 写真创作站点」保留
- [x] `index.html` JSON-LD `sameAs` 含 `https://ai-vision.silencebin.com`，JSON 可解析
- [x] `npm test` / `npm run lint` / `npm run build` 通过
- [ ] 人工验收通过

## 已完成

- 01:58：定位改动点 `src/content/homeContent.js:164`（`portfolioConfig` 首个分类的 `buttonLink`，由 `CaseHighlights.tsx` 渲染为「查看案例」按钮）；核验新地址可访问。
- 02:02：`notionLinks` 新增 `aiVisionProject`，「产品 / 网站」分类 `buttonLink` 改为引用它；`npm test` 3/3、`npm run lint` exit 0、`npm run build` 通过，本地预览 DOM 断言通过。
- 02:06：用户确认：副标题要改、页脚与 JSON-LD 要补、不提交。
- 02:09：卡片副标题（首个 item `title`）改为「Bin哥AI光影时空」，该 item `buttonLink` 同步改为 `notionLinks.aiVisionProject`；`Footer.tsx`「我的站点」在「AI 写真创作站点」后新增「AI 光影创作站点」；`index.html` JSON-LD `sameAs` 新增 ai-vision。`npm test` 3/3、`npm run lint` exit 0、`npm run build` exit 0（`dist/index.html` 含新地址）；本地预览 DOM 断言与截图通过，控制台 0 错误。证据见 `logs/2026-09-16.md`。

## 正在进行

等待人工验收。

## 下一步

1. 人工验收：本地 http://localhost:5173 查看「成果作品」区「产品 / 网站」卡片与页脚「我的站点」。
2. 不提交（用户决定）；如后续要上线，需另行提交并部署。

## 风险与阻塞

- 无。
- 备注：卡片描述、标签、证明语未改。依据 `/Users/silence_mini_pro/AI_OS/Projects/ai_image_library/STATUS.md`，新站点含前台、后台创作台、Supabase 数据库与 git push 自动部署，描述仍适用。

## 交付物

- 代码：`src/content/homeContent.js`、`src/components/Footer/Footer.tsx`、`index.html`
- 测试结果：`npm test` 3/3 通过；`npm run lint` exit 0；`npm run build` exit 0
