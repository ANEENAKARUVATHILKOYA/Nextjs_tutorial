


export default  async function ProductDetailes({params}:
    { params: Promise<{productId: string}>})
    
    {
    const productId = (await params).productId
    return(
        <h1>Product Detailes ``! {productId}</h1>
    )
}