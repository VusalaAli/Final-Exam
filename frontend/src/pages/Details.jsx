import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const Details = () => {
  const [sofas, setsofas] = useState([]);
  const id = useParams()
    function getData(){
          fetch(`http://localhost:3000/sofas/` +id)
          .then(res=> res.json())
          .then(data=> setsofas(data))
      }
      useEffect(() => {
     getData()
      }, [])
  return (
    <>
      <Helmet>
        <title>Details</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="container">
        <div className="card">
          <ul key={sofas._id}>
            <li><img src={sofas.image} /></li>
            <li>{sofas.name}</li>
            <li>${sofas.price}.00</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Details;
