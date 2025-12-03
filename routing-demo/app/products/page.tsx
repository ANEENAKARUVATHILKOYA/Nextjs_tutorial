import Link from "next/link"


export  default function ProductList(){    //for dynamic routing - folder [productId]
    const productId = 100;
    return(
        <>
            <h1>Product List</h1>
              <h3>Product 1</h3>
              <h3>Product 2</h3>
              <h3>Product 3</h3>


              <h1><Link href="/products/1">product 1</Link></h1>
              <h1><Link href="/products/2">product 2</Link></h1>

              <h1><Link href={`/products/${productId}`}>product {productId}</Link></h1>

          <Link href="/">Home</Link>    
        </>


    )
}