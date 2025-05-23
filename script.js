const quotes = [
    "Believe in yourself!",
    "You are stronger than you think.",
    "Dream big and dare to fail.",
    "Success is not final, failure is not fatal.",
    "Push yourself, no one else will.",
    "Make today your masterpiece.",
    "Stay positive, work hard, make it happen.",
    "Every day is a fresh start.",
    "Don’t stop until you’re proud.",
    "Great things never come from comfort zones."
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[randomIndex];
  }
  
  // Generate a quote on page load
  generateQuote();
  