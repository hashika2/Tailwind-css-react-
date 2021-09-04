import Alert from "./Alert";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [post, setPostData] = useState([]);
  const [count, setCount] = useState(1);
  const [alertName, setAlertName] = useState("Welcome to my app");
  const [isAlert, setAlert] = useState(false);

  useEffect(() => {
    settimeout("Welcome to my app");
    axios.get(`https://jsonplaceholder.typicode.com/posts/${count}`).then(res =>{
      console.log(res);
      setPostData(res.data)
    });
    // console.log(res)
    // setPostData(res);
  }, [count]);

  const getJsonPlaceHolderData = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/posts");
  };

  const onHndleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setAlert(false);
      settimeout("Please use correct username and password");
      // document.title="Error";
    }
  };

  const settimeout = (message) => {
    setTimeout(() => {
      setAlertName(message);
      setAlert(true);
    }, 5000);
  };

  return (
    <div className="w-full max-w-xs">
      {isAlert ? "" : <Alert name={alertName} />}
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(e) => onHndleSubmit(e)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="count"
            type="text"
            placeholder="******************"
            onChange={(e) => setCount(e.target.value)}
          />
          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="flex items-center justify-between">
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            type="submit"
            value="Sign In"
          />
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
      <div>
        {
        // (post !== [])?post.map((p,key) => {
          // return (
            <div className="bg-gray-400">
              <h1 className="text-lg text-red-600">{post.title}</h1>
              <p>{post.id}</p>
              <p>{post.body}</p>
            </div>
          // );
        }
        {/* ):[]} */}
      </div>
    </div>
  );
};

export default Form;
