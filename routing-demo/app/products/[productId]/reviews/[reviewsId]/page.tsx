
//import { notFound, redirect } from "next/navigation"; 

import { notFound } from "next/navigation";

export default async function Reviews({params} :
  {params: Promise<{productId:string; reviewsId:string}>}
){
  const productId = (await params).productId
  const reviewsId = (await params).reviewsId
                                                                                                                                                                                
  if( parseInt(reviewsId) > 1000){
       notFound();
     // redirect("/products")
  }
    return(
        <h1>review of {reviewsId} for the product is{productId} </h1>
    )
} 
 