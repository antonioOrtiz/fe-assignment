import { useState, useEffect, useContext } from 'react';

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

  /* https://assets.ajmadison.com/[image->folder]/[image->filename].jpg  */
  return (
    <>
      <div className="card">
        <div className="tile">
          <img src={`https://assets.ajmadison.com/${folder}/${filename}.jpg`} />
        </div>
        <h3>{brand}</h3>
        <h4>{title}</h4>
        <p>{description}</p>
        <span>{`final price: $${final}`}</span> <br />
        <span className="savings">{`Save $${list_price - final} `} </span>
        <strike>{`$${list_price}`}</strike>
        <br />
        <button>VIEW PACKAGE</button>
      </div>
    </>
  );
}
