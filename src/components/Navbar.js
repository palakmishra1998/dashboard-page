import { FaGift, FaBell } from 'react-icons/fa';
import { FiDownloadCloud } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Navbar() {
    return (
        <div className='topbar-cont dash-card'>
            <div className='project-section'>
                <div className="dropdown">
                    <span>Default Project</span>
                    <MdKeyboardArrowDown className="icon" />
                </div>
            </div>
            <div className='user-section'>
                <FaGift className="icon" />
                <FaBell className="icon" />
                <div className="profile">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24k96AfdjH75-xCvxKUExYFTrlHWwGwJXtg&s" alt="Profile" className="profile-img" />
                    <span>Daren Joe</span>
                    <MdKeyboardArrowDown className="icon" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;