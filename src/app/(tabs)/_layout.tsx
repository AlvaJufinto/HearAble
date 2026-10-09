import { Tabs } from "expo-router";
import { Text } from "react-native";

import { Colors, FontSize } from "@/constant/theme";

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: Colors.primary,
				tabBarInactiveTintColor: Colors.textSecondary,
				tabBarStyle: {
					backgroundColor: Colors.surface,
					borderTopColor: Colors.border,
					height: 64,
					paddingBottom: 8,
					paddingTop: 8,
				},
				tabBarLabelStyle: { fontSize: FontSize.xs, fontWeight: "600" },
			}}
		>
			<Tabs.Screen name="index" options={{ title: "Beranda", tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🏠</Text> }} />
			<Tabs.Screen name="practice" options={{ title: "Latihan", tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🎯</Text> }} />
			<Tabs.Screen name="progress" options={{ title: "Progress", tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>📊</Text> }} />
			<Tabs.Screen name="profile" options={{ title: "Profil", tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>👤</Text> }} />
		</Tabs>
	);
}
