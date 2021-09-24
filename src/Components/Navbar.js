
import {AppBar, Toolbar,makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

const useStyle = makeStyles({
    header:{
        background: '#111111'
    }, 

    tabs:{
        color:'#ffffff',
        textDecoration:'null',
        marginRight:20,
        fontSize:20
    },
});

const Navbar = () =>{
    const classes = useStyle();
    return(
        <>
            <AppBar className={classes.header} position="static">
                <Toolbar>
                    <NavLink className={classes.tabs} to="/" exact>Warehouse</NavLink>
                    <NavLink className={classes.tabs} to="all"  exact>Show All Data</NavLink>
                    <SearchBar />
                </Toolbar>
            </AppBar>
        </>  
    );

}

export default Navbar;