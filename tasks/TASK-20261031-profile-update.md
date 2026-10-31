# TASK-20261031-profile-update：个人介绍与经历数据更新

- 状态：已完成
- 负责人：Codex
- 日期：2026-10-31（Asia/Shanghai）
- 分支：dev

## 目标与授权

按用户提供的介绍更新顾问定位、10余年研发经验、7年技术管理经验、8000+小时AI实践；用户授权先拉取 dev，完成修改后合并 main。

## 执行记录

- 已在 main 暂存原有5个文件修改，备份为 stash `codex-profile-update-before-dev-sync`。
- `git fetch origin`、`git switch dev`、`git pull --ff-only origin dev`：dev 从 5324b30 更新至 4984f8c。
- 恢复修改并解决5个文件的数据冲突，采用用户最新8000+小时口径，保留 dev 新增阿里履历、认证区块、ai-vision案例链接及二维码。

## 交付物

- `src/content/homeContent.js`
- `src/components/Hero/Hero.tsx`
- `src/components/HardProof/HardProof.tsx`
- `src/components/ProjectMetrics/ProjectMetrics.tsx`
- `index.html`

## 验证与下一步

- 修改文件局部 ESLint：exit 0；`npm run build`：exit 0；`git diff --check HEAD`：exit 0。
- 未运行全仓测试；未进行浏览器视觉验收，线上部署结果待确认。
- 代码与记录随本次提交进入 dev，随后快进合并 main；实际提交号及远程同步结果见 Git 历史与本轮交付回复。
- 阻塞：无。
