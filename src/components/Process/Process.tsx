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
        <section className="section" id="process" style={{ backgroundColor: 'var(--muted)' }}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                        这些场景下，我可能能帮到你
                    </h2>
                    <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>
                        把适合合作的人群直接说清楚，方便访问者快速判断
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="card p-6 text-center h-full">
                                    <div
                                        className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-lg font-bold relative z-10"
                                        style={{
                                            backgroundColor: 'var(--accent)',
                                            color: 'var(--accent-foreground)'
                                        }}
                                    >
                                        {item.step}
                                    </div>

                                    <div className="w-10 h-10 mx-auto mb-3 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--muted)' }}>
                                        <div className="icon-accent">{item.icon}</div>
                                    </div>

                                    <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--card-foreground)' }}>
                                        {item.title}
                                    </h3>

                                    <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
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
