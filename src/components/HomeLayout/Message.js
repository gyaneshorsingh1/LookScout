import "./message.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

export default function MessageSection() {
  const boxData = [
    {
      img: "icon-1.png",
      title: "Easier Work Organization",
      text: "Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.",
    },
    {
      img: "icon-2.png",
      title: "Fast Connection",
      text: "Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals.",
    },
    {
      img: "icon-3.png",
      title: "Streamlined Processes",
      text: "Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.",
    },
    {
      img: "icon-4.png",
      title: "Easier Integrations",
      text: "Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.",
    },
    {
      img: "icon-5.png",
      title: "Marketing Analytics",
      text: "Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate.",
    },
    {
      img: "icon-6.png",
      title: "Workflow Builder",
      text: "Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas.",
    },
  ];

  return (
    <section className="message-section">
      <motion.div
        className="message-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Messaging for all</h2>
        <p>
          User generated content in real-time will have multiple touchpoints for
          offshoring.
        </p>
      </motion.div>

      <motion.div
        className="box-section"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {boxData.map((box, index) => (
          <motion.div
            className="msg-box"
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <img src={box.img} alt={box.title} />
            <h4>{box.title}</h4>
            <p>{box.text}</p>
            <p className="learn-more">
              Learn more <ArrowForwardIcon className="arrow-icon" />
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
