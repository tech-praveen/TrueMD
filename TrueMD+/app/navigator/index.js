import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
// import SideMenu from '../screens/SideMenu';
// import Splash from '../screens/Splash';
import Steps from '../screens/Steps';
import Sleep from '../screens/Sleep';
import Pulse from '../screens/Pulse';
import Activity from '../screens/Activity';
import StackDrawer from './drawerStack';
import Splash from '../screens/UIDesign/Splash'
import Welcome from '../screens/UIDesign/Welcome'
import Login from '../screens/UIDesign/Login'
import SignUp from '../screens/UIDesign/SignUp'
import SignUpPassword from '../screens/UIDesign/SignUpPassword'
import Gender from '../screens/UIDesign/Gender'
import HealthImprovement from '../screens/UIDesign/HealthImprovement'
import HealthyInterest from '../screens/UIDesign/HealthyInterest'
import Interest from '../screens/UIDesign/Interest'
import ProfilePicture from '../screens/UIDesign/ProfilePicture'
import TermAndCondition from '../screens/UIDesign/TermAndCondition'

import { navigationRef, isMountedRef } from '../utils/navigation';
import Step from '../screens/home/Step';
// import MyRoute from '../screens/MyRoute';

const Stack = createStackNavigator();

function App() {
  React.useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Welcome" headerMode='none' >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpPassword" component={SignUpPassword} />
        <Stack.Screen name="Gender" component={Gender} />
        <Stack.Screen name="HealthImprovement" component={HealthImprovement} />
        <Stack.Screen name="HealthyInterest" component={HealthyInterest} />
        <Stack.Screen name="Interest" component={Interest} />
        <Stack.Screen name="ProfilePicture" component={ProfilePicture} />
        <Stack.Screen name="TermAndCondition" component={TermAndCondition} />
        <Stack.Screen name="StackDrawer" component={StackDrawer} />
        <Stack.Screen name="Activity" component={Activity} />
        <Stack.Screen name="Sleep" component={Sleep} />
        <Stack.Screen name="Steps" component={Steps} />
        <Stack.Screen name="Pulse" component={Pulse} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="MyRoute" component={MyRoute} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;