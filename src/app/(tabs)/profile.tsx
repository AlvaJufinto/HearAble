import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors, FontSize, Spacing } from "@/constant/theme";

export default function ProfileScreen() {
	return (
		<SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
			<View style={styles.container}>
				<Text style={styles.title}>Profil</Text>
				<Text style={styles.placeholder}>Fitur profil akan segera hadir.</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: { flex: 1, backgroundColor: Colors.background },
	container: { flex: 1, paddingHorizontal: Spacing.lg, paddingTop: Spacing.xl },
	title: { fontSize: FontSize.xl, fontWeight: "800", color: Colors.text, marginBottom: Spacing.md },
	placeholder: { fontSize: FontSize.md, color: Colors.textSecondary },
});
