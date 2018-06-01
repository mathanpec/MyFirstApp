import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator } from 'react-navigation';

import ScreenA from './Screens/ScreenA';
import ScreenB from './Screens/ScreenB';
import TabA from './Screens/TabA';
import TabB from './Screens/TabB';


const screens = createStackNavigator({
  ScreenA: {
    screen: ScreenA,
  },
  ScreenB: {
    screen: ScreenB,
  }
}, {
  initialRouteName: 'ScreenA',
});

const tabs = createMaterialTopTabNavigator({
  TabA: {
    screen: TabA,
  },
  TabB: {
    screen: TabB,
  }
})

const Drawer = createDrawerNavigator({
  Screens: {
    screen: screens
  },
  Tabs: {
    screen: tabs
  }
})


export default Drawer;