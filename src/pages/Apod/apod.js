import { useState, useEffect } from "react";
import { Layout } from "./style.js";

const Apod = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_NASA_ENDPOINT}/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <div className="container">
        <img
          src={data.hdurl}
          alt={data.title}
          style={{ width: "100%", heigth: "200px" }}
        />
        <div className="content">
          <h2>{data.title}</h2>
          <p>By {data.copyright}</p>
          <p>{data.explanation}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Apod;
