import { useEffect, useState, createContext,useContext } from "react";
import { Routs } from "../RouterContext/RouterContext";
import "./Update.css"

export function Update(){
    const RouterContext1=useContext(Routs)
    if(!RouterContext1)return null
    const {router, setRouter}=RouterContext1
    const [id,setid]=useState("")
    const [name,setname]=useState("")
    const [ destnetion,setdestnetion]=useState("")
    const [startDate,settartDate]=useState("")
    const [endDate,endDateset]=useState("")
    const [description,descriptionset]=useState("")
    const [ price, priceset]=useState("")
    const [image,imageset]=useState("")
    const data= {
        id:id,
        name:name,
        destnetion:destnetion,
        startDate: startDate,
        endDate: endDate,
        description:description,
        price: price,
        image: image,
      }
    return(
        <div id="father">
            <form>
            <input value={id} placeholder="enter your id" onChange={(e)=>{setid(e.target.value)}}></input>
            <input value={name}placeholder="name" onChange={(e)=>{setname(e.target.value)}}></input>
            <input  value={destnetion}placeholder=" destnetion"  onChange={(e)=>{setdestnetion(e.target.value)}}></input>
            <input   value={startDate} placeholder="startDate" onChange={(e)=>{settartDate(e.target.value)}}></input>
            <input  value={endDate} placeholder=" endDate" onChange={(e)=>{endDateset(e.target.value)}}></input>
            <input  value={description} placeholder=" description" onChange={(e)=>{descriptionset(e.target.value)}}></input>
            <input  value={price} placeholder=" price" onChange={(e)=>{priceset(e.target.value)}}></input>
            <input  value={image} placeholder="image" onChange={(e)=>{imageset(e.target.value)}}></input>
            </form>
            <button onClick={async()=>{
                        const myHeaders = new Headers();
                        myHeaders.append("authorization", "test-token");

                        try {
                          const response = await fetch(`http://localhost:3000/api/trips/${id}`, {
                            headers: myHeaders,
                            method: "PUT",
                            body:JSON.stringify(data)
                          });
                          console.log(response)
                          if (response.ok) {
                            console.log("s");
                        } else {
                            console.error("Failed to delete trip.");
                            {
                              () => setRouter({ name: "Home", id: 1 });
                            }
                          }
                        } catch (error) {
                          console.error("Error while deleting trip:", error);
                        }
                      ;
            }}>SEND</button>
            <div>
            <button onClick={()=>setRouter({name:"Home",id:1})}>back</button>
            </div>
        </div>
        
    )
}