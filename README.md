RNSwipeVerify
=========

A small StyleSheet framework to build yours views in record time.

## **Installation**
  `npm install --save react-native-fast-ui`
   `yarn add react-native-fast-ui`

## **Preview**

| | |
| --- | --- |
| <img width="259" alt="lo" src="https://user-images.githubusercontent.com/15864336/48955616-ba636900-ef1c-11e8-915b-5fa53939ffb3.png"> | <img width="259" alt="lo" src="https://user-images.githubusercontent.com/15864336/49022236-5a5e0400-f162-11e8-9c71-50f21cd999e1.png"> |






## **Usage**


```JSX
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
} from "react-native-fast-ui";

//icons dimentions, calculate this values outside the render method to improve the performance
const ICON_SIZE = DIAGONAL_SCREEN * 0.3;
const ICON_RADIUS = ICON_SIZE / 2;

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{ ...dm.flex_1, ...dm.b_white, ...dm.center }}>
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

          {/* create a Toolbar with absolute position, height 55, flexDirection row, alignItems: "center", alignContent: "space-between" */}
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
```






## **Documentation**

### Constants
| name | type | description |
| --- | --- | --- |
| IS_ANDROID | bool | is true if the OS is Android |
| IS_IPHONE_X | bool | is true if the device is an iPhone X |
| STATUSBAR_HEIGHT | number | gets the statusBar height on iOS and Android |
| SCREEN_WIDTH | number | gets the screen width |
| SCREEN_HEIGHT | number | gets the screen height |
| WINDOW_HEIGHT | number | on Android and iOS **(no iPhone X)** returns the window height removed the statusbar height. **On iPhone X** returns the height of the SafeAreaView |
| DIAGONAL_SCREEN | number | value for the diagonal screen usefull to create responsive contents |



### Methods

| name |  return | notes |
| --- | --- | --- |
| WP(percent: number) | number | gets the a percent of the screen width |
| HP(percent: number) | number | gets the a percent of the screen height |