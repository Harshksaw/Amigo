import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PAGES from '../constants/pages';
import Settings from '../pages/Settings';
import Export from '../pages/Export';
import Import from '../pages/Import';
import BannerAd from '../components/BannerAd';

const Stack = createNativeStackNavigator();
function SettingsNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name={PAGES.SETTINGS}
            component={Settings}
            options={{ 
                headerRight: () => <BannerAd />,
            }}
        />
        <Stack.Screen name={PAGES.EXPORT} component={Export} />
        <Stack.Screen name={PAGES.IMPORT} component={Import} />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;