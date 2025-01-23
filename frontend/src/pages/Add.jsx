import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const Add = () => {
  const [sofa, setsofa] = useState([]);
  function getData() {
    fetch(`http://localhost:3000/sofas`)
      .then((res) => res.json())
      .then((data) => setsofa(data));
  }
  useEffect(() => {
    getData();
  }, []);

// function handleDelete(id){
//     fetch('http://localhost:3000/sofas/' +id , { method: 'DELETE' })
//         .then(getData())
// }
  function createElement(obj) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    };
    fetch("http://localhost:3000/sofas", requestOptions).then((response) =>
      response.json()
    );
  }
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Add</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <Formik
        initialValues={{ image: "", name: "", price: "" }}
        validationSchema={Yup.object({
          image: Yup.string().required("Required"),
          name: Yup.string().required("Required"),
          price: Yup.number().required("Required"),
        })}
        onSubmit={(values) => {
          createElement(values);
          navigate("/admin/add");
        }}
      >
        <Form>
          <label htmlFor="image">Image:</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="name">Name:</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="price">Price:</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" />

          <button className="btn btn-success" type="submit">
            Add
          </button>
        </Form>
      </Formik>

      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Price</th>
            {/* <th>Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {sofa.map((x) => (
            <tr key={x._id}>
              <td>
                <img src={x.image} />
              </td>
              <td>{x.name}</td>
              <td>${x.price}.00</td>
              <td>
                {/* <button onClick={handleDelete()}>Delete</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Add;
