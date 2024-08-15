import React from 'react';
import BubbleSVG from './BubbleSVG';
import useBubbleCreator from './useBubbleCreator';

const BubbleComponent = () => {
    useBubbleCreator();

    return (
        <div>
            <BubbleSVG />
        </div>
    );
};

export default BubbleComponent;
