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
  FaPhone,
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
  { id: 1, title: 'electronics', url: '#' },
  { id: 2, title: 'agriculture', url: '#' },
  { id: 3, title: 'medicnce', url: '#' },
  { id: 4, title: 'fertilizers', url: '#' },
  { id: 5, title: 'weeds', url: '#' },
  { id: 6, title: 'coolers', url: '#' },
]
export const quickLinks = [
  { id: 1, title: 'about us', url: '#' },
  { id: 2, title: 'Contact Us', url: '#' },
  { id: 3, title: 'Contribute', url: '#' },
  { id: 4, title: 'Privacy Policy', url: '#' },
  { id: 5, title: 'Sitemap', url: '#' },
]
export const socialLinks = [
  { id: 1, title: 'facebook', url: '#', icon: <FaFacebookF /> },
  { id: 2, title: 'twitter', url: '#', icon: <FaTwitter /> },
  { id: 3, title: 'dribbble', url: '#', icon: <FaDribbble /> },
  { id: 4, title: 'linkedin', url: '#', icon: <FaLinkedin /> },
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
  {
    id: 4,
    title: 'Download our App',
    url: '#',
    icon: <FaPhone />,
    desc: 'Get instant notifications on the go. Download our App Now',
  },
]

export default sublinks
