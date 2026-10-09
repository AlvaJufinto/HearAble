/** @format */

/** @format */

import { useState } from "react";

import { router } from "expo-router";
import {
	KeyboardAvoidingView,
	Platform,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";

import Brand from "@/components/ui/Brand";
import { Colors } from "@/constant/theme";

import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";

function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<KeyboardAvoidingView
			style={styles.screen}
			behavior={Platform.OS === "ios" ? "padding" : undefined}
		>
			<ScrollView
				contentContainerStyle={styles.scrollContent}
				keyboardShouldPersistTaps="handled"
				showsVerticalScrollIndicator={false}
			>
				{children}
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

function FooterLink({
	text,
	action,
	onPress,
}: {
	text: string;
	action: string;
	onPress: () => void;
}) {
	return (
		<View style={styles.footer}>
			<Text style={styles.footerText}>{text} </Text>
			<Pressable onPress={onPress}>
				<Text style={styles.link}>{action}</Text>
			</Pressable>
		</View>
	);
}

export default function RegisterScreen() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [agreed, setAgreed] = useState(false);

	const [touched, setTouched] = useState({
		name: false,
		email: false,
		password: false,
	});

	const trimmedName = name.trim();
	const trimmedEmail = email.trim();

	const nameError =
		trimmedName.length === 0 ? "Nama panggilan wajib diisi." : "";

	const emailError = !trimmedEmail
		? "Email wajib diisi."
		: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
			? "Masukkan alamat email yang valid."
			: "";

	const passwordError = !password
		? "Kata sandi wajib diisi."
		: password.length < 8
			? "Kata sandi minimal 8 karakter."
			: "";

	const isFormValid = !nameError && !emailError && !passwordError && agreed;

	const isNameErrorVisible = touched.name && !!nameError;
	const isEmailErrorVisible = touched.email && !!emailError;
	const isPasswordErrorVisible = touched.password && !!passwordError;

	function handleRegister() {
		if (!isFormValid) return;

		// TODO: Hubungkan ke layanan autentikasi.
	}

	return (
		<AuthLayout>
			<Brand />

			<View style={styles.registerHeader}>
				<Text style={styles.title}>Buat Akun Baru</Text>
				<Text style={styles.subtitle}>
					Mulai perjalanan latihan bicara dan pengenalan audio.
				</Text>
			</View>

			<View style={styles.registerForm}>
				<View style={styles.field}>
					<AuthInput
						label="Nama Panggilan"
						placeholder="Nama Anda (misal: Rian)"
						value={name}
						onChangeText={setName}
						onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
						autoCapitalize="words"
						autoComplete="name"
					/>
					{isNameErrorVisible && (
						<Text style={styles.errorText}>{nameError}</Text>
					)}
				</View>

				<View style={styles.field}>
					<AuthInput
						label="Email"
						placeholder="contoh@email.com"
						value={email}
						onChangeText={setEmail}
						onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
						keyboardType="email-address"
						autoCapitalize="none"
						autoComplete="email"
					/>
					{isEmailErrorVisible && (
						<Text style={styles.errorText}>{emailError}</Text>
					)}
				</View>

				<View style={styles.field}>
					<AuthInput
						label="Kata Sandi"
						placeholder="Buat kata sandi"
						value={password}
						onChangeText={setPassword}
						onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
						password
						autoComplete="new-password"
						autoCapitalize="none"
					/>
					{isPasswordErrorVisible ? (
						<Text style={styles.errorText}>{passwordError}</Text>
					) : (
						<Text style={styles.passwordHint}>Minimal 8 karakter</Text>
					)}
				</View>

				<Pressable
					onPress={() => setAgreed((value) => !value)}
					accessibilityRole="checkbox"
					accessibilityState={{ checked: agreed }}
					style={styles.termsCard}
				>
					<View style={[styles.checkbox, agreed && styles.checkboxChecked]}>
						{agreed && <Text style={styles.checkmark}>✓</Text>}
					</View>

					<Text style={styles.termsText}>
						Saya menyetujui{" "}
						<Text style={styles.termsLink}>Ketentuan Layanan</Text>
						{" dan "}
						<Text style={styles.termsLink}>Kebijakan Privasi</Text>
						{" data audio HearAble."}
					</Text>
				</Pressable>

				{!agreed && (
					<Text style={styles.termsHint}>
						Setujui ketentuan untuk melanjutkan.
					</Text>
				)}

				<View style={!isFormValid ? styles.disabledButton : undefined}>
					<AuthButton
						title="Buat Akun"
						onPress={handleRegister}
						disabled={!isFormValid}
					/>
				</View>
			</View>

			<FooterLink
				text="Sudah punya akun?"
				action="Masuk"
				onPress={() => router.replace("/(auth)/login")}
			/>
		</AuthLayout>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	scrollContent: {
		flexGrow: 1,
		paddingHorizontal: 24,
		paddingTop: 52,
		paddingBottom: 32,
	},
	registerHeader: {
		marginTop: 18,
		marginBottom: 28,
		gap: 10,
	},
	title: {
		fontSize: 28,
		lineHeight: 36,
		fontWeight: "700",
		letterSpacing: -0.7,
		color: Colors.text,
	},
	subtitle: {
		fontSize: 16,
		lineHeight: 24,
		color: Colors.textSecondary,
	},
	registerForm: {
		gap: 16,
	},
	field: {
		gap: 6,
	},
	passwordHint: {
		fontSize: 12,
		color: Colors.textSecondary,
		marginTop: 0,
		paddingHorizontal: 4,
	},
	errorText: {
		fontSize: 12,
		lineHeight: 18,
		color: Colors.error,
		paddingHorizontal: 4,
	},
	termsCard: {
		flexDirection: "row",
		alignItems: "flex-start",
		gap: 12,
		padding: 12,
		borderRadius: 16,
		backgroundColor: Colors.surface,
	},
	checkbox: {
		width: 24,
		height: 24,
		borderRadius: 7,
		borderWidth: 1,
		borderColor: Colors.primary,
		alignItems: "center",
		justifyContent: "center",
	},
	checkboxChecked: {
		backgroundColor: Colors.primary,
	},
	checkmark: {
		color: "#FFFFFF",
		fontWeight: "700",
	},
	termsText: {
		flex: 1,
		fontSize: 14,
		lineHeight: 20,
		color: Colors.textSecondary,
	},
	termsLink: {
		fontWeight: "700",
		color: Colors.success,
	},
	termsHint: {
		fontSize: 12,
		color: Colors.textSecondary,
		paddingHorizontal: 4,
		marginTop: -10,
	},
	disabledButton: {
		opacity: 0.5,
	},
	footer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
		marginTop: 28,
		paddingVertical: 12,
	},
	footerText: {
		fontSize: 14,
		color: Colors.textSecondary,
	},
	link: {
		fontSize: 14,
		fontWeight: "600",
		color: Colors.primary,
	},
});
