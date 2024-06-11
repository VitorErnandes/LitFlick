import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: 'Início', headerShown: false }}
      />
      <Tabs.Screen
        name="books"
        options={{ title: 'Livros' }}
      />
      <Tabs.Screen
        name="series"
        options={{ title: 'Séries' }}
      />
    </Tabs>
  );
}
