import React from 'react';

import RCricle from '../../svgs/rcricle';
import YCricle from '../../svgs/ycricle';

const RenderSVG = (props) => {

    const { svg } = props;

    if (svg === 'YCricle') {
        return <YCricle size={40} />
    } else if (svg === 'RCricle') {
        return <RCricle size={40} />
    } else {
        return null
    }
}

export default RenderSVG