import { useEffect, useState, createContext } from "react";
interface data {
  id: string;
  name: string;
  destnetion: string;
  startDate: string;
  endDate: string;
  description: string;
  price: string;
  iimage: string;
  activitis: string[];
}
interface UserContextType {
  trip: data | null;
  setTrips: React.Dispatch<React.SetStateAction<data | null>>;
}

console.log("fjiwwijfwsf");
interface UserContextProviderProps {
  children: React.ReactNode;
}
export const List = createContext<UserContextType | null>(null);
export const ListProvider: React.FC<UserContextProviderProps> = (props) => {
  const [trip, setTrips] = useState<data | null>(null);
  useEffect(() => {
    const fetchItems = async () => {
      console.log("kk");
      const result = await fetch("http://localhost:3000/api/trips");
      console.log("Ll");
      const data = await result.json();
      console.log(data);

      setTrips(data);
    };
    fetchItems();
  }, []);
  return (
    <div>
      <List.Provider value={{ trip, setTrips }}>{props.children}</List.Provider>
    </div>
  );
};
