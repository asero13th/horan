import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTelegram } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'
// Saas
const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Horan Software',
    description: 'Welcome to Horan. With expertise in the design and development of robust software applications and product development in Education, AgriTech, and Digital Tourism, we deliver comprehensive solutions tailored to elevate your organization\'s capabilities. Join us on the journey to innovation and success.',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Services',
      },
      {
        id: 'pricing',
        label: 'About Us',
      },
      {
        id: 'faq',
        label: 'Portfolio',
      },
      {
        label: 'Docs',
        href: '/login',
      },
      // {
      //   label: 'Sign Up',
      //   href: '/signup',
      //   variant: 'primary',
      // },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://horansoftware">Horan Software</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:horansoftware@gmail.com',
        label: 'Contact',
      },
      {
        href: 'https://t.me/horansoftware',
        label: <FaTelegram size="14" />,
      },
      {
        href: 'https://github.com/horansoftware',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Add New Admin to Horan',
    features: [
      {
        icon: FiCheck,
        title: 'Update Content',
        description: 'Admins can Uplaod and Delete Projects'
      },
      {
        icon: FiCheck,
        title: 'Write Blog',
        description:
          'Admins can write and edit news and blogs'
      },
      {
        icon: FiCheck,
        title: 'Secured',
        description:
          '2AF Feature added to ensure secure access',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build Horan Team at speed.',
      },
    ],
  },
}

export default siteConfig
