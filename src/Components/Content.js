import ts1 from '../styles/svgs/ts1.svg';
import ts2 from '../styles/svgs/ts2.svg';
import MyResume from './MyResume'
import MyAbout from './MyAbout'
import MyProjects from './MyProjects'
import MySkills from './MySkills'


const Content = () => {
    return ( 
        <>
        <img className='fadeIn transition' src={ts1} alt='oops! my bad'></img>
        <MyResume></MyResume>
        <img className='fadeIn transition' src={ts2} alt='oops! my bad'></img>
        <MyAbout></MyAbout>
        <img className='fadeIn transition' src={ts1} alt='oops! my bad'></img>
        <MySkills></MySkills>
        <img className='fadeIn transition' src={ts2} alt='oops! my bad'></img>
        <MyProjects></MyProjects>
        <img className='fadeIn transition' src={ts1} alt='oops! my bad'></img>
        </>
     );
}
 
export default Content;