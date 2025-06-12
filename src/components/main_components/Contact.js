import { MdMailOutline } from 'react-icons/md';
import { MdOutlineLocalPhone } from "react-icons/md";
import './Contact.css'
import './global.css'

const Contact = () => {
  return (
    <section id="contact">
        <h3>Feel free to contact me via e-mail or phone:</h3>
        <p>
          <MdMailOutline size={"28px"} />
          <strong>ilmar.vodi@voco.ee</strong>
        </p>
        <p>
          <MdOutlineLocalPhone size={"28px"} />
          <strong>+372 5381 0246</strong>
        </p>
    </section>
  );
};

export default Contact;