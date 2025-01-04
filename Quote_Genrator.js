import "./styles.css";
import { useState } from "react";

export default function App() {
  const [quote, setQuotes] = useState("Click below to generate Quotes!");
  const quotes = [
    "Believe in yourself!",
    "You are stronger than you think.",
    "Stay positive, work hard, make it happen.",
    "Difficult roads often lead to beautiful destinations.",
    "Every moment is a fresh beginning.",
  ];
  const generatenewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuotes(quotes[randomIndex]);
  };
  return (
    <div className="App">
      <h2>Quote Generator</h2>
      <p>{quote}</p>
      <button onClick={generatenewQuote}>Click</button>
    </div>
  );
}
