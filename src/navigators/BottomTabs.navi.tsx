import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Dimensions, Platform} from 'react-native';
import {styled} from 'styled-components/native';
import HomeScreen from '../screens/bottomTabScreens/Home.screen';
import MypageScreen from '../screens/bottomTabScreens/Mypage.screen';
import SvgIconAtom from '../components/atoms/common/SvgIcon.atom';
import {colors} from '../utils/colors';
import SearchScreen from '../screens/bottomTabScreens/Search.screen';
import AddScreen from '../screens/bottomTabScreens/Add.screen';
const {width, height} = Dimensions.get('screen');
const BottomIconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
const BottomGreenLine = styled.View<{focused: boolean}>`
  width: 30%;
  height: ${props => (props.focused ? 3 : 0)}px;
  background-color: ${colors.black};
  border-radius: 20px;
`;
const BottomLabelTxt = styled.Text<{focused: boolean}>`
  font-size: 12px;
  margin-bottom: 5px;
`;
const BottomLabelContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: ${width / 4}px;
`;

const BottomTabsNavi = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      screenOptions={{
        unmountOnBlur: false, // 선택된 Tab Screen에서 벗어나면 메모리에서 해당 컴포넌트를 지워준다.(메모리 절약)
        tabBarActiveTintColor: '#000000', // 활성되었을 때, Color 지정
        tabBarInactiveTintColor: '#DEDEDE', // 비활성되었을 때, Color 지정
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          //height: 60,
          height: Platform.OS === 'android' ? 60 : 80,
          paddingTop: 2,
        },
        tabBarShowLabel: true,
      }}>
      <BottomTab.Screen
        name="Home"
        options={{
          tabBarLabel: ({focused}) => (
            <BottomLabelContainer>
              {/* <BottomLabelTxt focused={focused}>홈</BottomLabelTxt> */}
              <BottomGreenLine focused={focused} />
            </BottomLabelContainer>
          ),
          headerShown: false,
          tabBarIcon: () => {
            return (
              <BottomIconContainer>
                <SvgIconAtom name={'Home'} size={25} />
              </BottomIconContainer>
            );
          },
        }}
        component={HomeScreen}
      />
      <BottomTab.Screen
        name="Search"
        options={{
          tabBarLabel: ({focused}) => (
            <BottomLabelContainer>
              {/* <BottomLabelTxt focused={focused}>홈</BottomLabelTxt> */}
              <BottomGreenLine focused={focused} />
            </BottomLabelContainer>
          ),
          headerShown: false,
          tabBarIcon: () => {
            return (
              <BottomIconContainer>
                <SvgIconAtom name={'Search'} size={25} />
              </BottomIconContainer>
            );
          },
        }}
        component={SearchScreen}
      />
      <BottomTab.Screen
        name="Add"
        options={{
          tabBarLabel: ({focused}) => (
            <BottomLabelContainer>
              {/* <BottomLabelTxt focused={focused}>홈</BottomLabelTxt> */}
              <BottomGreenLine focused={focused} />
            </BottomLabelContainer>
          ),
          headerShown: false,
          tabBarIcon: () => {
            return (
              <BottomIconContainer>
                <SvgIconAtom name={'AddBlack'} size={25} fill={'none'} />
              </BottomIconContainer>
            );
          },
        }}
        component={AddScreen}
      />
      <BottomTab.Screen
        name="Mypage"
        options={{
          tabBarLabel: ({focused}) => (
            <BottomLabelContainer>
              {/* <BottomLabelTxt focused={focused}>MY</BottomLabelTxt> */}
              <BottomGreenLine focused={focused} />
            </BottomLabelContainer>
          ),
          headerShown: false,
          tabBarIcon: () => {
            return (
              <BottomIconContainer>
                <SvgIconAtom name={'Mypage'} size={23} />
              </BottomIconContainer>
            );
          },
        }}
        component={MypageScreen}
      />
    </BottomTab.Navigator>
  );
};

export default React.memo(BottomTabsNavi);
