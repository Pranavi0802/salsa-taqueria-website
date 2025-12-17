import { useState } from "react";

function Reviews() {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (rating === 0) {
      alert("Please select a star rating ⭐");
      return;
    }

    alert("Thank you for your review!");
    setRating(0);
    setName("");
    setMessage("");
  };

  return (
    <section id="reviews" className="section">
      <h2>Customer Reviews</h2>

      <form className="review-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          placeholder="Your Review"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={rating >= star ? "star active" : "star"}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <button type="submit">Submit Review</button>
      </form>
    </section>
  );
}

export default Reviews;
