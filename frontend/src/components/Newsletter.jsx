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
  <div className="bg-white text-center p-4 pb-8">
    <h3 className="font-semibold text-darkblue text-3xl">Want Updates?</h3>
    <p className="p-2 text-gray-400">Sign up for our Newsletter to get updates and special discounts!</p>
    <form
  onSubmit={handleSubmit}
  className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-4"
>
  <input
    type="email"
    className="flex-grow p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
  <button
    type="submit"
    className="px-6 py-3 text-blue font-bold bg-gray-100 hover:bg-gray-200 rounded focus:ring-2 focus:ring-gray-300 focus:outline-none cursor-pointer"
  >
    Subscribe
  </button>
</form>

  </div>
);

}

export default Newsletter