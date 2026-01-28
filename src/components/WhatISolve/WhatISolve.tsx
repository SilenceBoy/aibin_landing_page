import { motion } from 'framer-motion'
import { Database, Workflow, FileText, Shield } from 'lucide-react'

const WhatISolve = () => {
    const problems = [
        {
            icon: <Database className="w-8 h-8" />,
            title: "知识用不起来",
            problem: "资料散落、重复问答",
            solution: "RAG 企业知识库 + 可追溯回答"
        },
        {
            icon: <Workflow className="w-8 h-8" />,
            title: "流程重复低效",
            problem: "资料整理、报表、客服重复咨询",
            solution: "Agent 自动化工作流"
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: "内容交付成本高",
            problem: "营销素材/产品说明/内部文档",
            solution: "AIGC 内容流水线"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "AI 项目容易翻车",
            problem: "Demo 上不了线",
            solution: "PoC 路线图 + 风险清单 + 验收标准"
        }
    ]

    return (
        <section className="section" id="problems" style={{ backgroundColor: 'var(--background)' }}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                        我解决的企业问题
                    </h2>
                    <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>
                        把能力翻译成老板能秒懂的痛点
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card p-6"
                        >
                            {/* 图标 */}
                            <div className="w-12 h-12 mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent)', opacity: 0.1 }}>
                                <div className="icon-accent">{item.icon}</div>
                            </div>

                            {/* 标题 */}
                            <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--card-foreground)' }}>
                                {item.title}
                            </h3>

                            {/* 问题 */}
                            <p className="text-sm mb-2" style={{ color: 'var(--muted-foreground)' }}>
                                <span className="line-through">{item.problem}</span>
                            </p>

                            {/* 解决方案 */}
                            <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                                → {item.solution}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhatISolve
