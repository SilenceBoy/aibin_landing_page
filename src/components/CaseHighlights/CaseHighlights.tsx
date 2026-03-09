import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { portfolioConfig } from '../../content/homeContent.js'

const CaseHighlights = () => {
    const cases = portfolioConfig.categories.map((category) => {
        const primaryItem = category.items[0]

        return {
            title: category.title,
            subtitle: primaryItem?.title ?? '',
            description: primaryItem?.shortDescription ?? '',
            tags: primaryItem?.tags ?? [],
            buttonText: category.buttonText || '查看案例',
            buttonLink: category.buttonLink || '#contact',
        }
    })

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
                        我做过的一些实践与成果
                    </h2>
                    <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>
                        让能力不只停留在表述层，而是对应到产品、方法论、内容资产和视觉案例
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {cases.map((caseItem, index) => (
                        <motion.div
                            key={caseItem.title}
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

                            {/* 子标题 */}
                            <p className="text-sm mb-4" style={{ color: 'var(--muted-foreground)' }}>
                                {caseItem.subtitle}
                            </p>

                            <p className="text-sm leading-relaxed flex-grow" style={{ color: 'var(--muted-foreground)' }}>
                                {caseItem.description}
                            </p>

                            <a
                                href={caseItem.buttonLink}
                                target={caseItem.buttonLink.startsWith('http') ? '_blank' : undefined}
                                rel={caseItem.buttonLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="btn btn-secondary mt-5 whitespace-nowrap"
                            >
                                {caseItem.buttonText} <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CaseHighlights
