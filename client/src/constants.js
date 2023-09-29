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
      items: [
        'Terms of Service',
        'Privacy Policy',
        'Cookie Policy',
      ],
    },
  ],
  SEARCHES_IMG_FOR_BUTTON: <svg
  class='w-4 h-5 sh-footer--power-icon'
  width='17px' height='20px'
  viewBox='0 0 16 18'
  fill='currentColor'
  xmlns='http://www.w3.org/2000/svg' color="#cccccc"
>
  <path
    d='M0.638561 17.1763C1.01663 17.6366 1.69945 17.6901 2.1596 17.3122L11.343 9.76043L8.09228 8.8894L12.8506 4.67007L14.3768 6.23776L15.5419 0.668153L9.94505 1.71596L11.3407 3.12636L3.6682 9.93647L6.73144 10.7573L0.79109 15.6457C0.330826 16.0236 0.260593 16.7161 0.638561 17.1763Z'
    fill='currentColor'
  ></path>
</svg>,
};

export default CONSTANTS;
