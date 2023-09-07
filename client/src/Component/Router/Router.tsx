import { Routs } from "../RouterContext/RouterContext";
import React, { createContext, useState, useContext } from "react";
import { TripDetail } from "../TripDetail/TripDetail";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Update } from "../Update/Update";
import { Registration } from "../Registration/Registration";
import { NewTrip } from "../NewTrip/NewTrip";
export function RouterMain() {
  const RouterContext1 = useContext(Routs);
  if (!RouterContext1) return null;
  const { router, setRouter } = RouterContext1;
  if (router?.name === "Home") {
    return <Home />;
  }
  if (router?.name === "cardDeteles") {
    console.log(router);
    return (
      <div>
        <TripDetail />
      </div>
    );
  }
  if (router?.name === "Login") {
    return <Login></Login>;
  }
  if (router?.name === "Update") {
    return (
      <div>
        <Update></Update>
      </div>
    );
  }
  if (router?.name === "NewTrip") {
    return <NewTrip></NewTrip>;
  }
  if (router?.name === "Registration") {
    return <Registration></Registration>;
  }
  return <p></p>;
}
