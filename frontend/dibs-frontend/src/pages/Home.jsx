import NavBar from "../components/NavBar.jsx";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <>
      <div className="h-1000">
        <NavBar />
        <div
          id="hero"
          className="flex h-screen flex justify-center items-center text-white-black"
        >
          <div className="text-center mb-20">
            <h1 className="text-9xl">
              Find it. <span className="bg-[#e6b53f]">Dibs</span> it.
            </h1>
            <p className="text-sm py-8 tracking-wider">
              A campus marketplace built for moving in, moving out, and
              everything in between.
            </p>
            
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                mt: 4,
                width: "100%",
                maxWidth: 600,
                mx: "auto",
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                placeholder="Email address"
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    borderRadius: "30px",
                    backgroundColor: "gray",
                    color: "black",
                    px: 2,
                    height: "56px",
                    "& input": {
                      padding: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "16px", // Optional for spacing
                      color: "black",
                    },
                  },
                }}
                InputLabelProps={{ shrink: false }}
              />
              <Button
                variant="contained"
                sx={{
                  borderRadius: "30px",
                  px: 4,
                  height: "56px",
                  width: "230px",
                  fontWeight: "semibold",
                  backgroundColor: "#e6b53f",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#e6b53f",
                  },
                }}
              >
                Register Now
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
