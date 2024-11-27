/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Stack, Typography } from "@mui/material";
import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";

const companies = [company1, company2, company3, company4, company5];

const Companies = () => {
  return (
    <Box component={"section"} sx={{ py: 8 }}>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          "@media (max-width: 1035px)": {
            justifyContent: "center",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#abb2bf", fontWeight: "bold" }}
        >
          Companies we've helped build
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={2}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {companies.map((company) => (
            <img key={company} src={company} alt="company photo" />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Companies;
