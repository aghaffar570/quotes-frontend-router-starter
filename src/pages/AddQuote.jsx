// ============================================================
// AddQuote.jsx   (lives at "/quotes/new")
//
// Note: this form does NOT save the new quote anywhere — there's
// no backend this week. The point of this page is the redirect:
// after a successful submit, your OWN CODE sends the user to a
// new page, instead of the user clicking a link themselves.
// That's the difference between useNavigate and <Link>.
// ============================================================

import { useState } from 'react'

// Part 4: useNavigate() hands us a function we can CALL to change pages
//   from inside our code — no link click required. Perfect for "after the
//   form submits, go somewhere".
//   Docs: https://reactrouter.com/start/declarative/navigating#usenavigate
import { useNavigate } from 'react-router'

function AddQuote() {
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')

  // Get the navigate function. Think of it as "go to this url", in code.
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    // Normally you'd save the quote here (that's next week, with a backend).
    // Today we just demonstrate the redirect: send the user back to "/".
    // Because there's no backend, the quote they typed will NOT appear in
    // the list on Home — that's expected, not a bug.
    navigate('/')
  }

  return (
    <div className="app">
      <section className="card">
        <h2>Add a Quote</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Quote text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button type="submit">Add Quote</button>
        </form>
      </section>
    </div>
  )
}

export default AddQuote
