import "./sendemail.css";
export default function SendEmail(){
    return(
        <>
          <section className="sendemail">
            <div className="sendemail-container">
                <h4>1% OF THE INDUSTRY</h4>
                <h2>Welcome to your new digital reality that will rock your world truly at all throughout.</h2>
                <div className="email-input">
                    <input type="text" placeholder="Enter your email" />
                    <button>Submit</button>
                </div>
                <div className="list-tags">
                    <li> <img src="Checkbox.png" alt="checkbox" /> Fully Secure</li>
                    <li><img src="Checkbox.png" alt="checkbox" />  24/7 Support</li>
                    <li><img src="Checkbox.png" alt="checkbox" />  Done Deal</li>
                </div>
            </div>
          </section>
        </>
    )
}