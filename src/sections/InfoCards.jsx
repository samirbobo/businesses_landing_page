import { Box, Container } from "@mui/material";
import imgCard1 from "../assets/photo_card1.png";
import imgCard2 from "../assets/photo_card2.png";
import imgCard3 from "../assets/photo_card3.png";
import ImageCard from "../components/ImageCard"
const data = [
  {
    img: imgCard1,
    title: "fashion store",
    content:
      "Shop ladies fashion at Missguided USA. With hundreds of new styles hitting our shelves every week",
  },
  {
    img: imgCard2,
    title: "home furniture",
    content:
      "Provides superior quality furniture and mattresses at a price that customers can easily afford",
  },
  {
    img: imgCard3,
    title: "SUPER GADGET STORE",
    content:
      "Specialize in selling unique gifts, cool gadgets, outdoor gear and fab toys.",
  },
];

const InfoCards = () => {
  return (
    <Box component={"section"} sx={{ py: 8 }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap"
        }}
      >
        {data.map((item, index) => (
          <ImageCard key={index} {...item} />
        ))}
      </Container>
    </Box>
  );
};

export default InfoCards;
