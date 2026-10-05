import "./Developer.css";

const apiFeatures = [
  {
    title: "Wallet API",
    description:
      "Create wallet experiences, retrieve balances, and manage wallet-related data using CoinStep APIs.",
  },
  {
    title: "Transaction API",
    description:
      "Send, receive, and track blockchain transactions through a simple API integration.",
  },
  {
    title: "Token & Asset API",
    description:
      "Access token information, balances, supported networks, and digital asset data.",
  },
  {
    title: "Web3 Connection API",
    description:
      "Connect applications with supported Web3 services through one developer-friendly integration.",
  },
];

const Developer = () => {
  return (
    <main className="developer-page">
      {/* HERO */}
      <section className="developer-hero container">
        <div className="developer-hero-content">
          <p className="developer-eyebrow">
            COINSTEP FOR DEVELOPERS
          </p>

          <h1>
            Build Web3 Applications
            <span> with CoinStep APIs.</span>
          </h1>

          <p className="developer-description">
            Integrate wallet functionality, blockchain transactions,
            digital assets, and Web3 connectivity into your web and
            mobile applications using CoinStep developer APIs.
          </p>

          <div className="developer-actions">
            <a
              href="#developer-api"
              className="developer-primary-btn"
            >
              Explore APIs
            </a>

            <a
              href="#developer-example"
              className="developer-secondary-btn"
            >
              View Example
            </a>
          </div>
        </div>

        <div className="developer-code-card">
          <div className="developer-code-top">
            <span />
            <span />
            <span />
          </div>

          <pre>
            <code>{`const response = await fetch(
  "https://api.CoinStep.in/v1/wallet/balance",
  {
    headers: {
      Authorization: "Bearer YOUR_API_KEY"
    }
  }
);

const data = await response.json();

console.log(data);`}</code>
          </pre>
        </div>
      </section>

      {/* API FEATURES */}
      <section
        className="developer-api-section container"
        id="developer-api"
      >
        <div className="developer-section-heading">
          <p>WEB3 DEVELOPER APIS</p>

          <h2>
            Everything You Need to
            <span> Build with Web3</span>
          </h2>

          <p>
            Use CoinStep APIs to integrate wallet services,
            blockchain transactions, digital assets, and Web3
            functionality into modern applications.
          </p>
        </div>

        <div className="developer-api-grid">
          {apiFeatures.map((feature) => (
            <article
              className="developer-api-card"
              key={feature.title}
            >
              <div className="developer-api-icon">
                {"</>"}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <button type="button">
                View API
                <span>→</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* SAMPLE */}
      <section
        className="developer-example-section container"
        id="developer-example"
      >
        <div className="developer-example-copy">
          <p className="developer-eyebrow">
            SIMPLE API INTEGRATION
          </p>

          <h2>
            Integrate CoinStep
            <span> Into Your Application.</span>
          </h2>

          <p>
            Connect your web or mobile application to CoinStep
            using simple developer-friendly APIs designed for
            modern Web3 products.
          </p>
        </div>

        <div className="developer-example-code">
          <div className="developer-code-top">
            <span />
            <span />
            <span />
          </div>

          <pre>
            <code>{`POST /v1/transactions

{
  "network": "ethereum",
  "to": "0x...",
  "amount": "0.25",
  "asset": "ETH"
}`}</code>
          </pre>
        </div>
      </section>
    </main>
  );
};

export default Developer;