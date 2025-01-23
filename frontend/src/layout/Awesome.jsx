import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Awesome = () => {
  const [sofa, setsofa] = useState([]);
  const [search, setsearch] = useState("");
  const [sort, setsort] = useState("");
  function handleSearch(e) {
    setsearch(e.target.value);
  }

  function getData() {
    fetch(`http://localhost:3000/sofas`)
      .then((res) => res.json())
      .then((data) => setsofa(data));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="awesome">
          <h2>Awesome</h2>
          <hr />
          <div className="search-input">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search..."
            />
            <select value={sort} onChange={setsort}>
              <option value="sort">Sort</option>
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
          </div>

          <div className="card">
            <div className="row">
              {sofa
                .filter((a) =>
                  a.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((x) => (
                  <div className="col-3" key={x._id}>
                    <img src={x.image} />
                    <h3>{x.name}</h3>
                    <p>${x.price}</p>
                    <Link to={`details/${x._id}`}>Details</Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awesome;
