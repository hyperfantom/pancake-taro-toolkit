import React, { useEffect, useState } from 'react'
import { Box, Skeleton } from '@pancake-taro-toolkit/uikit'
import Provider from 'src/Provider'

const Default: React.FC<any> = (args) => {
  return <Skeleton {...args} />
}

const Text = (args) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return <Box style={{ width: 200 }}>{loading ? <Skeleton {...args} /> : 'H1'}</Box>
}
const ParentSize: React.FC = (args) => {
  return (
    <Box style={{ width: 200, height: 90 }}>
      {' '}
      <Skeleton {...args} />{' '}
    </Box>
  )
}
export default function Page() {
  return (
    <Provider>
      <Default animation="waves" width="100px" height="100px" />
      <Default animation="pulse" variant="circle" width="100px" height="100px" />
      <Text />
      <ParentSize />
    </Provider>
  )
}
