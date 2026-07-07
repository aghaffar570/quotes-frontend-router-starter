// ============================================================
// Home.jsx  ("All Quotes" page — lives at "/")
//
// The starting point: show every quote, and link each one to
// its own page.
// ============================================================

// Part 1: <Link> is React Router's version of an <a> tag. It navigates
//   WITHOUT reloading the whole page — the browser stays put and React
//   just swaps in the new page. (A plain <a href> would do a full reload.)
//   Docs: https://reactrouter.com/start/declarative/navigating#link
import { Link } from 'react-router'

// Part 1: the quote data. No fetch this week — it's just a local array.
import quotes from '../data/quotes.js'

function Home() {
  return (
    <div className="app">
      <h1>Quotes</h1>

      <section className="card">
        <h2>All Quotes</h2>

        {/* Part 1: loop over the quotes array with .map() and render one
            item per quote. Every item in a mapped list needs a unique
            "key" so React can tell them apart — the quote's id is perfect. */}
        <ul className="quote-list">
          {quotes.map((quote) => (
            <li key={quote.id} className="quote-item">
              {/* Each quote links to its own detail page. We build the url
                  from the quote's id, e.g. quote 2 -> "/quotes/2". That
                  matches the "/quotes/:id" route we defined in routes.jsx. */}
              <Link to={`/quotes/${quote.id}`}>
                <span className="quote-text">{quote.text}</span>
              </Link>
              <span className="quote-author">— {quote.author}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Home
