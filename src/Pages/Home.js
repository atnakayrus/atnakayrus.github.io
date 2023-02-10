import React from "react";
import Header from '../Components/Header'

const Home = (props) => {
    return ( 
        <div className="w-11/12 mx-auto">
            <Header toggleTheme={props.toggleTheme}/>
        </div>
     );
}
 
export default Home;