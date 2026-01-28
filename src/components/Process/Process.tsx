import { motion } from 'framer-motion'
import { MessageSquare, Handshake, ClipboardCheck, RefreshCw } from 'lucide-react'

const Process = () => {
    const steps = [
        {
            icon: <MessageSquare className="w-6 h-6" />,
            step: "01",
            title: "15 分钟对齐目标",
            description: "你说现状和目标，我给初步判断与切入点"
        },
        {
            icon: <Handshake className="w-6 h-6" />,
            step: "02",
            title: "确定合作方式",
            description: "评审 / PoC / 共建"
        },
        {
            icon: <ClipboardCheck className="w-6 h-6" />,
            step: "03",
            title: "明确验收标准",
            description: "可交付物、时间节点、风险与边界"
        },
        {
            icon: <RefreshCw className="w-6 h-6" />,
            step: "04",
            title: "推进与复盘",
            description: "每周复盘迭代，沉淀模板与资产"
        }
    ]

    return (
        <section className="section" id="process" style={{ backgroundColor: 'var(--background)' }}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                        合作流程
                    </h2>
                    <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>
                        怎么开始、怎么推进、怎么验收
                    </p>
                </motion.div>

                <div className="relative">
                    {/* 连接线 - 桌面端 */}
                    <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5" style={{ backgroundColor: 'var(--border)' }}></div>

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
                                    {/* 步骤编号 */}
                                    <div
                                        className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-lg font-bold relative z-10"
                                        style={{
                                            backgroundColor: 'var(--accent)',
                                            color: 'var(--accent-foreground)'
                                        }}
                                    >
                                        {item.step}
                                    </div>

                                    {/* 图标 */}
                                    <div className="w-10 h-10 mx-auto mb-3 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--muted)' }}>
                                        <div className="icon-accent">{item.icon}</div>
                                    </div>

                                    {/* 标题 */}
                                    <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--card-foreground)' }}>
                                        {item.title}
                                    </h3>

                                    {/* 描述 */}
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
