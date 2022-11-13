import {motion} from 'framer-motion'
import './Block.css'
export const Block = (props) => {
    return (
        <div>
            <motion.div layout className='arrblock'
                initial={{ opacity: 0.6 }}
                whileHover={{
                    scale: 1.2,
                    
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
            >
                <div className='numDisp'>
                <p>{props.num}</p>
                <p className='addDisp'>{props.add}</p>
                </div>
                
            </motion.div>
        </div>
        
    )
}