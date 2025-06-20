import React, { useEffect } from "react"

const Wrapper_responsive=(props:{children:React.ReactNode,id?:string,fitScreen?:boolean,class?:{outerWrapper?:string,innerWrapper?:string}})=>{

    useEffect(()=>{
        window.addEventListener("resize",()=>{

        })
    },[])

    return(
        <div id={props.id} className={`flexbox-row flexbox-center ${props.class?.outerWrapper}`}>
            <div className={"wrapper-responsive "+(props.fitScreen?"wrapper-responsive":"")}>{props.children}</div>
        </div>
    )
}

export default Wrapper_responsive