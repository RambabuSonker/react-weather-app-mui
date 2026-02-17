import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function InfoBox({info}){
        const INIT_URL="https://images.unsplash.com/photo-1673191898695-8252d409d82c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

        const HOT_URL="https://media.istockphoto.com/id/988274822/photo/young-mother-and-child-with-heatstroke.webp?a=1&b=1&s=612x612&w=0&k=20&c=lV2-InazovodD1cGXyR3grvNPCO0rHm7z1KQvr6rLcc=";
        const COLD_URL="https://media.istockphoto.com/id/1040375916/photo/teenage-girl-blowing-nose-on-winter-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=6dQy41KF9LXDAB6JaMm4YaVNlQ8GF4rVOguK_RYc3Mg=";
        const RAIN_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";



    
        return(
                <div className="InfoBox">
                        <div className='cardconatiner'>
                         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80
          ? RAIN_URL
          : info.temp>15
          ? HOT_URL
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80
          ? <ThunderstormIcon/>
          : info.temp>15
          ? <SunnyIcon/>
          : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color='text.secondary'  component={"span"}>
           <div>Temperature={info.temp}&deg;C</div>
           <div>Humidity={info.humidity}</div>
           <p>Min Temp={info.tempMin}&deg;C</p>
            <p>Max Temp={info.tempMax}&deg;C</p>
                       <p>The weather can be described as <i>{info.weather}</i> feels like={info.feelsLike}&deg;C</p>
           
        </Typography>
      </CardContent>
    </Card>
    </div>
                </div>
        );
}