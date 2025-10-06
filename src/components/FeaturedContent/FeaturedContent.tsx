import { motion } from 'framer-motion'

const FeaturedContent = () => {
  const articles = [
    {
      tag: "文章",
      tagColor: "bg-blue-100 text-blue-800",
      category: "AI 开发",
      title: "普通人如何7天上线一个 AI Agent?",
      description: "详细介绍从零开始构建 AI Agent 的完整流程...",
      date: "2024-01-15",
      link: "阅读全文 →"
    },
    {
      tag: "案例", 
      tagColor: "bg-purple-100 text-purple-800",
      category: "实战复盘",
      title: "AI + 自媒体：我是如何用一条视频涨粉5万的",
      description: "分享制作爆款 AI 工具自媒体内容的经验...",
      date: "2024-01-05", 
      link: "阅读全文 →"
    },
    {
      tag: "教程",
      tagColor: "bg-green-100 text-green-800", 
      category: "技术教程",
      title: "RAG 应用最佳实践：从需求到上线的全流程",
      description: "结合实际项目案例，深入讲解 RAG 技术...",
      date: "2024-01-10",
      link: "阅读全文 →"
    }
  ]

  return (
    <section className="section" id="content" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
            精选内容
          </h2>
          <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>
            分享最新的 AI 技术洞察、实战经验和创业思考
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${article.tagColor}`}>
                    {article.tag}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--card-foreground)' }}>
                  {article.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--muted-foreground)' }}>
                  {article.description}
                </p>
                <div className="flex justify-between items-center text-xs" style={{ color: 'var(--muted-foreground)' }}>
                  <span>{article.date}</span>
                  <span>{article.link}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn btn-secondary">查看更多内容</button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedContent