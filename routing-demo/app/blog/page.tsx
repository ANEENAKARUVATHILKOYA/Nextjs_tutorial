import { Metadata } from "next"

export const metadata:Metadata ={
title:{
    absolute:"Blog",
}
 
};



export default  async function blog(){     //blog folder for nested routing - 2 folder first and second
    await new Promise((resolve) => {
        setTimeout(()=>{
            resolve("International delay")
        }, 2000);
    })
    return(
        <h1>My Blog ```!!!!</h1>
    )
}