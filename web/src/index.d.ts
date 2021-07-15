// TODO: More consistent naming / nesting

type GatsbyImageDataShape = {
  aspectRatio: number
  backgroundColor: string
  breakpoints: number
  fit: string
  formats: string[]
  height: number
  images: any
  layout: string
  outputPixelDensities: number
  placeholder: string
  sizes: string
  width: number
}

// Post shape
// ___________________________________________________________________

type PostShape = {
  posts: {
    edges: PostEdges[]
  }
}

type PostEdges = {
  node: PostQuery
}

type PostData = {
  post: PostQuery
}

type PostQuery = {
  _rawFigure: string
  _rawExcerpt: string
  _rawBody: string
  _id: string
  authors: PostAuthor
  categories: {
    title: string
  }[]
  figure: {
    alt: string
    asset: {
      gatsbyImageData: IGatsbyImageData
      url: string
    }
    caption: string
  }
  title: string
  publishedAt: string
  slug: {
    current: string
  }
  tags: {
    tag: string
  }[]
  sources: {
    title
    url
  }[]
}

type PostAuthor = {
  name: string
  role: string
  avatar: {
    asset: {
      gatsbyImageData: IGatsbyImageData
      url: string
    }
  }
}

type PostContextShape = {
  pageContext: {
    post: PostQuery
    prev: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
    next: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
  }
}

// Person shape
// ___________________________________________________________________

type PersonShape = {
  people: {
    edges: PersonEdges[]
  }
}

type PersonEdges = {
  node: PersonQuery
}

type PersonQuery = {
  _createdAt: string
  _id: string
  _rawBio: string
  avatar: {
    asset: {
      gatsbyImageData: IGatsbyImageData
      url: string
    }
  }
  name: string
  role: string
  slug: {
    current: string
  }
}
