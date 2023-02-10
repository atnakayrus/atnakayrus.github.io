import {React} from "react";
const Header = (props) => {
    
    return ( 
        <div>
            <p className={' text-2xl font-bold p-5 '}>Surya Kanta Ghosh</p>
            <span>
                <button type="button" onClick={()=>{props.toggleTheme()}}>click here</button>
            </span>
            <hr />
        </div>
     );
}
 
export default Header;