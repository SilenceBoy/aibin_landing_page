import { motion } from 'framer-motion'
import { Code2, Brain, MessageSquare, GraduationCap } from 'lucide-react'

const ValueHighlights = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "AI编程SOP体系",
      description: "深厚技术底蕴+完整AI编程方法论，精准用AI实现需求，让编程效率提升10倍",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI应用全栈能力",
      description: "从Agent开发到RAG系统，从提示词工程到AI产品设计，50+项目实战经验，懂技术更懂应用",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "提示词工程专家",
      description: "精通Prompt设计与优化，帮助AI精准理解需求，让AI成为真正的生产力工具",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "AI加速学习能力",
      description: "利用AI快速掌握多领域知识，从技术到商业，持续迭代认知，保持竞争力",
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
            为什么选择我？
          </h2>
          <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>
            技术深度 × AI实战 × 学习力，全方位AI赋能专家
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
              <div className="text-3xl md:text-4xl font-bold text-gradient">10年+</div>
              <div style={{ color: 'var(--muted-foreground)' }}>技术积累</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">2年+</div>
              <div style={{ color: 'var(--muted-foreground)' }}>AI深耕</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">50+</div>
              <div style={{ color: 'var(--muted-foreground)' }}>项目经验</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">10万+</div>
              <div style={{ color: 'var(--muted-foreground)' }}>内容影响力</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ValueHighlights