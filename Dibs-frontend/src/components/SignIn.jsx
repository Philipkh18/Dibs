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
          "& .MuiTextField-root": { mt: 3.5, width: "50ch" },
        }}
        noValidate
      >
        <TextField
          label="Email Address"
          type="email"
          variant="filled"
          sx={{
            "& .MuiFilledInput-root": {
              borderRadius: 1,
              backgroundColor: "#2d2d2d",
              color: "#ffffff",
              fontWeight: "100",
            },
            "& .MuiInputLabel-root": {
              color: "white",
              backgroundColor: "transparent",
              fontSize: "14px",
            },
            "&.MuiInputLabel-focused": {
              color: "white",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "gray", // <-- focused label color
            },
            "& .Mui-focused": {
              backgroundColor: "rgba(0, 0, 0, 0.06)",
            },
          }}
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Box>

      <Box
        // Renders as a form instead of div
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          "& .MuiTextField-root": { mt: 2, width: "50ch" },
        }}
        noValidate
      >
        <TextField
          label="Password"
          type="password"
          variant="filled"
          sx={{
            "& .MuiFilledInput-root": {
              borderRadius: 1,
              backgroundColor: "#2d2d2d",
              color: "#ffffff",
              fontWeight: "100",
            },
            "& .MuiInputLabel-root": {
              color: "white",
              backgroundColor: "transparent",
              fontSize: "14px",
            },
            "&.MuiInputLabel-focused": {
              color: "white",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "gray", // <-- focused label color
            },
            "& .Mui-focused": {
              backgroundColor: "rgba(0, 0, 0, 0.06)",
            },
          }}
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "50ch",
            fontWeight: "semibold",
            backgroundColor: "#e6b53f",
            textTransform: "none",
            height: "30px",
            fontSize: "12px",
            "&:hover": {
              backgroundColor: "#e6b53f",
            },
          }}
        >
          Register Now
        </Button>
      </Box>
    </div>
  );
}
