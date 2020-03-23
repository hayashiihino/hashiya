import { createMuiTheme } from "@material-ui/core/styles"

let black = "#231F22"
let white = "#FFFFFF"

export default createMuiTheme({
  palette: {
    common: {
      black,
      // orange: arcOrange
    },
    primary: {
      main: black,
    },
    secondary: {
      main: white,
    },
  },
})
