/** @format */

import { router } from "expo-router";
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors, FontSize, Radius, Spacing } from "@/constant/theme";

const WEEK_DAYS = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
const COMPLETED_DAYS = [0, 1, 2];
const WEEKLY_PROGRESS = 3 / 5;
const LAST_EXERCISE_PROGRESS = 2 / 5;

const modules = [
	{
		iconText: "Aa",
		iconBg: Colors.secondary + "33",
		iconColor: Colors.primary,
		title: "Latihan Bicara",
		meta: "5–10 menit  •  Pemula",
		description:
			"Latih pelafalan kata dan kalimat dengan panduan visual ritmik.",
		buttonBg: Colors.secondary + "33",
		buttonColor: Colors.primary,
		route: "/speaking",
	},
	{
		iconText: "HS",
		iconBg: Colors.tertiary + "33",
		iconColor: Colors.accent,
		title: "Kenali Suara",
		meta: "5–10 menit  •  Pemula",
		description: "Dengarkan dan identifikasi suara lingkungan di sekitarmu.",
		buttonBg: Colors.tertiary + "33",
		buttonColor: Colors.accent,
		route: "/recognition",
	},
];

export default function BerandaScreen() {
	return (
		<SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
			<ScrollView
				style={styles.scrollView}
				contentContainerStyle={styles.content}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.header}>
					<Text style={styles.brandText}>HearAble</Text>
					<View style={styles.avatar}>
						<Text style={styles.avatarText}>R</Text>
					</View>
				</View>

				<View style={styles.titleSection}>
					<Text style={styles.pageTitle}>Halo, Rian!</Text>
					<Text style={styles.pageSubtitle}>
						Siap melanjutkan latihan hari ini?
					</Text>
				</View>

				<View style={styles.section}>
					<View style={styles.sectionHeader}>
						<Text style={styles.sectionTitle}>Aktivitas Minggu Ini</Text>
						<Text style={styles.sectionMeta}>Target 5 hari</Text>
					</View>

					<View style={styles.card}>
						<View style={styles.weeklyInfo}>
							<View>
								<Text style={styles.progressValue}>
									3 dari 5 latihan selesai
								</Text>
								<Text style={styles.progressHelper}>
									Konsisten sedikit demi sedikit, ya!
								</Text>
							</View>
						</View>

						<View style={styles.progressTrack}>
							<View
								style={[
									styles.progressFill,
									{ width: `${WEEKLY_PROGRESS * 100}%` },
								]}
							/>
						</View>

						<View style={styles.daysRow}>
							{WEEK_DAYS.map((day, index) => (
								<View key={day} style={styles.dayItem}>
									<Text style={styles.dayLabel}>{day}</Text>
									<View
										style={[
											styles.dayDot,
											COMPLETED_DAYS.includes(index)
												? styles.dayDotFilled
												: styles.dayDotEmpty,
										]}
									/>
								</View>
							))}
						</View>
					</View>
				</View>

				<View style={styles.section}>
					<View style={styles.sectionHeader}>
						<Text style={styles.sectionTitle}>Lanjutkan Latihan</Text>
						<Text style={styles.sectionMeta}>Hari ini</Text>
					</View>

					<View style={styles.card}>
						<View style={styles.lastExerciseTop}>
							<View style={styles.iconTile}>
								<Text style={styles.iconTileText}>Aa</Text>
							</View>

							<View style={styles.lastExerciseInfo}>
								<Text style={styles.moduleTitle}>Latihan Bicara</Text>
								<Text style={styles.moduleMeta}>Frasa Sehari-hari</Text>
							</View>
						</View>

						<View style={styles.exerciseProgressInfo}>
							<Text style={styles.progressHelper}>
								Langkah 2 dari 5 kata selesai
							</Text>
							<Text style={styles.progressHelper}>40%</Text>
						</View>

						<View style={styles.progressTrack}>
							<View
								style={[
									styles.progressFill,
									{
										width: `${LAST_EXERCISE_PROGRESS * 100}%`,
									},
								]}
							/>
						</View>

						<TouchableOpacity
							style={[styles.moduleButton, styles.primaryButton]}
							activeOpacity={0.8}
							onPress={() => router.push("/speaking")}
						>
							<Text style={styles.primaryButtonText}>Lanjutkan latihan</Text>
							<Text style={styles.primaryButtonIcon}>→</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.section}>
					<View style={styles.sectionHeader}>
						<Text style={styles.sectionTitle}>Semua Modul</Text>
						<Text style={styles.sectionMeta}>2 modul</Text>
					</View>

					{modules.map((module) => (
						<View key={module.title} style={styles.moduleCard}>
							<View style={styles.moduleCardTop}>
								<View
									style={[styles.iconTile, { backgroundColor: module.iconBg }]}
								>
									<Text
										style={[styles.iconTileText, { color: module.iconColor }]}
									>
										{module.iconText}
									</Text>
								</View>

								<View style={styles.moduleInfo}>
									<Text style={styles.moduleTitle}>{module.title}</Text>
									<Text style={styles.moduleMeta}>{module.meta}</Text>
								</View>
							</View>

							<Text style={styles.moduleDesc}>{module.description}</Text>

							<TouchableOpacity
								style={[
									styles.moduleButton,
									{ backgroundColor: module.buttonBg },
								]}
								activeOpacity={0.8}
								onPress={() => router.push(module.route as any)}
							>
								<Text
									style={[
										styles.moduleButtonText,
										{ color: module.buttonColor },
									]}
								>
									Mulai latihan
								</Text>
							</TouchableOpacity>
						</View>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	scrollView: {
		flex: 1,
	},
	content: {
		paddingHorizontal: Spacing.lg,
		paddingBottom: Spacing.xxl,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingTop: Spacing.lg,
		paddingBottom: Spacing.md,
	},
	brandText: {
		fontSize: FontSize.xl,
		fontWeight: "800",
		color: Colors.primary,
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: Radius.full,
		backgroundColor: Colors.primary,
		alignItems: "center",
		justifyContent: "center",
	},
	avatarText: {
		fontSize: FontSize.md,
		fontWeight: "700",
		color: Colors.textOnPrimary,
	},
	titleSection: {
		marginBottom: Spacing.lg,
	},
	pageTitle: {
		fontSize: FontSize.xxl,
		fontWeight: "800",
		color: Colors.text,
		marginBottom: Spacing.xs,
	},
	pageSubtitle: {
		fontSize: FontSize.md,
		color: Colors.textSecondary,
	},
	section: {
		marginBottom: Spacing.xl,
	},
	sectionHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: Spacing.md,
	},
	sectionTitle: {
		fontSize: FontSize.lg,
		fontWeight: "700",
		color: Colors.text,
	},
	sectionMeta: {
		fontSize: FontSize.sm,
		color: Colors.textSecondary,
	},
	card: {
		backgroundColor: Colors.surface,
		borderRadius: Radius.xl,
		padding: Spacing.lg,
		borderWidth: 1,
		borderColor: Colors.border,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.06,
		shadowRadius: 8,
	},
	weeklyInfo: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: Spacing.sm,
		marginBottom: Spacing.md,
	},
	progressValue: {
		fontSize: FontSize.lg,
		fontWeight: "700",
		color: Colors.text,
		marginBottom: Spacing.xs,
	},
	progressPercent: {
		fontSize: FontSize.lg,
		fontWeight: "700",
		color: Colors.primary,
	},
	progressHelper: {
		fontSize: FontSize.sm,
		color: Colors.textSecondary,
	},
	progressTrack: {
		height: 8,
		backgroundColor: Colors.secondary + "33",
		borderRadius: Radius.full,
		marginBottom: Spacing.md,
		overflow: "hidden",
	},
	progressFill: {
		height: "100%",
		backgroundColor: Colors.primary,
		borderRadius: Radius.full,
	},
	daysRow: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	dayItem: {
		alignItems: "center",
	},
	dayLabel: {
		fontSize: FontSize.xs,
		color: Colors.textSecondary,
		marginBottom: 6,
	},
	dayDot: {
		width: 8,
		height: 8,
		borderRadius: Radius.full,
	},
	dayDotFilled: {
		backgroundColor: Colors.primary,
	},
	dayDotEmpty: {
		backgroundColor: Colors.border,
	},
	lastExerciseTop: {
		flexDirection: "row",
		alignItems: "center",
		gap: Spacing.md,
		marginBottom: Spacing.md,
	},
	iconTile: {
		width: 48,
		height: 48,
		borderRadius: Radius.md,
		backgroundColor: Colors.secondary + "33",
		alignItems: "center",
		justifyContent: "center",
		flexShrink: 0,
	},
	iconTileText: {
		fontSize: FontSize.lg,
		fontWeight: "700",
		color: Colors.primary,
	},
	lastExerciseInfo: {
		flex: 1,
	},
	exerciseProgressInfo: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: Spacing.sm,
	},
	moduleCard: {
		backgroundColor: Colors.surface,
		borderRadius: Radius.xl,
		padding: Spacing.lg,
		marginBottom: Spacing.md,
		borderWidth: 1,
		borderColor: Colors.border,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.06,
		shadowRadius: 8,
	},
	moduleCardTop: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: Spacing.md,
		gap: Spacing.md,
	},
	moduleInfo: {
		flex: 1,
	},
	moduleTitle: {
		fontSize: FontSize.lg,
		fontWeight: "700",
		color: Colors.text,
		marginBottom: 2,
	},
	moduleMeta: {
		fontSize: FontSize.sm,
		color: Colors.textSecondary,
	},
	moduleDesc: {
		fontSize: FontSize.sm,
		color: Colors.textSecondary,
		lineHeight: 20,
		marginBottom: Spacing.md,
	},
	moduleButton: {
		borderRadius: Radius.lg,
		paddingVertical: Spacing.sm + 2,
		paddingHorizontal: Spacing.md,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		gap: Spacing.xs,
	},
	moduleButtonText: {
		fontSize: FontSize.md,
		fontWeight: "600",
	},
	moduleButtonIcon: {
		fontSize: FontSize.xl,
		fontWeight: "500",
	},
	primaryButton: {
		backgroundColor: Colors.primary,
	},
	primaryButtonText: {
		fontSize: FontSize.md,
		fontWeight: "600",
		color: Colors.textOnPrimary,
	},
	primaryButtonIcon: {
		fontSize: FontSize.xl,
		fontWeight: "500",
		color: Colors.textOnPrimary,
	},
});
