import { Box, Link, Typography } from "@mui/material"
import { useParams } from "react-router-dom"

const ParamsService = () => {

    const {id} = useParams()
    console.log(id);

  return (
    <Box  className="container-global" >
         <Typography variant="body2" sx={{ color: "#fff9" }} my={5}>
        <Link sx={{ color: "#fff9", textDecoration: "none" }} href="/">
          Luxury Cars for Rent in Dubai 
        </Link>
        <Link sx={{ color: "#fff9", textDecoration: "none" }} href="/">
         / Services
        </Link>
        Sports Car Rental Dubai Style Tour in Dubai
      </Typography>
      <Typography variant="h4" fontFamily={"Roboto"} color={"white"} mb={4}>SERVICES</Typography>
    </Box>
  )
}

export default ParamsService