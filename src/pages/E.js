//1. Import area

import { useContext } from "react"
import { detailContext } from ".."



//2. Defination area
const E = ()=>{
    //2.1 Hooks area
    const detail = useContext(detailContext)

    const {age, place} = detail // object destructuring 
    return(
        <>
            <h1>This is component E</h1>
            <h3>I am {age} years old</h3>
            <h3>I Belong to {place}</h3>
        </>
    )
}




//3. return statement
//3.1 Named Export
//3.2 Default Export
export default E