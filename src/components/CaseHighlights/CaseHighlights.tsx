import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { portfolioConfig } from '../../content/homeContent.js'

import wxgzhImg from '../../assets/wxgzh.JPG'
import xhsImg from '../../assets/xhs.JPG'
import caseProductImg from '../../assets/generated/case-product-website.png'
import caseKnowledgeImg from '../../assets/generated/case-knowledge-methodology.png'
import caseContentImg from '../../assets/generated/case-content-operations.png'
import caseVisualImg from '../../assets/generated/case-commercial-visual.png'

const CaseHighlights = () => {
    const [selectedModal, setSelectedModal] = useState<{ title: string; imgSrc: string; hint?: string } | null>(null);
    const caseVisuals = [caseProductImg, caseKnowledgeImg, caseContentImg, caseVisualImg]

    const cases = portfolioConfig.categories.map((category) => {
        const primaryItem = category.items[0]

        return {
            title: category.title,
            subtitle: primaryItem?.title ?? '',
            description: primaryItem?.shortDescription ?? '',
            tags: primaryItem?.tags ?? [],
            buttonText: category.buttonText || '查看案例',
            buttonLink: category.buttonLink || '#contact',
            proofText: primaryItem?.proofText ?? '',
        }
    })

    return (
        <section className="section section-rule" id="cases" style={{ backgroundColor: 'var(--background)' }}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid gap-4 md:grid-cols-[0.42fr_1fr] md:items-end mb-10"
                >
                    <div>
                        <p className="eyebrow mb-3">Selected Work</p>
                        <h2 className="font-display text-3xl md:text-5xl font-semibold" style={{ color: 'var(--foreground)' }}>
                            我做过的一些实践与成果
                        </h2>
                    </div>
                    <p className="max-w-2xl leading-8 md:justify-self-end" style={{ color: 'var(--muted-foreground)' }}>
                        让能力不只停留在表述层，而是对应到产品、方法论、内容资产和商业表达。
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {cases.map((caseItem, index) => (
                        <motion.div
                            key={caseItem.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="soft-panel overflow-hidden flex flex-col h-full"
                        >
                            <div className="case-visual">
                                <img
                                    src={caseVisuals[index % caseVisuals.length]}
                                    alt={`${caseItem.title} 配图`}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                                <div className="absolute inset-x-5 bottom-5 z-10">
                                    <p className="font-display text-3xl text-white/90">
                                        {String(index + 1).padStart(2, '0')}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {caseItem.tags.map((tag, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className="text-xs px-2 py-1 border"
                                            style={{
                                                borderColor: 'var(--border)',
                                                color: 'var(--muted-foreground)'
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--card-foreground)' }}>
                                    {caseItem.title}
                                </h3>

                                <p className="text-sm mb-4" style={{ color: 'var(--muted-foreground)' }}>
                                    {caseItem.subtitle}
                                </p>

                                <p className="text-sm leading-7 flex-grow" style={{ color: 'var(--muted-foreground)' }}>
                                    {caseItem.description}
                                </p>

                                <p className="mt-5 border-t pt-4 text-xs leading-6" style={{ color: 'var(--muted-foreground)', borderColor: 'var(--border)' }}>
                                    {caseItem.proofText}
                                </p>

                                {caseItem.title === '内容运营与影响力' ? (
                                    <button
                                        onClick={() => setSelectedModal({ title: caseItem.title, imgSrc: wxgzhImg, hint: '微信扫码' })}
                                        className="btn btn-secondary mt-5 whitespace-nowrap inline-flex items-center justify-center w-fit"
                                    >
                                        {caseItem.buttonText} <ArrowRight className="w-4 h-4 ml-1" />
                                    </button>
                                ) : caseItem.title === '多模态案例' ? (
                                    <button
                                        onClick={() => setSelectedModal({ title: caseItem.title, imgSrc: xhsImg })}
                                        className="btn btn-secondary mt-5 whitespace-nowrap inline-flex items-center justify-center w-fit"
                                    >
                                        {caseItem.buttonText} <ArrowRight className="w-4 h-4 ml-1" />
                                    </button>
                                ) : (
                                    <a
                                        href={caseItem.buttonLink}
                                        target={caseItem.buttonLink?.startsWith('http') ? '_blank' : undefined}
                                        rel={caseItem.buttonLink?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="btn btn-secondary mt-5 whitespace-nowrap inline-flex items-center justify-center w-fit"
                                    >
                                        {caseItem.buttonText} <ArrowRight className="w-4 h-4 ml-1" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 弹窗 */}
                <AnimatePresence>
                    {selectedModal && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                            onClick={() => setSelectedModal(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className={`relative w-full rounded-2xl overflow-hidden p-6 text-center shadow-2xl ${selectedModal.title === '多模态案例' ? 'max-w-sm' : 'max-w-md'
                                    }`}
                                style={{ backgroundColor: 'var(--card)', color: 'var(--card-foreground)' }}
                            >
                                <button
                                    onClick={() => setSelectedModal(null)}
                                    className="absolute right-4 top-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                                    aria-label="关闭弹窗"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <h3 className="text-xl font-bold mb-4">{selectedModal.title}</h3>

                                <div className="flex justify-center mb-4">
                                    <img
                                        src={selectedModal.imgSrc}
                                        alt={selectedModal.title}
                                        className={`${selectedModal.title === '多模态案例' ? 'max-h-[50vh]' : 'max-h-[60vh]'} object-contain rounded-lg border shadow-sm`}
                                        style={{ borderColor: 'var(--border)' }}
                                    />
                                </div>

                                {selectedModal.hint && (
                                    <p className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>
                                        {selectedModal.hint}
                                    </p>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default CaseHighlights
