import {motion} from 'framer-motion'
import './Head.css'

export const Head = () => {
    return (
        <div className="titlename">
            <h1 className='actualname'>
                Array    Vs    Linked-List
            </h1>
            <motion.div className='mbox'
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}>

            </motion.div>
        </div>
    );
}
