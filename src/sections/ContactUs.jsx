import { Alert, Box, Snackbar, Typography } from "@mui/material";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import MainButton from "../components/MainButton";
import contactImg from "../assets/contact_photo.png";
import CustomInput from "../components/CustomInput";
import { useState } from "react";

const ContactUs = () => {
  const [open, setOpen] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = formData.email;

    // Regular Expression for validation
    const emailPattern = /^[a-zA-Z0-9]+[0-9]*@gmail\.com$/;

    if (!emailPattern.test(emailValue)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
    setOpen(true);

    // Reset form inputs
    setFormData({
      email: "",
      message: "",
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box component={"section"} sx={{ py: 8, position: "relative" }}>
      <Box
        sx={{
          width: "90vw",
          maxWidth: 450,
          transition: "0.3s linear",
          m: "0 auto 0 4rem",
          "@media (max-width: 992px)": {
            m: "0 auto",
          },
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 6px 15px 0px",
          borderRadius: "10px",
          bgcolor: "#fff",
        }}
      >
        <Box
          sx={{
            transition: "0.3s linear",
            p: { xs: "16px", md: "32px" },
          }}
        >
          <Typography variant="h4" textAlign="center" fontWeight={"bold"}>
            Write Us
          </Typography>
          <Box component={"form"} onSubmit={handleSubmit} textAlign={"center"}>
            <CustomInput
              mt={4}
              alignItems="center"
              icon={
                <EmailTwoToneIcon
                  sx={{ color: "#757575", fontSize: "1.2rem", mr: 1 }}
                />
              }
              text="moorad.bli@gmail.com"
              props={{
                name: "email", // Add name for reference in form
                value: formData.email, // Controlled value
                onChange: handleChange, // Change handler
                fullWidth: true,
                type: "email",
              }}
            />
            {emailError && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                Please enter a valid email (e.g., moorad.bli@gmail.com).
              </Typography>
            )}
            <CustomInput
              mt={3}
              mb={6}
              alignItems="start"
              icon={
                <MessageRoundedIcon
                  sx={{ color: "#757575", fontSize: "1.2rem", mr: 1, mt: 0.8 }}
                />
              }
              text="Enter your message"
              props={{
                name: "message", // Add name for reference in form
                value: formData.message, // Controlled value
                onChange: handleChange, // Change handler
                rows: 4,
                multiline: true,
                margin: "dense",
                fullWidth: true,
              }}
            />

            <MainButton
              text="Send your message"
              showIcon={false}
              padding={true}
              justifyContent={true}
              minWidth={220}
              type="submit"
            />

            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: "100%" }}
              >
                Your message has been sent successfully
              </Alert>
            </Snackbar>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: 0,
          width: 400,
          top: "50%",
          transform: "translateY(-50%)",
          "@media (max-width: 992px)": {
            display: "none",
          },
        }}
      >
        <img src={contactImg} alt="contactImg" width="100%" />
      </Box>
    </Box>
  );
};

export default ContactUs;
