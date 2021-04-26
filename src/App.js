import React,{useState} from 'react';
import NavBar from "./NavBar/navbar";
import SearchBar from "./SearchBar/SearchBar";

const App=()=>{
  const[name,setName]=useState("");
  const[userName,setUserName]=useState("");
  const[followers,setFollowers]=useState("");
  const[following,setFollowing]=useState("");
  const[repo,setRepo]=useState("");
  const[avatar,setAvatar]=useState("");
  const[userInput,setUserInput]=useState("");
  const[error,setError]=useState(null);
  return(
      <div>
        <NavBar/>
        <SearchBar/>

      </div>
  )
}
export default App;