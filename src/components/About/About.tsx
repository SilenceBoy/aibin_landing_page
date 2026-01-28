import { motion } from 'framer-motion'

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
              src="/src/assets/hero-profile2.png"
              alt="梁斌 - AI应用顾问"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              关于我
            </h2>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              <p>
                我是<strong style={{ color: 'var(--foreground)' }}>梁斌</strong>，AI 应用顾问 / AI 产品项目负责人。
              </p>
              <p>
                过去在<strong style={{ color: 'var(--foreground)' }}>核心交易系统、政企复杂集成与平台化产品</strong>上做过大规模交付。
              </p>
              <p>
                现在专注<strong style={{ color: 'var(--foreground)' }}>企业 AI 落地</strong>：RAG 企业知识库、Agent 流程自动化、AIGC 内容生产。
              </p>
              <p>
                我的风格是：<strong style={{ color: 'var(--accent)' }}>指标先行、验收驱动、可控上线、可复用沉淀</strong>。
              </p>
              <p>
                如果你需要把 AI 从 Demo 推进到业务结果，我们可以<a href="#contact" className="underline" style={{ color: 'var(--accent)' }}>聊 15 分钟</a>。
              </p>
            </div>

            {/* 当前机会 */}
            <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: 'var(--muted)' }}>
              <p className="text-sm mb-2" style={{ color: 'var(--muted-foreground)' }}>
                我现在在看这些机会：
              </p>
              <div className="flex flex-wrap gap-2">
                {['AI解决方案负责人', 'AI产品负责人', 'AI落地负责人（ToB）'].map((role, index) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: 'var(--background)',
                      color: 'var(--foreground)',
                      border: '1px solid var(--border)'
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About