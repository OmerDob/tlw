import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.css';

export default function Avatar({img, title, children}) {
    return (
        <div className="column">
            <h3 className="header">{title}</h3>
            <img src={img} className="avatar" />
            {children}
        </div>
    );
}

Avatar.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};