import "./Home.css";
import React, { createContext, useState, useContext } from "react";
// import { ListProvider } from '../Data/Context';
import { List } from "../Data/Context";
import { Routs } from "../RouterContext/RouterContext";

export function Home() {
  const [button, setButton] = useState<boolean>(false);
  const [buttonRegis, setButtonRegis] = useState<boolean>(false);
  const [div, setDiv] = useState<boolean>(false);
  const context = useContext(List);
  if (!context) return null;
  const { trip, setTrips } = context;
  let { clickDelete, onClick } = context;
  const RouterContext1 = useContext(Routs);
  if (!RouterContext1) return null;
  const { router, setRouter } = RouterContext1;

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
        onClick(clickDelete + 1, () => setRouter({ name: "Home", id: 1 }));
      } else {
        console.error("Failed to delete trip.");
        {
          () => setRouter({ name: "Home", id: 1 });
        }
      }
    } catch (error) {
      console.error("Error while deleting trip:", error);
    }
  };
  const handleClickRegistration = () => {
    setButtonRegis(!buttonRegis);
    console.log(buttonRegis);
  };
  const handleClickLogin = () => {};
  const showAllDeatels = () => {
    setDiv(!div);
  };

  return (
    <div>
      <h1>Welcome to Trip Manager </h1>
      <div>
        <button onClick={handleClick}>All trips</button>
        {button && (
          <div className="father">
            {trip.map((singleTrip: any) => (
              <div
                key={singleTrip.id}
                className="card">
                <div  onClick={() =>
                  setRouter({ name: "cardDeteles", id: singleTrip.id })
                }>
                <p>Trip ID: {singleTrip.id}</p>
                <p>Name: {singleTrip.name}</p>
                <img id="img" src={singleTrip.image} alt="picture"></img>
                <p>from:{singleTrip.startDate}</p>
                <p>until:{singleTrip.endDate}</p>
                </div>
                <div >
                <button onClick={() => handleDelete(singleTrip.id)}>
                  delete
                </button>
                <button onClick={() => setRouter({ name: "Update", id: 1 })}>
                  update
                </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <button onClick={() => setRouter({ name: "Registration", id: 1 })}>
          Registration
        </button>
        {buttonRegis && <div>fdygdg</div>}

        <button onClick={() => setRouter({ name: "Login", id: 1 })}>
          Login
        </button>
        <button onClick={() => setRouter({ name: "NewTrip", id: 1 })}>new trip</button>
      </div>
    </div>
  );
}
