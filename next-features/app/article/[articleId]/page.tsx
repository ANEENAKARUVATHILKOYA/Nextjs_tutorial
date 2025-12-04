"use client"
import Link from "next/link"
import { use}  from "react"

 
export default function newArticle({params, searchParams}:
    {
      params : Promise<{articleId : string}>
      searchParams : Promise<{lang ? : "en" | "es" | "fr"}>;
    }
){
    
   
   const {articleId} =  use(params) ;
   const {lang = "en"} = use(searchParams);

    return(
     <div>
        <h1>news article {articleId}</h1>
        <h1>reading in {lang}</h1>

    <div>
        <Link href={`/article/${articleId} ? lang=en`}>English</Link>
        <Link href={`/article/${articleId} ? lang=es`}>Spanish</Link>
        <Link href={`/article/${articleId} ? lang=fr`}>French</Link>
    </div>
    </div>
    )
}