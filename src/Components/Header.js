const Header = () => {
    return ( 
        <>
        <div className="Header w-full flex">
        <div className="w-11/12 mx-auto max-w-[1080px] flex flex-row p-3">
            <div className="NameBox flex flex-col">
                <text className="Name text-3xl font-bold">Surya Kanta Ghosh</text>
                <text className="Post text-2xl">Front End Developer</text>
            </div>
            <div className="Tabs ml-auto w-1/3 flex">
                <button className="Resume text-xl ml-auto">Home</button>
                <button className="Profile text-xl ml-auto">Profile</button>
                <button className="Projects text-xl ml-auto">Projects</button>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Header;