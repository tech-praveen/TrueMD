
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home';
import SideMenu from '../screens/SideMenu';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="front"
      drawerContent={() => <SideMenu />}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}