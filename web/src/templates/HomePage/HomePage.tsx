// HomePage:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Button, Flex, Heading, Text } from 'theme-ui'

// Components
import Section from '../../components/Section'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Section>
        <Heading as="h1" mb={2}>
          The dWeb Summit{' '}
          <Text as="span" sx={{ fontFamily: `display` }}>
            2021
          </Text>
        </Heading>
        <Text as="p" mb={6}>
          Golem generated the quick testnet for lots of circulating supply! When
          Nexo thinking many constant private key, Dash based on a genesis
          block! Maker left few confirmation at a IPO.
        </Text>

        <Flex mb={6}>
          <Button mr={2} variant="primary">
            Buy Tickets
          </Button>
          <Button mr={2} bg="secondary" color="black" variant="primary">
            Buy Tickets
          </Button>
          <Button variant="secondary">Buy Tickets</Button>
        </Flex>

        <Heading as="h2" mb={2}>
          Bitcoin Cash identified lots of mainnet.
        </Heading>
        <Heading as="h3" mb={2}>
          Bitcoin Cash identified lots of mainnet.
        </Heading>
        <Heading as="h4" mb={2}>
          Bitcoin Cash identified lots of mainnet.
        </Heading>
        <Heading as="h5" mb={3}>
          Bitcoin Cash identified lots of mainnet.
        </Heading>
        <Heading as="h6">Bitcoin Cash identified lots of mainnet.</Heading>
      </Section>

      <Section bg="text" color="gray">
        <Heading as="h1" mb={2}>
          The dWeb Summit{' '}
          <Text as="span" sx={{ fontFamily: `display` }}>
            2021
          </Text>
        </Heading>
        <Text as="p" mb={6}>
          Golem generated the quick testnet for lots of circulating supply! When
          Nexo thinking many constant private key, Dash based on a genesis
          block! Maker left few confirmation at a IPO.
        </Text>
      </Section>

      <Section bg="primary">
        <Heading as="h1" mb={2}>
          The dWeb Summit{' '}
          <Text as="span" sx={{ fontFamily: `display` }}>
            2021
          </Text>
        </Heading>
        <Text as="p" mb={6}>
          Golem generated the quick testnet for lots of circulating supply! When
          Nexo thinking many constant private key, Dash based on a genesis
          block! Maker left few confirmation at a IPO.
        </Text>
      </Section>

      <Section bg="secondary">
        <Heading as="h1" mb={2}>
          The dWeb Summit{' '}
          <Text as="span" sx={{ fontFamily: `display` }}>
            2021
          </Text>
        </Heading>
        <Text as="p" mb={6}>
          Golem generated the quick testnet for lots of circulating supply! When
          Nexo thinking many constant private key, Dash based on a genesis
          block! Maker left few confirmation at a IPO.
        </Text>
      </Section>

      <Section bg="tertiary">
        <Heading as="h1" mb={2}>
          The dWeb Summit{' '}
          <Text as="span" sx={{ fontFamily: `display` }}>
            2021
          </Text>
        </Heading>
        <Text as="p" mb={6}>
          Golem generated the quick testnet for lots of circulating supply! When
          Nexo thinking many constant private key, Dash based on a genesis
          block! Maker left few confirmation at a IPO.
        </Text>
      </Section>

      <Section bg="accent">
        <Heading as="h1" mb={2}>
          The dWeb Summit{' '}
          <Text as="span" sx={{ fontFamily: `display` }}>
            2021
          </Text>
        </Heading>
        <Text as="p" mb={6}>
          Golem generated the quick testnet for lots of circulating supply! When
          Nexo thinking many constant private key, Dash based on a genesis
          block! Maker left few confirmation at a IPO.
        </Text>
      </Section>
    </S.HomePage>
  )
}

export default HomePage
