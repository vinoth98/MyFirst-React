import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CountryCard({ name }) {
  const [country, setCountryList] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((result) => setCountryList(...result));
  });

  return (
    <div className="col-md-3 me-2 mb-2">
      <div className="card-body">
        <div className="flex align-items-center border p-2">
          <img
            src={country?.flags?.png}
            alt={country?.flags?.alt}
            className="img-circle me-3 rounded-5"
            width="50"
            height="50"
          />
          <div className="">
            <CardTitle>
              <h6 className="mb-0">Capital : {country?.capital}</h6>
            </CardTitle>
            <CardDescription>
              <span>Continents : {country?.continents} </span>
            </CardDescription>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
