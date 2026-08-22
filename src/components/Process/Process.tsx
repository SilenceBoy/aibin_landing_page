import { motion } from 'framer-motion'
import { BookOpen, Building2, PencilLine, Rocket } from 'lucide-react'

const Process = () => {
    const steps = [
        {
            icon: <BookOpen className="w-6 h-6" />,
            step: "01",
            title: "个人学习者",
            description: "想系统学习 AI，但不知道怎么开始，也不知道如何真正用起来"
        },
        {
            icon: <PencilLine className="w-6 h-6" />,
            step: "02",
            title: "创作者 / 个体经营者",
            description: "想用 AI 做内容、提效率、打造个人品牌或做视觉表达"
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            step: "03",
            title: "创业者 / 小团队",
            description: "想借助 AI 快速验证产品、搭建 workflow、做项目推进"
        },
        {
            icon: <Building2 className="w-6 h-6" />,
            step: "04",
            title: "企业团队",
            description: "想做 AI 培训、AI 提效、AI 项目落地或长期共建"
        }
    ]

    return (
        <section className="section section-rule" id="process" style={{ backgroundColor: 'var(--muted)' }}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid gap-4 md:grid-cols-[0.42fr_1fr] md:items-end mb-10"
                >
                    <div>
                        <p className="eyebrow mb-3">Audience</p>
                        <h2 className="font-display text-3xl md:text-5xl font-semibold" style={{ color: 'var(--foreground)' }}>
                            这些场景下，我可能能帮到你
                        </h2>
                    </div>
                    <p className="max-w-2xl leading-8 md:justify-self-end" style={{ color: 'var(--muted-foreground)' }}>
                        把适合合作的人群直接说清楚，方便访问者快速判断。
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative border-t p-6"
                                style={{ borderColor: 'var(--border)' }}
                            >
                                <div className="h-full">
                                    <div className="mb-8 flex items-center justify-between">
                                        <span className="font-display text-3xl" style={{ color: 'var(--accent)' }}>
                                        {item.step}
                                        </span>
                                        <div className="icon-accent">{item.icon}</div>
                                    </div>

                                    <h3 className="text-base font-semibold mb-3" style={{ color: 'var(--card-foreground)' }}>
                                        {item.title}
                                    </h3>

                                    <p className="text-sm leading-7" style={{ color: 'var(--muted-foreground)' }}>
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process
