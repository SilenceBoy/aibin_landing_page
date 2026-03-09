import { motion } from 'framer-motion'
import { Search, Beaker, Users } from 'lucide-react'

const WaysToCollaborate = () => {
    const ways = [
        {
            icon: <Search className="w-8 h-8" />,
            title: "1 对 1 咨询",
            subtitle: "针对性分析",
            suitable: "你目前有明确问题，希望在短时间内获得针对性的分析和建议",
            deliverable: "如何学习 AI、AI 实践问题诊断、AI 如何赋能业务、AI 辅助个人学习与提效"
        },
        {
            icon: <Beaker className="w-8 h-8" />,
            title: "项目陪跑 / 项目合作",
            subtitle: "结果导向",
            suitable: "你已经有方向或项目，但需要一个既懂 AI、又懂落地的人共同推进",
            deliverable: "AI 提效项目、AI 工作流搭建、AI 内容生产体系设计、AI 项目从 0 到 1 验证"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "深度合作 / 全职共建",
            subtitle: "长期共建",
            suitable: "你希望找到一个可以真正进入团队、共同承担结果的人",
            deliverable: "企业 AI 能力建设、AI 项目长期共建、业务流程 AI 化、团队 AI 协作与赋能"
        }
    ]

    return (
        <section className="section" id="ways" style={{ backgroundColor: 'var(--muted)' }}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                        你可以这样和我合作
                    </h2>
                    <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>
                        三种合作形态，找到适合你的
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {ways.map((way, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card p-8"
                        >
                            <div
                                className="w-14 h-14 mb-6 rounded-xl flex items-center justify-center text-2xl font-bold"
                                style={{
                                    backgroundColor: 'var(--accent)',
                                    color: 'var(--accent-foreground)'
                                }}
                            >
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            <div className="mb-4">
                                <h3 className="text-xl font-semibold" style={{ color: 'var(--card-foreground)' }}>
                                    {way.title}
                                </h3>
                                <span className="text-sm" style={{ color: 'var(--accent)' }}>
                                    {way.subtitle}
                                </span>
                            </div>

                            <div className="mb-4">
                                <p className="text-sm font-medium mb-1" style={{ color: 'var(--card-foreground)' }}>适合：</p>
                                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                                    {way.suitable}
                                </p>
                            </div>

                            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--muted)' }}>
                                <p className="text-sm font-medium mb-1" style={{ color: 'var(--card-foreground)' }}>可覆盖主题：</p>
                                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                                    {way.deliverable}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WaysToCollaborate
