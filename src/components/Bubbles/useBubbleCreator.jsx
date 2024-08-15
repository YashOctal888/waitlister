import { useEffect } from 'react';

const randInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getUUID = () => {
    let d = new Date().getTime();
    let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
    );
    return uuid;
};

const useBubbleCreator = () => {
    useEffect(() => {
        const createBubbles = () => {
            let hh = window.innerHeight;
            let ww = window.innerWidth;
            let numBubbles = 3;
            document.querySelector('.bubblePopper').setAttribute('viewBox', `0 0 ${ww} ${hh}`);
            document.querySelector('#bubbleArea').innerHTML = '';
            document.querySelector('#bubbleDef').innerHTML = '';

            const colors = ['white', 'purple', 'green'];

            // Create gradient for each color
            colors.forEach((color, index) => {
                document.querySelector('#bubbleDef').innerHTML += `
                    <radialGradient id="grad${index}" fx="0.70" fy="0.35">
                        <stop offset="100%" stop-color="${color}" stop-opacity="0.5"/>
                        <stop offset="100%" stop-color="${color}" stop-opacity="0.5" />
                    </radialGradient>`;
            });

            for (let i = 0; i < numBubbles; i++) {
                let dur = (ww * hh) / 25;  // Adjusted for faster flow
                dur += randInt(0, 2000);  // Reduced range for variability
                if (dur <= 12000) {  // Minimum duration lowered for faster flow
                    dur = 12000;
                }
                let cxBeg = randInt(-dur, 0);
                let cyBeg = randInt(-dur, 0);
                let r = randInt(Math.floor(dur / 300) - 5, Math.floor(dur / 300) + 5);
                let id = getUUID();
                let maskBubble = `<mask id="holeMask${i}${id}"><rect width="100%" height="100%" fill="#fff" />
                    <circle class="hole" id="b${i}${id}mask" cx="-50" cy="-50" r="0" filter="url(#roughEdges)">
                        <animate attributeName="cx" values="${r}; ${ww - r}; ${r}" dur="${dur}ms" begin="${cxBeg}ms" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.45 0.59 0.56 0.33;0.45 0.59 0.56 0.33" calcMode="spline" />
                        <animate attributeName="cy" values="${r}; ${hh - r}; ${r}" dur="${dur}ms" begin="${cyBeg}ms" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.45 0.59 0.56 0.33;0.45 0.59 0.56 0.33" calcMode="spline" />
                        <animate class="r" attributeName="r" values="0; ${r * 1.5}" dur="${randInt(200, 400)}ms" begin="indefinite" repeatCount="none" fill="freeze" keyTimes="0;1" keySplines="0 0.26 0 0.35" calcMode="spline"/>
                    </circle></mask>`;

                let bubble = `<circle class="bubble" id="b${i}${id}" cx="50" cy="50" r="${r}" fill="url(#grad${[i % Math.floor(numBubbles / 2)]})" 
                    filter="drop-shadow(1 1 .5 rgba(255,255,255,0.5))" mask="url(#holeMask${i}${id})">
                    <animate attributeName="cx" values="${r}; ${ww - r}; ${r}" dur="${dur}ms" begin="${cxBeg}ms" repeatCount="indefinite" 
                    keyTimes="0;0.5;1" keySplines="0.45 0.59 0.56 0.33;0.45 0.59 0.56 0.33" calcMode="spline" />
                    <animate attributeName="cy" values="${r}; ${hh - r}; ${r}" dur="${dur}ms" begin="${cyBeg}ms" repeatCount="indefinite" 
                    keyTimes="0;0.5;1" keySplines="0.45 0.59 0.56 0.33;0.45 0.59 0.56 0.33" calcMode="spline" />
                </circle>`;

                let wrapper = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                let wrapper1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                wrapper.innerHTML = `${bubble}`;
                wrapper1.innerHTML = `${maskBubble}`;
                let maskBubble1 = wrapper1.firstChild;
                let bubble1 = wrapper.firstChild;
                document.querySelector('#bubbleDef').appendChild(maskBubble1);
                document.querySelector('#bubbleArea').appendChild(bubble1);
            }
        };

        createBubbles();

        window.addEventListener('resize', createBubbles);

        return () => {
            window.removeEventListener('resize', createBubbles);
        };
    }, []);
};

export default useBubbleCreator;
