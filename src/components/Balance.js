function Balance() {
    return (
        <div className="balance-container dash-card">
            <h3 className='head'>Balance</h3>
            <div className="widget">
                <div className="balance">$458</div>
                <div className="c-container">
                    <div className="coupon">Coupon<br />
                        <span style={{fontWeight:"bold"}}>$25</span>
                    </div>
                    <div className="vertical-bar"></div>
                    <div className="credits">Credits<br />
                        <span style={{fontWeight:"bold"}}>$0</span>
                        </div>
                </div>
                <div className="hours">Hours Remaining
                <span style={{fontWeight:"bold"}}>  20:59:09</span></div>
                <button className="recharge-button">Recharge Now</button>
            </div>
        </div>
    )
}

export default Balance;