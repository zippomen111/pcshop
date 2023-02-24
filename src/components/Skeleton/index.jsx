import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={200}
        height={400}
        viewBox="0 0 200 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="-8" y="-4" rx="0" ry="0" width="246" height="171" />
        <rect x="46" y="77" rx="0" ry="0" width="2" height="0" />
        <rect x="-1" y="176" rx="0" ry="0" width="63" height="22" />
        <rect x="30" y="241" rx="0" ry="0" width="0" height="2" />
        <rect x="70" y="176" rx="0" ry="0" width="63" height="22" />
        <rect x="143" y="176" rx="0" ry="0" width="63" height="22" />
        <rect x="-1" y="208" rx="0" ry="0" width="178" height="37" />
        <rect x="-1" y="252" rx="0" ry="0" width="219" height="68" />
        <rect x="1" y="330" rx="0" ry="0" width="47" height="17" />
        <rect x="17" y="344" rx="0" ry="0" width="0" height="7" />
        <rect x="2" y="357" rx="0" ry="0" width="57" height="26" />
    </ContentLoader>
)

export default Skeleton;

