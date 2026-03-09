import { motion } from 'framer-motion'
import { Calendar, Mail } from 'lucide-react'

const ContactCTA = () => {
  return (
    <section className="section" id="contact" style={{ backgroundColor: 'var(--muted)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card text-center p-8 md:p-12"
          style={{ backgroundColor: 'var(--background)' }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            如果你想把 AI 真正用起来，欢迎联系我
          </h2>
          <p className="text-lg mb-4" style={{ color: 'var(--muted-foreground)' }}>
            无论你是想学习 AI、提升效率、验证项目，还是寻找长期共建的合作伙伴，都欢迎和我交流。
          </p>
          <p className="text-base mb-8" style={{ color: 'var(--muted-foreground)' }}>
            我更关注的不只是“会不会用 AI”，而是如何把 AI 变成真正可复用的能力与结果。
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a href="https://wj.qq.com/s2/25653939/5109/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Calendar className="mr-2 w-4 h-4" /> 预约 15 分钟沟通
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: 'var(--muted-foreground)' }}>
            <a href="mailto:silence52168@gmail.com" className="flex items-center gap-2 hover:underline">
              <Mail className="w-4 h-4" /> silence52168@gmail.com
            </a>
            <span className="flex items-center gap-2">
              微信: silence52168
            </span>
            <a href="https://ai-photo.silencebin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              AI 写真网站
            </a>
            <a href="https://silencebin.notion.site/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              AI 知识库
            </a>
            <a href="https://github.com/SilenceBoy" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
            <a href="https://news.silencebin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              AI 新闻周报
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA
