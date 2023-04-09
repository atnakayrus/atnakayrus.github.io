import github from '../assets/github.png'
import fiverr from '../assets/fiverr.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import FooterIcon from '../widgets/footerImageIcon'

const Footer = () => {
    return (
        <>
            <div className="Footer flex flex-row">
                <div className="footer-left flex flex-row w-full overflow-auto flex-wrap">
                    <div className="leftbox w-1/2 flex flex-col ">
                    <text className="text-2xl font-bold m-auto">Atnakayrus</text>
                        <text className="text-lg font-bold m-auto">Reach out to me at:</text>
                        <text className='m-auto'>suryaghosh1406@gmail.com</text>
                        <text className='m-auto'>+91 9718172763</text>
                    </div>
                    <div className="w-1/2 rightbox flex flex-col">
                        <text className='flex m-auto'>Follow me at</text>
                        <div className="Icons flex-row flex m-auto">
                            <FooterIcon src={github} alt='github' href='#'></FooterIcon>
                            <FooterIcon src={linkedin} alt='linkedin' href='#'></FooterIcon>
                            <FooterIcon src={fiverr} alt='fiverr' href='#'></FooterIcon>
                            <FooterIcon src={instagram} alt='instagram' href='#'></FooterIcon>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;