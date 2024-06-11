import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início', headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name={'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="books"
        options={{
          title: 'Livros',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name={'book-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="series"
        options={{ title: 'Séries',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name={'play-outline'} color={color} />
          ),
         }}
      />
    </Tabs>
  );
}
