/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ImageCard({ img, title, content }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "10px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 6px 15px 0px",
      }}
    >
      <CardMedia
        component="img"
        alt={title}
        image={img}
        sx={{
          width: "95%",
          pt: "10px",
          margin: "0 auto",
          borderRadius: "15px",
          height: 230,
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          component="h5"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            fontSize: "1.2rem",
            m: "0.5rem 0 1rem 0",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#abb2bf",
            maxWidth: 290,
            margin: "0 auto",
            minHeight: 72,
          }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
