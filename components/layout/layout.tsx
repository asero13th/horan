import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'


import {
  AnnouncementBanner,
  AnnouncementBannerProps,
} from '../announcement-banner'
import { FooterProps } from './footer'
import { Header, HeaderProps } from './header'

interface LayoutProps {
  children: ReactNode
  announcementProps: AnnouncementBannerProps
  headerProps: HeaderProps
  footerProps: FooterProps
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, announcementProps, headerProps, footerProps } = props
  return (    
    <Box >
      {/* <SkipNavLink>Skip to content</SkipNavLink> */}
      <AnnouncementBanner {...announcementProps} />
      <Header {...headerProps} />
      <Box as="main">
        {/* <SkipNavContent /> */}
        {children}
      </Box>
      {/* <Footer {...footerProps} /> */}
    </Box>
  )
}
