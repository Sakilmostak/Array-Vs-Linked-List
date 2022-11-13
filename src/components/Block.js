import {motion} from 'framer-motion' // library for animation
import './Block.css'
export const Block = (props) => {
    return (
        <div>
            <motion.div layout className='arrblock'
                whileHover={{scale: 1.2}} //action on hovering
                whileTap={{ scale: 0.9 }} // action on tap
            >
                <div className='numDisp'>
                <p>{props.num}</p>
                <p className='addDisp'>{props.add}</p>
                </div>
                
            </motion.div>
        </div>
        
    )
}