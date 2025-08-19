export default function InterestFormSection() {
    return (
      <section id = "interest-form-section" className="a-section">
        <h2 id = "interest-form" className="a-h2">Interest Form</h2>
        <form action = "https://formspree.io/f/mvoydgby" method = "post">
          <label htmlFor="name">Name</label><input id="name" autoComplete="on" className="user-info" name = "name" type = "text" required minLength = "2" maxLength = "75" />
          <label htmlFor="email">Email</label><input id="email" autoComplete="on" className="user-info" name = "email" type = "email" required minLength = "3" maxLength = "100" />
          <label htmlFor="phone">Phone Number</label><input id="phone" autoComplete="on" className="user-info" name = "phone" type = "number" required minLength = "8" maxLength = "15" />
          <label htmlFor="level">Level</label>
          <select name="selector" id="level" className="user-info pointer-element" required>
            <option value="">Select an option</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <label htmlFor="referral">How did you hear about Coach Gnitou?</label>
          <select name="selector" id="referral" className="user-info pointer-element" required>
            <option value="">Select an option</option>
            <option value="social-media">Social Media</option>
            <option value="website">Website</option>
            <option value="friend">Friend</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="additional-user-info">Additional Comments, Questions, and/or Concerns</label>
          <textarea id="additional-user-info" className="user-info"></textarea>
          <input className="submit pointer-element" type="submit" />
        </form>
      </section>
    )
  }