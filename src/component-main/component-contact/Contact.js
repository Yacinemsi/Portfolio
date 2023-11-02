import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xknlewyr");
  if (state.succeeded) {
    return <p>Merci pour votre message !</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="div-btn">
        <button type="submit" disabled={state.submitting}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
            ></path>
          </svg>
          <span>Envoyer</span>
        </button>
      </div>
    </form>
  );
};

const Contact = () => {
  return (
    <div id="contactez-moi">
      <div className="header-contact">
        <h2>Contact</h2>
        <h3>Discutons ensemble de vos idées et projets.</h3>
      </div>

      <div className="contact">
        <div className="contact_form">
          <ContactForm />
        </div>

        <div className="contact_info">
          <div className="contact-mail">
            <h3>Email</h3>
            <a href="mailto:contact@yacinemoussaoui.com">
              contact@yacinemoussaoui.com
            </a>
          </div>
          <div className="social">
            <h3>Social</h3>
            <div>
              <a
                href="https://www.linkedin.com/in/yacine-moussaoui/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="fa-linkedin" icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/Yacinemsi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="fa-github" icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="cv">
            <h3>Curriculum vitae</h3>
            <a
              href={`${process.env.PUBLIC_URL}/CV-Yacine-Moussaoui.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
