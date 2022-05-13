import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import logo from "../../static/images/logo.webp";
import featureImage from "../../static/images/hero.png";

const Header = ({ siteTitle }) => (
    <>
        <img
            className="page-header img"
            style={{ position: "absolute" }}
            alt={"Dashboard"}
            src={featureImage}
        />
        <header>
            <div className={"container"}>
                <div className={"top-menu"}>
                    <div className={"logo"}>
                        <Link to="/" title={"HiStaff"}>
                            <img alt={"Logo"} src={logo} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    </>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
