const Header = (props) => {
    return ( 
        <>
        <div className="Header flex flex-row p-3">
            <div className="NameBox flex flex-col">
                <text className="Name text-xl font-bold">Surya Kanta Ghosh</text>
                <text className="Post ">Front End Developer</text>
            </div>
            <div className="Tabs ml-auto w-1/3 flex">
                <button className="Resume ml-auto">My Resume</button>
                <button className="Profile ml-auto">Profile</button>
                <button className="Projects ml-auto">Projects</button>
            </div>
        </div>
        </>
     );
}
 
export default Header;