import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: "AI 学习力加速（7天）",
      subtitle: "适合谁：零基础/时间紧，需要立刻建立学习与产出节奏",
      features: [
        "AI 学习清单与高频工具 SOP（3套）",
        "每日 1 个落地任务（共7个）",
        "个人知识卡片模板（Notes→Cards→Output）"
      ],
      result: "完成 1 套个人知识卡片系统 + 1 篇高质量长文/图文",
      buttonText: "领取学习清单 →",
      isHighlighted: false
    },
    {
      title: "起号诊断与策略（14天）",
      subtitle: "适合谁：已开始创作但卡在定位/选题/完播",
      features: [
        "账号定位诊断与改版建议",
        "专属选题库 20条 + 脚本模板 5套",
        "2次发布-复盘闭环与数据分析"
      ],
      result: "拿到可验证的首批数据与清晰的节奏表",
      buttonText: "预约诊断 →",
      isHighlighted: true
    },
    {
      title: "陪跑孵化（30-60天）",
      subtitle: "适合谁：希望系统化打造个人IP与变现路径",
      features: [
        "周度 1v1 复盘与目标管理",
        "选题周更包（≥10条/周）+ 发布日历",
        "运营SOP与转化路径梳理（引流→留资→约谈）"
      ],
      result: "形成稳定更新、关键指标持续上升",
      buttonText: "查看服务大纲 →",
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
            我能怎么帮你
          </h2>
          <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>
            从AI学习到内容起号，陪你完成从0到1的实战落地
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
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--card-foreground)' }}>
                {service.title}
              </h3>

              <p className="text-sm mb-4 pb-4 border-b" style={{ color: 'var(--muted-foreground)', borderColor: 'var(--border)' }}>
                {service.subtitle}
              </p>

              <div className="mb-4">
                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--card-foreground)' }}>你将得到：</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                      <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 p-3 rounded" style={{ backgroundColor: 'var(--muted)' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--card-foreground)' }}>结果目标：</p>
                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{service.result}</p>
              </div>

              <button
                className={`btn w-full ${service.isHighlighted ? 'btn-primary' : 'btn-secondary'}`}
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