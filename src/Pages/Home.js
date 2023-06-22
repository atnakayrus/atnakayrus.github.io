import React from "react";
import Header from '../Components/Header'
import Content from '../Components/Content'
import Footer from '../Components/Footer'

const Home = (props) => {
    return ( 
        <div className="w-full mx-auto ">
            <Header />
            <Content />
            <Footer />
        </div>
     );
}
 
export default Home;