import React from "react";
import SEO from "@components/seo";
import Layout from "@layout";
import { normalizedData } from "@utils/functions";

const RentalsPage = ({ data }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);

    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Home" pathname="/" />
        </Layout>
    );
};

export default RentalsPage;
