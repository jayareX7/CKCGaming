import React from "react";
import PropTypes from "prop-types";

const ServicesDetailsText = ({ description }) => {
    return <p className="leading-8">{description}</p>;
};
ServicesDetailsText.propTypes = {
    description: PropTypes.string,
};
export default ServicesDetailsText;
