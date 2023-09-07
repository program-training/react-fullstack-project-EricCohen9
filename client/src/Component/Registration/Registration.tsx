import { useEffect, useState, createContext, useContext } from "react";
import { Routs } from "../RouterContext/RouterContext";
import "./Registreshion.css";
export function Registration() {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const data = {
    email: email,
    password: password,
  };
  const RouterContext1 = useContext(Routs);
  if (!RouterContext1) return null;
  const { router, setRouter } = RouterContext1;

  return (
    <div id="father">
      <div id="regis">
        <input
          className="input"
          value={email}
          placeholder="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        ></input>
        <input
          className="input"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        ></input>
        <button
          onClick={async () => {
            const myHeaders = new Headers();
            myHeaders.append("authorization", "test-token");
            myHeaders.append("Content-Type", "application/json");

            try {
              const response = await fetch(
                `http://localhost:3000/api/auth/register`,
                {
                  headers: myHeaders,
                  method: "POST",
                  body: JSON.stringify(data),
                }
              );
              console.log(response);
              if (response.ok) {
                alert("successful registration");
                console.log(
                  "Status Code: 201 Created on successful registration"
                );
              } else {
                console.error(
                  "Status Code: 400 Bad Request if the user already exists"
                );
              }
            } catch (error) {
              console.error("Error while deleting trip:", error);
            }
          }}
        >
          Registration
        </button>
      </div>

      <button onClick={() => setRouter({ name: "Home", id: 1 })}>back</button>
    </div>
  );
}
