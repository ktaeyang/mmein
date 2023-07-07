import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabsNavi from './BottomTabs.navi';

const RootNavigator = () => {
  const Root = createNativeStackNavigator();
  return (
    <Root.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {color: 'black', fontWeight: 'bold'},
      }}>
      <Root.Screen
        options={{
          headerShown: false,
          // contentStyle: { paddingTop: StatusBar.currentHeight },
        }}
        name="BottomTabs"
        component={BottomTabsNavi}
      />
    </Root.Navigator>
  );
};

export default RootNavigator;
