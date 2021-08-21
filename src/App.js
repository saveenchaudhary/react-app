import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import InputForm from "./Components/InputForm";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const [color, setColor] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  function toggleMode() {
    document.body.style.transition = "1s";
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#49535d";
      showAlert("Changing to Dark Mode", "success");
    } else {
      document.body.style.background = "white";
      setMode("light");
      showAlert("Changing to Light Mode", "success");
    }
  }

  function redTheme() {
    if (color != "red") {
      setColor("red");
      document.body.style.background =
        mode === "dark" ? "#49535d " : "#ff000052";
    } else {
      setColor("");
      document.body.style.background = mode === "dark" ? "#49535d" : "white";
    }
  }
  function greenTheme() {
    if (color != "green") {
      setColor("green");
      document.body.style.background =
        mode === "dark" ? "#49535d " : "#0080005e";
    } else {
      setColor("");
      document.body.style.background = mode === "dark" ? "#49535d" : "white";
    }
  }
  function violetTheme() {
    if (color != "violet") {
      setColor("violet");
      document.body.style.background =
        mode === "dark" ? "#49535d " : "#ee82ee52";
    } else {
      setColor("");
      document.body.style.background = mode === "dark" ? "#49535d" : "white";
    }
  }
  function orangeTheme() {
    if (color != "orange") {
      setColor("orange");
      document.body.style.background =
        mode === "dark" ? "#49535d " : "#ffa50059";
    } else {
      setColor("");
      document.body.style.background = mode === "dark" ? "#49535d" : "white";
    }
  }

  return (
    <>
      <Router>
        <Navbar
          title="Text Utill's"
          mode={mode}
          aboutText="AboutAAA"
          toggleMode={toggleMode}
          redTheme={redTheme}
          greenTheme={greenTheme}
          orangeTheme={orangeTheme}
          violetTheme={violetTheme}
          color={color}
        />
        <Alert alert={alert} />

        <Switch>
          {/* Exact is important here */}
          <Route exact path="/">
            <InputForm
              heading="Enter the Text to Analyze"
              mode={mode}
              showAlert={showAlert}
              color={color}
            />
          </Route>
          <Route exact path="/about">
            <About mode={mode} color={color} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
