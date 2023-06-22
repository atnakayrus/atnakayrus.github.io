import ts1 from '../styles/svgs/ts1.svg';
import ts2 from '../styles/svgs/ts2.svg';


const Content = () => {
    return ( 
        <>
        <img className='fadeIn transition' src={ts1} alt='oops! my bad'></img>
        <div className='myResume section sBlue'>

        </div>
        <img className='fadeIn transition' src={ts2} alt='oops! my bad'></img>
        <div className='myAbout section sBlack'>

        </div>
        <img className='fadeIn transition' src={ts1} alt='oops! my bad'></img>
        <div className='myProjects section sBlue'>

        </div>
        </>
     );
}
 
export default Content;