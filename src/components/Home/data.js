import {
  FaCreditCard,
  FaBook,
  FaBriefcase,
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaLinkedin,
  FaThumbsUp,
  FaDollarSign,
  FaWallet,
} from 'react-icons/fa'
import React from 'react'
const sublinks = [
  {
    page: 'drugs and pharma',
    links: [
      { label: 'pharma', icon: <FaCreditCard />, url: '/products' },
      { label: 'dispirin', icon: <FaCreditCard />, url: '/products' },
      { label: 'aspirin', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'agriculture',
    links: [
      { label: 'fertilizers', icon: <FaBook />, url: '/products' },
      { label: 'sprays', icon: <FaBook />, url: '/products' },
      { label: 'weed', icon: <FaBook />, url: '/products' },
      { label: 'insects', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'electronics',
    links: [
      { label: 'cooler', icon: <FaBriefcase />, url: '/products' },
      { label: 'ac', icon: <FaBriefcase />, url: '/products' },
    ],
  },
]
export const cat = [
  { id: 1, title: 'electronics', url: '/electronics' },
  { id: 2, title: 'agriculture', url: '/agriculture' },
  { id: 3, title: 'medicnce', url: '/medicnce' },
  { id: 4, title: 'fertilizers', url: '/fertilizers' },
  { id: 5, title: 'weeds', url: '/weeds' },
  { id: 6, title: 'coolers', url: '/coolers' },
]
export const quickLinks = [
  { id: 1, title: 'about us', url: '/about' },
  { id: 2, title: 'Contact Us', url: '/contact' },
  { id: 3, title: 'Contribute', url: '/contribute' },
  { id: 4, title: 'Privacy Policy', url: '/privacy' },
  { id: 5, title: 'Sitemap', url: '/sitemap' },
]
export const socialLinks = [
  { id: 1, title: 'facebook', url: 'www.facebook.com', icon: <FaFacebookF /> },
  { id: 2, title: 'twitter', url: 'www.twiiter.com', icon: <FaTwitter /> },
  { id: 3, title: 'dribbble', url: 'www.youtube.com', icon: <FaDribbble /> },
  { id: 4, title: 'linkedin', url: 'www.linkedin.com', icon: <FaLinkedin /> },
]
export const card = [
  {
    id: 1,
    title: 'Connect with verified sellers',
    url: '#',
    icon: <FaThumbsUp />,
    desc: 'Tell us your requirement & let our experts find verified sellers for you',
  },
  {
    id: 2,
    title: 'Pay with IndiaMART',
    url: '#',
    icon: <FaWallet />,
    desc: 'Protect your payments for FREE. Pay sellers online via multiple options',
  },
  {
    id: 3,
    title: 'Sell on IndiaMART for free',
    url: '#',
    icon: <FaDollarSign />,
    desc: 'Reach out to more than 4 crore buyers.Sell with us.',
  },
]

export default sublinks
