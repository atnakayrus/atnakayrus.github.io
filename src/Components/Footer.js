import github from '../assets/github.png'
import fiverr from '../assets/fiverr.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
    return (
        <>
            <div className="Footer flex flex-row">
                <div className="footer-left flex flex-row w-full overflow-auto flex-wrap">
                    <div className='heading1 w-full flex'>
                        <text className="text-2xl font-bold">Atnakayrus</text>
                    </div>
                    <div className="leftbox w-1/2 flex flex-col">
                        <text className="text-lg font-bold">Reach out to me at:</text>
                        <text>suryaghosh1406@gmail.com</text>
                        <text>+91 9718172763</text>
                    </div>
                    <div className="w-1/2 rightbox flex flex-col">
                        <text>Follow me at</text>
                        <div className="Icons flex-row flex">
                            <img src={github} alt='github'></img>
                            <img src={fiverr} alt='github'></img>
                            <img src={linkedin} alt='github'></img>
                            <img src={instagram} alt='github'></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;