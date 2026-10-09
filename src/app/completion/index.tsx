import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { Colors, FontSize, Radius, Spacing } from "@/constant/theme";

export default function CompletionScreen() {
	return (
		<SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
			<View style={styles.container}>
				<Text style={styles.emoji}>🎉</Text>
				<Text style={styles.title}>Latihan Selesai!</Text>
				<Text style={styles.subtitle}>Bagus sekali, kamu telah menyelesaikan latihan hari ini.</Text>

				<View style={styles.actions}>
					<TouchableOpacity style={styles.primaryButton} activeOpacity={0.8} onPress={() => router.replace("/(tabs)")}>
						<Text style={styles.primaryButtonText}>Kembali ke Beranda</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: { flex: 1, backgroundColor: Colors.background },
	container: { flex: 1, paddingHorizontal: Spacing.lg, justifyContent: "center", alignItems: "center" },
	emoji: { fontSize: 64, marginBottom: Spacing.lg },
	title: { fontSize: FontSize.xxl, fontWeight: "800", color: Colors.text, marginBottom: Spacing.sm, textAlign: "center" },
	subtitle: { fontSize: FontSize.md, color: Colors.textSecondary, textAlign: "center", marginBottom: Spacing.xxl },
	actions: { width: "100%", paddingBottom: Spacing.xl },
	primaryButton: {
		backgroundColor: Colors.primary, paddingVertical: Spacing.md, borderRadius: Radius.lg,
		alignItems: "center",
	},
	primaryButtonText: { color: Colors.textOnPrimary, fontSize: FontSize.md, fontWeight: "700" },
});
