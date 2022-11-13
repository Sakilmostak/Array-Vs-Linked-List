import {motion} from 'framer-motion'
import './ListBlock.css'

export const ListBlock = (props) => {
    return (
        <div>
            <motion.div className='outerBlock'
                drag
                dragConstraints={{
                top: -500,
                left: -500,
                right: 500,
                bottom: 50,
            }}
            >
                <div className='listBlock'>
                    <div className='innerBlock'>
                        <p className='listEle'>{props.num}</p>
                    </div>
                </div>
                <div className='arrowSign'>
                    <img className='arrowImg' src='right-arrow-svgrepo-com.svg' alt='arrow-sign'></img>
                </div>

            </motion.div>
        </div>
    )
}