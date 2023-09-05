
import "./Home.css";
import React, { createContext, useState, useContext } from "react";
// import { ListProvider } from '../Data/Context';
import { List } from "../Data/Context";

export function Home() {
  const [button, setButton] = useState<boolean>(false);
  const context = useContext(List);
  if (!context) return null;
  const { trip, setTrips } = context;

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
        console.log("s")
      } else {
        console.error("Failed to delete trip.");
      }
    } catch (error) {
      console.error("Error while deleting trip:", error);
    }
  };

  return (
    <div>
      <h1>Welcome to Trip Manager {}</h1>
      <div >
        <button onClick={handleClick}>All trips</button>
        {button && (
          <div className="father">
            {trip.map((singleTrip: any) => (
              <div key={singleTrip.id} className="card">
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
        <button onClick={handleClick}>Registration</button>
        {button ? <div></div> : <div></div>}
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
}
