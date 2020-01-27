import { Dimensions } from 'react-native'

const responsiveFontSize = f => {
  const { width } = Dimensions.get('window')
  const tempHeight = (16 / 9) * width
  return Math.sqrt(Math.pow(tempHeight, 2) + Math.pow(width, 2)) * (f / 100)
}

export const font = {
  size: {
    xxxxl: responsiveFontSize(10),
    xxxl: responsiveFontSize(8),
    xxl: responsiveFontSize(4),
    xl: responsiveFontSize(2.85),
    l: responsiveFontSize(2.4),
    m: responsiveFontSize(2),
    s: responsiveFontSize(1.68),
    xs: responsiveFontSize(1.54),
    xxs: responsiveFontSize(1.37),
    xxxs: responsiveFontSize(1.2)
  },
  type: {
    bold: 'Raleway-Bold',
    semiBold: 'Raleway-SemiBold',
    medium: 'Raleway-Medium',
    regular: 'Raleway-Regular'
  }
}
