import { motion } from 'framer-motion'
import { Search, Beaker, Users } from 'lucide-react'

const WaysToCollaborate = () => {
    const ways = [
        {
            icon: <Search className="w-8 h-8" />,
            title: "AI 落地评审",
            subtitle: "轻量咨询",
            suitable: "你已经有方向/项目，但担心落地风险",
            deliverable: "落地路线图（PoC→上线）、风险清单、验收标准（可执行）"
        },
        {
            icon: <Beaker className="w-8 h-8" />,
            title: "PoC 联合交付",
            subtitle: "项目制",
            suitable: "你希望 2~4 周跑通关键链路，看得到结果再投入",
            deliverable: "PoC 原型/工作流、评估集、上线方案与迭代计划"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "方法论共建 / 内部赋能",
            subtitle: "体系化",
            suitable: "你希望团队具备长期的 AI 共生能力，而不是依赖某个人",
            deliverable: "任务设计模板、证据驱动规范、可复用工作流库、团队实践节奏"
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
                        合作方式
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
                            {/* 数字编号 */}
                            <div
                                className="w-14 h-14 mb-6 rounded-xl flex items-center justify-center text-2xl font-bold"
                                style={{
                                    backgroundColor: 'var(--accent)',
                                    color: 'var(--accent-foreground)'
                                }}
                            >
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            {/* 标题 */}
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold" style={{ color: 'var(--card-foreground)' }}>
                                    {way.title}
                                </h3>
                                <span className="text-sm" style={{ color: 'var(--accent)' }}>
                                    {way.subtitle}
                                </span>
                            </div>

                            {/* 适合 */}
                            <div className="mb-4">
                                <p className="text-sm font-medium mb-1" style={{ color: 'var(--card-foreground)' }}>适合：</p>
                                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                                    {way.suitable}
                                </p>
                            </div>

                            {/* 产出 */}
                            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--muted)' }}>
                                <p className="text-sm font-medium mb-1" style={{ color: 'var(--card-foreground)' }}>产出：</p>
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
