import React from 'react';

const SvgTNW = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width={70}
    height={30}
    fill='none'
    {...props}
  >
    <path fill='url(#a)' d='M0 0h70v29.647H0z' opacity={0.7} />
    <defs>
      <pattern
        id='a'
        width={1}
        height={1}
        patternContentUnits='objectBoundingBox'
      >
        <use xlinkHref='#b' transform='matrix(.0077 0 0 .01818 0 0)' />
      </pattern>
      <image
        xlinkHref='data:image/png;base64,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'
        id='b'
        width={130}
        height={55}
      />
    </defs>
  </svg>
);
export default SvgTNW;
