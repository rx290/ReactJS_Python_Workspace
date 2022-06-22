import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // To avoid appending to the incoming data we will make it a constant
  const [data, setData] = useState([{}]);

  useEffect(() => {
    // getting all the data from the route
    fetch("/blogs")
      .then(
        // and saving the response as json
        (response) => response.json()
      )
      .then(
        // Saving that response as data
        (data) => {
          setData(data);
          console.log(data);
        }
      );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>All Blogs</h1>
      </header>
      <div>
        {typeof data.blogs == "undefined" ? (
          <p>Data Loading...</p>
        ) : (
          // data.blogs.map((blog, i) => <p key={i.id}>{blog}</p>)
        data.blogs.map((blog, i) => <div className="blog"> <p key={i}>ID: {blog.id} Title: {blog.title} subtitle: {blog.subtitle}</p></div>)
        )}
      </div>
    </div>
  );
}

export default App;
