import React from "react";
import { useState, useEffect } from "react";
import Countries from "../Countries/Countries";
import "./Main.css";

const Main = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/all`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);
  return (
    <div className="row">
      {country.map((country) => (
        <Countries country={country} key={country.alpha2Code}></Countries>
      ))}
    </div>
  );
};

export default Main;
