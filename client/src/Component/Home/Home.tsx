import "./Home.css";
import React, { createContext, useState, useContext } from "react";
// import { ListProvider } from '../Data/Context';
import { List } from "../Data/Context";

export function Home() {
  const [button, setButton] = useState<boolean>(false);
  const [buttonRegis,setButtonRegis]=useState<boolean>(false)
  const [div, setDiv] = useState<boolean>(false);
  const context = useContext(List);
  if (!context) return null;
  const { trip, setTrips } = context;
  let { clickDelete, onClick } = context;

  const showingTrips = () => {
    console.log();
  };

  const handleClick = () => {
    setButton(!button);
  };

  const myHeaders = new Headers();
  myHeaders.append("authorization", "test-token");

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/trips/${id}`, {
        headers: myHeaders,
        method: "DELETE",
      });

      if (response.ok) {
        console.log("s");
        onClick(clickDelete + 1);
      } else {
        console.error("Failed to delete trip.");
      }
    } catch (error) {
      console.error("Error while deleting trip:", error);
    }
  };
  const handleClickRegistration=()=>{
    setButtonRegis(!buttonRegis)
    console.log(buttonRegis)
  }
  const handleClickLogin=()=>{
    
  }
  const showAllDeatels = () => {
    setDiv(!div);
  };

  return (
    <div>
      <h1>Welcome to Trip Manager {}</h1>
      <div>
        <button onClick={handleClick}>All trips</button>
        {button && (
          <div className="father">
            {trip.map((singleTrip: any) => (
              <div
                key={singleTrip.id}
                className="card"
                onClick={showAllDeatels}
              >
                {div && (
                  <div>
                    <p> {singleTrip.id}</p>
                    <p>{singleTrip.name}</p>
                    <img id="img" src={singleTrip.image} alt="picture"></img>
                    <p>{singleTrip.startDate}</p>
                    <p>{singleTrip.endDate}</p>
                    <p>{singleTrip.destnetion}</p>
                    <p>{singleTrip.description}</p>
                    <p>{singleTrip.price}</p>
                    <p></p>
                    <p></p>
                    <p></p>
                  </div>
                )}
                <p>Trip ID: {singleTrip.id}</p>
                <p>Name: {singleTrip.name}</p>
                <img id="img" src={singleTrip.image} alt="picture"></img>
                <p>from:{singleTrip.startDate}</p>
                <p>until:{singleTrip.endDate}</p>
                <button onClick={() => handleDelete(singleTrip.id)}>
                  delete
                </button>
                <button>update</button>
              </div>
            ))}
          </div>
        )}
        <button onClick={handleClickRegistration}>Registration</button>
        {buttonRegis && <div>fdygdg</div> }
        
        <button onClick={handleClickLogin}>Login</button>
      </div>
    </div>
  );
}
