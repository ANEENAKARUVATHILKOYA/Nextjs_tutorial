export default async function Reviews({params} :
  {params: Promise<{productId:string; reviewsId:string}>}
){
  const productId = (await params).productId
  const reviewsId = (await params).reviewsId
    return(
        <h1>review of {reviewsId} for the product is{productId} </h1>
    )
}
