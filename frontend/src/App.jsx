import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [dataYea, setDataYea] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponData] = useState([]);
  

  useEffect(() => {
    async function getData() {
      fetch("http://localhost/")
        .then(res => res.json())
        .then(data => {
          setDataYea(data);
          console.log(data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        } );
    }
  
    getData();
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newFormData = new FormData();
    newFormData.append("username", username);
    newFormData.append("password", password);

    const response = await axios.post(
      "http://localhost/",
      newFormData,
    );
    const responseData1 = await response.data;
    setResponData(responseData1);
    console.log(responseData);
  };

  

  return (
    <>
      {isLoading ? <p>Loading...</p> : 
      <div>
        <p>{dataYea.h1}</p>
        <form autoComplete='off' onSubmit={handleSubmit} >
          <label htmlFor='username' ><p>Username</p>
          <input
            type='text'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          </label>
          <label htmlFor='password'><p>Password</p>
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </label>
          <button 
            type='submit'
            >
          Submit</button>
          <h2>{responseData.msg}</h2>
        </form>
      </div>
}
  
    </>
  );
}

export default App;
