import { motion } from 'framer-motion'
import { Calendar, Mail } from 'lucide-react'
import { siteMeta } from '../../content/homeContent'

const ContactCTA = ({ onOpenModal }: { onOpenModal: (type: 'wechat' | 'gzh' | 'xhs') => void }) => {
  return (
    <section className="section section-rule" id="contact" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="soft-panel p-8 md:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow mb-4">Let’s Connect</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-5" style={{ color: 'var(--foreground)' }}>
                如果你想把 AI 真正用起来，欢迎联系我
              </h2>
              <p className="text-base leading-8 mb-4" style={{ color: 'var(--muted-foreground)' }}>
                无论你是想学习 AI、提升效率、验证项目，还是寻找长期共建的合作伙伴，都欢迎和我交流。
              </p>
              <p className="text-base leading-8" style={{ color: 'var(--muted-foreground)' }}>
                我更关注的不只是“会不会用 AI”，而是如何把 AI 变成真正可复用的能力与结果。
              </p>
            </div>

            <div className="lg:justify-self-end">
              <a href={siteMeta.bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-8">
                <Calendar className="mr-2 w-4 h-4" /> 预约 15 分钟沟通
              </a>

              <div className="grid gap-4 text-sm sm:grid-cols-2">
              <a href="mailto:silence52168@gmail.com" className="flex items-center gap-2 hover:underline" style={{ color: 'var(--foreground)' }}>
                <Mail className="w-4 h-4" /> silence52168@gmail.com
              </a>
              <span className="flex items-center gap-2" style={{ color: 'var(--muted-foreground)' }}>
                微信: <button onClick={() => onOpenModal('wechat')} className="hover:underline focus:outline-none transition-all" style={{ color: 'var(--foreground)' }}>silence52168</button>
              </span>
              <span className="flex items-center gap-2" style={{ color: 'var(--muted-foreground)' }}>
                公众号: <button onClick={() => onOpenModal('gzh')} className="hover:underline focus:outline-none transition-all" style={{ color: 'var(--foreground)' }}>Bin哥AI跃迁手记</button>
              </span>
              <span className="flex items-center gap-2" style={{ color: 'var(--muted-foreground)' }}>
                小红书: <button onClick={() => onOpenModal('xhs')} className="hover:underline focus:outline-none transition-all" style={{ color: 'var(--foreground)' }}>Bin哥的AI跃迁</button>
              </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA
