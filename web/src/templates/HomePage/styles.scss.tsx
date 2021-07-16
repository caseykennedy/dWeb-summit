// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const HomePage = styled(Box)``

export const Hero = styled(Flex)`
  display: flex;
  justify-content: center;
  min-height: 50vh;

  .inner {
    display: flex;

    margin: 0 auto;
    height: 100%;
    max-width: ${theme.maxWidth};
    width: 100%;
  }
`

export const Speakers = styled(Box)`
  .figure {
    filter: grayscale(100);
  }
`