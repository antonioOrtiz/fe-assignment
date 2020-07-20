import { useState, useEffect } from 'react';
import ApplianceCard from './AppilanceCard.jsx';

export default function AppliancePackage({ appliances }) {
  console.log('data in AppliancePackage', appliances.data);

  return (
    <>
      {' '}
      <div
        className="container
"
      >
        {' '}
        <h1>AppliancePackages</h1>{' '}
        <p>
          {' '}
          Looking for a great deal on home appliances? Packages are the best
          bet. Most appliance packages consist of a range, refrigerator,
          over-the-range microwave, and dishwasher. However, some upscale brands
          have packages that incorporate wall ovens, cooktops, and integrated
          refrigerators.{' '}
        </p>{' '}
        <div className="cards">
          {' '}
          {appliances.data.map(function (props) {
            return <ApplianceCard {...props} />;
          })}
        </div>{' '}
      </div>{' '}
    </>
  );
}
