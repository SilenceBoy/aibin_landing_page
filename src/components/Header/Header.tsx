import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { href: '#services', label: '核心服务' },
    { href: '#about', label: '关于我' },
    { href: '#content', label: '精选内容' },
    { href: 'https://news.silencebin.com', label: '新闻', external: true }
  ]

  return (
    <motion.header 
      className="flex justify-between items-center p-4 md:p-6"
      style={{ 
        backgroundColor: 'var(--background)'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="text-2xl font-bold"
          style={{ color: 'var(--foreground)' }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Bin 哥
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="hover:text-gray-900 transition-colors"
              style={{ color: 'var(--foreground)' }}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a 
            href="#contact" 
            className="btn btn-secondary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            联系我
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: 'var(--foreground)' }}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav 
          className="absolute top-full left-0 right-0 md:hidden py-4 border-t"
          style={{ 
            backgroundColor: 'var(--background)',
            borderColor: 'var(--border)' 
          }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-6xl mx-auto px-4 flex flex-col space-y-4">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="py-2 transition-colors"
                style={{ color: 'var(--foreground)' }}
                onClick={() => setIsMenuOpen(false)}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a 
              href="#contact" 
              className="btn btn-secondary w-fit"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              联系我
            </motion.a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}

export default Header
