import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const pageVariants = {
    initial: {
        opacity: 0,
        y: 15,
        scale: 0.98,
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1,
    },
    out: {
        opacity: 0,
        y: -15,
        scale: 1.02,
    },
}

const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.4,
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
