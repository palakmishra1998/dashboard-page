
function Storage() {
    return (
        <div className="storage-container dash-card">
            <div className="storage-widget">
                <div className="storage-header">Storage</div>
                <img src='../../storage_img.png' className="storage-img"/>
                {/* <div className="storage-amount">88 GB</div>
                <div className="storage-info">out of 100 GB (88%)</div> */}
            </div>
            <button className="details-button">View Details</button>
        </div>


    )
}

export default Storage;