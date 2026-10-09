import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { Colors, FontSize, Radius, Spacing } from "@/constant/theme";

export default function Step3Screen() {
	return (
		<SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
			<View style={styles.container}>
				<View style={styles.stepIndicator}>
					<Text style={styles.stepText}>Langkah 3 dari 3</Text>
					<View style={styles.progressBar}>
						<View style={[styles.progressFill, { width: "100%" }]} />
					</View>
				</View>

				<View style={styles.content}>
					<Text style={styles.title}>Siap Memulai</Text>
					<Text style={styles.description}>
						Semua sudah siap. Tekan tombol di bawah untuk masuk ke Beranda.
					</Text>
				</View>

				<View style={styles.actions}>
					<TouchableOpacity style={styles.primaryButton} activeOpacity={0.8} onPress={() => router.replace("/(tabs)")}>
						<Text style={styles.primaryButtonText}>Mulai</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: { flex: 1, backgroundColor: Colors.background },
	container: { flex: 1, paddingHorizontal: Spacing.lg },
	stepIndicator: { paddingTop: Spacing.lg, marginBottom: Spacing.xl },
	stepText: { fontSize: FontSize.sm, color: Colors.textSecondary, marginBottom: Spacing.sm },
	progressBar: { height: 4, backgroundColor: Colors.border, borderRadius: Radius.full },
	progressFill: { height: 4, backgroundColor: Colors.primary, borderRadius: Radius.full },
	content: { flex: 1, justifyContent: "center" },
	title: { fontSize: FontSize.xxl, fontWeight: "800", color: Colors.text, marginBottom: Spacing.md },
	description: { fontSize: FontSize.lg, color: Colors.textSecondary, lineHeight: 26 },
	actions: { paddingBottom: Spacing.xl },
	primaryButton: {
		backgroundColor: Colors.primary, paddingVertical: Spacing.md, borderRadius: Radius.lg,
		alignItems: "center",
	},
	primaryButtonText: { color: Colors.textOnPrimary, fontSize: FontSize.md, fontWeight: "700" },
});
