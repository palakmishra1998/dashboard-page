import { FiDownloadCloud } from 'react-icons/fi';
import { AiOutlineCloudDownload, AiOutlineCloudSync } from 'react-icons/ai';
import { MdOutlineLinkOff } from 'react-icons/md';

function Network() {
    return (
        <div className="network-container dash-card">
            <div className='status-data-container'>
                <div className="navbar-section">
                    <FiDownloadCloud className="icon" />
                    <span>Client Download</span>
                </div>
                <div className="navbar-section">
                    <AiOutlineCloudSync className="icon red" />
                </div>
                <div className="navbar-section">
                    <MdOutlineLinkOff className="icon" />
                </div>
            </div>
            <div className='speed-data-container'>
                <div className="navbar-section">
                    <AiOutlineCloudDownload className="icon" />
                    <span>70mbps</span>
                </div>
                <div className="navbar-section">
                    <AiOutlineCloudDownload className="icon" />
                    <span>110mbps</span>
                </div>
            </div>
        </div>
    )
}

export default Network;