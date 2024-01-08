import React, { useState } from 'react';

const Component1 = () => {
 const [selectedCity, setSelectedCity] = useState('');
 const cities = ['Mumbai','Pune','Bengaluru','Hyedrabad','Noida'];

 const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
 };

 return (
    <div>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      {selectedCity && <Component2 city={selectedCity} />}
    </div>
 );
};

const Component2 = ({ city }) => {
 return <div style={{ color: 'red' }}>{city.split('').reverse().join('')}</div>;
};

export default Component1;