import { styled } from "@mui/material/styles";
import { Box, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  padding: "0.5rem",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  borderRadius: "0.5rem",
  backgroundColor: "#fff",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "80%",
    margin: "0 auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 1),
  backgroundColor: "#704BEC",
  color: "#fff",
  borderRadius: "0.25rem",
  position: "absolute",
  right: 10,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

const Hero = () => {
  return (
    <div className="cover-img">
      <Box
        sx={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "#fff",
          p: 2,
          borderRadius: 1,
          // width: "90vw",
          maxWidth: "580px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: "clamp(32px, 8vw, 4.5rem)",
            mb: 5,
          }}
        >
          We Help You <br /> Build & Grow an <br /> Online Business
        </Typography>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Tell us what you need to build..."
            inputProps={{ "aria-label": "Search" }}
            sx={{
              ".MuiInputBase-input": {
                paddingLeft: "1rem",
                width: "calc(100% - 65px)",
              },
            }}
          />
        </Search>
      </Box>
    </div>
  );
};

export default Hero;
