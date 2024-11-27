/* eslint-disable react/prop-types */
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Box, Button } from "@mui/material";

const MainButton = ({
  text,
  showIcon = true,
  padding,
  justifyContent,
  minWidth,
  type = "button",
}) => {
  return (
    <>
      <Button
        type={type}
        sx={{
          background: "linear-gradient(to right, #9E43FF, #723FFF)",
          color: "#fff",
          p: padding ? "0.75rem 0" : "0.25rem 0.25rem 0.25rem 2rem",
          borderRadius: "25px",
          minWidth: minWidth ? minWidth : 200,
          transition: "background 0.3s ease",
          justifyContent: justifyContent ? "center" : "space-between",
          "&:hover": {
            background: "linear-gradient(to right, #723FFF, #9E43FF)",
          },
        }}
      >
        {text}
        {showIcon && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 0,
              borderRadius: "25px",
              bgcolor: "#fff",
              "&:hover": {
                bgcolor: "#fff",
              },
            }}
          >
            <ChevronRightOutlinedIcon
              sx={{ fontSize: "2.25rem", color: "#9E43FF" }}
            />
          </Box>
        )}
      </Button>
    </>
  );
};

export default MainButton;
