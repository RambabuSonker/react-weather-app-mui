import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
        const [WeatherInfo, setweatherInfo]=useState({
                 city: "Wanderland",
                feelsLike:34.22,
                humidity:66,
                temp:30.05,
                tempMax:30.05,
                tempMin:30.05,
                weather:"haze"
        });

        let updateInfo = (newInfo)=>{
                setweatherInfo(newInfo);
        }


        return(
                <div style={{textAlign:"center"}}>
                        <h2>Weather App by Delta</h2>
                        <SearchBox updateInfo={updateInfo}/>
                        <InfoBox info={WeatherInfo}/>
                </div>
        );
}