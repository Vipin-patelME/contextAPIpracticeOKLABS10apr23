//1. Import area
import { useContext } from "react"
import { detailContext } from ".."

import { D } from "./D"

//2. Defination area
const C = ()=>{
    //2.1 Hooks area
    
    const detail = useContext(detailContext)

    const {name, surName} = detail // object destructuring 


    return(
        <>
            <h1>This is component C</h1>
            <h3>My name is {name}</h3>
            <h3>My name Family name is  {surName}</h3>
            <D />
        </>
    )
}




//3. return statement
//3.1 Named Export
//3.2 Default Export
export default C