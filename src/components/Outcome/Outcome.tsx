import { motion } from 'framer-motion'
import { Compass, FolderKanban, ScanSearch, Sparkles } from 'lucide-react'

const Outcome = () => {
    const outcomes = [
        {
            icon: <Compass className="w-8 h-8" />,
            result: "帮你建立 AI 学习路径、使用边界和高效协作方式。",
            tag: "学习路径",
            title: "不会学 AI，不知道从哪开始"
        },
        {
            icon: <FolderKanban className="w-8 h-8" />,
            result: "帮你把想法变成产品、工具、流程或可执行方案。",
            tag: "项目落地",
            title: "想做 AI 项目，但落不了地"
        },
        {
            icon: <ScanSearch className="w-8 h-8" />,
            result: "帮你搭建可复用的提示词结构、工作流与协作方式。",
            tag: "提效协作",
            title: "想用 AI 提效，但总觉得不稳定"
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            result: "帮你把 AI 用到内容运营、多模态创作和个人品牌增长中。",
            tag: "内容表达",
            title: "想用 AI 做内容或视觉表达"
        }
    ]

    return (
        <section className="section section-rule" id="outcome" style={{ backgroundColor: 'var(--background)' }}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid gap-4 md:grid-cols-[0.42fr_1fr] md:items-end mb-10"
                >
                    <div>
                        <p className="eyebrow mb-3">Problems</p>
                        <h2 className="font-display text-3xl md:text-5xl font-semibold" style={{ color: 'var(--foreground)' }}>
                            我能帮你把 AI 用到真实场景里
                        </h2>
                    </div>
                    <p className="max-w-2xl leading-8 md:justify-self-end" style={{ color: 'var(--muted-foreground)' }}>
                        把抽象能力翻译成真实问题，帮助访问者快速代入。
                    </p>
                </motion.div>

                <div className="grid border-y" style={{ borderColor: 'var(--border)' }}>
                    {outcomes.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="grid gap-5 py-6 md:grid-cols-[5rem_1fr_2fr] md:items-center"
                            style={{ borderTop: index === 0 ? '0' : '1px solid var(--border)' }}
                        >
                            <div className="flex items-center gap-4">
                                <span className="font-display text-3xl" style={{ color: 'var(--accent)' }}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="icon-accent">{item.icon}</div>
                            </div>
                            <div>
                                <span className="text-xs" style={{ color: 'var(--accent)' }}>{item.tag}</span>
                                <h3 className="text-lg font-semibold mt-1" style={{ color: 'var(--card-foreground)' }}>
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-sm leading-7" style={{ color: 'var(--muted-foreground)' }}>
                                {item.result}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Outcome
