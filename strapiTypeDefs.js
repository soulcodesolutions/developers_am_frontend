exports.strapiTypeDefs = `
type STRAPI__MEDIA implements Node @derivedTypes @dontInfer {
  name: String
  width: Int
  height: Int
  formats: STRAPI__MEDIAFormats
  hash: String
  ext: String
  mime: String
  size: Float
  url: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  localFile: File @link(by: "id", from: "localFile___NODE")
  strapi_id: Int
}

type STRAPI__MEDIAFormats @derivedTypes {
  thumbnail: STRAPI__MEDIAFormatsThumbnail
  medium: STRAPI__MEDIAFormatsMedium
  small: STRAPI__MEDIAFormatsSmall
  large: STRAPI__MEDIAFormatsLarge
}

type STRAPI__MEDIAFormatsThumbnail {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type STRAPI__MEDIAFormatsMedium {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type STRAPI__MEDIAFormatsSmall {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type STRAPI__MEDIAFormatsLarge {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type STRAPI_PARTNER implements Node @derivedTypes @dontInfer {
  name: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  publishedAt: Date @dateformat
  locale: String
  localizations: STRAPI_PARTNERLocalizations
  photo: STRAPI__MEDIA @link(by: "id", from: "photo___NODE")
  strapi_id: Int
}

type STRAPI_PARTNERLocalizations @derivedTypes {
  data: [STRAPI_PARTNERLocalizationsData]
}

type STRAPI_PARTNERLocalizationsData @derivedTypes {
  id: Int
  attributes: STRAPI_PARTNERLocalizationsDataAttributes
}

type STRAPI_PARTNERLocalizationsDataAttributes {
  name: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  publishedAt: Date @dateformat
  locale: String
}

type STRAPI_NEWS_ARTICLE_CONTENT_TEXTNODE implements Node @dontInfer {
  content: String
}

type STRAPI_NEWS_ARTICLE implements Node @derivedTypes @dontInfer {
  title: String
  description: String
  content: STRAPI_NEWS_ARTICLEContent
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  publishedAt: Date @dateformat
  locale: String
  slug: String
  localizations: STRAPI_NEWS_ARTICLELocalizations
  gallery: [STRAPI__MEDIA] @link(by: "id", from: "gallery___NODE")
  thumbnail: STRAPI__MEDIA @link(by: "id", from: "thumbnail___NODE")
  cover: STRAPI__MEDIA @link(by: "id", from: "cover___NODE")
  strapi_id: Int
}

type STRAPI_NEWS_ARTICLEContent {
  data: STRAPI_NEWS_ARTICLE_CONTENT_TEXTNODE @link(by: "id", from: "data___NODE")
}

type STRAPI_NEWS_ARTICLELocalizations @derivedTypes {
  data: [STRAPI_NEWS_ARTICLELocalizationsData]
}

type STRAPI_NEWS_ARTICLELocalizationsData @derivedTypes {
  id: Int
  attributes: STRAPI_NEWS_ARTICLELocalizationsDataAttributes
}

type STRAPI_NEWS_ARTICLELocalizationsDataAttributes {
  title: String
  description: String
  content: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  publishedAt: Date @dateformat
  locale: String
  slug: String
}

type STRAPI_MEMBER implements Node @derivedTypes @dontInfer {
  name: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  publishedAt: Date @dateformat
  locale: String
  position: String
  localizations: STRAPI_MEMBERLocalizations
  photo: STRAPI__MEDIA @link(by: "id", from: "photo___NODE")
  strapi_id: Int
}

type STRAPI_MEMBERLocalizations @derivedTypes {
  data: [STRAPI_MEMBERLocalizationsData]
}

type STRAPI_MEMBERLocalizationsData @derivedTypes {
  id: Int
  attributes: STRAPI_MEMBERLocalizationsDataAttributes
}

type STRAPI_MEMBERLocalizationsDataAttributes {
  name: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  publishedAt: Date @dateformat
  locale: String
  position: String
}

type STRAPI_HOME_PAGE_V_2 implements Node @dontInfer {
  sub_heading: String
  hero_text: String
  council_heading: String
  members_heading: String
  partner_heading: String
  news_heading: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  publishedAt: Date @dateformat
  about_heading: String
  about_content: String
  locale: String
  contact_heading: String
  council: [STRAPI_COUNCIL] @link(by: "id", from: "council___NODE")
  members: [STRAPI_MEMBER] @link(by: "id", from: "members___NODE")
  partners: [STRAPI_PARTNER] @link(by: "id", from: "partners___NODE")
  news_articles: [STRAPI_NEWS_ARTICLE] @link(by: "id", from: "news_articles___NODE")
  strapi_id: Int
}

type STRAPI_COUNCIL implements Node @derivedTypes @dontInfer {
  name: String
  position: String
  description: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  publishedAt: Date @dateformat
  locale: String
  localizations: STRAPI_COUNCILLocalizations
  photo: STRAPI__MEDIA @link(by: "id", from: "photo___NODE")
  strapi_id: Int
}

type STRAPI_COUNCILLocalizations @derivedTypes {
  data: [STRAPI_COUNCILLocalizationsData]
}

type STRAPI_COUNCILLocalizationsData @derivedTypes {
  id: Int
  attributes: STRAPI_COUNCILLocalizationsDataAttributes
}

type STRAPI_COUNCILLocalizationsDataAttributes {
  name: String
  position: String
  description: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  publishedAt: Date @dateformat
  locale: String
}`