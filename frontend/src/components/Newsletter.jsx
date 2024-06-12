import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();

  // TODO: set up sending emails to user
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
    <div className=" bg-blue text-center p-4">
      <h3 className="font-semibold text-lightblue text-3xl">Want Updates?</h3>
      <p className="p-2 text-gray-300">Sign up for our Newsletter to get updates and special discounts!</p>
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <input
          type="email"
          className="flex-grow-[2] p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
          placeholder="Enter your email for updates and discounts"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
         className="flex-grow px-6 py-3 text-lightblue font-bold hover:opacity-50 focus:bg-gray-300 focus:text-blue cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Newsletter