import { motion } from 'framer-motion'
import { ArrowRight, Users } from 'lucide-react'
import heroProfile from '../../assets/hero-profile2.png'

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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 leading-tight">
              <span className="block">AI 应用探索者</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2" style={{ color: 'var(--muted-foreground)' }}>
                把 AI 共生变成可复用的能力与结果
              </span>
            </h1>
          </motion.div>

          {/* 副标题 */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p
              className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'var(--muted-foreground)' }}
            >
              5000 小时研究如何与 AI 共生，只为两类事：
            </p>
            <p
              className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'var(--muted-foreground)' }}
            >
              把 AI 落成可交付的系统/流程，也把个人成长与转型的方法论做成可复制的路径。
            </p>
            <p
              className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'var(--muted-foreground)' }}
            >
              如果你希望把 AI 从"工具热闹"推进到"真实结果"，我们可以合作。
            </p>
          </motion.div>

          {/* CTA 按钮 */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="https://wj.qq.com/s2/25653939/5109/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              预约 15 分钟沟通 <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#ways" className="btn btn-secondary">
              <Users className="w-4 h-4" /> 看合作方式
            </a>
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
                  alt="梁斌 - AI 共生探索者"
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