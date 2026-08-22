import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Outcome from '../components/Outcome/Outcome'
import HardProof from '../components/HardProof/HardProof'
import ProjectMetrics from '../components/ProjectMetrics/ProjectMetrics'
import Certifications from '../components/Certifications/Certifications'
import CaseHighlights from '../components/CaseHighlights/CaseHighlights'
import WaysToCollaborate from '../components/WaysToCollaborate/WaysToCollaborate'
import Process from '../components/Process/Process'
import ContactCTA from '../components/ContactCTA/ContactCTA'
import Footer from '../components/Footer/Footer'
import { useScrollObserver } from '../hooks/useScrollObserver'
import wxImg from '../assets/wx.JPG'
import wxgzhImg from '../assets/wxgzh.JPG'
import xhsImg from '../assets/xhs.JPG'

function HomePage() {
    useScrollObserver()
    const [activeModal, setActiveModal] = useState<'wechat' | 'gzh' | 'xhs' | null>(null)

    return (
        <div className="min-h-screen pt-16">
            <Header />
            <Hero />
            <Outcome />
            <HardProof />
            <CaseHighlights />
            <ProjectMetrics />
            <Certifications />
            <WaysToCollaborate />
            <Process />
            <ContactCTA onOpenModal={(type) => setActiveModal(type)} />
            <Footer onOpenModal={(type) => setActiveModal(type)} />

            {/* 扫码联系弹窗 */}
            <AnimatePresence>
                {activeModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setActiveModal(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-sm rounded-2xl overflow-hidden p-6 text-center shadow-2xl"
                            style={{ backgroundColor: 'var(--card)', color: 'var(--card-foreground)' }}
                        >
                            <button
                                onClick={() => setActiveModal(null)}
                                className="absolute right-4 top-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                                aria-label="关闭弹窗"
                                style={{ color: 'var(--foreground)' }}
                            >
                                <X className="w-5 h-5" />
                            </button>
                            
                            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                                {activeModal === 'wechat' && '加微信联系我'}
                                {activeModal === 'gzh' && '关注微信公众号'}
                                {activeModal === 'xhs' && '关注我的小红书'}
                            </h3>
                            
                            {activeModal === 'wechat' && (
                                <p className="text-sm font-semibold mb-4 text-rose-500 animate-pulse">
                                    添加微信请务必注明：你的行业和你的需求
                                </p>
                            )}
                            
                            {activeModal !== 'wechat' && <div className="h-4" />}
                            
                            <div className="flex justify-center mb-2">
                                <img 
                                    src={
                                        activeModal === 'wechat' ? wxImg :
                                        activeModal === 'gzh' ? wxgzhImg :
                                        xhsImg
                                    } 
                                    alt="二维码" 
                                    className="max-h-[50vh] object-contain rounded-lg border shadow-sm"
                                    style={{ borderColor: 'var(--border)' }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default HomePage
