import React from 'react';
const SvgPerson = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    className='sh-navbar--auth-icon lg:text-brand-gray navitem-group-hover:text-brand-white'
    viewBox='0 0 20 20'
    width='13px'
    color='white'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path d='M9.857 9.634c1.324 0 2.47-.475 3.407-1.411.936-.937 1.41-2.082 1.41-3.406 0-1.323-.474-2.47-1.41-3.406C12.326.475 11.18 0 9.856 0 8.534 0 7.388.475 6.452 1.411c-.937.937-1.412 2.082-1.412 3.406 0 1.324.475 2.47 1.412 3.406.936.936 2.082 1.411 3.405 1.411ZM18.286 15.379c-.027-.39-.081-.815-.162-1.264a9.968 9.968 0 0 0-.31-1.27 6.277 6.277 0 0 0-.523-1.185 4.471 4.471 0 0 0-.788-1.027 3.473 3.473 0 0 0-1.131-.71 3.91 3.91 0 0 0-1.444-.262c-.205 0-.402.084-.783.332-.235.153-.51.33-.816.526-.262.167-.617.323-1.055.465a4.19 4.19 0 0 1-1.29.208c-.43 0-.864-.07-1.292-.208-.438-.142-.793-.298-1.054-.465-.304-.194-.578-.371-.817-.526-.38-.248-.578-.332-.782-.332-.52 0-1.006.088-1.444.261-.44.175-.82.414-1.132.711-.297.285-.562.63-.787 1.027-.218.382-.393.78-.523 1.185-.125.39-.23.818-.31 1.27-.08.448-.135.874-.162 1.264-.027.383-.04.78-.04 1.182 0 1.044.331 1.889.986 2.512.646.615 1.502.927 2.542.927h9.63c1.04 0 1.895-.312 2.541-.927.655-.623.987-1.468.987-2.513 0-.403-.014-.8-.04-1.181Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h20v20H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPerson;
