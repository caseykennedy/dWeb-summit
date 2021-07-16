// useSpeakers hook
// Hook for querying foundation people

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const useSpeakers = () => {
  const data = useStaticQuery<SpeakerShape>(graphql`
    query SpeakerQuery {
      speakers: allSanitySpeaker(sort: { order: ASC, fields: _createdAt }) {
        edges {
          node {
            _createdAt
            _id
            _rawBio
            figure {
              asset {
                gatsbyImageData(
                  width: 600
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                )
                url
              }
            }
            name
            slug {
              current
            }
            twitter
          }
        }
      }
    }
  `)

  return data.speakers.edges
}

export default useSpeakers
