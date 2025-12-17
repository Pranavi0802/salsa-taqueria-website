function ContactPage() {
  return (
    <section className="section">
      <h2>Contact</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default ContactPage
