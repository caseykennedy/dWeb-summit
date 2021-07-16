// useSpeakers hook
// Hook for querying foundation people

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const useSpeakers = () => {
  const data = useStaticQuery<SpeakerShape>(graphql`
    query SpeakerQuery {
      speakers: allSanitySpeaker(sort: { order: DESC, fields: name }) {
        edges {
          node {
            _createdAt
            _id
            _rawBio
            company
            figure {
              asset {
                gatsbyImageData(
                  width: 200
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                )
                url
              }
            }
            isKeynote
            name
            position
            slug {
              current
            }
            topic
            twitter
          }
        }
      }
    }
  `)

  return data.speakers.edges
}

export default useSpeakers
