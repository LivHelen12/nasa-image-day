import { useState, useEffect } from "react";
import { nasaEndpoint, nasaApiKey } from "../../config/config.js";
import { Layout } from "./style.js";

const Apod = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://${nasaEndpoint}/planetary/apod?api_key=${nasaApiKey}`)
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
      <div className="card">
        <img src={data.hdurl} alt={data.title} />
        <div className="container">
          <h2>{data.title}</h2>
          <p>{data.copyright}</p>
          <p>{data.explanation}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Apod;
