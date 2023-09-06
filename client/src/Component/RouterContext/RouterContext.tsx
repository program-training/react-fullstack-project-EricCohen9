import { useEffect, useState, createContext } from "react";
interface card {
  name: string;
  id: number;
}
interface UserContextType {
  router: card | null;
  setRouter: React.Dispatch<React.SetStateAction<card | null>>;
}

console.log("fjiwwijfwsf");
interface UserContextProviderProps {
  children: React.ReactNode;
}
export const Routs = createContext<UserContextType | null>(null);
export const RoutsProvider: React.FC<UserContextProviderProps> = (props) => {
  const [router, setRouter] = useState<card | null>({ name: "Home", id: 1 });

  return (
    <div>
      <Routs.Provider value={{ router, setRouter }}>
        {props.children}
      </Routs.Provider>
    </div>
  );
};
