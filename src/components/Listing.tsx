import React from 'react';
import PropTypes from 'prop-types';
  
  function Listing(props: {items: Array<{
    listing_id: number, 
      url: string,
      MainImage?: {url_570xN: string};
      title?: string;
      currency_code: string; 
      price: string; 
      quantity: number;
  }>}) {
    const {items} = props;
  
  const list = items.map(({ 
    listing_id, 
    url, 
    MainImage, 
    title = '', 
    currency_code, 
    price = '0', 
    quantity = 0,
    }: {
      listing_id: number, 
      url: string,
      MainImage?: {url_570xN: string};
      title?: string;
      currency_code: string; 
      price: string; 
      quantity: number;}) => {
    
    if(url === undefined) {
      return null;
    }
    
        let symbol;
    
    switch (currency_code) {
      case 'USD':
        symbol = '$' + price;
        break;
      case 'EUR':
        symbol = '€' + price;
        break;
      default:
        symbol = `${price} ${currency_code}`;
    }

    let quantityStyle;
    
    if (quantity <= 10) {
      quantityStyle = 'item-quantity level-low';
    } else if (quantity <= 20) {
      quantityStyle = 'item-quantity level-medium';     
    } else {
      quantityStyle = 'item-quantity level-high';       
    }
    
    return (
      
      <div className ={url && MainImage ? 'item' : 'hidden'} key={listing_id} >
        <div className="item-image">
          <a href={url}>
            {MainImage && <img src={MainImage.url_570xN} alt='' />}
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title && title.length > 50 ? title.slice(0, 50) + '...' : title}</p>
          <p className="item-price">{symbol}</p>
          <p className={quantityStyle}>{quantity + ' left'}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="item-list">
      {list}
    </div>
  );
};

Listing.defaultProps = {
  items: []
}; 

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};


export default Listing;