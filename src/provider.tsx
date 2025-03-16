import { ConfigProvider, ThemeConfig } from 'antd'
import React from 'react'
import { antdThemeConfig } from './theme'

interface Props {
    children: React.ReactNode
    themeOverrides?: ThemeConfig
}
export const Provider = ({children, themeOverrides}: Props) => {
    const theme=antdThemeConfig(themeOverrides)
  return (
    <ConfigProvider theme={theme as ThemeConfig}>{children}</ConfigProvider>
  )
}
