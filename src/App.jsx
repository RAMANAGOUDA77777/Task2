import React from "react";
import Navbar from "./Components/Navbar";
import Middle from "./Components/Middle";
import Third from "./Components/Third";
import Fourth from "./Components/Fourth";

const App = () => {
    return ( 
        <div id="app">
            <Navbar/>
            <Middle/>
            <Third/>
            <Fourth/>
        </div>
     );
}
 
export default App;