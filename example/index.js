/**
 * @format
 * @flow
 */
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import {
  styles as dm,
  IS_ANDROID,
  SCREEN_HEIGHT,
  WINDOW_HEIGHT,
  SCREEN_WIDTH,
  STATUSBAR_HEIGHT,
  DIAGONAL_SCREEN
} from "../src/react-native-fast-ui";

//icons dimentions, calculate this values outside the render method to improve the performance
const ICON_SIZE = DIAGONAL_SCREEN * 0.3;
const ICON_RADIUS = ICON_SIZE / 2;

export default class App extends Component<{}> {
  render() {
    return (
      <View
        style={{ ...dm.flex_1, ...dm.b_white, paddingTop: STATUSBAR_HEIGHT }}
      >
        <View
          style={{
            backgroundColor: "#d2d2d2",
            width: SCREEN_WIDTH,
            height: WINDOW_HEIGHT,
            ...dm.center
          }}
        >
          <Image
            style={{
              width: ICON_SIZE,
              height: ICON_SIZE,
              backgroundColor: "#999",
              borderRadius: ICON_RADIUS
            }}
            resizeMode="contain"
            source={require("./images/logo.png")}
          />
          {/* START Text with black color, responsive font 25 , and verticals margins 10 */}
          <Text style={{ ...dm.c_black, ...dm.f_25, ...dm.ma_ver_10 }}>
            Welcome to React Native on {IS_ANDROID ? "Android" : "iOS"}
          </Text>
          {/* END Text with black color, responsive font 25 , and verticals margins 10 */}
          <Text style={{ ...dm.c_black }}>
            The StatusBar Height is {STATUSBAR_HEIGHT}
          </Text>
          <Text style={{ ...dm.c_black }}>
            The window Height is {WINDOW_HEIGHT}
          </Text>
          <Text style={{ ...dm.c_black }}>
            The Device Height is {SCREEN_HEIGHT}
          </Text>

          {/* create a Toolbar with absolute position, height 55, flexDirection row, alignItems: "center", justifyContent: "space-between" */}
          <View
            style={{
              ...dm.p_a,
              ...dm.top_0,
              ...dm.left_0,
              ...dm.right_0,
              ...dm.h_55,
              ...dm.flex_r,
              ...dm.ai_c,
              ...dm.jc_sb,
              backgroundColor: "#999"
            }}
          >
            {/* Button width:55, height:55, alignItems: "center", justifyContent: "center" */}
            <TouchableOpacity style={{ ...dm.w_55, ...dm.h_55, ...dm.center }}>
              <Image
                style={{ ...dm.w_35, ...dm.h_35, tintColor: "#fff" }}
                resizeMode="contain"
                source={require("./icons/menu.png")}
              />
            </TouchableOpacity>

            {/* Text color white, responsive font 30 */}
            <Text style={{ ...dm.c_white, ...dm.f_30 }}>APP NAME</Text>

            {/* Button width:55, height:55, alignItems: "center", justifyContent: "center" */}
            <TouchableOpacity style={{ ...dm.w_55, ...dm.h_55, ...dm.center }}>
              <Image
                style={{ ...dm.w_35, ...dm.h_35, tintColor: "#fff" }}
                resizeMode="contain"
                source={require("./icons/notification.png")}
              />
              {/* Red badge with absolute position, left:0, top:0, alignItems: "center", justifyContent: "center", width:15, height:15 */}
              <View
                style={{
                  ...dm.p_a,
                  ...dm.top_5,
                  ...dm.left_0,
                  ...dm.center,
                  ...dm.w_15,
                  ...dm.h_15,
                  borderRadius: 7.5,
                  backgroundColor: "#f00"
                }}
              >
                <Text style={{ ...dm.c_white, ...dm.f_14 }}>2</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
