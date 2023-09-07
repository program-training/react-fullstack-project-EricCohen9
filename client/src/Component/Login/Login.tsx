import { useEffect, useState, createContext, useContext } from "react";
import { Routs } from "../RouterContext/RouterContext";
import { Token } from "../Token/Token";
import "./Login.css";
export function Login() {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [token2, settoken2] = useState("");
  const token1 = useContext(Token);
  if (!token1) return null;
  const { token, settoken } = token1;
  const data = {
    email: email,
    password: password,
  };
  interface obj {
    message: string;
    responseObj: responObj;
    error?: string;
  }
  interface responObj {
    user: object;
    token: string;
  }
  const RouterContext1 = useContext(Routs);
  if (!RouterContext1) return null;
  const { router, setRouter } = RouterContext1;
  return (
    <div id="father">
      <div id="login">
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
                `http://localhost:3000/api/auth/login`,
                {
                  headers: myHeaders,
                  method: "POST",
                  body: JSON.stringify(data),
                }
              );
              let daya: obj = await response.json();
              // let finall = daya.token;
              if (response.ok) {
                alert("seccsess");
                settoken(daya.responseObj.token);
                console.log(daya.responseObj.token);
                console.log(token);
                console.log("Status Code: 200 OK on successful login");
              } else {
                console.error("Status Code: 401 Unauthorized");
              }
            } catch (error) {
              console.error("Error while deleting trip:", error);
            }
          }}
        >
          Login
        </button>
      </div>
      <button onClick={() => setRouter({ name: "Home", id: 1 })}>back</button>
    </div>
  );
}
