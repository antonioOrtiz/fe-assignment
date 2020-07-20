## App Design

Essentially I used [Next.js](https://nextjs.org/) (the only offical frameweok) and CSS Grid (check its support for your browser [here.](https://caniuse.com/#feat=css-grid])

At a high level I am making a axios request to the AJMadison API `https://demo3211013.mockable.io/ajmad`

in my root component and then passing down the data to the Main component called `Appliance Package` via props.

```
// components/AppliancePackage

import ApplianceCard from './AppilanceCard.jsx';

export default function AppliancePackage({ appliances }) {

  return (
    <>
      <div className="container">

        <h1>AppliancePackages</h1>
        <p>
          Looking for a great deal on home appliances? Packages are the best
          bet. Most appliance packages consist of a range, refrigerator,
          over-the-range microwave, and dishwasher. However, some upscale brands
          have packages that incorporate wall ovens, cooktops, and integrated
          refrigerators.
        </p>

        <div className="cards">
          {appliances.data.map(function (props) {
            return <ApplianceCard {...props} />;
          })}
        </div>
      </div>
    </>
  );
}

// pages/index.js


import AppliancePackage from '../components/AppliancePackage.jsx';
import axios from 'axios';

function HomePage(data) {
  return (
    <>
      <AppliancePackage appliances={data} />
    </>
  );
}

export default HomePage;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.

export async function getStaticProps() {

  var res = await axios.get('https://demo3211013.mockable.io/ajmad');
  var res = JSON.parse(JSON.stringify(res.data));

  return {
    props: {
      data: res,
    },
  };
}


```

Finally this is the Card Component which will be the template for each Appliance;

First I'm destructuring the properties from the API and setting them as component state and then destructuring those API properties for their nested data.

```
import { useState } from 'react';

export default function ApplianceCard({
  brand,
  title,
  description,
  prices,
  rebates,
  is_quick_ship,
  tag,
  url,
  image,
}) {
  var [prices, setPrices] = useState(prices);
  var [rebates, setRebates] = useState(rebates);
  var [isQuickShip, setQuickShip] = useState(is_quick_ship);
  var [image, setImage] = useState(image);
  var [items, setItems] = useState(setItems);

  var { list_price, final } = prices;
  var { instant_amount, mailin_amount } = rebates;
  var { filename, folder, extension, original_filename } = image;

  return (
    <>
      <div className="card">
        <div className="grid-helper">
          <div className="tile">
            <img
              className="product__image"
              src={`https://assets.ajmadison.com/${folder}/${filename}.jpg`}
            />
          </div>
          <div>
            <h3 className="product__title">{brand}</h3>
            <div>
              <p className="product__description">{description}</p>
              <img
                className="quickShip"
                src="/images/quickship-pdp.png"
                alt="QuickShip"
              />
            </div>
            <span className="product__final-price">{` $${final}`}</span> <br />
            <span className="product__discount">
              {`Save $${(Math.round((list_price - final) * 100) / 100).toFixed(
                2
              )} `}{' '}
            </span>
            <strike className="product_list-price">{`$${list_price}`}</strike>
            <br />
            <button className="product__viewpackage-button">
              VIEW PACKAGE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
```

Aside from the baked in optimizations which Next.js provides on build (code splitting, SEO) I'd see what optimizations could be gained with the platform I hosted the page on; [Netifly plugins](https://app.netlify.com/teams/antonioortiz/plugins) i.e. Lighthouse auditing, Image Optim, Inline source.

## Start the application

Run `npm install && npm run dev`

# AJ Madison Front-end Engineer Coding Test

Be sure to read **all** of this document carefully, and follow the guidelines within.

## Context

Use HTML, CSS, and JavaScript to implement the following mock-up. The sort and filtering on mobile is bonus

> [Source Figma file](https://www.figma.com/file/jjs1gqgBQJhMZP1xSA4O8w/Coding-Test?node-id=0%3A1)

You will need to leverage our API for 'appliance packages' to fill in the details and functionality as described below. Complete as much of this assignment as you can within a three and a half hour time period.
**The look and feel is more important than the functionality, so if you feel that the sorting and filtering logic will take too long, just start with static data, it doesn't have to work**

Use the Figma file to see button states, colors, and responsive design. You should be sure to complete the test to mimic the design as seen.

## Requirements

### Appliance Packages API

We'll email the API endpoint to you

### Page Structure

```
Main
  - Filter navigation
    - Select Appliances ( dropdown with checkbox ) - should filter packages where the any of the items -> ~product_type equals selected category
      - Values: Cooktop, Dishwasher, Microwave, Range, Range Hood, Refrigerator, Wall Oven
    - Sort By ( dropdown ) - should contain two options , highest price and lowest price
    - Delivery Method ( toggle ) - show filter by items where 'is_quick_ship` is true
  - Section
    - Appliance Package
      - Image (final URL will be "https://assets.ajmadison.com/[image->folder]/[image->filename].jpg)
      - Description ( [brand] [series] [description] ) (you might want to concatentate after three lines)
      - Quick Ship ( is_quick_ship (icon in repo) )
      - Price ( [prices->final] )
      - List Price  ( [prices->list_price] )
      - Discount ( [prices->list_price] - [prices->final] )
      - View Package Button ( "https://ajmadison.com[url] )
```

### Tech stack

- JS oriented
  - Use **React**.
  - Feel free to use NextJS or CRA
- Feel free to use a preprocessor like SASS/SCSS/Less but _do not_ use any CSS frameworks or libraries. Bonus points for PostCSS / CSS Modules / CSS in JS

### Bonus

- Sort and filtering on mobile included in Figma comp.
- Implement the Show More feature.
- Write clear **documentation** on how the app was designed and how to run the code.
- Provide proper unit tests.
- Provide components in [Storybook](https://storybook.js.org) with tests.
- Provide an online demo of the application.
- Include subtle animations to focus attention
- Describe optimization opportunities when you conclude

## What We Care About

Look and feel + code method/style. Use any libraries that you would normally use if this were a real production App. We're interested in your code & the way you solve the problem, not how well you can use a particular library or feature.

_We're interested in your method and how you approach the problem just as much as we're interested in the end result._

Here's what you should strive for:

- Good use of current HTML, CSS, and JavaScript & performance best practices.
- Extensible code.

## Q&A

> Where should I send back the result when I'm done?

Fork this repo and send us a pull request when you think you are done. There is no deadline for this task unless otherwise noted to you directly.

> What if I have a question?

Just email nate@ajmadison.com
