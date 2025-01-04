import "./styles.css";
import { useState } from "react";
const countryCityData = {
  India: ["Mumbai", "Delhi", "Bangalore", "Chennai"],
  US: ["New York", "Los Angeles", "Chicago", "San Francisco"],
  UK: ["London", "Manchester", "Birmingham", "Liverpool"],
};
export default function App() {
  const [selectedCountry, setselectedCountry] = useState("");
  const [cities, setcities] = useState([]);
  const handleCountryChange = (e) => {
    const country = e.target.value;
    setselectedCountry(country);
    setcities(countryCityData[country] || []);
  };
  return (
    <div className="App">
      <h2>Contries with their States</h2>
      <select onChange={handleCountryChange}>
        <option>Select a Country</option>
        {Object.keys(countryCityData).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      {selectedCountry && (
        <>
          <select>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}
