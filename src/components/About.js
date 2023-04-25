import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
        Full Stack-Book List Application
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          Where you can login,signup, add ,<br/>
           update, delete,
           and view your <br/>full stack-book list
           booklists 
        </Typography>
      </Box>
    </div>
  );
};

export default About;
