import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';
import { useEffect, useState, createContext } from "react";
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
export function TripDetail(){
    return(
        <div>
        <Link to="/">kk</Link>
        </div>
    )
}