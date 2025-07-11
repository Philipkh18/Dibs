import { Box, TextField, Button } from "@mui/material";

// Sign in form
export default function SignIn() {
  return (
    <div className="flex flex-col bg-[#232323] px-13 py-10 items-start rounded-sm shadow-lg w-full max-w-100 mx-auto text-white tracking-wider mb-40 z-20">
      <h1 className="text-3xl font-bold">Sign In</h1>
      <Box
        // Renders as a form instead of div
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          "& .MuiTextField-root": { mt: 3, width: "700px" },
        }}
        noValidate
      >
        <TextField
          label="Email Address"
          type="text"
          variant="outlined"
          sx={{
            color: "white",
            borderRadius: 1,
            fontWeight: "100",
            fontSize: "14px",

            // Outer wrapper
            "& .MuiOutlinedInput-root": {
              borderRadius: 1,
              backgroundColor: "#232323",
              color: "white",
              fontWeight: "100",
              "& fieldset": {
                borderColor: "white",
                borderWidth: ".5px",
                opacity: "50%",
              },
              "&:hover fieldset": {
                fontWeight: "100",
                borderColor: "white",
                opacity: "50%",
              },
              "&.Mui-focused fieldset": {
                fontWeight: "100",
                borderColor: "white",
                borderWidth: "1px",
                opacity: "100%",
              },
            },

            // Label color
            "& .MuiInputLabel-root": {
              color: "white",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white",
            },
          }}
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Box>
    </div>
  );
}
