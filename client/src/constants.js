const env = process.env.NODE_ENV || 'development';
const serverIP = 'localhost';
const serverPort = 3000;

const CONSTANTS = {
  CONTACTS_INFO: {
    PHONE: '(877) 355-3585',
  },
  CUSTOMER: 'customer',
  CREATOR: 'creator',
  CONTEST_STATUS_ACTIVE: 'active',
  CONTEST_STATUS_FINISHED: 'finished',
  CONTEST_STATUS_PENDING: 'pending',
  NAME_CONTEST: 'name',
  LOGO_CONTEST: 'logo',
  TAGLINE_CONTEST: 'tagline',
  OFFER_STATUS_REJECTED: 'rejected',
  OFFER_STATUS_WON: 'won',
  OFFER_STATUS_PENDING: 'pending',
  STATIC_IMAGES_PATH: '/staticImages/',
  ANONYM_IMAGE_PATH: '/staticImages/anonym.png',
  BASE_URL: `http://${serverIP}:${serverPort}/`,
  ACCESS_TOKEN: 'accessToken',
  publicURL:
    env === 'production'
      ? `http://${serverIP}:80/images/`
      : `http://${serverIP}:${serverPort}/public/images/`,
  NORMAL_PREVIEW_CHAT_MODE: 'NORMAL_PREVIEW_CHAT_MODE',
  FAVORITE_PREVIEW_CHAT_MODE: 'FAVORITE_PREVIEW_CHAT_MODE',
  BLOCKED_PREVIEW_CHAT_MODE: 'BLOCKED_PREVIEW_CHAT_MODE',
  CATALOG_PREVIEW_CHAT_MODE: 'CATALOG_PREVIEW_CHAT_MODE',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS',
  ADD_CHAT_TO_OLD_CATALOG: 'ADD_CHAT_TO_OLD_CATALOG',
  CREATE_NEW_CATALOG_AND_ADD_CHAT: 'CREATE_NEW_CATALOG_AND_ADD_CHAT',
  USER_INFO_MODE: 'USER_INFO_MODE',
  CASHOUT_MODE: 'CASHOUT_MODE',
  AUTH_MODE: {
    REGISTER: 'REGISTER',
    LOGIN: 'LOGIN',
  },
  HEADER_ANIMATION_TEXT: [
    'a Company',
    'a Brand',
    'a Website',
    'a Service',
    'a Book',
    'a Business',
    'an App',
    'a Product',
    'a Startup',
  ],
  FooterItems: [
    {
      title: 'SQUADHELP',
      items: ['About', 'Contact', 'How It Works?', 'Testimonials', 'Our Work'],
    },
    {
      title: 'RESOURCES',
      items: [
        'How It Works',
        'Become a Creative',
        'Business Name Generator',
        'Discussion Forum',
        'Blog',
        'Download eBook',
        'Pricing',
        'Help & FAQs',
      ],
    },
    {
      title: 'OUR SERVICES',
      items: [
        'Naming',
        'Logo Design',
        'Taglines',
        'Premium Names For Sale',
        'Creative Owned Names For Sale',
        'Audience Testing',
        'Trademark Research & Filling',
        'Managed Agency Service',
      ],
    },
    {
      title: 'LEGAL',
      items: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'],
    },
  ],
  GENUINE_THREE_WAYS_TO_USE: [
    {
      image: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='#377dff'
          color='#377dff'
          width='60px'
          height='60px'
          viewBox='0 -8 72 72'
          id='Layer_1'
          data-name='Layer 1'
        >
          <title>computer</title>
          <path d='M57.43,8V7.94H14.55V8A2.84,2.84,0,0,0,12,10.55V38.73a2.75,2.75,0,0,0,.38,1.41,2.62,2.62,0,0,0,2.44,1.43H30.26v3.9H27.32a1.3,1.3,0,0,0,0,2.59H44.66a1.3,1.3,0,1,0,0-2.59H41.72v-3.9H57.19a2.63,2.63,0,0,0,2.45-1.43,2.91,2.91,0,0,0,.4-1.41V10.55A2.9,2.9,0,0,0,57.43,8Zm0,2.77V38.73c0,.16-.07.23-.24.23H14.78c-.16,0-.23-.07-.23-.23V10.55H57.43v.23Z' />
        </svg>
      ),
      title: 'Launch a Contest',
      text: 'Work with hundreds of creative experts to get custom name suggestions for your business or brand. All names are auto-checked for URL availability.',
      fillerButton: 'Launch a Contest',
    },
    {
      image: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='#377dff'
          color='#377dff'
          width='60px'
          height='60px'
          viewBox='0 -8 72 72'
          id='Layer_1'
          data-name='Layer 1'
        >
          <title>computer</title>
          <path d='M57.43,8V7.94H14.55V8A2.84,2.84,0,0,0,12,10.55V38.73a2.75,2.75,0,0,0,.38,1.41,2.62,2.62,0,0,0,2.44,1.43H30.26v3.9H27.32a1.3,1.3,0,0,0,0,2.59H44.66a1.3,1.3,0,1,0,0-2.59H41.72v-3.9H57.19a2.63,2.63,0,0,0,2.45-1.43,2.91,2.91,0,0,0,.4-1.41V10.55A2.9,2.9,0,0,0,57.43,8Zm0,2.77V38.73c0,.16-.07.23-.24.23H14.78c-.16,0-.23-.07-.23-.23V10.55H57.43v.23Z' />
        </svg>
      ),
      title: 'Explore Names For Sale',
      text: 'Our branding team has curated thousands of pre-made names that you can purchase instantly. All names include a matching URL and a complimentary Logo Design',
      fillerButton: 'Explore Names For Sale',
    },
    {
      image: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='#377dff'
          width='50px'
          height='50px'
          viewBox='0 0 32 32'
          version='1.1'
        >
          <title>hand-holding-globe</title>
          <path d='M29.064 19.701c-0.421-0.177-0.91-0.28-1.423-0.28-0.577 0-1.123 0.13-1.611 0.362l0.023-0.010-5.778 2.595c0.003-0.047 0.026-0.087 0.026-0.134-0.015-1.371-1.129-2.476-2.502-2.476-0.069 0-0.137 0.003-0.204 0.008l0.009-0.001h-3.783l-4.76-1.395c-0.062-0.020-0.133-0.031-0.207-0.031-0.001 0-0.003 0-0.004 0h-2.169v-0.757c-0-0.414-0.336-0.75-0.75-0.75h-3.883c-0.414 0-0.75 0.336-0.75 0.75v0 12.208c0 0.414 0.336 0.75 0.75 0.75h3.883c0.414-0 0.75-0.336 0.75-0.75v0-1.005c1.818 0.284 3.445 0.742 4.987 1.367l-0.149-0.054c1.15 0.416 2.478 0.656 3.862 0.656 0.007 0 0.014 0 0.021-0h-0.001c0.005 0 0.011 0 0.017 0 1.604 0 3.133-0.319 4.528-0.898l-0.078 0.029c1.243-0.553 2.298-1.136 3.297-1.799l-0.082 0.051c0.338-0.209 0.674-0.418 1.014-0.619 1.633-0.967 2.945-1.816 4.129-2.672 0.579-0.412 1.083-0.819 1.563-1.253l-0.014 0.013c0.373-0.302 0.671-0.682 0.871-1.116l0.008-0.019c0.031-0.079 0.048-0.17 0.048-0.266 0-0.057-0.006-0.112-0.018-0.165l0.001 0.005c-0.146-1.017-0.755-1.866-1.603-2.337l-0.016-0.008zM5.181 29.041h-2.383v-10.709h2.383zM28.719 22.541c-0.412 0.37-0.86 0.729-1.328 1.062l-0.047 0.032c-1.143 0.826-2.418 1.65-4.014 2.596-0.348 0.205-0.691 0.418-1.037 0.631-0.854 0.573-1.837 1.12-2.864 1.586l-0.13 0.053c-1.152 0.474-2.49 0.748-3.892 0.748-1.203 0-2.359-0.203-3.436-0.575l0.074 0.022c-1.555-0.648-3.363-1.145-5.248-1.407l-0.117-0.013v-7.436h2.062l4.76 1.395c0.062 0.020 0.133 0.031 0.207 0.031 0.001 0 0.003 0 0.004 0h3.89c0.883 0 1.197 0.521 1.197 0.969s-0.314 0.969-1.197 0.969h-6.809c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h7.781c0.001 0 0.003 0 0.004 0 0.11 0 0.214-0.024 0.307-0.068l-0.004 0.002 7.795-3.5c0.288-0.132 0.625-0.209 0.98-0.209 0.265 0 0.52 0.043 0.758 0.122l-0.017-0.005c0.383 0.23 0.658 0.604 0.752 1.046l0.002 0.011c-0.136 0.159-0.278 0.302-0.429 0.435l-0.005 0.004zM17 17.767c4.549-0 8.236-3.688 8.236-8.237s-3.688-8.237-8.237-8.237c-4.549 0-8.237 3.687-8.237 8.236v0c0.005 4.547 3.69 8.232 8.237 8.237h0zM10.669 11.75h2.575c0.262 1.578 0.855 2.981 1.707 4.189l-0.021-0.032c-1.997-0.663-3.55-2.182-4.246-4.111l-0.015-0.047zM18.96 6.264l-3.919-0.019c0.397-1.27 1.071-2.356 1.956-3.23l0.001-0.001c0.887 0.881 1.563 1.973 1.947 3.195l0.015 0.055zM19.311 7.766c0.092 0.528 0.146 1.138 0.148 1.761v0.003c0 0.255-0.025 0.482-0.040 0.721h-4.839c-0.015-0.239-0.040-0.466-0.040-0.721 0.003-0.633 0.057-1.25 0.16-1.852l-0.009 0.066zM23.736 9.529c-0.012 0.267-0.038 0.515-0.078 0.759l0.005-0.038h-2.758c0.014-0.245 0.053-0.462 0.053-0.721-0.003-0.622-0.051-1.231-0.139-1.826l0.009 0.070 2.65 0.013c0.155 0.52 0.249 1.119 0.257 1.738l0 0.005zM14.766 11.75h4.468c-0.304 1.693-1.101 3.163-2.234 4.296l-0 0c-1.134-1.133-1.93-2.603-2.227-4.247l-0.007-0.049zM13.094 10.25h-2.759c-0.034-0.206-0.060-0.454-0.072-0.706l-0.001-0.015c0.010-0.647 0.11-1.267 0.289-1.853l-0.012 0.047 2.634 0.013c-0.082 0.537-0.13 1.158-0.133 1.79v0.003c0 0.259 0.040 0.475 0.053 0.721zM19.070 15.907c0.831-1.176 1.424-2.58 1.678-4.098l0.008-0.059h2.574c-0.711 1.975-2.263 3.494-4.213 4.143l-0.047 0.014zM22.866 6.283l-2.349-0.011c-0.32-1.188-0.816-2.228-1.467-3.151l0.021 0.031c1.64 0.545 2.967 1.657 3.778 3.097l0.017 0.034zM14.929 3.152c-0.624 0.882-1.117 1.91-1.422 3.017l-0.016 0.069-2.327-0.011c0.832-1.446 2.145-2.536 3.718-3.061l0.047-0.014z' />
        </svg>
      ),
      title: 'Agency-level Managed Contests',
      text: 'Our Managed contests combine the power of crowdsourcing with the rich experience of our branding consultants. Get a complete agency-level experience at a fraction of Agency costs',
      fillerButton: 'Learn More',
    },
  ],
  FOOTER_HOW_IT_WORKS: [
    {
      title: 'Services',
      items: [
        'Premium Domains For Sale',
        'Crowdsource Naming',
        'Naming Agency',
        'Brandable Domains',
        'Short Domains',
        'One Word Domains',
        'Industry Domains',
        'Agency Services',
        'Logo Contests',
        'Tagline Contests',
        'Trademark Filing Service',
        'Audience Test',
      ],
    },
    {
      title: 'Tools',
      items: [
        'Business Name Generator',
        'How to Name Your Business',
        'Free Trademark Checker',
        'Branding Blog',
        'Business Naming eBook',
        'Startup Toolkit',
      ],
    },
    {
      title: 'SquadHelp',
      items: [
        'About',
        'Contact',
        'How It Works',
        'Testimonials',
        'Our Work',
        'Help & FAQs',
      ],
    },
    {
      title: 'Creatives',
      items: [
        'Get Started',
        'Help & FAQs',
        'Domain Selling Info',
        'Discussion Forum',
      ],
    },
    {
      title: 'Legal',
      items: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'],
    },
  ],

  LIST_NUMBER: 1,

  LIST_NAMING_CONTESTS_WORK: [
    'Fill out your Naming Brief and begin receiving name ideas in minutes',
    'Rate the submissions and provide feedback to creatives. Creatives submit even more names based on your feedback.',
    'Our team helps you test your favorite names with your target audience. We also assist with Trademark screening.',
    'Pick a Winner. The winner gets paid for their submission.',
  ],

  SEARCHES_IMG_FOR_BUTTON: (
    <svg
      class='w-4 h-5 sh-footer--power-icon'
      width='17px'
      height='20px'
      viewBox='0 0 16 18'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      color='#cccccc'
    >
      <path
        d='M0.638561 17.1763C1.01663 17.6366 1.69945 17.6901 2.1596 17.3122L11.343 9.76043L8.09228 8.8894L12.8506 4.67007L14.3768 6.23776L15.5419 0.668153L9.94505 1.71596L11.3407 3.12636L3.6682 9.93647L6.73144 10.7573L0.79109 15.6457C0.330826 16.0236 0.260593 16.7161 0.638561 17.1763Z'
        fill='currentColor'
      ></path>
    </svg>
  ),
  SOCIAL_NETWORKS_ICONS: {
    LINKEDIN: (
      <svg
        class='sh-footer--social-icon'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        width='30px'
      >
        <path
          d='M23.9938 24V23.999H23.9998V15.197C23.9998 10.891 23.0728 7.57397 18.0388 7.57397C15.6188 7.57397 13.9948 8.90198 13.3318 10.161H13.2618V7.97597H8.48877V23.999H13.4588V16.065C13.4588 13.976 13.8548 11.956 16.4418 11.956C18.9908 11.956 19.0288 14.34 19.0288 16.199V24H23.9938Z'
          fill='#0077B5'
        ></path>
        <path
          d='M0.395996 7.97705H5.372V24H0.395996V7.97705Z'
          fill='#0077B5'
        ></path>
        <path
          d='M2.882 0C1.291 0 0 1.291 0 2.882C0 4.473 1.291 5.791 2.882 5.791C4.473 5.791 5.764 4.473 5.764 2.882C5.763 1.291 4.472 0 2.882 0V0Z'
          fill='#0077B5'
        ></path>
      </svg>
    ),
    INSTAGRAM: (
      <svg
        class='sh-footer--social-icon'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        width='30px'
      >
        <path
          d='M1.49971 1.63305C-0.386289 3.59205 -0.000289023 5.67305 -0.000289023 11.995C-0.000289023 17.245 -0.916289 22.508 3.87771 23.747C5.37471 24.132 18.6387 24.132 20.1337 23.745C22.1297 23.23 23.7537 21.611 23.9757 18.788C24.0067 18.394 24.0067 5.60305 23.9747 5.20105C23.7387 2.19405 21.8877 0.461046 19.4487 0.110046C18.8897 0.0290464 18.7777 0.00504639 15.9097 4.63948e-05C5.73671 0.00504639 3.50671 -0.447954 1.49971 1.63305Z'
          fill='url(#paint0_linear)'
        ></path>
        <path
          d='M11.9978 3.13892C8.36681 3.13892 4.91881 2.81592 3.60181 6.19592C3.05781 7.59192 3.13681 9.40492 3.13681 12.0009C3.13681 14.2789 3.06381 16.4199 3.60181 17.8049C4.91581 21.1869 8.39181 20.8629 11.9958 20.8629C15.4728 20.8629 19.0578 21.2249 20.3908 17.8049C20.9358 16.3949 20.8558 14.6089 20.8558 12.0009C20.8558 8.53892 21.0468 6.30392 19.3678 4.62592C17.6678 2.92592 15.3688 3.13892 11.9938 3.13892H11.9978ZM11.2038 4.73592C18.7778 4.72392 19.7418 3.88192 19.2098 15.5789C19.0208 19.7159 15.8708 19.2619 11.9988 19.2619C4.93881 19.2619 4.73581 19.0599 4.73581 11.9969C4.73581 4.85192 5.29581 4.73992 11.2038 4.73392V4.73592ZM16.7278 6.20692C16.1408 6.20692 15.6648 6.68292 15.6648 7.26992C15.6648 7.85692 16.1408 8.33292 16.7278 8.33292C17.3148 8.33292 17.7908 7.85692 17.7908 7.26992C17.7908 6.68292 17.3148 6.20692 16.7278 6.20692ZM11.9978 7.44992C9.48481 7.44992 7.44781 9.48792 7.44781 12.0009C7.44781 14.5139 9.48481 16.5509 11.9978 16.5509C14.5108 16.5509 16.5468 14.5139 16.5468 12.0009C16.5468 9.48792 14.5108 7.44992 11.9978 7.44992ZM11.9978 9.04692C15.9028 9.04692 15.9078 14.9549 11.9978 14.9549C8.09381 14.9549 8.08781 9.04692 11.9978 9.04692Z'
          fill='white'
        ></path>
        <defs>
          <linearGradient
            id='paint0_linear'
            x1='1.54573'
            y1='22.4671'
            x2='23.8512'
            y2='3.16202'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#FFDD55'></stop>
            <stop offset='0.5' stop-color='#FF543E'></stop>
            <stop offset='1' stop-color='#C837AB'></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
    TWITTER: (
      <svg
        class='sh-footer--twitter-icon'
        viewBox='0 0 24 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        width='30px'
      >
        <path
          d='M21.552 5.749C21.552 5.532 21.544 5.321 21.534 5.113C22.51 4.42 23.331 3.555 24 2.559V2.558C23.107 2.949 22.157 3.209 21.165 3.335C22.185 2.726 22.964 1.769 23.33 0.616C22.379 1.183 21.329 1.583 20.21 1.807C19.307 0.845 18.02 0.25 16.616 0.25C13.892 0.25 11.699 2.461 11.699 5.171C11.699 5.561 11.732 5.936 11.813 6.293C7.723 6.093 4.103 4.133 1.671 1.146C1.247 1.883 0.997 2.726 0.997 3.633C0.997 5.337 1.874 6.847 3.183 7.722C2.392 7.707 1.617 7.477 0.96 7.116V7.17C0.96 9.561 2.665 11.547 4.902 12.005C4.15 12.211 3.224 12.203 2.681 12.083C3.318 14.031 5.128 15.464 7.278 15.511C5.604 16.82 3.478 17.609 1.177 17.609C0.774 17.609 0.387 17.591 0 17.542C2.18 18.947 4.762 19.75 7.548 19.75C16.602 19.75 21.552 12.25 21.552 5.749Z'
          fill='#55ACEE'
        ></path>
      </svg>
    ),
    FACEBOOK: (
      <svg
        class='sh-footer--social-icon'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        width='30px'
      >
        <path
          d='M21 0H3C1.345 0 0 1.345 0 3V21C0 22.654 1.345 24 3 24H21C22.654 24 24 22.654 24 21V3C24 1.345 22.654 0 21 0Z'
          fill='#3B5999'
        ></path>
        <path
          d='M16.5 12V9C16.5 8.172 17.172 8.25 18 8.25H19.5V4.5H16.5C14.014 4.5 12 6.514 12 9V12H9V15.75H12V24H16.5V15.75H18.75L20.25 12H16.5Z'
          fill='white'
        ></path>
      </svg>
    ),
  },
};

export default CONSTANTS;
