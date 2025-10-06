import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: "AI 产品与 Agent 咨询",
      features: [
        "AI Agent 架构设计",
        "RAG 系统搭建", 
        "提示词工程优化",
        "业务流程自动化"
      ],
      buttonText: "查看详情 →",
      isHighlighted: false
    },
    {
      title: "AI 技术培训与指导",
      features: [
        "零基础 AI 入门",
        "实战项目指导",
        "一对一技术答疑", 
        "最新技术分享"
      ],
      buttonText: "了解课程 →",
      isHighlighted: true
    },
    {
      title: "自媒体 AI 运营策略", 
      features: [
        "账号增长策略",
        "个人 IP 打造",
        "多平台内容运营"
      ],
      buttonText: "开始规划 →",
      isHighlighted: false
    }
  ]

  return (
    <section className="section" id="services" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
            核心服务
          </h2>
          <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>
            专业的 AI 解决方案，助力您在数字化时代获得竞争优势
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card p-8 ${service.isHighlighted ? 'border-2' : ''}`}
              style={service.isHighlighted ? { borderColor: 'var(--accent)' } : {}}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--card-foreground)' }}>
                {service.title}
              </h3>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span style={{ color: 'var(--muted-foreground)' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`btn w-full mt-6 ${service.isHighlighted ? 'btn-primary' : 'btn-secondary'}`}
              >
                {service.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services