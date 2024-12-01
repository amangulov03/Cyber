import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={296.75}
        height={500.2}
        viewBox="0 0 296.75 500.2"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="90" y="256" rx="6" ry="6" width="134" height="11" />
        <rect x="96" y="282" rx="10" ry="10" width="129" height="9" />
        <rect x="54" y="308" rx="6" ry="6" width="216" height="44" />
        <rect x="115" y="367" rx="6" ry="6" width="98" height="31" />
        <rect x="72" y="414" rx="3" ry="3" width="180" height="46" />
        <circle cx="263" cy="25" r="16" />
        <rect x="88" y="79" rx="0" ry="0" width="136" height="155" />
    </ContentLoader>
);

export default Skeleton;
