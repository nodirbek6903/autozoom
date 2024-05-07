import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./services.css";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
export default function CardService() {
  return (
    <Stack direction="row" spacing={3}>
      <Card sx={{ maxWidth: 345, backgroundColor: "transparent" }}>
        <CardMedia
          sx={{ height: 240 }}
          image="/img/services/services1.jpg"
          title="services img :)"
        />
        <CardContent
          className="css-1r598fe-MuiCardContent-root_p"
          sx={{ backgroundColor: "transparent" }}
        >
          <Typography gutterBottom variant="h5" component="div" color={"white"}>
            Photoshoot with luxury car rental Dubai
          </Typography>
          <Typography variant="h6" color="white">
            Experience the thrill of a dune buggy tour in Dubai with us. We
            offer hotel pick-up & drop-off service. Book now!
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/services/sport_car_rent`} size="small" className="ser_card_link">
            LEARN MORE <img src="/img/services/arrow.svg" alt="" />
          </Link>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, backgroundColor: "transparent" }}>
        <CardMedia
          sx={{ height: 240 }}
          image="/img/services/services1.jpg"
          title="services img :)"
        />
        <CardContent
          className="css-1r598fe-MuiCardContent-root_p"
          sx={{ backgroundColor: "transparent" }}
        >
          <Typography gutterBottom variant="h5" component="div" color={"white"}>
            Sports Car Rental Dubai Style Tour in Dubai
          </Typography>
          <Typography variant="h6" color="white">
            Professional car photoshoot as an additional type of service at Auto
            Zoom Car Rental{" "}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href="/" size="small" className="ser_card_link">
            LEARN MORE <img src="/img/services/arrow.svg" alt="" />
          </Link>
        </CardActions>
      </Card>
    </Stack>
  );
}
