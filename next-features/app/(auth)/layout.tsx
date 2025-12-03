"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLink = [
   {name:"Register", href:"/register"},
   {name:"Login",    href:"/login"},
   {name:"forgot-password", href:"/forgot-password"}
];


export default function Authlayout({children}:
    {children: React.ReactNode}
){
 const pathname = usePathname();
 return(
    <div>
        {navLink.map((link)=>{
            const isActive = pathname ===link.href || (pathname.startsWith(link.href) && link.href !== "/")
            return(
                <Link className={isActive ?  "font-bold mr-4" : "text-blue-500 mr-4"}
                 href={link.href} key={link.name}> {link.name}</Link>
            )
        })}
        {children}
    </div>
 )
}

