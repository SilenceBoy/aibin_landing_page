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
        <section className="section" id="proof" style={{ backgroundColor: 'var(--muted)' }}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                        四大能力模块
                    </h2>
                    <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>
                        围绕 AI 思维、开发、增长与多模态表达形成可复用能力
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {proofs.map((proof, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card text-center p-6 h-full flex flex-col"
                        >
                            {/* 图标 */}
                            <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--muted)' }}>
                                <div className="icon-accent">{proof.icon}</div>
                            </div>

                            {/* 标题 */}
                            <div className="min-h-[3rem] mb-3 flex items-center justify-center">
                                <h3 className="text-base font-semibold leading-6" style={{ color: 'var(--card-foreground)' }}>
                                    {proof.title}
                                </h3>
                            </div>

                            {/* 指标 */}
                            <div className="flex flex-wrap justify-center gap-3 mb-3 min-h-[4.5rem] content-start">
                                {proof.metrics.map((metric, mIndex) => (
                                    <div key={mIndex} className="text-center">
                                        <div className="text-xl md:text-2xl font-bold text-gradient">{metric.value}</div>
                                        <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{metric.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* 描述 */}
                            <p className="text-xs leading-6 mt-auto" style={{ color: 'var(--muted-foreground)' }}>
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
