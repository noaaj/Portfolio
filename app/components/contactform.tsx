export function ContactForm() {
    return (
        <form method="POST" action ="">
            <label>Your Name</label>
            <input type="text" name="name" placeholder="First Last" required/>
            <label>Your Email</label>
            <input type="email" name="email" placeholder="your@email.com" required/>
            <label>Message</label>
            <textarea name="message" placeholder="What do you wanna talk about?">
            </textarea>
            <button type="submit">Submit Your Message</button>
        </form>
    );
}