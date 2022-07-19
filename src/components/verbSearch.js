import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const VerbSearch=({setVerbSearch,isExist})=>{
    return(
        <div className="div-search">
                <input className="input-search" type="text" name="name" 
                    onKeyDown={(e)=>{
                       if (e.key==="Enter")
                         isExist()
                    }}
                    onChange={(e)=>{
                        setVerbSearch(e.target.value)
                    }}/>
                <div className="btn-search" onClick={()=>{
                        isExist()
                    }}>
                    <FontAwesomeIcon className="btnIcon" size="xl" icon={faMagnifyingGlass} />
                </div>
        </div>

    )
    
}

export default VerbSearch