import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Helmet } from 'react-helmet'

type LayoutProps = {
  children: React.ReactNode
  title: string
  description: string
  url: string
}

const Layout = ({ children, title, description, url }: LayoutProps) => {
  return (
    <div className="h-screen overflow-hidden">
      <Helmet>
        <title>Hira99's Dev Blog</title>

        <meta name="description" content="HTML meta tag page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UFT-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="@hira99" />
        <meta name="twitter:creator" content="@hira99" />

        <html lang="ko" />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
