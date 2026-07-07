// ============================================================
// QuoteDetail.jsx   (dynamic page — lives at "/quotes/:id")
//
// This page doesn't fetch anything — the quote data already
// exists in data/quotes.js. The job here is just: read the :id
// out of the URL, and find the matching quote.
// ============================================================

// Part 3: useParams() reads the placeholder values out of the url.
//   Because we named it ":id" in routes.jsx, we get it back as `id`.
//   Docs: https://reactrouter.com/start/declarative/url-values#useparams
import { useParams, Link } from 'react-router'
import quotes from '../data/quotes.js'

function QuoteDetail() {
  // Read the id out of the url. For /quotes/2, params.id is "2".
  const { id } = useParams()

  // GOTCHA: id from the url is a STRING ("2"), but each quote's id in
  // data/quotes.js is a NUMBER (2). "2" === 2 is false, so we convert the
  // url string to a number with Number(id) before comparing. (You could
  // instead convert the other way — the point is: compare same types.)
  const quote = quotes.find((q) => q.id === Number(id))

  // "Not found" case: if nobody matched (e.g. /quotes/999), `find` returns
  // undefined. We must handle that BEFORE trying to read quote.text — reading
  // .text off undefined would crash the page. Returning early is the cleanest
  // way: the rest of the component below only runs when a quote exists.
  if (!quote) {
    return (
      <div className="app">
        <h1>Quote not found</h1>
        <p className="empty">There's no quote with id {id}.</p>
        <Link to="/">← Back to all quotes</Link>
      </div>
    )
  }

  return (
    <div className="app">
      <section className="card">
        <p className="quote-text">{quote.text}</p>
        <p className="quote-author">— {quote.author}</p>
      </section>
      {/* A one-off link back home, so plain <Link> is right here (not NavLink). */}
      <Link to="/">← Back to all quotes</Link>
    </div>
  )
}

export default QuoteDetail
