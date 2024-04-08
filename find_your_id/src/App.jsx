import  Form  from "./components/Form";
import Request from "./components/Request";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  return (
    <div className="flex flex-col items-center text-center h-screen bg-gradient-to-r from-blue3  via-blue2 to-blue1 text-white">


    {user.length > 0 ?  <Request user={user} />  : <Form setUser={setUser} />}</div>

  );
}

export default App;
