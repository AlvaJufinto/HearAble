/** @format */

import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors, FontSize, Radius, Spacing } from "@/constant/theme";

export default function BerandaScreen() {
	return (
		<SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
			<View style={styles.container}>
				<Text style={styles.greeting}>Halo!</Text>
				<Text style={styles.title}>Apa yang ingin kamu(latihan) hari ini?</Text>

				<View style={styles.cardGrid}>
					<TouchableOpacity
						style={styles.card}
						activeOpacity={0.8}
						onPress={() => router.push("/speaking")}
					>
						<Text style={styles.cardEmoji}>🎙️</Text>
						<Text style={styles.cardTitle}>Latihan Bicara</Text>
						<Text style={styles.cardDesc}>Latih pengucapan melalui teks</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.card}
						activeOpacity={0.8}
						onPress={() => router.push("/recognition")}
					>
						<Text style={styles.cardEmoji}>👂</Text>
						<Text style={styles.cardTitle}>Kenali Suara</Text>
						<Text style={styles.cardDesc}>Berlatih mengenali suara</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: { flex: 1, backgroundColor: Colors.background },
	container: { flex: 1, paddingHorizontal: Spacing.lg, paddingTop: Spacing.xl },
	greeting: {
		fontSize: FontSize.lg,
		color: Colors.textSecondary,
		marginBottom: Spacing.xs,
	},
	title: {
		fontSize: FontSize.xl,
		fontWeight: "800",
		color: Colors.text,
		marginBottom: Spacing.xl,
	},
	cardGrid: { flexDirection: "row", flexWrap: "wrap", gap: Spacing.md },
	card: {
		backgroundColor: Colors.surface,
		borderRadius: Radius.xl,
		padding: Spacing.lg,
		width: "47%",
		borderWidth: 1,
		borderColor: Colors.border,
	},
	cardEmoji: { fontSize: 32, marginBottom: Spacing.sm },
	cardTitle: {
		fontSize: FontSize.md,
		fontWeight: "700",
		color: Colors.text,
		marginBottom: Spacing.xs,
	},
	cardDesc: { fontSize: FontSize.sm, color: Colors.textSecondary },
});
