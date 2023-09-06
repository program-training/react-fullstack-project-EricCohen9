import { useEffect, useState, createContext,useContext } from "react";
import { Routs } from "../RouterContext/RouterContext";
export function Login(){
    const[password,setpassword]=useState("")
    const[email,setemail]=useState("")
    const data={
        email:email,
        password:password
    }
const RouterContext1=useContext(Routs)
  if(!RouterContext1)return null
  const {router, setRouter}=RouterContext1
    return(
        <div>
            <input value={email} placeholder="email" onChange={(e)=>{setemail(e.target.value)}}></input>
            <input value={password}placeholder="password" onChange={(e)=>{setpassword(e.target.value)}}></input>
            <button onClick={async()=>{
                        const myHeaders = new Headers();
                        myHeaders.append("authorization", "test-token");
                        myHeaders.append("Content-Type", "application/json");

                        try {
                          const response = await fetch(`http://localhost:3000/api/auth/login`, {
                            headers: myHeaders,
                            method: "POST",
                            body:JSON.stringify(data)
                
                          });
                          console.log(response)
                          if (response.ok) {
                            console.log("Status Code: 200 OK on successful login");
                        } else {
                            console.error("Status Code: 401 Unauthorized");
                          }
                        } catch (error) {
                          console.error("Error while deleting trip:", error);
                        }
                      ;
            }}>Login</button>
            <button onClick={()=>setRouter({name:"Home",id:1})}>back</button>
        </div>
    )
}