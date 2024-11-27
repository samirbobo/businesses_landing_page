import { Box, InputBase } from "@mui/material";

// eslint-disable-next-line react/prop-types
const CustomInput = ({ mt, mb, alignItems, icon, text, props }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: alignItems,
        bgcolor: "#f5f5f5",
        borderRadius: "25px",
        px: 2,
        py: 1,
        mt: mt,
        mb: mb,
      }}
    >
      {/* Icon */}
      {icon}

      {/* Input */}
      <InputBase
        type="email"
        required
        placeholder={text}
        sx={{
          fontSize: "1rem",
          color: "#757575",
        }}
        {...props}
      />
    </Box>
  );
};

export default CustomInput;
