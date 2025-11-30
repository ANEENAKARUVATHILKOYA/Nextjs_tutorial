"use client";

import { usePathname } from "next/navigation";


export default function Notfound(){
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewsId = pathname.split("/")[4];
    return(
        <h2>Review {reviewsId} for product {productId} not found</h2>
    )
}