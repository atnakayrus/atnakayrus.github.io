import { React } from "react";
const Header = (props) => {

    return (
        <div>

            <div className="w-full flex flex-row items-center">
                <div className='text-2xl font-bold p-3  mr-auto inline'>
                <p className='text-2xl font-bold'>Surya Kanta Ghosh</p>
                <p className='text-lg '>Front End Developer</p>
                    
                </div>
                <label class="switch">
                    <input type="checkbox" onClick={props.toggleTheme} defaultChecked={true}/>
                    <span class="slider"></span>
                </label>
            </div>

            <hr />
        </div>
    );
}

export default Header;