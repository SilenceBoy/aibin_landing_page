import { motion } from 'framer-motion'
import { Menu, X, Calendar } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { href: '#outcome', label: '成果' },
    { href: '#proof', label: '背书' },
    { href: '#ways', label: '合作方式' },
    { href: '#process', label: '流程' }
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:p-6"
      style={{
        backgroundColor: 'var(--background)',
        borderBottom: '1px solid var(--border)'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="/"
          className="text-2xl font-bold"
          style={{ color: 'var(--foreground)' }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          梁斌
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="hover:text-gray-900 transition-colors"
              style={{ color: 'var(--foreground)' }}
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="https://wj.qq.com/s2/25653939/5109/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Calendar className="w-4 h-4 mr-2" />
            预约沟通
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
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="https://wj.qq.com/s2/25653939/5109/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-fit"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Calendar className="w-4 h-4 mr-2" />
              预约沟通
            </motion.a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}

export default Header
