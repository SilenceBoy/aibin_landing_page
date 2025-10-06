import { motion } from 'framer-motion'
import { Users, Briefcase } from 'lucide-react'
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
              className="rounded-lg object-cover w-full h-full"
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
              关于我
            </h2>
            <p className="mb-4" style={{ color: 'var(--muted-foreground)' }}>
              我是 Bin 哥，从事互联网后端开发与技术管理 10 年，带领过 25 人团队，做过餐饮 POS、物联网平台和财税产品。
            </p>
            <p className="mb-6" style={{ color: 'var(--muted-foreground)' }}>
              过去两年，我专注于 AI 应用落地与 AI Agent 技术研究，并通过自媒体分享给数十万读者。我的目标，是用 AI 帮助更多人提升效率、扩展影响力，并在数字时代实现自我价值。
            </p>
            <div className="space-y-3">
              <div className="flex items-center" style={{ color: 'var(--foreground)' }}>
                <Users className="w-5 h-5 mr-3 icon-accent" />
                带领过 25 人技术团队
              </div>
              <div className="flex items-center" style={{ color: 'var(--foreground)' }}>
                <Briefcase className="w-5 h-5 mr-3 icon-accent" />
                10+ 年互联网技术经验
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About