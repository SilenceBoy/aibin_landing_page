import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="section" style={{ backgroundColor: 'var(--background)', borderTop: '1px solid var(--border)' }}>
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Bin 哥 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--foreground)' }}>
              Bin 哥
            </h3>
            <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
              专注 AI 应用与技术分享，用 AI 赋能生产力，让创作触达更多人。
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
              <li><a href="#about" className="hover:text-gray-800" style={{ color: 'var(--muted-foreground)' }}>关于我</a></li>
              <li><a href="#services" className="hover:text-gray-800" style={{ color: 'var(--muted-foreground)' }}>服务项目</a></li>
              <li><a href="#content" className="hover:text-gray-800" style={{ color: 'var(--muted-foreground)' }}>精选内容</a></li>
              <li><a href="#contact" className="hover:text-gray-800" style={{ color: 'var(--muted-foreground)' }}>联系咨询</a></li>
            </ul>
          </motion.div>

          {/* 关注我 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
              关注我
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-800" style={{ color: 'var(--muted-foreground)' }}>微信公众号</a></li>
              <li><a href="#" className="hover:text-gray-800" style={{ color: 'var(--muted-foreground)' }}>B站</a></li>
              <li><a href="#" className="hover:text-gray-800" style={{ color: 'var(--muted-foreground)' }}>小红书</a></li>
              <li><a href="#" className="hover:text-gray-800" style={{ color: 'var(--muted-foreground)' }}>GitHub</a></li>
            </ul>
          </motion.div>

          {/* 获取更新 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
              获取更新
            </h4>
            <p className="text-sm mb-3" style={{ color: 'var(--muted-foreground)' }}>
              订阅获取最新的 AI 技术分享和实战案例。
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="输入你的邮箱" 
                className="w-full px-3 py-2 text-sm rounded-l-md focus:ring-2 focus:ring-offset-0 focus:outline-none"
                style={{ 
                  border: '1px solid var(--border)', 
                  backgroundColor: 'var(--background)',
                  color: 'var(--foreground)'
                }}
              />
              <button className="btn btn-primary rounded-l-none">订阅</button>
            </form>
          </motion.div>
        </div>
        
        <div className="text-center text-sm mt-12 pt-8" 
             style={{ 
               color: 'var(--muted-foreground)', 
               borderTop: '1px solid var(--border)' 
             }}>
          © 2024 Bin 哥. 保留所有权利. | Made with ❤️ using React & AI
        </div>
      </div>
    </footer>
  )
}

export default Footer