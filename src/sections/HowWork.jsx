import { Box, Container, Typography } from "@mui/material";
import howWeDoImg from "../assets/how_we_do.png";
import MainButton from "../components/MainButton";

const HowWork = () => {
  return (
    <Box component={"section"} sx={{ py: 8 }}>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          flexWrap: "wrap",
          rowGap: 5,
          columnGap: 2,
        }}
      >
        <Box>
          <img
            src={howWeDoImg}
            alt="product image"
            style={{ width: "100%", maxWidth: "400px" }}
          />
        </Box>

        <Box>
          <Typography
            component={"h3"}
            variant="body1"
            sx={{
              color: "#F2C76A",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            What we do
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              transition: "0.3s linear",
              "@media(max-width: 450px)": {
                fontSize: "2rem",
              },
            }}
          >
            Increase our <br />
            Customers <br />
            Sales
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#abb2bf", m: "1.5rem 0 3rem 0" }}
          >
            Our customers are seeing big results within <br />
            the first three months
          </Typography>

          <MainButton text="More Details" />
        </Box>
      </Container>
    </Box>
  );
};

export default HowWork;
