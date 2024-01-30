import React, {useEffect, useState} from "react";
import Traffic from "./Traffic";



const Lights = () => {

    const [selected, setSelected] = useState("red") // incializo el useState en red!
    const [change, setChange] = useState(false)

    const changeColor = (color) => {
        setSelected(color);

    }

    useEffect( () => {
        if (change) {
            const interval = setInterval( () => {
                if (selected == "red") {
                    setSelected("yellow")
                } else if (selected == "yellow") {
                    setSelected("green")
                } else if (selected == "green") {
                    setSelected("red")
                }
            }, 2000)
            return () =>clearInterval(interval)
        }


    }, [change, selected])

    return(
        <div className="container mt-3 ms-4">
       <div
            className={`rounded-circle bg-danger mt-2 ${selected === "red" ? "lightOn" : ""}`}
            onClick={() => changeColor("red")}
            style={{ height: "80px", width: "80px" }}> 
        </div>
        <div
            className={`rounded-circle bg-warning mt-2 ${selected === "yellow" ? "lightOn" : ""}`}
            onClick={ () => changeColor("yellow")}
            style={{ height: "80px", width: "80px" }}> 
        </div>
        <div
            className={`rounded-circle bg-success mt-2 ${selected === "green" ? "lightOn" : ""}`}
            onClick={ () => changeColor("green")}
            style={{ height: "80px", width: "80px" }}> 
        </div>
        <button onClick={() => setChange(!change)} className="btn btn-success"> Automatic </button>
        </div>
            
    );
}


export default Lights;