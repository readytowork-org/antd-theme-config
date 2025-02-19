import { ThemeConfig } from 'antd/es/config-provider/context';
export const antdThemeConfig = (theme: ThemeConfig)=> {
return{
    theme: {
        token: { colorPrimary: "#ff4d4f" },
        ...theme
      },
}
}
