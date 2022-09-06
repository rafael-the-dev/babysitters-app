import classes from "./styles.module.css";

import Header from "../header";

const LayoutContainer = ({ children }) => {
    
    return (
        <div className={classes.root}>
            <Header />
            { children }
        </div>
    );
};


export default LayoutContainer;