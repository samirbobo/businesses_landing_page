/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Typography } from "@mui/material";
import product from "../assets/product.png";
import MainButton from "../components/MainButton";

const Products = () => {
  return (
    <Box component={"section"} sx={{ py: 8 }}>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          flexDirection: { xs: "column-reverse", md: "row" },
          flexWrap: "wrap",
          rowGap: 5,
          columnGap: 2,
        }}
      >
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
            We help you
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
            Sell <br />
            Stunning <br />
            Products
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#abb2bf", m: "1.5rem 0 3rem 0" }}
          >
            We'll guide you through our unique 5-step <br />
            brand-building framework
          </Typography>

          <MainButton text={"More Details"} />
        </Box>

        <Box>
          <img
            src={product}
            alt="product image"
            style={{ width: "100%", maxWidth: "400px" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Products;
