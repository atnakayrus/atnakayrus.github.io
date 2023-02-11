import React from "react";
import Header from '../Components/Header'
import Content from '../Components/Content'
import Footer from '../Components/Footer'

const Home = (props) => {
    return ( 
        <div className="w-11/12 mx-auto max-w-[1080px]">
            <Header toggleTheme={props.toggleTheme}/>
            <Content />
            <Footer />
        </div>
     );
}
 
export default Home;