import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"

const VerbNavigation=({setIsVisible, nextBtnClick,precedentBtnClick})=>{
    return(
        <div className="controlBox">
            <motion.div  className="buttn" 
                    onClick={()=>{
                        precedentBtnClick()
                    }}
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                      }}
                    >
                <FontAwesomeIcon className="btnIcon" size="xl" icon={faChevronCircleLeft} />
            </motion.div >
            <div  className="buttn" 
                    onMouseDown={()=>{
                        setIsVisible(true)
                    }}
                    onMouseUp={()=>{
                        setIsVisible(false)
                    }}
            >
                <FontAwesomeIcon className="btnIcon" size="xl" icon={faGlobe} />
            </div >
            <div  className="buttn" onClick={()=>{
                    nextBtnClick()
                }}>
                <FontAwesomeIcon className="btnIcon" size="xl" icon={faChevronCircleRight} />

            </div >
    </div>
    )
}

export default VerbNavigation