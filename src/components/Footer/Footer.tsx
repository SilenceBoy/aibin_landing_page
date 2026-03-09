import { motion } from 'framer-motion'
import { Calendar, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="section" style={{ backgroundColor: 'var(--background)', borderTop: '1px solid var(--border)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            准备好了吗？
          </h3>
          <p className="mb-6" style={{ color: 'var(--muted-foreground)' }}>
            如果你希望把 AI 从理解推进到真实结果，我们可以聊 15 分钟
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wj.qq.com/s2/25653939/5109/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Calendar className="mr-2 w-4 h-4" /> 预约 15 分钟沟通
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--foreground)' }}>
              梁斌
            </h3>
            <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
              把 AI 变成学习力、生产力和实际结果。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
              快速导航
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#outcome" className="hover:underline" style={{ color: 'var(--muted-foreground)' }}>问题场景</a></li>
              <li><a href="#proof" className="hover:underline" style={{ color: 'var(--muted-foreground)' }}>能力模块</a></li>
              <li><a href="#cases" className="hover:underline" style={{ color: 'var(--muted-foreground)' }}>成果作品</a></li>
              <li><a href="#ways" className="hover:underline" style={{ color: 'var(--muted-foreground)' }}>合作方式</a></li>
              <li><a href="#contact" className="hover:underline" style={{ color: 'var(--muted-foreground)' }}>联系我</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
              联系方式
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:silence52168@gmail.com" className="flex items-center gap-2 hover:underline" style={{ color: 'var(--muted-foreground)' }}>
                  <Mail className="w-4 h-4" /> silence52168@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2" style={{ color: 'var(--muted-foreground)' }}>
                微信: silence52168
              </li>
              <li>
                <a href="https://ai-photo.silencebin.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--muted-foreground)' }}>AI 写真网站</a>
              </li>
              <li>
                <a href="https://silencebin.notion.site/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--muted-foreground)' }}>AI 知识库</a>
              </li>
              <li>
                <a href="https://github.com/SilenceBoy" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--muted-foreground)' }}>GitHub</a>
              </li>
              <li>
                <a href="https://news.silencebin.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--muted-foreground)' }}>AI 新闻周报</a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="text-center text-sm mt-12 pt-8"
          style={{
            color: 'var(--muted-foreground)',
            borderTop: '1px solid var(--border)'
          }}>
          © 2026 梁斌. 保留所有权利。
        </div>
      </div>
    </footer>
  )
}

export default Footer
