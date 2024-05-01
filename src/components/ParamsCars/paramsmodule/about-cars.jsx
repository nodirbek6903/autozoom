import { Box, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../params.module.css"

const style ={
    alignItems: "center",
    border: "1.4px solid #0000",
    borderRadius:" 15px",
    color: "#fff",
    display: "flex",
    fontSize: "35px",
    height: "60px",
    justifyContent: "center",
    width: "75px",
    backgroundColor:"#5aec5a"
}
console.log(style);
const AboutCars = () => {
  return (
    <Stack sx={{marginLeft:"100px"}}>
      <Box sx={{ display: "flex", padding: "10px", gap: "30px" }}>
        <Stack>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography
              sx={{
                display: "flex",
                alignItems: "start",
                color: "white",
                gap: "35px",
                width: "198px",
                justifyContent: "space-between",
              }}
              fontFamily={"Roboto"}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "26px",
                  lineHeight: "24px",
                }}
              >
                {"AED"}
                <br />
                {"2000"}
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "22px",
                  color: "#ffffff85",
                  lineHeight: "24px",
                }}
              >
                <span>/$</span>
                <span>2000</span>
              </span>
            </Typography>
          </Box>
          <p style={{ color: "#ffffff7e", margin: "8px 0", fontWeight: "700" }}>
            per day
          </p>
          <Typography
            sx={{
              color: "white",
              textDecoration: "line-through",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            <span>AED</span> <span style={{ color: "#ffffff7e" }}>/ $</span>
          </Typography>
        </Stack>
        <Stack sx={{ width: "330px" }} spacing={3}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography
              sx={{
                color: "#ffffff7e",
                fontFamily: "Roboto",
                fontSize: "13px",
              }}
            >
              Deposit
            </Typography>
            <Typography>
              <span
                style={{
                  color: "white",
                  fontFamily: "Roboto",
                  fontWeight: "700",
                }}
              >
                AED 1200
              </span>
              <p
                style={{
                  color: "#ffffff7e",
                  fontSize: "12px",
                  fontFamily: "Roboto",
                  fontWeight: "700",
                }}
              >
                AED 1200 for credit cards payment
              </p>
            </Typography>
          </Stack>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography
              sx={{
                color: "#ffffff7e",
                fontFamily: "Roboto",
                fontSize: "13px",
              }}
            >
              Premium protection
            </Typography>
            <Typography sx={{ transform: "translateX(-58px);" }}>
              <span
                style={{
                  color: "white",
                  fontFamily: "Roboto",
                  fontWeight: "700",
                }}
              >
                AED 300
              </span>
              <p
                style={{
                  color: "#ffffff7e",
                  fontSize: "12px",
                  fontFamily: "Roboto",
                  fontWeight: "700",
                }}
              >
                AED 300 price for 1 day
              </p>
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <hr />

      <Grid container spacing={3} my={2}>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/years-car.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>2021</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "25px", height: "33px" }}
              src="/img/about-cars/seconds-cars.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>10.2</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/speed.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>260</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/maxpeople-cars.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>5</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/color-cars.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>black</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/motor-cars.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>2.0 Turbo</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/automatik-cars.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>Automatic</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/whel-drive-cars.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>front-wheel drive</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/petrol-cars.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>petrol</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2.3}>
          <Stack alignItems={"center"} spacing={1}>
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/about-cars/budget-cars.svg"
              sizes="20px"
              alt="Color-cars"
            />
            <Typography sx={{ color: "white" }}>Budget Cars</Typography>
          </Stack>
        </Grid>
      </Grid>


      <hr />
      <Box>
        <Link style={style} to={""}>
                <img  src="/img/watsap.svg" alt="" />
        </Link>
      </Box>
    </Stack>
  );
};

export default AboutCars;
