import React from 'react';

const SvgArrowDown = props => (
  <svg
    width={10}
    height={10}
    className='fill-current sh-navbar--nav-downicon navitem-group-hover:hidden'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path d='M9.886 2.586a.39.39 0 0 0-.553 0L5.276 6.633a.391.391 0 0 1-.553 0L.667 2.585a.39.39 0 1 0-.552.553L4.17 7.186c.229.229.529.343.83.343.3 0 .6-.114.827-.342l4.057-4.049a.39.39 0 0 0 0-.552z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v10H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowDown;
