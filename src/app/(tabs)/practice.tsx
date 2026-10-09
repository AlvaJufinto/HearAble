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

const WEEKLY_PROGRESS = 3 / 5;

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

export default function PracticeScreen() {
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
					<Text style={styles.pageTitle}>Latihan</Text>
					<Text style={styles.pageSubtitle}>
						Pilih latihan yang sesuai dengan kebutuhanmu.
					</Text>
				</View>

				<View style={styles.progressCard}>
					<Text style={styles.progressLabel}>PROGRES MINGGU INI</Text>
					<Text style={styles.progressValue}>3 dari 5 latihan selesai</Text>
					<View style={styles.progressTrack}>
						<View
							style={[
								styles.progressFill,
								{ width: `${WEEKLY_PROGRESS * 100}%` },
							]}
						/>
					</View>
					<Text style={styles.progressHelper}>
						Konsisten sedikit demi sedikit, ya!
					</Text>
				</View>

				<View style={styles.sectionHeader}>
					<Text style={styles.sectionTitle}>Semua Modul</Text>
					<Text style={styles.moduleCount}>2 modul</Text>
				</View>

				{modules.map((m, i) => (
					<View key={i} style={styles.moduleCard}>
						<View style={styles.moduleCardTop}>
							<View style={[styles.iconTile, { backgroundColor: m.iconBg }]}>
								<Text style={[styles.iconTileText, { color: m.iconColor }]}>
									{m.iconText}
								</Text>
							</View>
							<View style={styles.moduleInfo}>
								<Text style={styles.moduleTitle}>{m.title}</Text>
								<Text style={styles.moduleMeta}>{m.meta}</Text>
							</View>
						</View>
						<Text style={styles.moduleDesc}>{m.description}</Text>
						<TouchableOpacity
							style={[styles.moduleButton, { backgroundColor: m.buttonBg }]}
							activeOpacity={0.8}
							onPress={() => router.push(m.route as any)}
						>
							<Text style={[styles.moduleButtonText, { color: m.buttonColor }]}>
								Mulai latihan
							</Text>
						</TouchableOpacity>
					</View>
				))}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: { flex: 1, backgroundColor: Colors.background },
	scrollView: { flex: 1 },
	content: { paddingHorizontal: Spacing.lg, paddingBottom: Spacing.xxl },
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
	titleSection: { marginBottom: Spacing.lg },
	pageTitle: {
		fontSize: FontSize.xxl,
		fontWeight: "800",
		color: Colors.text,
		marginBottom: Spacing.xs,
	},
	pageSubtitle: { fontSize: FontSize.md, color: Colors.textSecondary },
	progressCard: {
		backgroundColor: Colors.surface,
		borderRadius: Radius.xl,
		padding: Spacing.lg,
		marginBottom: Spacing.xl,
		borderWidth: 1,
		borderColor: Colors.border,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.06,
		shadowRadius: 8,
	},
	progressLabel: {
		fontSize: FontSize.xs,
		fontWeight: "600",
		color: Colors.primary,
		letterSpacing: 1,
		marginBottom: Spacing.xs,
	},
	progressValue: {
		fontSize: FontSize.xl,
		fontWeight: "700",
		color: Colors.text,
		marginBottom: Spacing.sm,
	},
	progressTrack: {
		height: 8,
		backgroundColor: Colors.secondary + "33",
		borderRadius: Radius.full,
		marginBottom: Spacing.sm,
		overflow: "hidden",
	},
	progressFill: {
		height: "100%",
		backgroundColor: Colors.primary,
		borderRadius: Radius.full,
	},
	progressHelper: { fontSize: FontSize.sm, color: Colors.textSecondary },
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
	moduleCount: { fontSize: FontSize.sm, color: Colors.textSecondary },
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
	iconTile: {
		width: 48,
		height: 48,
		borderRadius: Radius.md,
		alignItems: "center",
		justifyContent: "center",
		flexShrink: 0,
	},
	iconTileText: { fontSize: FontSize.lg, fontWeight: "700" },
	moduleInfo: { flex: 1 },
	moduleTitle: {
		fontSize: FontSize.lg,
		fontWeight: "700",
		color: Colors.text,
		marginBottom: 2,
	},
	moduleMeta: { fontSize: FontSize.sm, color: Colors.textSecondary },
	moduleDesc: {
		fontSize: FontSize.sm,
		color: Colors.textSecondary,
		lineHeight: 20,
		marginBottom: Spacing.md,
	},
	moduleButton: {
		borderRadius: Radius.lg,
		paddingVertical: Spacing.sm + 2,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		gap: Spacing.xs,
	},
	moduleButtonText: { fontSize: FontSize.md, fontWeight: "600" },
});
