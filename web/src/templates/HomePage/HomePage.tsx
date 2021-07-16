// HomePage:

// ___________________________________________________________________

import React from 'react'
import Marquee from 'react-fast-marquee'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Button, Flex, Heading, Text, Grid } from 'theme-ui'

// Components
import Section from '../../components/Section'

// ___________________________________________________________________

const MarqueeProps = {
  gradient: false,
  speed: 100,
}

const Hero: React.FC = () => {
  return (
    <S.Hero>
      <Box>
        <Box mt={7}>
          <Marquee {...MarqueeProps}>
            <Heading as="h1" mr={1}>
              dWeb Summit Miami —
            </Heading>
          </Marquee>
        </Box>
        <Box mb={7}>
          <Marquee {...MarqueeProps} direction="right" speed={250}>
            <Heading as="h1" mr={1}>
              October 14th, 2021 —
            </Heading>
          </Marquee>
        </Box>
      </Box>
    </S.Hero>
  )
}

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Hero />
      <Section border={false} pt={0}>
        <Flex className="inner">
          <Box sx={{ flex: 0.5 }}>
            <Text as="p">Help discover the new web.</Text>
          </Box>
        </Flex>
      </Section>

      <Section border={true} pt={9}>
        <Flex sx={{ justifyContent: 'center' }}>
          <Box sx={{ flex: 0.75 }}>
            <Heading as="h3" sx={{ textAlign: 'center' }}>
              Just a lil something for the crypto cats out there in the
              interwebs.
            </Heading>
          </Box>
        </Flex>
      </Section>

      <Section bg="primary" color="black" border={true}>
        <Heading mb={7} className="text--sm">
          Speakers:
        </Heading>

        <Box>
          <Grid columns={[2, 3]} gap={theme.gutter.axis}>
            {speakers.map((speaker, key) => (
              <Box key={key}>
                <Box sx={{ bg: 'black', height: '555px', width: '100%' }} />
                <Heading as="h3" mb={4}>
                  {speaker.name}
                </Heading>
              </Box>
            ))}
          </Grid>
        </Box>

        <Flex sx={{ justifyContent: 'center', width: '100%' }}>
          <Heading className="text--xxl">+ more TBA</Heading>
        </Flex>
      </Section>
    </S.HomePage>
  )
}

export default HomePage

const speakers = [
  {
    name: 'Zach Vorhies',
  },
  {
    name: 'Mathew Zipkin',
  },
  {
    name: 'Eric Meltzer',
  },
  {
    name: 'Ari Paul',
  },
  {
    name: 'Chjango',
  },
  {
    name: 'Eva Beylin',
  },
  {
    name: 'Balaji Srinivasan',
  },
]
