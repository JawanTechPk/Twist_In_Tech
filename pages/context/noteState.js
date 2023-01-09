import { useState } from "react";
import { constants } from "../../utils/constants";
import NoteContext from "./notecontext";



const NoteState = (props) => {

    
    const [state, setState] = useState({
        [constants.DEFAULT_DATA]: {
            name: "Mesum",
            message: "success"
        },
        [constants.USER_DATA]:{
            name:"Anas"
        }
    })

  
   
    const update = (data, stateName) => {
        setState({...state,[stateName]:data})

   
    }
    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
