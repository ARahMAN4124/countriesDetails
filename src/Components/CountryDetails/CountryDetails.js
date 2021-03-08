import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const CountryDetails = () => {
  const { CountryDetails } = useParams();
  const [countryDetail, setCountryDetails] = useState({});
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${CountryDetails}`)
      .then((response) => response.json())
      .then((data) => setCountryDetails(data[0]));
  }, [CountryDetails]);
  console.log(countryDetail);
  const { name, flag, capital, region, nativeName, population } = countryDetail;
  return (
    <div className="row container mx-auto mt-5 border rounded">
      <div className="col-md-6 img-fluid border-right">
        <img className="img-fluid" src={flag} alt="" />
      </div>
      <div className="col-md-6 pl-5 pt-3">
        <h3>Name : {name}</h3>
        <h6>Capital : {capital}</h6>
        <p>Region : {region}</p>
        <p>NativeName : {nativeName}</p>
        <p>Population : {population}</p>
        <Button className="btn btn-primary" as={Link} to="/">
          <FontAwesomeIcon icon={faUndo} /> Back
        </Button>
      </div>
    </div>
  );
};

export default CountryDetails;
