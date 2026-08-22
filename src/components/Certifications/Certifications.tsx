import { motion } from 'framer-motion'
import { Award, Bot, Code2, MessageSquareCode, Palette } from 'lucide-react'

const Certifications = () => {
    const certifications = [
        {
            icon: <Award className="w-8 h-8" />,
            tag: "项目管理",
            name: "PMP 国际项目管理专业人士认证",
            description: "覆盖项目全生命周期的范围、进度、成本与风险管理方法论。"
        },
        {
            icon: <MessageSquareCode className="w-8 h-8" />,
            tag: "提示词工程",
            name: "讯飞星火 Prompt Engineer 提示词工程师认证",
            description: "系统化的提示词设计、调优与工程化应用能力认证。"
        },
        {
            icon: <Bot className="w-8 h-8" />,
            tag: "智能体开发",
            name: "阿里达摩院 AI Agent 工程师认证",
            description: "面向 Agent 架构、工具调用与任务编排的工程能力认证。"
        },
        {
            icon: <Palette className="w-8 h-8" />,
            tag: "多模态创作",
            name: "阿里 AIGC 高级设计认证",
            description: "AIGC 视觉生成与设计表达方向的高级能力认证。"
        },
        {
            icon: <Code2 className="w-8 h-8" />,
            tag: "AI 编程",
            name: "字节跳动豆包 AI Coding 工程师认证",
            description: "AI 辅助编码与研发提效方向的工程能力认证。"
        }
    ]

    return (
        <section className="section section-rule" id="certifications" style={{ backgroundColor: 'var(--muted)' }}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid gap-4 md:grid-cols-[0.42fr_1fr] md:items-end mb-10"
                >
                    <div>
                        <p className="eyebrow mb-3">Certifications</p>
                        <h2 className="font-display text-3xl md:text-5xl font-semibold" style={{ color: 'var(--foreground)' }}>
                            专业认证
                        </h2>
                    </div>
                    <p className="max-w-2xl leading-8 md:justify-self-end" style={{ color: 'var(--muted-foreground)' }}>
                        来自项目管理与 AI 工程方向的第三方能力认证。
                    </p>
                </motion.div>

                <div className="grid border-y" style={{ borderColor: 'var(--border)' }}>
                    {certifications.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="grid gap-5 py-6 md:grid-cols-[5rem_1.35fr_1.65fr] md:items-center"
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
                                <h3 className="text-lg font-semibold mt-1 leading-7" style={{ color: 'var(--card-foreground)' }}>
                                    {item.name}
                                </h3>
                            </div>
                            <p className="text-sm leading-7" style={{ color: 'var(--muted-foreground)' }}>
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
