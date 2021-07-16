// HomePage:

// ___________________________________________________________________

import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Marquee from 'react-fast-marquee'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Button, Flex, Heading, Text, Grid } from 'theme-ui'

// Components
import Section from '../../components/Section'
import Newsletter from './Newsletter'

// Data
import useSpeakers from '../../hooks/useSpeakers'

// Vectors
import Airplane from '../../../static/airplane.svg'
import CloudA from '../../../static/cloud-a.svg'
import CloudB from '../../../static/cloud-b.svg'
import CloudC from '../../../static/cloud-c.svg'
import TreesThree from '../../../static/trees-three.svg'
import TreesTwo from '../../../static/trees-two.svg'

// ___________________________________________________________________

const MarqueeProps = {
  gradient: false,
  speed: 75,
}

const Speakers: React.FC = () => {
  const speakers = useSpeakers()
  return (
    <S.Speakers>
      <Section border={true} pt={9}>
        <Heading mb={3} className="text--lg">
          Speakers:
        </Heading>

        <Box>
          <Grid columns={[1, 2]} gap={[5, 6]}>
            {speakers.map(({ node: speaker }, key) => (
              <Flex className="card" key={key}>
                <Box className="tag">#{speaker.topic}</Box>
                <Box className="figure">
                  <GatsbyImage
                    image={speaker.figure.asset.gatsbyImageData}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={speaker.name}
                  />
                </Box>
                <Heading sx={{ fontWeight: 700 }} className="text--lg">
                  {speaker.name}
                </Heading>
                <Text
                  sx={{ fontWeight: 600, lineHeight: 1.25 }}
                  className="text--md"
                >
                  {speaker.company && (
                    <>
                      {speaker.company}, <br />
                    </>
                  )}
                  {speaker.position && speaker.position}
                </Text>
              </Flex>
            ))}
          </Grid>
        </Box>

        <Flex sx={{ justifyContent: 'center', width: '100%' }}>
          <Text className="text--xxl">+ more TBA</Text>
        </Flex>
      </Section>
    </S.Speakers>
  )
}

const Hero: React.FC = () => {
  return (
    <S.Hero>
      <Box className="decorator">
        <Box className="decorator__right">
          <TreesTwo />
        </Box>
        <Box className="decorator__left">
          <TreesThree />
        </Box>
      </Box>

      <Marquee {...MarqueeProps} direction="right" speed={55}>
        <Airplane />
      </Marquee>
      <Box sx={{ mt: `calc(${theme.space[4]} * -2)` }}>
        <Marquee {...MarqueeProps} direction="right" speed={14}>
          <Box sx={{ pl: '60vw' }}>
            <CloudA />
          </Box>
        </Marquee>
      </Box>

      <Box sx={{ mt: `calc(${theme.space[5]} * -2)` }}>
        <Marquee {...MarqueeProps} direction="right" speed={8}>
          <Box sx={{ pl: '25vw' }}>
            <CloudB />
          </Box>
        </Marquee>
      </Box>

      <Box sx={{ mt: `calc(${theme.space[4]} * -3)`, ml: '3vw' }}>
        <Marquee {...MarqueeProps} direction="right" speed={5}>
          <CloudC />
        </Marquee>
      </Box>
    </S.Hero>
  )
}

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Hero />
      <Section border={true}>
        <Flex className="inner">
          <Box sx={{ flex: 0.5 }}>
            <Text as="p">It's a new day on the internet.</Text>
          </Box>
        </Flex>
      </Section>

      <Section border={true} pt={9}>
        <Flex sx={{ justifyContent: 'center' }}>
          <Box sx={{ flex: [1, 0.75] }}>
            <Heading as="h3" sx={{ fontWeight: 400, textAlign: 'center' }}>
              The dWeb gateway opens with a Handshake domain.
            </Heading>
          </Box>
        </Flex>
      </Section>

      <Speakers />

      <Section bg="muted" border={true} pt={9}>
        <Heading mb={3} className="text--lg">
          Features:
        </Heading>

        <Flex sx={{ justifyContent: 'center' }}>
          <Box sx={{ flex: 0.75, textAlign: 'center' }}>
            <Box bg="black" p={2}>
              <Grid columns={1} gap={2}>
                <Box bg="muted" p={[5, 6]}>
                  <Heading as="h3">NFT Auction</Heading>
                </Box>
                <Box bg="muted" p={[5, 6]}>
                  <Heading as="h3">Psychedelic Frick Frack Casino</Heading>
                </Box>
                <Box bg="muted" p={[5, 6]}>
                  <Heading as="h3">"Best Frens" Mixer</Heading>
                </Box>
              </Grid>
            </Box>

            <Flex sx={{ mt: 5, justifyContent: 'center', width: '100%' }}>
              <Text className="text--lg">+ more TBA</Text>
            </Flex>
          </Box>
        </Flex>
      </Section>

      <Section bg="black" color="white" border={true} pt={9}>
        <Flex sx={{ justifyContent: 'center' }}>
          <Box sx={{ flex: 0.75, textAlign: 'center' }}>
            <Heading as="h3" mb={2}>Stay informed</Heading>
            <Newsletter />
          </Box>
        </Flex>
      </Section>

      <Section bg="accent" border={true} pt={9}>
        <Flex sx={{ justifyContent: 'center' }}>
          <Box sx={{ flex: 0.75, textAlign: 'center' }}>
            <Heading as="h3" mb={2}>Follow us on Twitter</Heading>
            <Text as="p">@dWebSummit</Text>
          </Box>
        </Flex>
      </Section>

      <Section border={true} maxWidth="100%" pr={0} pl={0}>
        <Box mt={7}>
          <Marquee {...MarqueeProps}>
            <Text mr={1} className="text--xxl">
              dWeb Summit Miami —
            </Text>
          </Marquee>
        </Box>
        <Box mb={7}>
          <Marquee {...MarqueeProps} direction="right">
            <Text mr={1} className="text--xxl">
              October 14th, 2021 —
            </Text>
          </Marquee>
        </Box>
      </Section>
    </S.HomePage>
  )
}

export default HomePage
