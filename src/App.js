import React, {useState,useEffect} from 'react';
import NavBar from "./NavBar/navbar";
import SearchBar from "./SearchBar/SearchBar";
import './App.css';

const App = () => {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [followers, setFollowers] = useState("");
    const [following, setFollowing] = useState("");
    const [repo, setRepo] = useState("");
    const [avatar, setAvatar] = useState("");
    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState(null);
    const[button,setButton]=useState(false);

    useEffect (()=>{
        fetch(`https://api.github.com/users/example`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            });
    },[]);

    const setData=({login,avatar_url,name,followers,following,public_repos})=>{
            setUserName(login);
            setAvatar(avatar_url);
            setName(name);
            setFollowers(followers);
            setFollowing(following);
            setRepo(public_repos);
    }

    const handleClick=()=>{
        setButton(true);
        fetch(`https://api.github.com/users/${userInput}`)
            .then(res=>res.json())
            .then(data=>{
                if(data.message)
                {
                    setError(data.message)
                    console.log(data.message);
                }
                else {
                    setData(data);
                    setError(null);
                }
            })
    }

    const handleInput=(e)=>{
        setUserInput(e.target.value);
    }

    const pressEnterHandler=(k)=>{
        if(k.keyCode === 13){
            {handleClick()}
        }
    }

    return (
        <div className="App">
            <NavBar/>
            <SearchBar changeInput={handleInput} pressEnterHandler={pressEnterHandler} handleClick={handleClick}/>
           <div className="Card">
               { userInput.length ? error ?
                   (<h1>User Not found</h1> ): button ?
                   (<div className="ui card">
                            <div className="image">
                                <img src={avatar} alt="IMAGE"/>
                            </div>
                            <div className="content">
                                <a className="header">{name}</a>
                                <div className="meta">
                                    <span className="date">{userName}</span>
                                </div>
                            </div>
                            <div className="extra content">
                                <p>{repo} Repositories</p>
                                <br/>
                                <a>
                                    <i className="user icon"> </i>
                                    Following: {following}
                                </a>
                                <a className="followers">
                                    <i className="user icon"> </i>
                                    Followers: {followers}
                                </a>
                            </div>
                    </div>):null :null}
           </div>
        </div>

    );
}
export default App;