import { MuiThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import { purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palete:{
    primary: {main: purple[500]},
    secondary: {main: "#333"}
  }
})

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider>
      <div className={classes.root}>
        <Navbar/>
        <About title='About me' id='about' />
        <Skills title='My coding journey' id='skills' />
        <MyWork title='My Work' id='work' />
        <Contact title='Get in touch' id='contact' dark={false}/>
      </div>
    </MuiThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    
  }
}));

export default App;
