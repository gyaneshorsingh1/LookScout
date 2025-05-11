import "./Footer.css";
export default function Footer(){
    return(
        <>
          <section className="footer-section">
             <div className="footer-container">
                <div className="footer-sec1">
                    <div>
                        <img src="Lookscout.png" />
                    </div>
                    <p>Generate outside the box thinking with the possibility to targtet the low.</p>
                </div>
                <div className="footer-sec2">
                    <div>
                        <h2>Resources</h2>
                    </div>
                    <div className="footer-tabs">
                        <p>Community</p>
                        <p>Events</p>
                        <p>Help Center</p>
                        <p>Partners</p>
                    </div>
                </div>
                <div className="footer-sec2">
                    <div>
                        <h2>Products</h2>
                    </div>
                    <div className="footer-tabs">
                        <p>Integrations</p>
                        <p>Solutions</p>
                        <p>Features</p>
                        <p>Enterprise</p>
                    </div>
                </div>
                <div className="footer-sec3">
                    <div>
                        <h2>Get Email Notifications</h2>
                    </div>
                    <div className="footer-sec3-part2">
                        <p>Generate outside the box thinking with the possibility to targtet the low</p>
                        <div className="email-input2">
                            <input type="input" placeholder="Enter email...." />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
             </div>
          </section>
        </>
    )
}