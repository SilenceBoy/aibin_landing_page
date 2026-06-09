import { motion } from 'framer-motion'
import { Brain, Code2, Megaphone, ImageIcon } from 'lucide-react'

const HardProof = () => {
    const proofs = [
        {
            icon: <Brain className="w-8 h-8" />,
            title: "AI 思维与提效赋能",
            metrics: [
                { value: "5000h", label: "持续研究" },
                { value: "Notion", label: "知识库" },
                { value: "课程", label: "线下输出" }
            ],
            description: "帮助个人与团队建立真正可用的 AI 学习与提效体系"
        },
        {
            icon: <Code2 className="w-8 h-8" />,
            title: "AI 全栈开发与工作流落地",
            metrics: [
                { value: "全链路", label: "开发落地" },
                { value: "网站", label: "独立上线" }
            ],
            description: "把想法快速变成可运行的产品、工具和工作流"
        },
        {
            icon: <Megaphone className="w-8 h-8" />,
            title: "AI 赋能内容增长与个人品牌运营",
            metrics: [
                { value: "近1w", label: "全网粉丝" },
                { value: "双平台", label: "持续输出" }
            ],
            description: "形成了适用于个人品牌起号、内容生产和经验输出的 AI 辅助 SOP"
        },
        {
            icon: <ImageIcon className="w-8 h-8" />,
            title: "AI 多模态创作与商业表达",
            metrics: [
                { value: "写真", label: "方法与审美" },
                { value: "广告", label: "商业表达" }
            ],
            description: "将 AI 生图、生视频等多模态能力用于内容视觉与商业场景"
        }
    ]

    return (
        <section className="section section-rule" id="proof" style={{ backgroundColor: 'var(--muted)' }}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid gap-4 md:grid-cols-[0.42fr_1fr] md:items-end mb-10"
                >
                    <div>
                        <p className="eyebrow mb-3">Capabilities</p>
                        <h2 className="font-display text-3xl md:text-5xl font-semibold" style={{ color: 'var(--foreground)' }}>
                            四大能力模块
                        </h2>
                    </div>
                    <p className="max-w-2xl leading-8 md:justify-self-end" style={{ color: 'var(--muted-foreground)' }}>
                        围绕 AI 思维、开发、增长与多模态表达形成可复用能力。
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2">
                    {proofs.map((proof, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border-t p-6 md:p-8"
                            style={{ borderColor: 'var(--border)' }}
                        >
                            <div className="flex items-start justify-between gap-5">
                                <span className="font-display text-4xl" style={{ color: 'var(--accent)' }}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="icon-accent">{proof.icon}</div>
                            </div>

                            <h3 className="mt-8 text-xl font-semibold leading-8" style={{ color: 'var(--card-foreground)' }}>
                                {proof.title}
                            </h3>

                            <div className="mt-5 grid grid-cols-2 gap-4">
                                {proof.metrics.map((metric, mIndex) => (
                                    <div key={mIndex}>
                                        <div className="font-display text-2xl" style={{ color: 'var(--accent)' }}>{metric.value}</div>
                                        <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{metric.label}</div>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-6 text-sm leading-7" style={{ color: 'var(--muted-foreground)' }}>
                                {proof.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HardProof
