import { Box, Button, Container, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      component={"header"}
      sx={{ position: "absolute", width: "100%", zIndex: 1 }}
    >
      <Container>
        <Box
          component={"nav"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            gap: 2,
            py: 2,
          }}
        >
          <Typography
            component={"a"}
            href="#"
            variant="body1"
            sx={{ textDecoration: "underline", color: "black" }}
          >
            Get Started Now
          </Typography>
          <Button
            sx={{
              backgroundColor: "#F4F8FD",
              color: "black",
              px: 1,
              py: 0.5,
              borderRadius: "25px",
              textTransform: "capitalize",
            }}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
