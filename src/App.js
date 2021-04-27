import React, {useState,useEffect} from 'react';
import NavBar from "./NavBar/navbar";
import SearchBar from "./SearchBar/SearchBar";

const App = () => {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [followers, setFollowers] = useState("");
    const [following, setFollowing] = useState("");
    const [repo, setRepo] = useState("");
    const [avatar, setAvatar] = useState("");
    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState(null);

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
            {error?(<h1>User Not found</h1> ):(<div className="Card">
                        <div className="ui card">
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
                                <a>
                                    <i className="user icon"> </i>
                                    Following: {following}
                                </a>
                                <a>
                                    <i className="user icon"> </i>
                                    Followers: {followers}
                                </a>
                            </div>
                        </div>
                    </div>)}
        </div>

    );
}
export default App;



/*
Bring card in center
when string.length()==0 display another message*/
