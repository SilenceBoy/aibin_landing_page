import { motion } from 'framer-motion'
import { Calendar, Download, Mail, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="section" style={{ backgroundColor: 'var(--background)', borderTop: '1px solid var(--border)' }}>
      <div className="container-custom">
        {/* Footer CTA */}
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
            如果你希望把 AI 从 Demo 推进到业务结果，我们可以聊 15 分钟
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wj.qq.com/s2/25653939/5109/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Calendar className="mr-2 w-4 h-4" /> 预约 15 分钟沟通
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
          {/* 梁斌 */}
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
              AI 共生探索者，专注企业 AI 落地与个人成长方法论。
            </p>
          </motion.div>

          {/* 快速导航 */}
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
              <li><a href="#outcome" className="hover:underline" style={{ color: 'var(--muted-foreground)' }}>成果</a></li>
              <li><a href="#proof" className="hover:underline" style={{ color: 'var(--muted-foreground)' }}>背书</a></li>
              <li><a href="#ways" className="hover:underline" style={{ color: 'var(--muted-foreground)' }}>合作方式</a></li>
              <li><a href="#contact" className="hover:underline" style={{ color: 'var(--muted-foreground)' }}>联系我</a></li>
            </ul>
          </motion.div>

          {/* 联系方式 */}
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
                <a href="#" className="flex items-center gap-2 hover:underline" style={{ color: 'var(--muted-foreground)' }}>
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 低调求职入口 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
              内容/研究
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://news.silencebin.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--muted-foreground)' }}>AI 周报</a></li>
              <li><a href="#" className="hover:underline" style={{ color: 'var(--muted-foreground)' }}>小红书</a></li>
            </ul>

            {/* 低调的求职入口 */}
            <div className="mt-6 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
              <p className="text-xs mb-2" style={{ color: 'var(--muted-foreground)' }}>
                如果你更倾向把我作为核心成员加入团队推进 AI 落地：
              </p>
              <a href="/resume" className="inline-flex items-center text-xs hover:underline" style={{ color: 'var(--accent)' }}>
                <Download className="w-3 h-3 mr-1" /> 这里是我的简历
              </a>
            </div>
          </motion.div>
        </div>

        <div className="text-center text-sm mt-12 pt-8"
          style={{
            color: 'var(--muted-foreground)',
            borderTop: '1px solid var(--border)'
          }}>
          © 2024 梁斌. 保留所有权利.
        </div>
      </div>
    </footer>
  )
}

export default Footer