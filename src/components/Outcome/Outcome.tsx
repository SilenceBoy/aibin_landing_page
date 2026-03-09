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
        <section className="section" id="outcome" style={{ backgroundColor: 'var(--background)' }}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                        我能帮你把 AI 用到真实场景里
                    </h2>
                    <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>
                        把抽象能力翻译成真实问题，帮助访问者快速代入
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {outcomes.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card p-6 text-center"
                        >
                            {/* 标签 */}
                            <span
                                className="inline-block text-xs px-3 py-1 rounded-full mb-4"
                                style={{
                                    backgroundColor: 'var(--accent)',
                                    color: 'var(--accent-foreground)'
                                }}
                            >
                                {item.tag}
                            </span>

                            {/* 图标 */}
                            <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--muted)' }}>
                                <div className="icon-accent">{item.icon}</div>
                            </div>

                            <h3 className="text-base font-semibold mb-3" style={{ color: 'var(--card-foreground)' }}>
                                {item.title}
                            </h3>

                            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
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
