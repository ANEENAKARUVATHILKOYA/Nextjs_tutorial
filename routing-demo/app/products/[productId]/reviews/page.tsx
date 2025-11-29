export default  async function ReviewPage({params}:
     {params: Promise<{ productId:string}>}
){
   const productId = (await params).productId;

    return (
        <>
        <h1> Review Page of  product {productId}</h1>

        <h2> Review 1</h2>
        <h2> Review 2</h2>
        <h3> Review 3 </h3>
        </>
    )
}