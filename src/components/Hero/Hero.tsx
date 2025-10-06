import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import heroProfile from '../../assets/hero-profile.jpg'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* 简约装饰元素 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full animate-float" style={{ backgroundColor: 'var(--accent)', opacity: 0.6 }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 rounded-full animate-float" style={{ backgroundColor: 'var(--accent)', opacity: 0.4, animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 rounded-full animate-float" style={{ backgroundColor: 'var(--accent)', opacity: 0.8, animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 rounded-full animate-float" style={{ backgroundColor: 'var(--accent)', opacity: 0.5, animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* 中心对齐布局 */}
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* 核心定位标题 */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              用 AI，把你的学习力提速 10 倍
            </h1>
          </motion.div>

          {/* 副标题 */}
          <motion.p
            className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ color: 'var(--muted-foreground)' }}
          >
            为忙碌的职场人与创作者打造的「AI 学习 × 咨询 × 陪跑」方案。
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div
            className="flex justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="btn btn-primary">
              预约 AI 诊断 <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn btn-secondary">
              <Download className="w-4 h-4" /> 领取学习路线清单
            </button>
          </motion.div>
          
          {/* 头像区域 */}
          <motion.div 
            className="flex justify-center mt-16 md:mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative w-48 h-48">
              <div className="w-full h-full rounded-full overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                <img
                  src={heroProfile}
                  alt="AI学习助手 - 专业可爱的猫咪形象"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 装饰点 */}
              <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent)', opacity: 0.7 }}></div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent)', opacity: 0.5, animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 底部滚动指示器 */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: 'var(--border)' }}>
          <div className="w-1 h-3 rounded-full mt-2 animate-bounce" style={{ backgroundColor: 'var(--muted-foreground)' }}></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero