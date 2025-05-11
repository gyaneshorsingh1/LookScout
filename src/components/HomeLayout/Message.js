import "./message.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function(){
    return(
        <>
          <section className="message-section">
            <div className="message-heading">
               <h2>
                   Messaging for all
               </h2>
               <p>
                User generated content in real-time will have multiple touchpoints for offshoring.
               </p>
            </div>

            <div className="box-section">
                <div className="msg-box">
                    <img src="icon-1.png" />
                    <h4>Easier Work Organization</h4>
                    <p>Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas. </p>
                    <p className="learn-more">Learn more <ArrowForwardIcon className="arrow-icon" />  </p>
                </div>
                <div className="msg-box">
                    <img src="icon-2.png" />
                    <h4>Fast Connection</h4>
                    <p>Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals. </p>
                    <p className="learn-more">Learn more <ArrowForwardIcon className="arrow-icon" />  </p>
                </div>
                <div className="msg-box">
                    <img src="icon-3.png" />
                    <h4>Streamlined Processes</h4>
                    <p>Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.</p>
                    <p className="learn-more">Learn more <ArrowForwardIcon className="arrow-icon" />  </p>
                </div>
                <div className="msg-box">
                    <img src="icon-4.png" />
                    <h4>Easier Integrations</h4>
                    <p>Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.</p>
                    <p className="learn-more">Learn more <ArrowForwardIcon className="arrow-icon" />  </p>
                </div>
                <div className="msg-box">
                    <img src="icon-5.png" />
                    <h4>Marketing Analytics</h4>
                    <p>Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate.</p>
                    <p className="learn-more">Learn more <ArrowForwardIcon className="arrow-icon" />  </p>
                </div>
                <div className="msg-box">
                    <img src="icon-6.png" />
                    <h4>Workflow Builder</h4>
                    <p>Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas.</p>
                    <p className="learn-more">Learn more <ArrowForwardIcon className="arrow-icon" />  </p>

                </div>
            </div>
          </section>
        </>
    )
}