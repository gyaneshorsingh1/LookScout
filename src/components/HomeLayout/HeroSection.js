import "./herosection.css"

export default function(){
    return(
        <>
          <div className="hero-section">
            <div className="hero-main">
                <div className="left-hero">
                    <h2>
                        Your Supercharged <br /> Design Workflow.
                    </h2>
                    <p>
                        We’ve been told it is not possible to overachieve our customers’ <br /> expectations. We have not reinvented the wheel, we decided to build upon it.
                    </p>
                    <button className="notif-btn">Send Notification</button>
                    <div>
                        <p>Who supports us</p>
                        <div className="com-logos">
                            <img src="logo2.png" alt="logo"/>
                            <img src="logo3.png" alt="logo"/>
                            <img src="logo4.png" alt="logo"/>
                            <img src="logo5.png" alt="logo"/>
                        </div>
                    </div>
                </div>
                <div className="right-hero">
                    <img src="hero-img.png"  alt="hero img" className="hero-img"/>
                    <div className="bg-box"></div>
                </div>
            </div>
          </div>
        </>
    )
}