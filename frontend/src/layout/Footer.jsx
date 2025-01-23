const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="angry-grid">
            <div id="item-0">
              <h3>Top Products</h3>
              <ul>
                <li>Managed Website</li>
                <li>Manage Reputation</li>
                <li>Power Tools</li>
                <li>Marketing Service</li>
              </ul>
            </div>
            <div id="item-1">
              <h3>Quick Links</h3>
              <ul>
                <li>Jobs</li>
                <li>Brand Assets</li>
                <li>Investor Relations</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div id="item-2">
              <h3>Features</h3>
              <ul>
                <li>Jobs</li>
                <li>Brand Assets</li>
                <li>Investor Relations</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div id="item-3">
              <h3>Resources</h3>
              <ul>
                <li>Guides</li>
                <li>Research</li>
                <li>Experts</li>
                <li>Agencies</li>
              </ul>
            </div>
            <div id="item-4">
              <h3>Newsletter</h3>
              <p>
                Heaven fruitful doesnt over lesser in days. Appear creeping
              </p>
              <div>
                <div className="subs-inp-btn">
                  <input
                    className="email-input"
                    type="text"
                    placeholder="Enter Email Address"
                  />
                  <button className="buy">SUBSCRIBE NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
