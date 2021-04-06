import { createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core';
// import SideMenu from '../components/SideMenu';
import './App.css';
import Header from '../components/Header'
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline'
import Employees from '../Employees/Employees'


const theme = createMuiTheme({
  palette:{
    primary:{
    main:'#333996',
    light:'#3c44b126'
    },
    secondary:{
      main:'#f83245',
      light:'#f8324526'
    },
    background:{
      default:'#f4f5fd'
    }
  },
  
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  }
})

const useStyles = makeStyles({
  appMain:{
    width:'100%'
  }
})

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme} >
    {/* <SideMenu/> */}
    <div className={classes.appMain}>
      
      <Header />
      <Employees/>

     
    </div>
    <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
