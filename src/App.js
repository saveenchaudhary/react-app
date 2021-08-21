import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import InputForm from "./Components/InputForm";
import Navbar from "./Components/Navbar";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const [color,setColor] = useState(null);
  
  
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

  // Different Themes
  function redTheme(){
    document.body.style.transition = "0.5s";
    if(color == null){
      setColor('red');
      document.body.style.background = "#ff00003d";
    }
    else{
      document.body.style.background = "white";
      setColor(null);
    }
  }
  function greenTheme(){
    document.body.style.transition = "0.5s";
    if(color == null){
      setColor('green');
      document.body.style.background = "#00800047";
    }
    else{
      document.body.style.background = "white";
      setColor(null);
    }
  }
  function orangeTheme(){
    document.body.style.transition = "0.5s";
    if(color == null){
      setColor('orange');
      document.body.style.background = "#ffa50059";
    }
    else{
      document.body.style.background = "white";
      setColor(null);
    }
  }
  function violetTheme(){
    document.body.style.transition = "0.5s";
    if(color == null){
      setColor('violet');
      document.body.style.background = "#ee82ee59";
    }
    else{
      document.body.style.background = "white";
      setColor(null);
    }
  }
  
  
  

  
  return (
    <>
      <Navbar
        title="Text Utill's"
        mode={mode}
        aboutText="About"
        toggleMode={toggleMode}
        redTheme = {redTheme}
        greenTheme ={greenTheme}
        orangeTheme = {orangeTheme}
        violetTheme = {violetTheme}
        color = {color}

        />
      <Alert alert={alert} />
      <InputForm
        heading="Enter the Text to Analyze"
        mode={mode}
        showAlert={showAlert}
        color = {color}
      />
    </>
  );
}

export default App;
