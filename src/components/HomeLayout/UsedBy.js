import "./usedBy.css";

export default function UsedBy(){
    return(
        <>
          <section className="usedby-section">
                <div className="usedby-container">
                    <div className="usedby-desc">
                        <h2>Proud to Be Used By</h2>
                        <p>Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                    </div>
                    <div className="companies">
                        <img src="comp1.png" alt="the verge logo" />
                        <img src="comp2.png" alt="slack logo" />
                        <img src="comp3.png" alt=" google logo" />
                        <img src="comp4.png" alt="PayPal logo" />
                        <img className="second-row" src="comp5.png" alt="Pinterest logo" />
                        <img className="second-row" src="comp6.png" alt="mailchimp logo" />
                    </div>
                </div>
          </section>
        </>
    )
}