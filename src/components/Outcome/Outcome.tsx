import { motion } from 'framer-motion'
import { Database, Workflow, FileText, Rocket } from 'lucide-react'

const Outcome = () => {
    const outcomes = [
        {
            icon: <Database className="w-8 h-8" />,
            result: "把内部知识库变成'可问、可追溯、可评估'的智能问答",
            tag: "RAG"
        },
        {
            icon: <Workflow className="w-8 h-8" />,
            result: "把重复流程变成'可执行链路'的自动化工作流",
            tag: "Agent"
        },
        {
            icon: <FileText className="w-8 h-8" />,
            result: "把内容/素材产出做成'稳定流水线'",
            tag: "AIGC"
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            result: "把探索变成'可推进的项目'：有 PoC、有验收、有迭代路径",
            tag: "交付"
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
                        我能帮你做成什么
                    </h2>
                    <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>
                        用结果说话，而不是能力清单
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

                            {/* 结果 */}
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--card-foreground)' }}>
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
