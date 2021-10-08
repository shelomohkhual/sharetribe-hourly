import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

const AddToWishList = props => {
  const { onClick, listing, isWishListed } = props;
  return (
    <div onClick={() => onClick(listing.id.uuid)} style={{ cursor: 'pointer', padding: '1rem' }}>
      {isWishListed ? (
        <FormattedMessage id="BookingPanel.ctaRemoveFromWishlist" />
      ) : (
        <FormattedMessage id="BookingPanel.ctaAddToWishlist" />
      )}
    </div>
  );
};

AddToWishList.defaultProps = {
  isWishListed: false,
};

const { func, object, bool } = PropTypes;

AddToWishList.propTypes = {
  listing: object.isRequired,
  onClick: func.isRequired,
  isWishListed: bool,
};

export default AddToWishList;
