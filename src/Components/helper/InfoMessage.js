import React from 'react';
import PropTypes from 'prop-types';

const InfoMessage = ({ children }) => (
    <div className="font-weight-lighter">
        {/* <div className="lead">Info</div> */}
        {children}
        <hr />
    </div>
);

InfoMessage.propTypes = {
    children: PropTypes.node.isRequired
};

export default InfoMessage;

