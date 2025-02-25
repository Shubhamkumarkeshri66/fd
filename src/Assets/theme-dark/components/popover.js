import pxToRem from "../functions/pxToRem";
import colors from "../base/colors";
import boxShadows from "../base/boxShadows";
import borders from "../base/borders";

const { transparent } = colors;
const { md } = boxShadows;
const { borderRadius } = borders;

const popover = {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: md,
      padding: pxToRem(8),
      borderRadius: borderRadius.md,
    },
  },
};

export default popover;
