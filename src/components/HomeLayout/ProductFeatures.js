import "./ProductFeatures.css";
import "./message.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function ProductFeatures() {
    return (
        <>
            <section className="product-features-section">
                <div className="message-heading">
                    <h2>
                        Messaging for all
                    </h2>
                    <p>
                        Keeping your eye on the ball while performing a deep dive on the start-up mentality to  derive convergence <br /> on cross-platform integration.
                    </p>
                </div>

                <div className="feature-container">
                    <div className="feature-left">
                        <div className="feature-card">
                            <div>
                                <img src='feature-icon3.png' />
                            </div>
                            <div className="f-card-right">
                                <h4>
                                    Explore ideas together
                                </h4>
                                <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                                <p className="learn-more">Learn more <ArrowForwardIcon className="arrow-icon" />  </p>
                            </div>
                        </div>
                        <div className="feature-card">
                            <div>
                                <img src='feature-icon2.png' />
                            </div>
                            <div className="f-card-right">
                                <h4>
                                    Bring those ideas to life
                                </h4>
                                <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                                <p className="learn-more">Learn more <ArrowForwardIcon className="arrow-icon" />  </p>
                            </div>

                        </div>
                        <div className="feature-card">
                            <div>
                                <img src='feature-icon1.png' />
                            </div>
                            <div className="f-card-right">
                                <h4>
                                    Ship better outcomes
                                </h4>
                                <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                                <p className="learn-more">Learn more <ArrowForwardIcon className="arrow-icon" />  </p>
                            </div>

                        </div>
                    </div>
                    <div className="feature-right">
                        <img src="feature-img.png" />
                    </div>
                </div>
            </section>
        </>
    )
}