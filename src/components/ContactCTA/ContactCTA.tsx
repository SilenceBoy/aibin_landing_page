import { motion } from 'framer-motion'
import { Calendar, MessageCircle } from 'lucide-react'

const ContactCTA = () => {
  return (
    <section className="section" id="contact" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card text-center"
          style={{ backgroundColor: 'var(--muted)' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            想用 AI 提升效率或打造个人 IP?
          </h2>
          <p className="max-w-2xl mx-auto mb-8" style={{ color: 'var(--muted-foreground)' }}>
            无论你是个人创作者还是企业团队，我都能帮你用 AI 实现目标。
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn btn-primary">
              <Calendar className="mr-2 w-4 h-4" /> 预约免费咨询
            </button>
            <button className="btn btn-secondary">
              <MessageCircle className="mr-2 w-4 h-4" /> 微信联系
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA