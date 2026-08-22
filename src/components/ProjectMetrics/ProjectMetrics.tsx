import { motion } from 'framer-motion'
import { Brain, DollarSign, Layers, TrendingUp } from 'lucide-react'

const ProjectMetrics = () => {
    const metrics = [
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: '规模与稳定性',
            values: [
                { value: '1400w', label: '日订单' },
                { value: '5亿', label: '日 GTV' },
                { value: '25w', label: '活跃商户' },
            ],
            description: '核心交易系统',
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: '复杂协同与交付',
            values: [
                { value: '17', label: '异构系统集成' },
                { value: '4000w', label: '项目营收' },
            ],
            description: '政企复杂交付',
        },
        {
            icon: <DollarSign className="w-8 h-8" />,
            title: '平台化与商业化',
            values: [
                { value: '80w', label: '研发成本' },
                { value: '270w', label: '创收' },
            ],
            description: 'IoT 平台',
        },
        {
            icon: <Brain className="w-8 h-8" />,
            title: 'AI 原生工作方式',
            values: [
                { value: '7000+ 小时', label: '深度使用' },
                { value: '1000+', label: '提示词模板' },
                { value: '30+', label: '业务场景智能体' },
            ],
            description: 'Claude / GPT / Gemini',
        },
    ]

    return (
        <section className="section section-rule" id="project-metrics" style={{ backgroundColor: 'var(--background)' }}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid gap-4 md:grid-cols-[0.42fr_1fr] md:items-end mb-10"
                >
                    <div>
                        <p className="eyebrow mb-3">Project Proof</p>
                        <h2 className="font-display text-3xl md:text-5xl font-semibold" style={{ color: 'var(--foreground)' }}>
                            硬指标项目经验
                        </h2>
                    </div>
                    <p className="max-w-2xl leading-8 md:justify-self-end" style={{ color: 'var(--muted-foreground)' }}>
                        这些数字对应的是规模、交付、商业化和 AI 原生工作方式。
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4">
                    {metrics.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="soft-panel p-6 h-full flex flex-col md:border-l-0"
                            style={{ borderRadius: 0 }}
                        >
                            <div
                                className="mb-8 flex items-center justify-between"
                            >
                                <span className="font-display text-3xl" style={{ color: 'var(--accent)' }}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="icon-accent">{item.icon}</div>
                            </div>

                            <h3 className="text-lg font-semibold leading-7" style={{ color: 'var(--card-foreground)' }}>
                                {item.title}
                            </h3>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                {item.values.map((metric) => (
                                    <div key={metric.label}>
                                        <div className="font-display text-2xl" style={{ color: 'var(--accent)' }}>{metric.value}</div>
                                        <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                                            {metric.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-xs mt-8 pt-5 border-t" style={{ color: 'var(--muted-foreground)', borderColor: 'var(--border)' }}>
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectMetrics
