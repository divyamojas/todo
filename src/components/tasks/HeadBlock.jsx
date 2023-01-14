import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";
import React from "react";
import DayHeader from "../common/DayHeader";

function HeadBlock({ theme }) {
  return (
    <React.Fragment>
      {" "}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
        pt={4}
        mb={2}
        ml={2}
      >
        <FontAwesomeIcon icon={faChevronCircleLeft} color="#A4A4B0" size="2x" />
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          color="#A4A4B0"
          size="2x"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
        // mb={2}
        px={2}
      >
        <DayHeader theme={theme} />
        <FontAwesomeIcon
          icon={faSliders}
          color={theme.palette.text.secondary}
        />
      </Box>
    </React.Fragment>
  );
}

export default HeadBlock;
