import NavBar from "../components/NavBar.jsx";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <NavBar />
        <div
          id="home"
          className="flex h-screen flex justify-center items-center text-black"
        >
          <div className="text-center mb-20">
            <h1 className="text-9xl text-white">
              Find it. <span className="bg-[#e6b53f] text-black">Dibs</span> it.
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
                }}
                InputLabelProps={{ shrink: false }}
                sx={{
                  borderRadius: "30px",
                  px: 2,
                  height: "56px",

                  // Targets the input textfield
                  "& .MuiFilledInput-root": {
                    borderRadius: "30px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // default (not focused)
                    height: "100%",
                    color: "white",
                    padding: 0,

                    // On hover
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                    },

                    // On focus
                    "&.Mui-focused": {
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      color: "black", // Optional: switch text color
                    },
                  },
                  "& input": {
                    paddingLeft: "25px",
                    height: "100%",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "0px",
                    paddingBottom: "0px"
                  },
                }}
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

        <div
          id="About"
          className="flex flex-col h-screen flex justify-center items-center text-black bg-white text-black"
        ></div>

        <div id="Developers"></div>

        <div id="Why"></div>

        <div id="FAQ"></div>
      </div>
    </>
  );
}
