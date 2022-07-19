import { useState } from "react"
import VerbList from "../data/verbList"
import "../style/verbAff.css"
import VerbSearch from "./verbSearch"
import VerbNavigation from "./verbNavigation"
import { motion } from "framer-motion"

const VerbAff=()=>{
    const [Verb, setVerb]=useState(0)
    const [isVisible, setIsVisible]=useState(false)
    const [verbSearch, setVerbSearch]=useState("")
    
    const precedentBtnClick=()=>{
        Verb>0 && Verb<VerbList.length ? setVerb(Verb-1): setVerb(Verb) 
    }
    const nextBtnClick=()=>{
        Verb>=0 && Verb<VerbList.length-1 ? setVerb(Verb+1): setVerb(Verb) 
    }
    const isExist=()=>{
        for (let i = 0; i < VerbList.length; i++) 
           if (verbSearch === VerbList[i].verbFr) {
               setVerb(i)
               break
           }
           else 
                setVerb(0)
    }
            
    return(
        <div className="container">
            <VerbSearch setVerbSearch={setVerbSearch} isExist={isExist}/>
            <div className="verbTotal">{`${Verb+1} / ${VerbList.length}`}</div>
            <motion.div className="verbFr">
                <div>{VerbList[Verb].verbFr}</div>
                {isVisible && <div className="verbAr">{`" ${VerbList[Verb].verbAr} "`}</div>}
            </motion.div>
            <VerbNavigation setIsVisible={setIsVisible} nextBtnClick={nextBtnClick} precedentBtnClick={precedentBtnClick}/>
        </div>
    )
}

export default VerbAff