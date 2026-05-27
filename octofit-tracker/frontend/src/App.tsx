import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container py-5">
      <header className="mb-4">
        <h1 className="display-5">OctoFit Tracker</h1>
        <p className="lead">Modern React 19 + Vite front-end ready for the multi-tier tracker.</p>
      </header>

      <section className="card p-4">
        <h2>Welcome</h2>
        <p>Ports configured for frontend on <strong>5173</strong>.</p>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Clicked {count} times
        </button>
      </section>
    </div>
  );
}

export default App;
