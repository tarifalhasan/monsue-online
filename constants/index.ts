import {
  agencyTheme1,
  customizable,
  easyIcon,
  happyNewYearTheme,
  islamicBootstrapT,
  islamicHtml,
  islamicWordpressTheme,
  responsive,
  salamicTheme,
} from '@/assets';
import { NavLinksType, ThemesType } from '@/types';

export const NavLinks: NavLinksType[] = [
  {
    lebel: 'Themes',
    href: '#themes',
  },
  {
    lebel: 'About',
    href: '#about',
  },
  {
    lebel: 'Contact',
    href: '#contact',
  },
  {
    lebel: 'Blog',
    href: '#blog',
  },
];

export const ThemesData: ThemesType[] = [
  {
    name: 'Lorem ipsum dolor',
    image: agencyTheme1,
    link: '',
    alt: 'mosques thme',
  },
  {
    name: 'Lorem ipsum dolor',
    image: islamicBootstrapT,
    link: '',
    alt: 'mosques thme',
  },
  {
    name: 'Lorem ipsum dolor',
    image: islamicHtml,
    link: '',
    alt: 'mosques thme',
  },
  {
    name: 'Lorem ipsum dolor',
    image: salamicTheme,
    link: '',
    alt: 'mosques thme',
  },
  {
    name: 'Lorem ipsum dolor',
    image: islamicWordpressTheme,
    link: '',
    alt: 'mosques thme',
  },
  {
    name: 'Lorem ipsum dolor',
    image: happyNewYearTheme,
    link: '',
    alt: 'mosques thme',
  },
];

export const ServicesData = [
  {
    name: 'Simple',
    icon: easyIcon,
    des: `Our simple templates make it easy to create a website for your mosque quickly. Choose from a range of pre-designed themes and get started right away. We also provide hosting support`,
    active: false,
  },
  {
    name: 'Customizable',
    icon: customizable,
    des: `If you're looking for a more personalized website design, our customizable templates are the perfect choice. From colors and fonts to layout and functionality, we'll help you create a website that truly reflects your mosque's vision and mission`,
    active: true,
  },
  {
    name: 'Responsive',
    icon: responsive,
    des: `Templates: In today's mobile-first world, having a responsive website is essential. Our responsive templates are designed to look great on any device, from smartphones to desktops. With a mobile-friendly design, your website will be accessible to all your visitors, regardless of the device they're using.`,
    active: true,
  },
];
