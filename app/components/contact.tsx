import { SocialMedia } from "./socialmedia";
import { ContactForm } from "./contactform";

export function Contact() {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <h3>Want to work together?</h3>
            <h3>Email me at <a href="mailto:hello@angelnoa.com">hello@angelnoa.com</a></h3>
            <SocialMedia/>
            <ContactForm/>
        </section>
    );
}