import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.99,
    filter: 'blur(8px)',
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.01,
    filter: 'blur(4px)',
  },
}

const pageTransition = {
  type: 'tween',
  ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for smooth feel
  duration: 0.5,
}

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ width: '100%', minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  )
}

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageTransition
