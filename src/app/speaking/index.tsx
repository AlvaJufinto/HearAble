import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { Colors, FontSize, Radius, Spacing } from "@/constant/theme";

export default function SpeakingScreen() {
	return (
		<SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
			<View style={styles.container}>
				<Text style={styles.title}>Latihan Bicara</Text>
				<Text style={styles.subtitle}>Tekan tombol dan ucapkan kata yang muncul.</Text>

				<View style={styles.content}>
					<Text style={styles.placeholder}>[ Demo: Fitur microphone ]</Text>
				</View>

				<View style={styles.actions}>
					<TouchableOpacity style={styles.primaryButton} activeOpacity={0.8} onPress={() => router.push("/completion")}>
						<Text style={styles.primaryButtonText}>Selesai Latihan</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: { flex: 1, backgroundColor: Colors.background },
	container: { flex: 1, paddingHorizontal: Spacing.lg, paddingTop: Spacing.xl },
	title: { fontSize: FontSize.xl, fontWeight: "800", color: Colors.text, marginBottom: Spacing.xs },
	subtitle: { fontSize: FontSize.md, color: Colors.textSecondary, marginBottom: Spacing.xl },
	content: { flex: 1, justifyContent: "center", alignItems: "center" },
	placeholder: { fontSize: FontSize.lg, color: Colors.disabled },
	actions: { paddingBottom: Spacing.xl },
	primaryButton: {
		backgroundColor: Colors.primary, paddingVertical: Spacing.md, borderRadius: Radius.lg,
		alignItems: "center",
	},
	primaryButtonText: { color: Colors.textOnPrimary, fontSize: FontSize.md, fontWeight: "700" },
});
