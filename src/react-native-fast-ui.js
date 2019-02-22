//@flow
import { StyleSheet, Dimensions, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { isIphoneX } from "react-native-iphone-x-helper";

export const IS_ANDROID = Platform.OS == "android"; //gets the OS system
export const IS_IPHONE_X = isIphoneX();
export const SCREEN = Dimensions.get("screen"); //screen device
export const WINDOW = Dimensions.get("window"); // the value returned does not include the bottom navigation bar

export const SCREEN_WIDTH = SCREEN.width; //screen width
export const SCREEN_HEIGHT = SCREEN.height; //screen height
export const STATUSBAR_HEIGHT = getStatusBarHeight(); //statusbar height

//on Android and iOS (no iPhone X) returns the window height removed the statusbar height,
//on iPhone X returns the SafeAreaView height
export const WINDOW_HEIGHT = IS_IPHONE_X
  ? SCREEN_HEIGHT - 2 * STATUSBAR_HEIGHT
  : SCREEN_HEIGHT - STATUSBAR_HEIGHT;

export const NAVBAR_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT; //only for Android

/**
 * gets the a percent of the device width
 * @param {number} percent
 */
export function WP(percent: number): number {
  return (SCREEN_WIDTH * percent) / 100;
}

//value for the diagonalscreen usefull to create responsive contents
export const DIAGONAL_SCREEN = Math.sqrt(
  Math.pow(SCREEN_WIDTH, 2) + Math.pow(WINDOW.height, 2)
);

//function to create responsive font size
export function RF(percent: number): number {
  return DIAGONAL_SCREEN * (percent / 100);
}

export const styles = StyleSheet.create({
  c_white: {
    color: "#fff"
  },
  c_black: {
    color: "#000"
  },
  b_white: {
    backgroundColor: "#fff"
  },

  fill: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

  center: {
    alignItems: "center",
    justifyContent: "center"
  },

  //textAlign
  t_ac: { textAlign: "center" },
  t_aa: { textAlign: "auto" },
  t_al: { textAlign: "left" },
  t_ar: { textAlign: "right" },
  t_aj: { textAlign: "justify" }, //solo IOS

  /*Layout Props*/

  //alignItems
  /*
     alignItems aligns children in the cross direction. For example, if children are flowing vertically, alignItems controls how they align horizontally. It works like align-items in CSS (default: stretch).
     */
  ai_c: { alignItems: "center" } /*alignItems: 'center'*/,
  ai_fs: { alignItems: "flex-start" } /*alignItems: 'flex-start'*/,
  ai_fe: { alignItems: "flex-end" } /*alignItems: 'flex-end'*/,
  ai_st: { alignItems: "stretch" } /*alignItems: 'stretch'*/,
  ai_b: { alignItems: "baseline" } /*alignItems: 'baseline'*/,

  //alignSelf
  /*
     alignSelf controls how a child aligns in the cross direction, overriding the alignItems of the parent. It works like align-self in CSS (default: auto).
     */
  as_c: { alignSelf: "center" },
  as_fs: { alignSelf: "flex-start" },
  as_fe: { alignSelf: "flex-end" },
  as_st: { alignSelf: "stretch" },
  as_b: { alignSelf: "baseline" },

  //alignContent
  /*
     alignContent controls how rows align in the cross direction, overriding the alignContent of the parent.
     */
  ac_c: { alignContent: "center" },
  ac_fs: { alignContent: "flex-start" },
  ac_fe: { alignContent: "flex-end" },
  ac_fst: { alignContent: "stretch" },
  ac_sb: { alignContent: "space-between" },
  ac_sa: { alignContent: "space-around" },

  //justifyContent
  /*
     justifyContent aligns children in the main direction. For example, if children are flowing vertically, justifyContent controls how they align vertically. It works like justify-content in CSS (default: flex-start).
     */
  jc_c: { justifyContent: "center" },
  jc_fs: { justifyContent: "flex-start" },
  jc_fe: { justifyContent: "flex-end" },
  jc_sb: { justifyContent: "space-between" },
  jc_sa: { justifyContent: "space-around" },

  flex_1: { flex: 1 },

  //flex firecction
  flex_r: { flexDirection: "row" }, //flex firecction row
  flex_c: { flexDirection: "column" }, //flex firecction column
  flex_cr: { flexDirection: "column-reverse" }, //flex firecction column-reverse
  flex_rr: { flexDirection: "row-reverse" }, //flex firecction column-reverse
  flex_wrap: { flexWrap: "wrap" },

  //paddings
  pa_0: { padding: 0 },
  pa_5: { padding: 5 },
  pa_10: { padding: 10 },
  pa_15: { padding: 15 },
  pa_20: { padding: 20 },
  pa_25: { padding: 25 },
  pa_30: { padding: 30 },
  pa_35: { padding: 35 },
  pa_40: { padding: 40 },
  pa_45: { padding: 45 },
  pa_50: { padding: 50 },
  pa_55: { padding: 55 },
  pa_60: { padding: 60 },
  pa_65: { padding: 65 },
  pa_70: { padding: 70 },
  pa_75: { padding: 75 },
  pa_80: { padding: 80 },
  pa_85: { padding: 85 },
  pa_90: { padding: 90 },
  pa_95: { padding: 95 },
  pa_100: { padding: 100 },

  pa_l_0: { paddingLeft: 0 },
  pa_l_5: { paddingLeft: 5 },
  pa_l_10: { paddingLeft: 10 },
  pa_l_15: { paddingLeft: 15 },
  pa_l_20: { paddingLeft: 20 },
  pa_l_25: { paddingLeft: 25 },
  pa_l_30: { paddingLeft: 30 },
  pa_l_35: { paddingLeft: 35 },
  pa_l_40: { paddingLeft: 40 },
  pa_l_45: { paddingLeft: 45 },
  pa_l_50: { paddingLeft: 50 },
  pa_l_55: { paddingLeft: 55 },
  pa_l_60: { paddingLeft: 60 },
  pa_l_65: { paddingLeft: 65 },
  pa_l_70: { paddingLeft: 70 },
  pa_l_75: { paddingLeft: 75 },
  pa_l_80: { paddingLeft: 80 },
  pa_l_85: { paddingLeft: 85 },
  pa_l_90: { paddingLeft: 90 },
  pa_l_95: { paddingLeft: 95 },
  pa_l_100: { paddingLeft: 100 },

  pa_r_0: { paddingRight: 0 },
  pa_r_5: { paddingRight: 5 },
  pa_r_10: { paddingRight: 10 },
  pa_r_15: { paddingRight: 15 },
  pa_r_20: { paddingRight: 20 },
  pa_r_25: { paddingRight: 25 },
  pa_r_30: { paddingRight: 30 },
  pa_r_35: { paddingRight: 35 },
  pa_r_40: { paddingRight: 40 },
  pa_r_45: { paddingRight: 45 },
  pa_r_50: { paddingRight: 50 },
  pa_r_55: { paddingRight: 55 },
  pa_r_60: { paddingRight: 60 },
  pa_r_65: { paddingRight: 65 },
  pa_r_70: { paddingRight: 70 },
  pa_r_75: { paddingRight: 75 },
  pa_r_80: { paddingRight: 80 },
  pa_r_85: { paddingRight: 85 },
  pa_r_90: { paddingRight: 90 },
  pa_r_95: { paddingRight: 95 },
  pa_r_100: { paddingRight: 100 },

  pa_t_0: { paddingTop: 0 },
  pa_t_5: { paddingTop: 5 },
  pa_t_10: { paddingTop: 10 },
  pa_t_15: { paddingTop: 15 },
  pa_t_20: { paddingTop: 20 },
  pa_t_25: { paddingTop: 25 },
  pa_t_30: { paddingTop: 30 },
  pa_t_35: { paddingTop: 35 },
  pa_t_40: { paddingTop: 40 },
  pa_t_45: { paddingTop: 45 },
  pa_t_50: { paddingTop: 50 },
  pa_t_55: { paddingTop: 55 },
  pa_t_60: { paddingTop: 60 },
  pa_t_65: { paddingTop: 65 },
  pa_t_70: { paddingTop: 70 },
  pa_t_75: { paddingTop: 75 },
  pa_t_80: { paddingTop: 80 },
  pa_t_85: { paddingTop: 85 },
  pa_t_90: { paddingTop: 90 },
  pa_t_95: { paddingTop: 95 },
  pa_t_100: { paddingTop: 100 },

  pa_b_0: { paddingBottom: 0 },
  pa_b_5: { paddingBottom: 5 },
  pa_b_10: { paddingBottom: 10 },
  pa_b_15: { paddingBottom: 15 },
  pa_b_20: { paddingBottom: 20 },
  pa_b_25: { paddingBottom: 25 },
  pa_b_30: { paddingBottom: 30 },
  pa_b_35: { paddingBottom: 35 },
  pa_b_40: { paddingBottom: 40 },
  pa_b_45: { paddingBottom: 45 },
  pa_b_50: { paddingBottom: 50 },
  pa_b_55: { paddingBottom: 55 },
  pa_b_60: { paddingBottom: 60 },
  pa_b_65: { paddingBottom: 65 },
  pa_b_70: { paddingBottom: 70 },
  pa_b_75: { paddingBottom: 75 },
  pa_b_80: { paddingBottom: 80 },
  pa_b_85: { paddingBottom: 85 },
  pa_b_90: { paddingBottom: 90 },
  pa_b_95: { paddingBottom: 95 },
  pa_b_100: { paddingBottom: 100 },

  //padding vertical
  pa_ver_5: { paddingVertical: 5 },
  pa_ver_10: { paddingVertical: 10 },
  pa_ver_15: { paddingVertical: 15 },
  pa_ver_20: { paddingVertical: 20 },
  pa_ver_25: { paddingVertical: 25 },
  pa_ver_30: { paddingVertical: 30 },
  pa_ver_35: { paddingVertical: 35 },
  pa_ver_40: { paddingVertical: 40 },
  pa_ver_45: { paddingVertical: 45 },
  pa_ver_50: { paddingVertical: 50 },
  pa_ver_55: { paddingVertical: 55 },
  pa_ver_60: { paddingVertical: 60 },
  pa_ver_65: { paddingVertical: 65 },
  pa_ver_70: { paddingVertical: 70 },
  pa_ver_75: { paddingVertical: 75 },
  pa_ver_80: { paddingVertical: 80 },
  pa_ver_85: { paddingVertical: 85 },
  pa_ver_90: { paddingVertical: 90 },
  pa_ver_95: { paddingVertical: 95 },
  pa_ver_100: { paddingVertical: 100 },

  //padding horizaontal
  pa_hor_5: { paddingHorizontal: 5 },
  pa_hor_10: { paddingHorizontal: 10 },
  pa_hor_15: { paddingHorizontal: 15 },
  pa_hor_20: { paddingHorizontal: 20 },
  pa_hor_25: { paddingHorizontal: 25 },
  pa_hor_30: { paddingHorizontal: 30 },
  pa_hor_35: { paddingHorizontal: 35 },
  pa_hor_40: { paddingHorizontal: 40 },
  pa_hor_45: { paddingHorizontal: 45 },
  pa_hor_50: { paddingHorizontal: 50 },
  pa_hor_55: { paddingHorizontal: 55 },
  pa_hor_60: { paddingHorizontal: 60 },
  pa_hor_65: { paddingHorizontal: 65 },
  pa_hor_70: { paddingHorizontal: 70 },
  pa_hor_75: { paddingHorizontal: 75 },
  pa_hor_80: { paddingHorizontal: 80 },
  pa_hor_85: { paddingHorizontal: 85 },
  pa_hor_90: { paddingHorizontal: 90 },
  pa_hor_95: { paddingHorizontal: 95 },
  pa_hor_100: { paddingHorizontal: 100 },

  //margenes
  ma_0: { margin: 0 },
  ma_5: { margin: 5 },
  ma_10: { margin: 10 },
  ma_15: { margin: 15 },
  ma_20: { margin: 20 },
  ma_25: { margin: 25 },
  ma_30: { margin: 30 },
  ma_35: { margin: 35 },
  ma_40: { margin: 40 },
  ma_45: { margin: 45 },
  ma_50: { margin: 50 },
  ma_55: { margin: 55 },
  ma_60: { margin: 60 },
  ma_65: { margin: 65 },
  ma_70: { margin: 70 },
  ma_75: { margin: 75 },
  ma_80: { margin: 80 },
  ma_85: { margin: 85 },
  ma_90: { margin: 90 },
  ma_95: { margin: 95 },
  ma_100: { margin: 100 },

  ma_l_0: { marginLeft: 0 },
  ma_l_5: { marginLeft: 5 },
  ma_l_10: { marginLeft: 10 },
  ma_l_15: { marginLeft: 15 },
  ma_l_20: { marginLeft: 20 },
  ma_l_25: { marginLeft: 25 },
  ma_l_30: { marginLeft: 30 },
  ma_l_35: { marginLeft: 35 },
  ma_l_40: { marginLeft: 40 },
  ma_l_45: { marginLeft: 45 },
  ma_l_50: { marginLeft: 50 },
  ma_l_55: { marginLeft: 55 },
  ma_l_60: { marginLeft: 60 },
  ma_l_65: { marginLeft: 65 },
  ma_l_70: { marginLeft: 70 },
  ma_l_75: { marginLeft: 75 },
  ma_l_80: { marginLeft: 80 },
  ma_l_85: { marginLeft: 85 },
  ma_l_90: { marginLeft: 90 },
  ma_l_95: { marginLeft: 95 },
  ma_l_100: { marginLeft: 100 },

  ma_r_0: { marginRight: 0 },
  ma_r_5: { marginRight: 5 },
  ma_r_10: { marginRight: 10 },
  ma_r_15: { marginRight: 15 },
  ma_r_20: { marginRight: 20 },
  ma_r_25: { marginRight: 25 },
  ma_r_30: { marginRight: 30 },
  ma_r_35: { marginRight: 35 },
  ma_r_40: { marginRight: 40 },
  ma_r_45: { marginRight: 45 },
  ma_r_50: { marginRight: 50 },
  ma_r_55: { marginRight: 55 },
  ma_r_60: { marginRight: 60 },
  ma_r_65: { marginRight: 65 },
  ma_r_70: { marginRight: 70 },
  ma_r_75: { marginRight: 75 },
  ma_r_80: { marginRight: 80 },
  ma_r_85: { marginRight: 85 },
  ma_r_90: { marginRight: 90 },
  ma_r_95: { marginRight: 95 },
  ma_r_100: { marginRight: 100 },

  ma_t_0: { marginTop: 0 },
  ma_t_5: { marginTop: 5 },
  ma_t_10: { marginTop: 10 },
  ma_t_15: { marginTop: 15 },
  ma_t_20: { marginTop: 20 },
  ma_t_25: { marginTop: 25 },
  ma_t_30: { marginTop: 30 },
  ma_t_35: { marginTop: 35 },
  ma_t_40: { marginTop: 40 },
  ma_t_45: { marginTop: 45 },
  ma_t_50: { marginTop: 50 },
  ma_t_55: { marginTop: 55 },
  ma_t_60: { marginTop: 60 },
  ma_t_65: { marginTop: 65 },
  ma_t_70: { marginTop: 70 },
  ma_t_75: { marginTop: 75 },
  ma_t_80: { marginTop: 80 },
  ma_t_85: { marginTop: 85 },
  ma_t_90: { marginTop: 90 },
  ma_t_95: { marginTop: 95 },
  ma_t_100: { marginTop: 100 },

  ma_b_0: { marginBottom: 0 },
  ma_b_5: { marginBottom: 5 },
  ma_b_10: { marginBottom: 10 },
  ma_b_15: { marginBottom: 15 },
  ma_b_20: { marginBottom: 20 },
  ma_b_25: { marginBottom: 25 },
  ma_b_30: { marginBottom: 30 },
  ma_b_35: { marginBottom: 35 },
  ma_b_40: { marginBottom: 40 },
  ma_b_45: { marginBottom: 45 },
  ma_b_50: { marginBottom: 50 },
  ma_b_55: { marginBottom: 55 },
  ma_b_60: { marginBottom: 60 },
  ma_b_65: { marginBottom: 65 },
  ma_b_70: { marginBottom: 70 },
  ma_b_75: { marginBottom: 75 },
  ma_b_80: { marginBottom: 80 },
  ma_b_85: { marginBottom: 85 },
  ma_b_90: { marginBottom: 90 },
  ma_b_95: { marginBottom: 95 },
  ma_b_100: { marginBottom: 100 },
  ma_b_110: { marginBottom: 110 },
  ma_b_120: { marginBottom: 120 },
  ma_b_150: { marginBottom: 150 },

  //margin vertical
  ma_ver_0: { marginVertical: 0 },
  ma_ver_5: { marginVertical: 5 },
  ma_ver_10: { marginVertical: 10 },
  ma_ver_15: { marginVertical: 15 },
  ma_ver_20: { marginVertical: 20 },
  ma_ver_25: { marginVertical: 25 },
  ma_ver_30: { marginVertical: 30 },
  ma_ver_35: { marginVertical: 35 },
  ma_ver_40: { marginVertical: 40 },
  ma_ver_45: { marginVertical: 45 },
  ma_ver_50: { marginVertical: 50 },
  ma_ver_55: { marginVertical: 55 },
  ma_ver_60: { marginVertical: 60 },
  ma_ver_65: { marginVertical: 65 },
  ma_ver_70: { marginVertical: 70 },
  ma_ver_75: { marginVertical: 75 },
  ma_ver_80: { marginVertical: 80 },
  ma_ver_85: { marginVertical: 85 },
  ma_ver_90: { marginVertical: 90 },
  ma_ver_95: { marginVertical: 95 },
  ma_ver_100: { marginVertical: 100 },

  //margin horizontal
  ma_hor_0: { marginHorizontal: 0 },
  ma_hor_5: { marginHorizontal: 5 },
  ma_hor_10: { marginHorizontal: 10 },
  ma_hor_15: { marginHorizontal: 15 },
  ma_hor_20: { marginHorizontal: 20 },
  ma_hor_25: { marginHorizontal: 25 },
  ma_hor_30: { marginHorizontal: 30 },
  ma_hor_35: { marginHorizontal: 35 },
  ma_hor_40: { marginHorizontal: 40 },
  ma_hor_45: { marginHorizontal: 45 },
  ma_hor_50: { marginHorizontal: 50 },
  ma_hor_55: { marginHorizontal: 55 },
  ma_hor_60: { marginHorizontal: 60 },
  ma_hor_65: { marginHorizontal: 65 },
  ma_hor_70: { marginHorizontal: 70 },
  ma_hor_75: { marginHorizontal: 75 },
  ma_hor_80: { marginHorizontal: 80 },
  ma_hor_85: { marginHorizontal: 85 },
  ma_hor_90: { marginHorizontal: 90 },
  ma_hor_95: { marginHorizontal: 95 },
  ma_hor_100: { marginHorizontal: 100 },

  //left
  left_0: { left: 0 },
  left_5: { left: 5 },
  left_10: { left: 10 },
  left_15: { left: 15 },
  left_20: { left: 20 },
  left_25: { left: 25 },
  left_30: { left: 30 },
  left_35: { left: 35 },
  left_40: { left: 40 },
  left_45: { left: 45 },
  left_50: { left: 50 },
  left_55: { left: 55 },
  left_60: { left: 60 },
  left_65: { left: 65 },
  left_70: { left: 70 },
  left_75: { left: 75 },
  left_80: { left: 80 },
  left_85: { left: 85 },
  left_90: { left: 90 },
  left_95: { left: 95 },
  left_100: { left: 100 },

  //right
  right_0: { right: 0 },
  right_5: { right: 5 },
  right_10: { right: 10 },
  right_15: { right: 15 },
  right_20: { right: 20 },
  right_25: { right: 25 },
  right_30: { right: 30 },
  right_35: { right: 35 },
  right_40: { right: 40 },
  right_45: { right: 45 },
  right_50: { right: 50 },
  right_55: { right: 55 },
  right_60: { right: 60 },
  right_65: { right: 65 },
  right_70: { right: 70 },
  right_75: { right: 75 },
  right_80: { right: 80 },
  right_85: { right: 85 },
  right_90: { right: 90 },
  right_95: { right: 95 },
  right_100: { right: 100 },

  //top
  top_0: { top: 0 },
  top_5: { top: 5 },
  top_10: { top: 10 },
  top_15: { top: 15 },
  top_20: { top: 20 },
  top_25: { top: 25 },
  top_30: { top: 30 },
  top_35: { top: 35 },
  top_40: { top: 40 },
  top_45: { top: 45 },
  top_50: { top: 50 },
  top_55: { top: 55 },
  top_60: { top: 60 },
  top_65: { top: 65 },
  top_70: { top: 70 },
  top_75: { top: 75 },
  top_80: { top: 80 },
  top_85: { top: 85 },
  top_90: { top: 90 },
  top_95: { top: 95 },
  top_100: { top: 100 },

  //bottom
  bottom_0: { bottom: 0 },
  bottom_5: { bottom: 5 },
  bottom_10: { bottom: 10 },
  bottom_15: { bottom: 15 },
  bottom_20: { bottom: 20 },
  bottom_25: { bottom: 25 },
  bottom_30: { bottom: 30 },
  bottom_35: { bottom: 35 },
  bottom_40: { bottom: 40 },
  bottom_45: { bottom: 45 },
  bottom_50: { bottom: 50 },
  bottom_55: { bottom: 55 },
  bottom_60: { bottom: 60 },
  bottom_65: { bottom: 65 },
  bottom_70: { bottom: 70 },
  bottom_75: { bottom: 75 },
  bottom_80: { bottom: 80 },
  bottom_85: { bottom: 85 },
  bottom_90: { bottom: 90 },
  bottom_95: { bottom: 95 },
  bottom_100: { bottom: 100 },

  //tamaño de fuente
  f_5: {
    fontSize: RF(0.5)
  },
  f_6: {
    fontSize: RF(0.6)
  },
  f_7: {
    fontSize: RF(0.7)
  },
  f_8: {
    fontSize: RF(0.8)
  },
  f_9: {
    fontSize: RF(0.9)
  },
  f_10: {
    fontSize: RF(1.0)
  },

  f_11: {
    fontSize: RF(1.1)
  },

  f_12: {
    fontSize: RF(1.2)
  },

  f_13: {
    fontSize: RF(1.3)
  },

  f_14: {
    fontSize: RF(1.4)
  },

  f_15: {
    fontSize: RF(1.5)
  },

  f_16: {
    fontSize: RF(1.6)
  },

  f_17: {
    fontSize: RF(1.7)
  },

  f_18: {
    fontSize: RF(1.8)
  },

  f_19: {
    fontSize: RF(1.9)
  },

  f_20: {
    fontSize: RF(2.0)
  },

  f_21: {
    fontSize: RF(2.1)
  },

  f_22: {
    fontSize: RF(2.2)
  },

  f_23: {
    fontSize: RF(2.3)
  },

  f_24: {
    fontSize: RF(2.4)
  },

  f_25: {
    fontSize: RF(2.5)
  },

  f_26: {
    fontSize: RF(2.6)
  },

  f_27: {
    fontSize: RF(2.7)
  },

  f_28: {
    fontSize: RF(2.8)
  },

  f_29: {
    fontSize: RF(2.9)
  },

  f_30: {
    fontSize: RF(3.0)
  },

  f_31: {
    fontSize: RF(3.1)
  },

  f_32: {
    fontSize: RF(3.2)
  },

  f_33: {
    fontSize: RF(3.3)
  },

  f_34: {
    fontSize: RF(3.4)
  },

  f_35: {
    fontSize: RF(3.5)
  },

  f_36: {
    fontSize: RF(3.6)
  },

  f_37: {
    fontSize: RF(3.7)
  },

  f_38: {
    fontSize: RF(3.8)
  },

  f_39: {
    fontSize: RF(3.9)
  },

  f_40: {
    fontSize: RF(4.0)
  },

  f_41: {
    fontSize: RF(4.1)
  },

  f_42: {
    fontSize: RF(4.2)
  },

  f_43: {
    fontSize: RF(4.3)
  },

  f_44: {
    fontSize: RF(4.4)
  },

  f_45: {
    fontSize: RF(4.5)
  },

  f_46: {
    fontSize: RF(4.6)
  },

  f_47: {
    fontSize: RF(4.7)
  },

  f_48: {
    fontSize: RF(4.8)
  },

  f_49: {
    fontSize: RF(4.9)
  },

  f_50: {
    fontSize: RF(5.0)
  },

  f_51: {
    fontSize: RF(5.1)
  },

  f_52: {
    fontSize: RF(5.2)
  },

  f_53: {
    fontSize: RF(5.3)
  },

  f_54: {
    fontSize: RF(5.4)
  },

  f_55: {
    fontSize: RF(5.5)
  },

  f_56: {
    fontSize: RF(5.6)
  },

  f_57: {
    fontSize: RF(5.7)
  },

  f_58: {
    fontSize: RF(5.8)
  },

  f_59: {
    fontSize: RF(5.9)
  },

  f_60: {
    fontSize: RF(6.0)
  },

  f_61: {
    fontSize: RF(6.1)
  },

  f_62: {
    fontSize: RF(6.2)
  },

  f_63: {
    fontSize: RF(6.3)
  },

  f_64: {
    fontSize: RF(6.4)
  },

  f_65: {
    fontSize: RF(6.5)
  },

  f_66: {
    fontSize: RF(6.6)
  },

  f_67: {
    fontSize: RF(6.7)
  },

  f_68: {
    fontSize: RF(6.8)
  },

  f_69: {
    fontSize: RF(6.9)
  },

  f_70: {
    fontSize: RF(7.0)
  },

  f_71: {
    fontSize: RF(7.1)
  },

  f_72: {
    fontSize: RF(7.2)
  },

  f_73: {
    fontSize: RF(7.3)
  },

  f_74: {
    fontSize: RF(7.4)
  },

  f_75: {
    fontSize: RF(7.5)
  },

  f_76: {
    fontSize: RF(7.6)
  },

  f_77: {
    fontSize: RF(7.7)
  },

  f_78: {
    fontSize: RF(7.8)
  },

  f_79: {
    fontSize: RF(7.9)
  },

  f_80: {
    fontSize: RF(8.0)
  },

  f_81: {
    fontSize: RF(8.1)
  },

  f_82: {
    fontSize: RF(8.2)
  },

  f_83: {
    fontSize: RF(8.3)
  },

  f_84: {
    fontSize: RF(8.4)
  },

  f_85: {
    fontSize: RF(8.5)
  },

  f_86: {
    fontSize: RF(8.6)
  },

  f_87: {
    fontSize: RF(8.7)
  },

  f_88: {
    fontSize: RF(8.8)
  },

  f_89: {
    fontSize: RF(8.9)
  },

  f_90: {
    fontSize: RF(9.0)
  },

  f_91: {
    fontSize: RF(9.1)
  },

  f_92: {
    fontSize: RF(9.2)
  },

  f_93: {
    fontSize: RF(9.3)
  },

  f_94: {
    fontSize: RF(9.4)
  },

  f_95: {
    fontSize: RF(9.5)
  },

  f_96: {
    fontSize: RF(9.6)
  },

  f_97: {
    fontSize: RF(9.7)
  },

  f_98: {
    fontSize: RF(9.8)
  },

  f_99: {
    fontSize: RF(9.9)
  },

  f_100: {
    fontSize: RF(10.0)
  },

  f_10: {
    fontSize: RF(1.0)
  },

  f_11: {
    fontSize: RF(1.1)
  },

  f_12: {
    fontSize: RF(1.2)
  },

  f_13: {
    fontSize: RF(1.3)
  },

  f_14: {
    fontSize: RF(1.4)
  },

  f_15: {
    fontSize: RF(1.5)
  },

  f_16: {
    fontSize: RF(1.6)
  },

  f_17: {
    fontSize: RF(1.7)
  },

  f_18: {
    fontSize: RF(1.8)
  },

  f_19: {
    fontSize: RF(1.9)
  },

  f_20: {
    fontSize: RF(2.0)
  },

  f_21: {
    fontSize: RF(2.1)
  },

  f_22: {
    fontSize: RF(2.2)
  },

  f_23: {
    fontSize: RF(2.3)
  },

  f_24: {
    fontSize: RF(2.4)
  },

  f_25: {
    fontSize: RF(2.5)
  },

  f_26: {
    fontSize: RF(2.6)
  },

  f_27: {
    fontSize: RF(2.7)
  },

  f_28: {
    fontSize: RF(2.8)
  },

  f_29: {
    fontSize: RF(2.9)
  },

  f_30: {
    fontSize: RF(3.0)
  },

  f_31: {
    fontSize: RF(3.1)
  },

  f_32: {
    fontSize: RF(3.2)
  },

  f_33: {
    fontSize: RF(3.3)
  },

  f_34: {
    fontSize: RF(3.4)
  },

  f_35: {
    fontSize: RF(3.5)
  },

  f_36: {
    fontSize: RF(3.6)
  },

  f_37: {
    fontSize: RF(3.7)
  },

  f_38: {
    fontSize: RF(3.8)
  },

  f_39: {
    fontSize: RF(3.9)
  },

  f_40: {
    fontSize: RF(4.0)
  },

  f_41: {
    fontSize: RF(4.1)
  },

  f_42: {
    fontSize: RF(4.2)
  },

  f_43: {
    fontSize: RF(4.3)
  },

  f_44: {
    fontSize: RF(4.4)
  },

  f_45: {
    fontSize: RF(4.5)
  },

  f_46: {
    fontSize: RF(4.6)
  },

  f_47: {
    fontSize: RF(4.7)
  },

  f_48: {
    fontSize: RF(4.8)
  },

  f_49: {
    fontSize: RF(4.9)
  },

  f_50: {
    fontSize: RF(5.0)
  },

  f_51: {
    fontSize: RF(5.1)
  },

  f_52: {
    fontSize: RF(5.2)
  },

  f_53: {
    fontSize: RF(5.3)
  },

  f_54: {
    fontSize: RF(5.4)
  },

  f_55: {
    fontSize: RF(5.5)
  },

  f_56: {
    fontSize: RF(5.6)
  },

  f_57: {
    fontSize: RF(5.7)
  },

  f_58: {
    fontSize: RF(5.8)
  },

  f_59: {
    fontSize: RF(5.9)
  },

  f_60: {
    fontSize: RF(6.0)
  },

  f_61: {
    fontSize: RF(6.1)
  },

  f_62: {
    fontSize: RF(6.2)
  },

  f_63: {
    fontSize: RF(6.3)
  },

  f_64: {
    fontSize: RF(6.4)
  },

  f_65: {
    fontSize: RF(6.5)
  },

  f_66: {
    fontSize: RF(6.6)
  },

  f_67: {
    fontSize: RF(6.7)
  },

  f_68: {
    fontSize: RF(6.8)
  },

  f_69: {
    fontSize: RF(6.9)
  },

  f_70: {
    fontSize: RF(7.0)
  },

  f_71: {
    fontSize: RF(7.1)
  },

  f_72: {
    fontSize: RF(7.2)
  },

  f_73: {
    fontSize: RF(7.3)
  },

  f_74: {
    fontSize: RF(7.4)
  },

  f_75: {
    fontSize: RF(7.5)
  },

  f_76: {
    fontSize: RF(7.6)
  },

  f_77: {
    fontSize: RF(7.7)
  },

  f_78: {
    fontSize: RF(7.8)
  },

  f_79: {
    fontSize: RF(7.9)
  },

  f_80: {
    fontSize: RF(8.0)
  },

  f_81: {
    fontSize: RF(8.1)
  },

  f_82: {
    fontSize: RF(8.2)
  },

  f_83: {
    fontSize: RF(8.3)
  },

  f_84: {
    fontSize: RF(8.4)
  },

  f_85: {
    fontSize: RF(8.5)
  },

  f_86: {
    fontSize: RF(8.6)
  },

  f_87: {
    fontSize: RF(8.7)
  },

  f_88: {
    fontSize: RF(8.8)
  },

  f_89: {
    fontSize: RF(8.9)
  },

  f_90: {
    fontSize: RF(9.0)
  },

  f_91: {
    fontSize: RF(9.1)
  },

  f_92: {
    fontSize: RF(9.2)
  },

  f_93: {
    fontSize: RF(9.3)
  },

  f_94: {
    fontSize: RF(9.4)
  },

  f_95: {
    fontSize: RF(9.5)
  },

  f_96: {
    fontSize: RF(9.6)
  },

  f_97: {
    fontSize: RF(9.7)
  },

  f_98: {
    fontSize: RF(9.8)
  },

  f_99: {
    fontSize: RF(9.9)
  },

  f_100: {
    fontSize: RF(10.0)
  },

  //width with points max-width=500
  w_5: { width: 5 },
  w_10: { width: 10 },
  w_15: { width: 15 },
  w_20: { width: 20 },
  w_25: { width: 25 },
  w_30: { width: 30 },
  w_35: { width: 35 },
  w_40: { width: 40 },
  w_45: { width: 45 },
  w_50: { width: 50 },
  w_55: { width: 55 },
  w_60: { width: 60 },
  w_65: { width: 65 },
  w_70: { width: 70 },
  w_75: { width: 75 },
  w_80: { width: 80 },
  w_85: { width: 85 },
  w_90: { width: 90 },
  w_95: { width: 95 },
  w_100: { width: 100 },
  w_105: { width: 105 },
  w_110: { width: 110 },
  w_115: { width: 115 },
  w_120: { width: 120 },
  w_125: { width: 125 },
  w_130: { width: 130 },
  w_135: { width: 135 },
  w_140: { width: 140 },
  w_145: { width: 145 },
  w_150: { width: 150 },
  w_155: { width: 155 },
  w_160: { width: 160 },
  w_165: { width: 165 },
  w_170: { width: 170 },
  w_175: { width: 175 },
  w_180: { width: 180 },
  w_185: { width: 185 },
  w_190: { width: 190 },
  w_195: { width: 195 },
  w_200: { width: 200 },
  w_205: { width: 205 },
  w_210: { width: 210 },
  w_215: { width: 215 },
  w_220: { width: 220 },
  w_225: { width: 225 },
  w_230: { width: 230 },
  w_235: { width: 235 },
  w_240: { width: 240 },
  w_245: { width: 245 },
  w_250: { width: 250 },
  w_255: { width: 255 },
  w_260: { width: 260 },
  w_265: { width: 265 },
  w_270: { width: 270 },
  w_275: { width: 275 },
  w_280: { width: 280 },
  w_285: { width: 285 },
  w_290: { width: 290 },
  w_295: { width: 295 },
  w_300: { width: 300 },
  w_305: { width: 305 },
  w_310: { width: 310 },
  w_315: { width: 315 },
  w_320: { width: 320 },
  w_325: { width: 325 },
  w_330: { width: 330 },
  w_335: { width: 335 },
  w_340: { width: 340 },
  w_345: { width: 345 },
  w_350: { width: 350 },
  w_355: { width: 355 },
  w_360: { width: 360 },
  w_365: { width: 365 },
  w_370: { width: 370 },
  w_375: { width: 375 },
  w_380: { width: 380 },
  w_385: { width: 385 },
  w_390: { width: 390 },
  w_395: { width: 395 },
  w_400: { width: 400 },
  w_405: { width: 405 },
  w_410: { width: 410 },
  w_415: { width: 415 },
  w_420: { width: 420 },
  w_425: { width: 425 },
  w_430: { width: 430 },
  w_435: { width: 435 },
  w_440: { width: 440 },
  w_445: { width: 445 },
  w_450: { width: 450 },
  w_455: { width: 455 },
  w_460: { width: 460 },
  w_465: { width: 465 },
  w_470: { width: 470 },
  w_475: { width: 475 },
  w_480: { width: 480 },
  w_485: { width: 485 },
  w_490: { width: 490 },
  w_495: { width: 495 },
  w_500: { width: 500 },

  //height with points max-height=500
  h_5: { height: 5 },
  h_10: { height: 10 },
  h_15: { height: 15 },
  h_20: { height: 20 },
  h_25: { height: 25 },
  h_30: { height: 30 },
  h_35: { height: 35 },
  h_40: { height: 40 },
  h_45: { height: 45 },
  h_50: { height: 50 },
  h_55: { height: 55 },
  h_60: { height: 60 },
  h_65: { height: 65 },
  h_70: { height: 70 },
  h_75: { height: 75 },
  h_80: { height: 80 },
  h_85: { height: 85 },
  h_90: { height: 90 },
  h_95: { height: 95 },
  h_100: { height: 100 },
  h_105: { height: 105 },
  h_110: { height: 110 },
  h_115: { height: 115 },
  h_120: { height: 120 },
  h_125: { height: 125 },
  h_130: { height: 130 },
  h_135: { height: 135 },
  h_140: { height: 140 },
  h_145: { height: 145 },
  h_150: { height: 150 },
  h_155: { height: 155 },
  h_160: { height: 160 },
  h_165: { height: 165 },
  h_170: { height: 170 },
  h_175: { height: 175 },
  h_180: { height: 180 },
  h_185: { height: 185 },
  h_190: { height: 190 },
  h_195: { height: 195 },
  h_200: { height: 200 },
  h_205: { height: 205 },
  h_210: { height: 210 },
  h_215: { height: 215 },
  h_220: { height: 220 },
  h_225: { height: 225 },
  h_230: { height: 230 },
  h_235: { height: 235 },
  h_240: { height: 240 },
  h_245: { height: 245 },
  h_250: { height: 250 },
  h_255: { height: 255 },
  h_260: { height: 260 },
  h_265: { height: 265 },
  h_270: { height: 270 },
  h_275: { height: 275 },
  h_280: { height: 280 },
  h_285: { height: 285 },
  h_290: { height: 290 },
  h_295: { height: 295 },
  h_300: { height: 300 },
  h_305: { height: 305 },
  h_310: { height: 310 },
  h_315: { height: 315 },
  h_320: { height: 320 },
  h_325: { height: 325 },
  h_330: { height: 330 },
  h_335: { height: 335 },
  h_340: { height: 340 },
  h_345: { height: 345 },
  h_350: { height: 350 },
  h_355: { height: 355 },
  h_360: { height: 360 },
  h_365: { height: 365 },
  h_370: { height: 370 },
  h_375: { height: 375 },
  h_380: { height: 380 },
  h_385: { height: 385 },
  h_390: { height: 390 },
  h_395: { height: 395 },
  h_400: { height: 400 },
  h_405: { height: 405 },
  h_410: { height: 410 },
  h_415: { height: 415 },
  h_420: { height: 420 },
  h_425: { height: 425 },
  h_430: { height: 430 },
  h_435: { height: 435 },
  h_440: { height: 440 },
  h_445: { height: 445 },
  h_450: { height: 450 },
  h_455: { height: 455 },
  h_460: { height: 460 },
  h_465: { height: 465 },
  h_470: { height: 470 },
  h_475: { height: 475 },
  h_480: { height: 480 },
  h_485: { height: 485 },
  h_490: { height: 490 },
  h_495: { height: 495 },
  h_500: { height: 500 },

  //position
  p_a: { position: "absolute" },
  p_r: { position: "relative" },

  //overflow
  of_v: { overflow: "visible" },
  of_h: { overflow: "hidden" },
  of_s: { overflow: "scroll" },

  //width with percentages (100%  is the device width)
  w_5p: { width: SCREEN_WIDTH * (5 / 100) },
  w_10p: { width: SCREEN_WIDTH * (10 / 100) },
  w_15p: { width: SCREEN_WIDTH * (15 / 100) },
  w_20p: { width: SCREEN_WIDTH * (20 / 100) },
  w_25p: { width: SCREEN_WIDTH * (25 / 100) },
  w_30p: { width: SCREEN_WIDTH * (30 / 100) },
  w_32p: { width: SCREEN_WIDTH * (32 / 100) },
  w_35p: { width: SCREEN_WIDTH * (35 / 100) },
  w_40p: { width: SCREEN_WIDTH * (40 / 100) },
  w_45p: { width: SCREEN_WIDTH * (45 / 100) },
  w_50p: { width: SCREEN_WIDTH * (50 / 100) },
  w_55p: { width: SCREEN_WIDTH * (55 / 100) },
  w_60p: { width: SCREEN_WIDTH * (60 / 100) },
  w_65p: { width: SCREEN_WIDTH * (65 / 100) },
  w_70p: { width: SCREEN_WIDTH * (70 / 100) },
  w_75p: { width: SCREEN_WIDTH * (75 / 100) },
  w_80p: { width: SCREEN_WIDTH * (80 / 100) },
  w_85p: { width: SCREEN_WIDTH * (85 / 100) },
  w_90p: { width: SCREEN_WIDTH * (90 / 100) },
  w_93p: { width: SCREEN_WIDTH * (93 / 100) },
  w_95p: { width: SCREEN_WIDTH * (95 / 100) },
  w_98p: { width: SCREEN_WIDTH * (98 / 100) },
  w_100p: { width: SCREEN_WIDTH },

  //height with percentages 100%  is the device height)
  h_5p: { height: SCREEN_HEIGHT * (5 / 100) },
  h_10p: { height: SCREEN_HEIGHT * (10 / 100) },
  h_15p: { height: SCREEN_HEIGHT * (15 / 100) },
  h_20p: { height: SCREEN_HEIGHT * (20 / 100) },
  h_25p: { height: SCREEN_HEIGHT * (25 / 100) },
  h_30p: { height: SCREEN_HEIGHT * (30 / 100) },
  h_35p: { height: SCREEN_HEIGHT * (35 / 100) },
  h_40p: { height: SCREEN_HEIGHT * (40 / 100) },
  h_45p: { height: SCREEN_HEIGHT * (45 / 100) },
  h_50p: { height: SCREEN_HEIGHT * (50 / 100) },
  h_55p: { height: SCREEN_HEIGHT * (55 / 100) },
  h_60p: { height: SCREEN_HEIGHT * (60 / 100) },
  h_65p: { height: SCREEN_HEIGHT * (65 / 100) },
  h_70p: { height: SCREEN_HEIGHT * (70 / 100) },
  h_75p: { height: SCREEN_HEIGHT * (75 / 100) },
  h_80p: { height: SCREEN_HEIGHT * (80 / 100) },
  h_85p: { height: SCREEN_HEIGHT * (85 / 100) },
  h_90p: { height: SCREEN_HEIGHT * (90 / 100) },
  h_95p: { height: SCREEN_HEIGHT * (95 / 100) },
  h_100p: { height: SCREEN_HEIGHT }
});
