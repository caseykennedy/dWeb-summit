// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const HomePage = styled(Box)`
  width: 100%;

  @media ${theme.mq.tablet} {
  }

  .support {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;

    @media ${theme.mq.tablet} {
      flex-direction: row;
    }

    .btn {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      border: ${theme.border};
      font-family: ${theme.fonts.mono};
      padding: ${theme.space[4]};
      width: 100%;

      &:last-child {
        margin-top: ${theme.space[4]};

        @media ${theme.mq.tablet} {
          margin-top: 0;
        }
      }

      @media ${theme.mq.tablet} {
        padding: ${theme.space[5]};
      }

      span {
        svg {
          fill: ${theme.colors.white};
        }
      }

      &:hover {
        /* background: ${theme.colors.black}; */
        border-color: ${theme.colors.primary};
        color: ${theme.colors.primary};

        span {
          svg {
            fill: ${theme.colors.black};
          }
        }
      }
    }
  }

  .ethos {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${theme.colors.black};
    border-top: ${theme.border};
    position: relative;
    margin-bottom: calc(${theme.space[5]} * -5);
    min-height: 175px;

    &::after {
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(255, 255, 255, 0) 63%
      );

      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }

    .message {
      color: ${theme.colors.white};
      text-align: center;

      max-width: 1024px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .wallpaper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 0;
      mix-blend-mode: hard-light;
      opacity: 0.6;
    }
  }
`

export const Introduction = styled(Box)`
  .heading {
    .hns {
      font-weight: 500;

      svg {
        width: 20px;

        @media ${theme.mq.tablet} {
          width: 28px;
        }
      }
    }
  }
`

export const AboutUs = styled(Box)`
  .decorator__a {
    position: absolute;
    top: calc(${theme.space[4]} * -6);
    right: 0;

    @media ${theme.mq.tablet} {
      top: calc(${theme.space[4]} * -7);
      right: calc(${theme.space[4]} * 2);
    }

    @media ${theme.mq.desktop} {
      top: calc(${theme.space[4]} * -4);
      right: calc(${theme.space[4]} * 4);
    }

    svg {
      width: 100px;

      @media ${theme.mq.tablet} {
        width: 150px;
      }

      @media ${theme.mq.desktop} {
        width: 225px;
      }
    }
  }

  .decorator__b {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: calc(${theme.space[4]} * 4);
    left: 30%;

    @media ${theme.mq.tablet} {
      bottom: calc(${theme.space[4]} * 4);
      left: 50%;
    }

    @media ${theme.mq.desktop} {
      bottom: calc(${theme.space[4]} * 1);
      left: 47%;
    }

    svg {
      width: 50px;

      @media ${theme.mq.tablet} {
        width: 100px;
      }

      @media ${theme.mq.desktop} {
        width: 140px;
      }
    }
  }

  .decorator__c {
    position: absolute;
    top: calc(${theme.space[4]} * -4);
    right: ${theme.space[4]};

    @media ${theme.mq.tablet} {
      top: calc(${theme.space[4]} * -7);
      right: calc(${theme.space[4]} * 2);
    }

    @media ${theme.mq.desktop} {
      top: calc(${theme.space[4]} * -4);
      right: calc(${theme.space[4]} * 4);
    }

    svg {
      width: 25px;

      @media ${theme.mq.tablet} {
        width: 58px;
      }
    }
  }
`
