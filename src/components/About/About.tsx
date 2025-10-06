import { motion } from 'framer-motion'
import { Users, Briefcase, Wrench } from 'lucide-react'
import heroProfile from '../../assets/hero-profile.png'

const About = () => {
  return (
    <section className="section" id="about" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左侧图片 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={heroProfile}
              alt="Bin 哥专业形象照"
              className="rounded-lg object-cover w-3/4 mx-auto max-w-sm"
            />
          </motion.div>
          
          {/* 右侧内容 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              关于 Bin
            </h2>
            <p className="mb-4" style={{ color: 'var(--muted-foreground)' }}>
              资深技术经理 × AI 产品经理，专注 <strong>AI 学习力</strong> 与 <strong>自媒体起号</strong> 的实战落地。把复杂的工具与方法，拆成可执行的日/周任务。
            </p>
            <p className="mb-6" style={{ color: 'var(--muted-foreground)' }}>
              长期以"<strong>陪跑者</strong>"角色，帮助职场人与创作者在 <strong>7–30 天</strong> 内建立稳定的内容生产线与数据复盘机制。
            </p>
            <div className="space-y-3">
              <div className="flex items-center" style={{ color: 'var(--foreground)' }}>
                <Briefcase className="w-5 h-5 mr-3 icon-accent" />
                10+ 年互联网与团队管理经验
              </div>
              <div className="flex items-center" style={{ color: 'var(--foreground)' }}>
                <Wrench className="w-5 h-5 mr-3 icon-accent" />
                AI 工具链与工作流搭建（Notion/脚本/模板/SOP）
              </div>
              <div className="flex items-center" style={{ color: 'var(--foreground)' }}>
                <Users className="w-5 h-5 mr-3 icon-accent" />
                小红书/图文/口播脚本体系与数据化复盘
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About