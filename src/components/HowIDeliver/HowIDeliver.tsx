import { motion } from 'framer-motion'
import { Target, Search, Beaker, Rocket, RefreshCw } from 'lucide-react'

const HowIDeliver = () => {
    const steps = [
        {
            icon: <Target className="w-6 h-6" />,
            step: "01",
            title: "目标澄清",
            focus: "ROI/边界/合规",
            deliverable: "《需求澄清与成功指标》"
        },
        {
            icon: <Search className="w-6 h-6" />,
            step: "02",
            title: "数据/知识盘点",
            focus: "来源/权限/更新",
            deliverable: "《知识盘点表 & 治理规则》"
        },
        {
            icon: <Beaker className="w-6 h-6" />,
            step: "03",
            title: "PoC 试点",
            focus: "2~4 周跑通关键链路",
            deliverable: "《PoC 方案 & 评估集》"
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            step: "04",
            title: "上线交付",
            focus: "监控/灰度/回滚",
            deliverable: "《验收标准 & 运行手册》"
        },
        {
            icon: <RefreshCw className="w-6 h-6" />,
            step: "05",
            title: "迭代规模化",
            focus: "模板化/Agent化",
            deliverable: "《可复用工作流与组件库》"
        }
    ]

    return (
        <section className="section" id="methodology" style={{ backgroundColor: 'var(--muted)' }}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                        交付方法论
                    </h2>
                    <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>
                        从"会 AI"到"能交付"的 5 步闭环
                    </p>
                </motion.div>

                <div className="relative">
                    {/* 连接线 - 桌面端 */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5" style={{ backgroundColor: 'var(--border)' }}></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
                                    <div className="icon-accent mb-3">
                                        {item.icon}
                                    </div>

                                    {/* 标题 */}
                                    <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--card-foreground)' }}>
                                        {item.title}
                                    </h3>

                                    {/* 重点 */}
                                    <p className="text-sm mb-3" style={{ color: 'var(--muted-foreground)' }}>
                                        {item.focus}
                                    </p>

                                    {/* 交付物 */}
                                    <div
                                        className="text-xs px-3 py-2 rounded-lg"
                                        style={{
                                            backgroundColor: 'var(--background)',
                                            color: 'var(--accent)'
                                        }}
                                    >
                                        {item.deliverable}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowIDeliver
