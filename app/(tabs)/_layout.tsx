import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="books"
        options={{
          title: 'Books',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name={'book-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="series"
        options={{
          title: 'Series',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name={'play-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
