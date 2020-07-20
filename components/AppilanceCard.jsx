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
