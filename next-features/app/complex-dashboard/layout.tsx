//import UserAnalytics from "path/to/userAnalytics",
//import RevenueMetrics from "path/to/RevenueMetrics",
//import Notifications from "path/to/Notifications"

import React from "react";


export default function ComplexDashboardLayout({children, notification, revenue, users, login }:{                                                          
    children: React.ReactNode;     
    users :React.ReactNode;
    revenue: React.ReactNode;
    notification: React.ReactNode;     
    login: React.ReactNode          
}){

    const isLoggedIn = false;
    return  isLoggedIn ? (
        <>
          <div>{children}</div>                                                                
          <div style={{display:"flex"}}>
              <div style={{display:"flex", flexDirection:"column"}}>  
                <div>{users}</div>
                <div>{revenue}</div>
               </div> 
                <div  style={{display:"flex", flex:1}}>{notification}</div>
         </div>  
        </>
    )   : (login)
}