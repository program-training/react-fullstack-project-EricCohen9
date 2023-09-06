import { useEffect, useState, createContext } from "react";

    interface UserContextType {
        token: string | null;
        settoken: React.Dispatch<React.SetStateAction<string| null>>;
      }

      interface UserContextProviderProps {
        children: React.ReactNode;
      }
export const Token = createContext<UserContextType | null>(null);
export const TokenProvider: React.FC<UserContextProviderProps> = (props) => {
  const [token, settoken] = useState<string | null>(null);
  return (
    <div>
      <Token.Provider value={{token, settoken }}>
        {props.children}
      </Token.Provider>
    </div>
  );


}