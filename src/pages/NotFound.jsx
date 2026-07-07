// ============================================================
// NotFound.jsx   (catch-all page — lives at "*")
//
// Matches any URL that didn't match one of the routes above it.
// (Different from QuoteDetail's "not found": there, the route
//  "/quotes/:id" DID match, the id just wasn't in the data. Here,
//  NO route matched at all.)
// ============================================================

// Part 5: plain <Link> to send the lost user back home.
//   Docs: https://reactrouter.com/start/declarative/navigating#link
import { Link } from 'react-router'

function NotFound() {
  return (
    <div className="app">
      <h1>Page not found</h1>
      <Link to="/">← Back to all quotes</Link>
    </div>
  )
}

export default NotFound
