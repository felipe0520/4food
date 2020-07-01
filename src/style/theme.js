import { createMuiTheme } from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";

export default createMuiTheme(
  {"palette":{"common":{"black":"#000","white":"#fff"},"background":{"paper":"#fff","default":"#fafafa"},"primary":{"light":"rgba(232, 34, 46, 0.69)","main":"rgba(232, 34, 46, 1)","dark":"rgba(150, 2, 11, 1)","contrastText":"#fff"},"secondary":{"light":"rgba(184, 184, 184, 0.74)","main":"rgba(184, 184, 184, 1)","dark":"rgba(65, 64, 64, 1)","contrastText":"#fff"},"error":{"light":"#e57373","main":"rgba(245, 138, 35, 1)","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}}}
);
