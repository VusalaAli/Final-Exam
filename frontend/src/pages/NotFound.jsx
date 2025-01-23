import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="container">
      <div className="not">
      <h1>404 Not Found</h1>
      <button><Link to={"/"}>Go Home</Link></button>
      </div>
      </div>
    </>
  )
}

export default NotFound
