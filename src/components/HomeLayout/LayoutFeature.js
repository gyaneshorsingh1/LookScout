import "./LayoutFeature.css";
import "./ProductFeatures.css";
import "./message.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function LayoutFeature() {
    return (
        <>
            <section className="section4">
                <div className="left-img-section4">
                    <img src="section3-img.png" />
                </div>
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
            </section>
        </>
    )
}