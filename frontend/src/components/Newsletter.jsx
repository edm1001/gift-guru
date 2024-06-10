import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();

  // TODO: set up form validation and backend for sending emails to user
  const response = await fetch('/api/newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  });

  if (response.ok) {
    alert('Thank you for subscribing!')
  } else {
    alert('Failed to subscribe. Please try again')
  }
}
  return (
    <div className="text-center p-4">
      <h3 className="font-semibold text-gold text-xl">Want Updates?</h3>
      <p className="p-2 text-white">Sign up for our Newsletter to get updates and special discounts!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
         className="w-full py-3 text-gold font-bold hover:opacity-50 focus:bg-gray-400 cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Newsletter