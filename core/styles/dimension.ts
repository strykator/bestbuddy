import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

// 2014
const iPhone6 = {
  WIDTH: 375,
  HEIGHT: 667
}
const iPhone6Plus = {
  WIDTH: 414,
  HEIGHT: 736
}

// 2015
const iPhone6s = {
  ...iPhone6
}
const iPhone6sPlus = {
  ...iPhone6Plus
}

// 03/2016
const iPhoneSE = {
  WIDTH: 320,
  HEIGHT: 568
}

// 09/2016
const iPhone7 = {
  ...iPhone6
}
const iPhone7Plus = {
  ...iPhone6Plus
}

// 09/2017
const iPhone8 = {
  ...iPhone6
}
const iPhone8Plus = {
  ...iPhone6Plus
}

// 11/2017
const iPhoneX = {
  WIDTH: 375,
  HEIGHT: 812
}

// 2018
const iPhoneXS = {
  ...iPhoneX
}
const iPhoneXSMax = {
  WIDTH: 414,
  HEIGHT: 896
}
const iPhoneXR = {
  ...iPhoneXSMax
}

// 2019
const iPhone11 = {
  ...iPhoneXSMax
}
const iPhone11Pro = {
  ...iPhoneX
}
const iPhone11Max = {
  ...iPhoneXSMax
}

export const getResponsiveHeight = h => {
  return height * (h / 100)
}

export const getResponsiveWidth = w => {
  return width * (w / 100)
}

const dimension = {
  fullWidth: width,
  fullHeight: height
}

export default dimension
