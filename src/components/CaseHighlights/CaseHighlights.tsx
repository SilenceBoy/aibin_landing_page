import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CaseHighlights = () => {
    const mainCases = [
        {
            title: "核心交易系统：规模与稳定性",
            background: "客如云",
            highlights: [
                "主导交易链路架构升级，支撑日 GTV 5 亿规模",
                "建立 SLA 监控与故障恢复机制",
                "活跃商户 25w，系统可用性 99.99%"
            ],
            result: "年度交易额超 1800 亿",
            tags: ["架构", "稳定性"]
        },
        {
            title: "政企复杂交付：协同机制与验收",
            background: "贵阳商圈数字化",
            highlights: [
                "跨政企 17 个系统对接与数据治理",
                "制定项目里程碑与验收标准",
                "按期交付并通过政府验收"
            ],
            result: "项目总营收 4000 万",
            tags: ["交付", "集成"]
        },
        {
            title: "AI 落地实践：RAG/Agent 企业应用",
            background: "本地化 Dify + 知识库",
            highlights: [
                "本地化部署 Dify，构建企业知识库",
                "RAG 系统上线，回答准确率 >90%",
                "智能助手覆盖 HR、IT、销售多场景"
            ],
            result: "工单处理效率提升 60%",
            tags: ["RAG", "Agent"]
        }
    ]

    const sideCase = {
        title: "个人产品化：AI 写真网站 + 小红书 6000 粉",
        description: "120 套风格模板，AIGC + 提示词工程 + 用户理解，从 0 到 1 验证产品化与增长能力",
        tags: ["AIGC", "产品化", "增长"]
    }

    return (
        <section className="section" id="cases" style={{ backgroundColor: 'var(--background)' }}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                        案例卡
                    </h2>
                    <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>
                        做成过什么，用案例说话
                    </p>
                </motion.div>

                {/* 主案例 */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {mainCases.map((caseItem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card p-6 flex flex-col h-full"
                        >
                            {/* 标签 */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {caseItem.tags.map((tag, tIndex) => (
                                    <span
                                        key={tIndex}
                                        className="text-xs px-2 py-1 rounded-full"
                                        style={{
                                            backgroundColor: 'var(--accent)',
                                            color: 'var(--accent-foreground)',
                                            opacity: 0.9
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* 标题 */}
                            <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--card-foreground)' }}>
                                {caseItem.title}
                            </h3>

                            {/* 背景 */}
                            <p className="text-sm mb-4" style={{ color: 'var(--muted-foreground)' }}>
                                {caseItem.background}
                            </p>

                            {/* 亮点 */}
                            <ul className="space-y-2 mb-4 flex-grow">
                                {caseItem.highlights.map((highlight, hIndex) => (
                                    <li key={hIndex} className="text-sm flex items-start" style={{ color: 'var(--muted-foreground)' }}>
                                        <span className="mr-2" style={{ color: 'var(--accent)' }}>•</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                            {/* 结果 */}
                            <div
                                className="p-3 rounded-lg text-center"
                                style={{ backgroundColor: 'var(--muted)' }}
                            >
                                <p className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                                    {caseItem.result}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 辅助案例 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="card p-6 flex flex-col md:flex-row items-center justify-between gap-4"
                    style={{ backgroundColor: 'var(--muted)' }}
                >
                    <div className="flex-grow">
                        <div className="flex flex-wrap gap-2 mb-2">
                            {sideCase.tags.map((tag, tIndex) => (
                                <span
                                    key={tIndex}
                                    className="text-xs px-2 py-1 rounded-full"
                                    style={{
                                        backgroundColor: 'var(--background)',
                                        color: 'var(--accent)'
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h4 className="text-lg font-semibold mb-1" style={{ color: 'var(--card-foreground)' }}>
                            {sideCase.title}
                        </h4>
                        <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                            {sideCase.description}
                        </p>
                    </div>
                    <a href="#" className="btn btn-secondary whitespace-nowrap">
                        了解更多 <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default CaseHighlights
