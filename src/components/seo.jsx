import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, descriptions: defaultDescription, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
   
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      
      {children}
    </>
  )
}