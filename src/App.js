import "./App.css";
import React, { useState } from "react";
var axios = require("axios");

function App() {
  const [file, setFile] = useState(0);

  const fileChangeHandler = (event) => {
    setFile({ file: event.target.files[0] });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("file", { file });
    var config = {
      method: "post",
      url: "http://localhost:36559/v1/meter-reading-uploads",
      headers: {
        "Content-Type": "text/csv",
      },
      data: { file },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group files">
                <label>Upload Your Meter Reading File </label>
                <input
                  type="file"
                  className="form-control"
                  multiple={false}
                  accept=".csv"
                  onChange={fileChangeHandler}
                ></input>
                <button type="submit" name="Upload" onClick={submitHandler}>
                  Upload!
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
