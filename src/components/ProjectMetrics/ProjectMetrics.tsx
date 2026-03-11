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
                { value: '5000h', label: '深度使用' },
                { value: '1000+', label: '提示词模板' },
                { value: '30+', label: '业务场景智能体' },
            ],
            description: 'Claude / GPT / Gemini',
        },
    ]

    return (
        <section className="section" id="project-metrics" style={{ backgroundColor: 'var(--muted)' }}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                        硬指标项目经验
                    </h2>
                    <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>
                        这些数字对应的是规模、交付、商业化和 AI 原生工作方式
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card text-center p-6 h-full flex flex-col"
                        >
                            <div
                                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: 'var(--background)' }}
                            >
                                <div className="icon-accent">{item.icon}</div>
                            </div>

                            <div className="min-h-[3rem] mb-4 flex items-center justify-center">
                                <h3 className="text-base font-semibold" style={{ color: 'var(--card-foreground)' }}>
                                    {item.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap justify-center gap-3 mb-4 min-h-[5.75rem] content-start">
                                {item.values.map((metric) => (
                                    <div key={metric.label} className="text-center min-w-[4.5rem]">
                                        <div className="text-xl md:text-2xl font-bold text-gradient">{metric.value}</div>
                                        <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                                            {metric.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-xs mt-auto" style={{ color: 'var(--muted-foreground)' }}>
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
