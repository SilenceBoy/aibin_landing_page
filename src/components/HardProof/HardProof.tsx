import { motion } from 'framer-motion'
import { TrendingUp, Layers, DollarSign, Brain } from 'lucide-react'

const HardProof = () => {
    const proofs = [
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "规模与稳定性",
            metrics: [
                { value: "1400w", label: "日订单" },
                { value: "5亿", label: "日GTV" },
                { value: "25w", label: "活跃商户" }
            ],
            description: "核心交易系统"
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: "复杂协同与交付",
            metrics: [
                { value: "17", label: "异构系统集成" },
                { value: "4000w", label: "项目营收" }
            ],
            description: "政企复杂交付"
        },
        {
            icon: <DollarSign className="w-8 h-8" />,
            title: "平台化与商业化",
            metrics: [
                { value: "80w", label: "研发成本" },
                { value: "270w", label: "创收" }
            ],
            description: "IoT 平台"
        },
        {
            icon: <Brain className="w-8 h-8" />,
            title: "AI 原生工作方式",
            metrics: [
                { value: "5000h", label: "深度使用" },
                { value: "1000+", label: "提示词模板" },
                { value: "30+", label: "业务场景智能体" }
            ],
            description: "Claude/GPT/Gemini"
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
                        代表性成果
                    </h2>
                    <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>
                        硬钉子：做成过什么
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
                            className="card text-center p-6"
                        >
                            {/* 图标 */}
                            <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--muted)' }}>
                                <div className="icon-accent">{proof.icon}</div>
                            </div>

                            {/* 标题 */}
                            <h3 className="text-base font-semibold mb-3" style={{ color: 'var(--card-foreground)' }}>
                                {proof.title}
                            </h3>

                            {/* 指标 */}
                            <div className="flex flex-wrap justify-center gap-3 mb-3">
                                {proof.metrics.map((metric, mIndex) => (
                                    <div key={mIndex} className="text-center">
                                        <div className="text-xl md:text-2xl font-bold text-gradient">{metric.value}</div>
                                        <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{metric.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* 描述 */}
                            <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
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
