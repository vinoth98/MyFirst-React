import React, { useState } from "react";
import CountryCard from "@/components/utility/CountryCard";
import { Input } from "@/components/ui/input";
import { FormControl } from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Country() {
  //const apiurl = "https://restcountries.com/v3.1/name/";
  // const [flag, SetFlag] = useState(false);
  //const [countryList, setCountryList] = useState([]);
  const [countries, setCountries] = useState([]);
  //const [name, setName] = useState("");

  const verifyCountry = (country) => {
    const countries = [
      "India",
      "Usa",
      "UAE",
      "Australia",
      "france",
      "new zealand",
      "italy",
    ];
    return countries.includes(country);
  };
  const handleChange = (e) => {
    const countries = e.target.value.split(",");
    const filterCountries = countries.filter((country) =>
      verifyCountry(country)
    );
    setCountries(filterCountries);
  };

  // const handleFind = () => {
  //   console.log("country", countryList);
  //   // SetFlag(true);
  //   fetch(`https://restcountries.com/v3.1/name/${name}`)
  //     .then((res) => res.json())
  //     .then((result) => SetCountryList(...result));
  // };
  return (
    <>
      <div
        className="container-fluid rounded-md"
        style={{
          width: "350px",
          overflow: "auto",
        }}
      >
        <div className="row  justify-content-center">
          <div className="mb-2">
            <CardHeader>
              <CardTitle>
                <h4 className="me-2 text-nowrap py-2"> Country </h4>
              </CardTitle>
              <CardDescription>
                <div className="d-flex">
                  <Input
                    placeholder="Enter the Country"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  />
                  {/* <input
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                /> */}
                  {/* <FormControl>
                  
                </FormControl> */}
                  {/* <input
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                /> */}
                  {/* <button
                  onClick={handleFind}
                  className="btn btn-sm btn-primary ms-2 px-5"
                >
                  Find
                </button> */}
                </div>
              </CardDescription>
            </CardHeader>
          </div>
        </div>

        <div className="row justify-content-center">
          {countries.map((country) =>
            country ? <CountryCard name={country}></CountryCard> : <></>
          )}
        </div>
      </div>
    </>
  );
}

export default Country;
