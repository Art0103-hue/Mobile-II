import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FiClock, FiHome, FiTrash2, FiUser } from 'react-icons/fi';

import LoginScreen from './src/screens/LoginScreen';
import CriarContaScreen from './src/screens/CriarContaScreen';
import HomeScreen from './src/screens/HomeScreen';
import LocaisColetaScreen from './src/screens/LocaisColetaScreen';
import DicasColetaScreen from './src/screens/DicasColetaScreen';
import PerfilScreen from './src/screens/PerfilScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CORES = {
  primaria: '#004D40',
  amarelo: '#FFD54F',
  amareloClaro: '#FFF9C4',
  amareloMostarda: '#F9A825',
  branco: '#FFFFFF',
  preto: '#000000',
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconSize = 22;

          if (route.name === 'Home') {
            return <FiHome size={iconSize} color={color} />;
          } else if (route.name === 'Locais') {
            return <FiClock size={iconSize} color={color} />;
          } else if (route.name === 'Dicas') {
            return <FiTrash2 size={iconSize} color={color} />;
          } else if (route.name === 'Perfil') {
            return <FiUser size={iconSize} color={color} />;
          }
        },
        tabBarActiveTintColor: CORES.amarelo,
        tabBarInactiveTintColor: CORES.branco,
        tabBarStyle: {
          backgroundColor: CORES.primaria,
          borderTopColor: 'transparent',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Início' }}
      />
      <Tab.Screen
        name="Locais"
        component={LocaisColetaScreen}
        options={{ tabBarLabel: 'Locais' }}
      />
      <Tab.Screen
        name="Dicas"
        component={DicasColetaScreen}
        options={{ tabBarLabel: 'Dicas' }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{ tabBarLabel: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CriarConta" component={CriarContaScreen} />
        <Stack.Screen name="MainTabs" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
