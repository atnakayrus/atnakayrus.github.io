import Profile from '../assets/mypic.jpeg'

const Content = () => {
    return ( 
        <>
        <div className="Content-body flex flex-col p-3">
            <div className="Preview-box ">
                <div className='layer1'>
                    <img src={Profile} alt="profile pic" className='propic'></img>
                </div>
                <div className='layer2'>
                    <div className='preview-text'>
                        <button className='download button-verse'>
                            <span className='span-verse'>My Resume</span>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
        </>
     );
}
 
export default Content;