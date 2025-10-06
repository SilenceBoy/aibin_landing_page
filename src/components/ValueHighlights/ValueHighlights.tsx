import { motion } from 'framer-motion'
import { Briefcase, Bot, Target, Zap } from 'lucide-react'

const ValueHighlights = () => {
  const highlights = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "技术与管理双背景",
      description: "10 年 Java 后端与团队管理经验，熟悉互联网、物联网、餐饮支付领域",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI 应用落地专家",
      description: "擅长 AI Agent 搭建、提示词工程、RAG 方案设计",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "产品与内容双驱动",
      description: "既能做 AI 产品规划，也能用自媒体扩大影响",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "高效交付能力",
      description: "从想法到上线，最快 7 天完成 MVP 版本",
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <section className="section" id="advantages" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
            核心优势
          </h2>
          <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>
            多年技术积累与创新实践，为您提供专业可靠的 AI 解决方案
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              {/* 图标 */}
              <div className="w-10 h-10 mx-auto mb-4 icon-accent">
                {highlight.icon}
              </div>
              
              {/* 标题 */}
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--card-foreground)' }}>
                {highlight.title}
              </h3>
              
              {/* 描述 */}
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 统计数据 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 card text-center"
          style={{ backgroundColor: 'var(--muted)' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">10+</div>
              <div style={{ color: 'var(--muted-foreground)' }}>年技术经验</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">25+</div>
              <div style={{ color: 'var(--muted-foreground)' }}>团队管理规模</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">50+</div>
              <div style={{ color: 'var(--muted-foreground)' }}>AI项目经验</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">10万+</div>
              <div style={{ color: 'var(--muted-foreground)' }}>内容受众</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ValueHighlights