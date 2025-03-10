import { ThemeConfig } from 'antd';

const colorScheme: ThemeConfig["token"] = {
  colorPrimary: "#06ad99",
  colorWarning: "#DE8540",
  colorInfo: "#06ad99",
  colorSuccess: "#00ae43",
  colorError: "#db2955",
  colorBorder: "#D2D1D1",
  colorText: "#191919",
  colorTextDisabled: "#BFBFBF",
  colorTextDescription: "#575757",
  // button
  colorBgLayout: "#EDF0F5",
  colorPrimaryHover: "#4DC6B8",
  colorPrimaryActive: "#009281",
  colorWhite: "#FFFFFF",
  blue4: "#f4faff",
  blue3: "#2e7cf6",
}
export const themeConfig: ThemeConfig["token"] = {
  borderRadius: 4,
  fontFamily: "'Noto Sans JP', sans-serif",
}
export const antdThemeConfig = (theme: ThemeConfig) => {
  return {
    theme: {
      token: {
        ...colorScheme,
        ...themeConfig,
      },
      components: {
        Alert: {
          withDescriptionPadding: "12px 16px",
          borderRadiusLG: 8,
          colorText: colorScheme.colorError,
          colorTextHeading: colorScheme.colorError,
          colorError: colorScheme.colorError,
          colorErrorBorder: colorScheme.colorError,
        },
        Card: {
          padding: 8,
          paddingLG: 16,
          fontWeightStrong: 500,
        },
        Input: {
          controlHeightLG: 48,
          controlHeight: 40,
          controlHeightSM: 36,
          inputFontSizeLG: 14,
          colorBgContainer: "#fff",
        },
        DatePicker: {
          controlHeight: 40,
          controlHeightLG: 48,
          controlHeightSM: 36,
          inputFontSizeLG: 14,
          colorBgContainer: "#fff",
        },
        Radio: {
          dotSize: 10,
          radioSize: 20,
        },
        Select: {
          controlHeight: 40,
          fontSizeIcon: 12,
          controlHeightSM: 36,
          controlOutlineWidth: 1,
          colorPrimary: `${colorScheme.colorPrimary}`,
          colorBorder: `${colorScheme.colorBorder}`,
          optionSelectedBg: `${colorScheme.colorBgBase}`,
          multipleItemBg: `#fff`,
          multipleItemBorderColor: `${colorScheme.colorBgBase}`,
          colorPrimaryHover: `${colorScheme.colorBorder}`,
          colorIcon: `#191919`,
          colorBgContainer: "#fff",
        },
        Switch: {
          colorPrimary: `${colorScheme.colorPrimary}`,
        },
        Button: {
          controlHeight: 36,
        },
        Checkbox: {
          borderRadiusSM: 2,
          controlInteractiveSize: 14,
        },
        Tabs: {
          cardHeight: 52,
          margin: 0,
          cardPadding: "8px 20px",
          cardGutter: 10,
          itemSelectedColor: "rgb(55, 255, 232)",
          itemHoverColor: "rgb(55, 255, 232)",
          itemColor: "rgb(255, 255, 255)",
          colorBgContainer: "rgba(255, 255, 255, 1)",
          borderRadius: 100,
          lineType: "none",
          horizontalMargin: "0px",
        },
        Layout: {
          headerBg: "#001b2e",
          headerHeight: 40 + 52,
          headerPadding: "0 24px",
          footerPadding: "12px 48px",
          footerBg: "#fff",
        },
        Typography: {
          fontSizeHeading1: 20,
          lineHeightHeading1: 1.4,
          fontSizeHeading2: 16,
          fontSizeHeading3: 14,
          fontSizeHeading4: 12,
          fontSizeHeading5: 12,
          fontSize: 14,
          fontSizeSM: 12,
          fontSizeLG: 16,
          titleMarginBottom: 0,
          margin: 0,
          marginXS: 0,
          marginXXS: 0,
          fontWeightStrong: 500,
        },
        Table: {
          headerBg: "white",
          headerSplitColor: colorScheme.colorBorder,
        },
        Badge: {
          indicatorHeightSM: 14,
          textFontSizeSM: 12,
          fontSize: 10,
          lineWidth: 0,
        },
        Tag: {
          fontSize: 14,
          fontSizeSM: 12,
          lineHeightSM: 2,
        },
        Modal: {
          zIndexPopupBase: 1051,
          padding: 0,
          paddingLG: 0,
          paddingSM: 0,
          borderRadiusLG: 4,
          paddingContentHorizontal: 0,
          boxShadow:
            "2px 5px 12px 0px #0000001A,  9px 21px 22px 0px #00000017,19px 46px 30px 0px #0000000D,34px 82px 36px 0px #00000003,53px 128px 39px 0px #00000000",
        },
      },
      ...theme
    },
  }
}
