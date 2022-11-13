import {motion} from 'framer-motion' //framer motion library for animation
import './Head.css'

//exporting the jsx for array block
export const Head = () => {
    return (
        <div className="titlename">
            <h1 className='actualname'>
                Array    Vs    Linked-List
            </h1>
            <motion.div className='mbox'
                animate={{ // for animation
                    scale: [1, 2, 2, 1, 1], //scaling divided into time
                    rotate: [0, 0, 270, 270, 0], //rotation divided into time
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"], //border radius divided into time
                }}>

            </motion.div>
        </div>
    );
}
