import React from 'react';
const Path = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ width: '100%', height: '100%', display: "block" }}>
                <defs>
                    <style dangerouslySetInnerHTML={{ __html: ".a{fill:url(#a);}.b{filter:url(#b);}" }} />
                    <linearGradient id="a" x1="0.19" y1="0.776" x2="1.153" gradientUnits="objectBoundingBox">
                        <stop offset={0} stopColor="#6e51ea" />
                        <stop offset={1} stopColor="#9663f1" />
                    </linearGradient>
                    <filter id="b" x={0} y={0} width="378.122" height="209.381" filterUnits="userSpaceOnUse">
                        <feOffset dy={2} input="SourceAlpha" />
                        <feGaussianBlur stdDeviation={1} result="c" />
                        <feFlood floodOpacity="0.161" />
                        <feComposite operator="in" in2="c" />
                        <feComposite in="SourceGraphic" />
                    </filter>
                </defs>
                <g className="b" transform="matrix(1, 0, 0, 1, 0, 0)">
                    <path className="a" d="M-1133,1141v183.457s120.034,64.446,222.487-40.486c56.247-57.607,105.022-78.857,137.884-86.377h0v-56.936Z" transform="translate(1136 -1139.66)" />
                </g>
            </svg>

        </div>
    );
}

export default Path;