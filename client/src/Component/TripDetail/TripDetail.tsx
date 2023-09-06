import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useEffect, useState, createContext, useContext } from "react";
import { Routs } from "../RouterContext/RouterContext";
import "./TripDetail.css";
interface data {
  id: string;
  name: string;
  destnetion: string;
  startDate: string;
  endDate: string;
  description: string;
  price: string;
  image: string;
  activitis: string[];
}
export function TripDetail() {
  const [detels, setDetels] = useState<data | null>(null);
  const RouterContext1 = useContext(Routs);
  if (!RouterContext1) return null;
  const { router, setRouter } = RouterContext1;
  useEffect(() => {
    const fetchItems = async () => {
      console.log("kk");
      const result = await fetch(
        `http://localhost:3000/api/trips/${router?.id}`
      );
      const data = await result.json();
      console.log(data);
      setDetels(data);
      if (!detels) return null;
      console.log(detels);
    };
    fetchItems();
  }, []);
  if (!detels) {
    return;
  }
  return (
    <div id="cardDetels">
      {/* <p>{detels.id}</p> */}
      <p>{detels.name}</p>
      <img src={detels.image}></img>
      <p>{detels.activitis}</p>
      <p>{detels.description}</p>
      <p>{detels.destnetion}</p>
      <p>{detels.price}$</p>
      <div>
        <button onClick={() => setRouter({ name: "Home", id: 1 })}>back</button>
      </div>
    </div>

    // <div>
  );
}
