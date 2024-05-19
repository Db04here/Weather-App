/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({ info }){
  const INIT_URL="https://media.istockphoto.com/id/1393849012/photo/aerial-drone-shot-passing-over-a-building-with-homes-offices-shopping-centers-moving-towards.jpg?s=612x612&w=0&k=20&c=jvvd44ppeckAxpVz5Xwb2I3mJFdYOnWQ2CHbiEVAuwA=";
  
  const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1613416721396-6565d7b3dcb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENPTEQlMjBXRUFUSEVSfGVufDB8fDB8fHww";
  const RAIN_URL = "https://t4.ftcdn.net/jpg/01/58/06/17/360_F_158061743_3H8QXR4VffbsBYtoqt0vSDMDSxJ8JxkD.jpg";

  return(
    <div className="InfoBox">
     <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}

            image={
              info.humidity > 80 
              ? RAIN_URL 
              : info.temp >15
              ? HOT_URL
              : COLD_URL
            }

            title="green iguana"
         />
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" fontWeight={600} component="div">
            <b>{info.city}</b>
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
            </Typography>

            <Typography variant="body2" color="text.secondary" component={"span"} fontWeight={500}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>The Weather can be described as {" "}
            <b>{info.weather}</b> and feels like {info.feelsLike}&deg;C</p>
            </Typography>
          </CardContent>
      
        </Card>
      </div>
    </div>
  )
}