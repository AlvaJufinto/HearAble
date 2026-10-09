/** @format */

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { Colors, FontSize, Radius, Spacing } from "@/constant/theme";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const HearAbleScreen = () => {
	const features = [
		{
			id: 1,
			title: "Latihan Bicara Terpandu",
			desc: "Latih bicara melalui teks",
			icon: <Feather name="bar-chart-2" size={24} color={Colors.primary} />,
			iconBg: Colors.secondary,
		},
		{
			id: 2,
			title: "Kenali Suara Sekitar",
			desc: "Berlatih interpretasi suara",
			icon: <MaterialIcons name="hearing" size={24} color={Colors.primary} />,
			iconBg: Colors.secondary,
		},
		{
			id: 3,
			title: "Progres Tanpa Tekanan",
			desc: "Belajar sesuai ritme",
			icon: <Feather name="clock" size={24} color={Colors.tertiary} />,
			iconBg: "#F7F3E8",
		},
	];

	return (
		<SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
			<View style={styles.container}>
				{/* Logo Section */}
				<View style={styles.logoOuter}>
					<View style={styles.logoInner}>
						<MaterialIcons name="hearing" size={32} color={Colors.primary} />
					</View>
				</View>

				{/* Header Section */}
				<Text style={styles.title}>HearAble</Text>
				<Text style={styles.subtitle}>
					Aplikasi latihan mandiri untuk{"\n"}mengasah kemampuan berbicara dan
					{"\n"}mengenali audio.
				</Text>

				{/* Features Card */}
				<View style={styles.card}>
					{features.map((item, index) => (
						<View
							key={item.id}
							style={[
								styles.featureItem,
								index === features.length - 1 && styles.lastFeatureItem,
							]}
						>
							<View
								style={[styles.iconContainer, { backgroundColor: item.iconBg }]}
							>
								{item.icon}
							</View>
							<View style={styles.textContainer}>
								<Text style={styles.featureTitle}>{item.title}</Text>
								<Text style={styles.featureDesc}>{item.desc}</Text>
							</View>
							<Feather name="check-circle" size={20} color={Colors.disabled} />
						</View>
					))}
				</View>

				{/* Action Buttons */}
				<TouchableOpacity style={styles.primaryButton} activeOpacity={0.8} onPress={() => router.push("/register")}>
					<Text style={styles.primaryButtonText}>Mulai sekarang</Text>
					<Feather name="arrow-right" size={20} color={Colors.textOnPrimary} />
				</TouchableOpacity>

				<TouchableOpacity style={styles.secondaryButton} activeOpacity={0.6} onPress={() => router.push("/login")}>
					<Text style={styles.secondaryButtonText}>Saya sudah punya akun</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	container: {
		flex: 1,
		paddingHorizontal: Spacing.lg,
		alignItems: "center",
		paddingTop: Spacing.xl,
	},
	logoOuter: {
		width: 90,
		height: 90,
		borderRadius: Radius.full,
		backgroundColor: Colors.secondary,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: Spacing.lg,
	},
	logoInner: {
		width: 64,
		height: 64,
		borderRadius: Radius.lg,
		backgroundColor: Colors.surface,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: Colors.neutral,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.05,
		shadowRadius: Radius.sm,
		elevation: 2,
	},
	title: {
		fontSize: FontSize.xxl,
		fontWeight: "800",
		color: Colors.text,
		marginBottom: Spacing.sm,
	},
	subtitle: {
		fontSize: FontSize.md,
		color: Colors.textSecondary,
		textAlign: "center",
		lineHeight: 22,
		marginBottom: Spacing.xl,
	},
	card: {
		backgroundColor: Colors.surface,
		width: "100%",
		borderRadius: Radius.xl,
		padding: Spacing.md,
		marginBottom: Spacing.xl,
	},
	featureItem: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: Colors.background,
		padding: 12,
		borderRadius: Radius.lg,
		marginBottom: Spacing.md,
	},
	lastFeatureItem: {
		marginBottom: 0,
	},
	iconContainer: {
		width: 48,
		height: 48,
		borderRadius: Radius.md,
		justifyContent: "center",
		alignItems: "center",
		marginRight: Spacing.md,
	},
	textContainer: {
		flex: 1,
	},
	featureTitle: {
		fontSize: FontSize.md,
		fontWeight: "700",
		color: Colors.text,
		marginBottom: Spacing.xs,
	},
	featureDesc: {
		fontSize: FontSize.sm,
		color: Colors.textSecondary,
	},
	primaryButton: {
		backgroundColor: Colors.primary,
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: Spacing.md,
		borderRadius: Radius.lg,
		marginBottom: Spacing.lg,
	},
	primaryButtonText: {
		color: Colors.textOnPrimary,
		fontSize: FontSize.md,
		fontWeight: "700",
		marginRight: Spacing.sm,
	},
	secondaryButton: {
		paddingVertical: Spacing.sm,
	},
	secondaryButtonText: {
		color: Colors.primary,
		fontSize: FontSize.md,
		fontWeight: "700",
	},
});

export default HearAbleScreen;
