import React from 'react'
import styled from '@binance/mp-styled'
import { Image as Img, Box, Flex, Text, TokenImage } from '@binance/mp-pancake-uikit'
import Provider from 'src/Provider'
import tokenList from './tokens'

const Image: React.FC = () => {
  return (
    <Box>
      <Img src="https://via.placeholder.com/800x400" width={800} height={400} alt="test" />
      <Box>Image</Box>
    </Box>
  )
}
const StyledBox = styled(Box)`
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  flex-basis: 100px;
  text-align: center;
`
const TokenImages: React.FC = () => {
  const tokens = Object.values(tokenList).filter((token) => !!token?.address)
  return (
    <Flex flexWrap="wrap">
      {tokens.map((token) => {
        const src = `https://pancakeswap.finance/images/tokens/${token.address[56]}.svg`

        return (
          <StyledBox key={token.symbol} p="16px">
            <Text fontSize="14px" color="textSubtle">
              {token.symbol}
            </Text>
            <TokenImage src={src} height={64} width={64} title={token.symbol} />
          </StyledBox>
        )
      })}
    </Flex>
  )
}
export default function Page() {
  return (
    <Provider>
      <Image />
      <TokenImages />
    </Provider>
  )
}
