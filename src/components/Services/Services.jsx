import { Box, Link, Typography } from "@mui/material";
import CardService from "./card-service";

const Services = () => {
  return (
    <Box className="container-global" sx={{}}>
      <Typography variant="body2" sx={{ color: "#fff9" }} my={5}>
        <Link sx={{ color: "#fff9", textDecoration: "none" }} href="/">
          Luxury Cars for Rent in Dubai 
        </Link>
         / Services
      </Typography>

      <Typography variant="h4" fontFamily={"Roboto"} color={"white"} mb={4}>SERVICES</Typography>
      <CardService />
    </Box>
  );
};

export default Services;
