/** @format */

import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import { Colors, FontSize, Radius, Spacing } from "@/constant/theme";

export default function LoginScreen() {
	return (
		<SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
			<View style={styles.container}>
				<Text style={styles.title}>Masuk</Text>
				<Text style={styles.subtitle}>Selamat datang kembali!</Text>

				<View style={styles.form}>
					<Text style={styles.label}>Email</Text>
					<TextInput
						style={styles.input}
						placeholder="email@contoh.com"
						placeholderTextColor={Colors.disabled}
					/>

					<Text style={styles.label}>Kata Sandi</Text>
					<TextInput
						style={styles.input}
						placeholder="••••••••"
						placeholderTextColor={Colors.disabled}
						secureTextEntry
					/>
				</View>

				<TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
					<Text style={styles.primaryButtonText}>Masuk</Text>
				</TouchableOpacity>

				<View style={styles.footer}>
					<Text style={styles.footerText}>Belum punya akun? </Text>
					<Link href="/register" style={styles.link}>
						Daftar
					</Link>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: { flex: 1, backgroundColor: Colors.background },
	container: { flex: 1, paddingHorizontal: Spacing.lg, paddingTop: Spacing.xl },
	title: {
		fontSize: FontSize.xxl,
		fontWeight: "800",
		color: Colors.text,
		marginBottom: Spacing.xs,
	},
	subtitle: {
		fontSize: FontSize.md,
		color: Colors.textSecondary,
		marginBottom: Spacing.xl,
	},
	form: { marginBottom: Spacing.lg },
	label: {
		fontSize: FontSize.sm,
		fontWeight: "600",
		color: Colors.text,
		marginBottom: Spacing.sm,
	},
	input: {
		backgroundColor: Colors.surface,
		borderWidth: 1,
		borderColor: Colors.border,
		borderRadius: Radius.md,
		paddingHorizontal: Spacing.md,
		paddingVertical: Spacing.md,
		fontSize: FontSize.md,
		color: Colors.text,
		marginBottom: Spacing.md,
	},
	primaryButton: {
		backgroundColor: Colors.primary,
		paddingVertical: Spacing.md,
		borderRadius: Radius.lg,
		alignItems: "center",
		marginBottom: Spacing.lg,
	},
	primaryButtonText: {
		color: Colors.textOnPrimary,
		fontSize: FontSize.md,
		fontWeight: "700",
	},
	footer: { flexDirection: "row", justifyContent: "center" },
	footerText: { fontSize: FontSize.md, color: Colors.textSecondary },
	link: { fontSize: FontSize.md, color: Colors.primary, fontWeight: "700" },
});
