/** @format */

import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors, FontSize, Radius, Spacing } from "@/constant/theme";

const DAYS = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"] as const;

const COMPLETED_DAYS = [0, 1, 2, 4];

const WEEKLY_DATA = DAYS.map((day, index) => ({
	day,
	completed: COMPLETED_DAYS.includes(index),
}));

const MODULES = [
	{
		id: "speaking",
		icon: "Aa",
		iconBg: Colors.secondary + "33",
		title: "Latihan Bicara",
		sessions: "2 sesi",
		completed: 2,
		total: 3,
	},
	{
		id: "recognition",
		icon: "♫",
		iconBg: Colors.tertiary + "33",
		title: "Kenali Suara",
		sessions: "1 sesi",
		completed: 1,
		total: 3,
	},
];

const RECENT = [
	{
		id: "speaking",
		icon: "Aa",
		iconBg: Colors.secondary + "33",
		title: "Latihan Bicara",
		detail: "Frasa sehari-hari · 2 dari 5 kata",
		status: "Dilanjutkan",
	},
	{
		id: "recognition",
		icon: "♫",
		iconBg: Colors.tertiary + "33",
		title: "Kenali Suara",
		detail: "Suara lingkungan · 3 dari 4 audio",
	},
];

function Card({
	children,
	style,
}: {
	children: React.ReactNode;
	style?: object;
}) {
	return <View style={[styles.card, style]}>{children}</View>;
}

function Divider() {
	return <View style={styles.divider} />;
}

function ProgressTrack({ progress }: { progress: number }) {
	return (
		<View style={styles.progressTrack}>
			<View
				style={[
					styles.progressFill,
					{ width: `${Math.min(progress, 1) * 100}%` },
				]}
			/>
		</View>
	);
}

function StatusChip({ label }: { label: string }) {
	return (
		<View style={styles.statusChip}>
			<Text style={styles.statusChipText}>{label}</Text>
		</View>
	);
}

export default function ProgressScreen() {
	return (
		<SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
			<ScrollView
				style={styles.scroll}
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
					<Text style={styles.pageTitle}>Progres</Text>
					<Text style={styles.pageSubtitle}>
						Setiap latihan adalah langkah maju.
					</Text>
				</View>

				<Card style={styles.summaryCard}>
					<Text style={styles.eyebrow}>RINGKASAN MINGGU INI</Text>

					<Divider />

					<View style={styles.metrics}>
						<View style={styles.metric}>
							<View
								style={[
									styles.metricIcon,
									{ backgroundColor: Colors.secondary + "33" },
								]}
							>
								<Text
									style={[styles.metricIconText, { color: Colors.primary }]}
								>
									✓
								</Text>
							</View>

							<Text style={styles.metricCount}>3</Text>
							<Text style={styles.metricLabel}>Latihan selesai</Text>
						</View>

						<View style={styles.metricDivider} />

						<View style={styles.metric}>
							<View
								style={[
									styles.metricIcon,
									{ backgroundColor: Colors.tertiary + "33" },
								]}
							>
								<Text style={[styles.metricIconText, { color: Colors.accent }]}>
									◷
								</Text>
							</View>

							<Text style={styles.metricCount}>3/7</Text>
							<Text style={styles.metricLabel}>Hari aktif</Text>
						</View>
					</View>
				</Card>

				<Card style={styles.weeklyCard}>
					<View style={styles.sectionHeading}>
						<View style={styles.sectionHeadingText}>
							<Text style={styles.cardTitle}>Aktivitas Mingguan</Text>
							<Text style={styles.cardSubtitle}>
								Jumlah sesi latihan per hari
							</Text>
						</View>

						<View style={styles.weekBadge}>
							<Text style={styles.weekBadgeText}>Minggu ini</Text>
						</View>
					</View>

					<View style={styles.chart}>
						{WEEKLY_DATA.map(({ day, completed }) => (
							<View key={day} style={styles.barCol}>
								<View style={styles.barTrack}>
									{completed && (
										<View style={styles.barFill}>
											<View style={styles.barHighlight} />
										</View>
									)}
								</View>

								<Text
									style={[styles.dayLabel, completed && styles.dayLabelActive]}
								>
									{day}
								</Text>
							</View>
						))}
					</View>

					<View style={styles.chartFooter}>
						<View style={styles.legend}>
							<View style={styles.legendDot} />
							<Text style={styles.chartFootnote}>Hari latihan</Text>
						</View>

						<Text style={styles.chartTotal}>4 hari aktif</Text>
					</View>
				</Card>

				<View style={styles.sectionHeader}>
					<View>
						<Text style={styles.sectionTitle}>Progres per Modul</Text>
						<Text style={styles.sectionSubtitle}>
							Ringkasan latihan yang sudah diselesaikan
						</Text>
					</View>
				</View>

				<View style={styles.moduleList}>
					{MODULES.map((module) => (
						<Card key={module.id} style={styles.moduleCard}>
							<View
								style={[styles.moduleIcon, { backgroundColor: module.iconBg }]}
							>
								<Text style={styles.moduleIconText}>{module.icon}</Text>
							</View>

							<View style={styles.moduleInfo}>
								<View style={styles.moduleTitleRow}>
									<Text style={styles.moduleTitle} numberOfLines={1}>
										{module.title}
									</Text>

									<Text style={styles.moduleProgress}>
										{module.completed}/{module.total}
									</Text>
								</View>

								<Text style={styles.moduleSessions}>
									{module.sessions} selesai
								</Text>

								<ProgressTrack progress={module.completed / module.total} />
							</View>
						</Card>
					))}
				</View>

				<View style={styles.sectionHeader}>
					<View>
						<Text style={styles.sectionTitle}>Aktivitas Terakhir</Text>
						<Text style={styles.sectionSubtitle}>
							Lanjutkan perjalanan belajarmu
						</Text>
					</View>
				</View>

				<Card style={styles.recentCard}>
					{RECENT.map((activity, index) => (
						<View key={activity.id}>
							{index > 0 && <Divider />}

							<View style={styles.recentRow}>
								<View
									style={[
										styles.recentIcon,
										{ backgroundColor: activity.iconBg },
									]}
								>
									<Text style={styles.recentIconText}>{activity.icon}</Text>
								</View>

								<View style={styles.recentInfo}>
									<Text style={styles.recentTitle}>{activity.title}</Text>

									<Text style={styles.recentDetail}>{activity.detail}</Text>

									{activity.status && <StatusChip label={activity.status} />}
								</View>
							</View>
						</View>
					))}
				</Card>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	scroll: {
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
	card: {
		backgroundColor: Colors.surface,
		borderRadius: Radius.xl,
		borderWidth: 1,
		borderColor: Colors.border,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.06,
		shadowRadius: 8,
	},
	summaryCard: {
		padding: Spacing.lg,
		marginBottom: Spacing.md,
	},
	eyebrow: {
		fontSize: FontSize.xs,
		fontWeight: "600",
		color: Colors.primary,
		letterSpacing: 1,
		marginBottom: Spacing.md,
	},
	divider: {
		height: 1,
		backgroundColor: Colors.border,
	},
	metrics: {
		flexDirection: "row",
		alignItems: "center",
		paddingTop: Spacing.lg,
	},
	metric: {
		flex: 1,
		alignItems: "center",
	},
	metricDivider: {
		width: 1,
		height: 88,
		backgroundColor: Colors.border,
	},
	metricIcon: {
		width: 36,
		height: 36,
		borderRadius: Radius.md,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: Spacing.xs,
	},
	metricIconText: {
		fontSize: FontSize.lg,
		fontWeight: "700",
	},
	metricCount: {
		fontSize: FontSize.xxl,
		fontWeight: "800",
		color: Colors.text,
	},
	metricLabel: {
		fontSize: FontSize.sm,
		color: Colors.textSecondary,
		marginTop: 2,
		textAlign: "center",
	},
	weeklyCard: {
		padding: Spacing.lg,
		marginBottom: Spacing.xl,
	},
	sectionHeading: {
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "space-between",
		gap: Spacing.sm,
	},
	sectionHeadingText: {
		flex: 1,
	},
	cardTitle: {
		fontSize: FontSize.lg,
		fontWeight: "700",
		color: Colors.text,
	},
	cardSubtitle: {
		fontSize: FontSize.sm,
		color: Colors.textSecondary,
		marginTop: Spacing.xs,
	},
	weekBadge: {
		paddingHorizontal: Spacing.sm,
		paddingVertical: Spacing.xs,
		borderRadius: Radius.full,
		backgroundColor: Colors.secondary + "33",
	},
	weekBadgeText: {
		fontSize: FontSize.xs,
		fontWeight: "600",
		color: Colors.primary,
	},
	chart: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
		height: 112,
		marginTop: Spacing.lg,
	},
	barCol: {
		flex: 1,
		alignItems: "center",
	},
	barTrack: {
		width: 24,
		maxWidth: "80%",
		height: 88,
		borderRadius: Radius.sm,
		backgroundColor: Colors.border,
		justifyContent: "flex-end",
		overflow: "hidden",
	},
	barFill: {
		width: "100%",
		height: 38,
		backgroundColor: Colors.primary,
		borderTopLeftRadius: Radius.sm,
		borderTopRightRadius: Radius.sm,
		justifyContent: "flex-start",
	},
	barHighlight: {
		height: 6,
		backgroundColor: Colors.secondary,
	},
	dayLabel: {
		fontSize: FontSize.xs,
		fontWeight: "500",
		color: Colors.textSecondary,
		marginTop: Spacing.xs,
	},
	dayLabelActive: {
		fontWeight: "700",
		color: Colors.primary,
	},
	chartFooter: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: Spacing.md,
	},
	legend: {
		flexDirection: "row",
		alignItems: "center",
		gap: Spacing.xs,
	},
	legendDot: {
		width: 8,
		height: 8,
		borderRadius: Radius.full,
		backgroundColor: Colors.primary,
	},
	chartFootnote: {
		fontSize: FontSize.xs,
		color: Colors.textSecondary,
	},
	chartTotal: {
		fontSize: FontSize.xs,
		fontWeight: "600",
		color: Colors.text,
	},
	sectionHeader: {
		marginBottom: Spacing.md,
	},
	sectionTitle: {
		fontSize: FontSize.lg,
		fontWeight: "700",
		color: Colors.text,
	},
	sectionSubtitle: {
		fontSize: FontSize.sm,
		color: Colors.textSecondary,
		marginTop: Spacing.xs,
	},
	moduleList: {
		gap: Spacing.md,
		marginBottom: Spacing.xl,
	},
	moduleCard: {
		flexDirection: "row",
		alignItems: "center",
		gap: Spacing.md,
		padding: Spacing.md,
	},
	moduleIcon: {
		width: 48,
		height: 48,
		borderRadius: Radius.md,
		alignItems: "center",
		justifyContent: "center",
		flexShrink: 0,
	},
	moduleIconText: {
		fontSize: FontSize.lg,
		fontWeight: "700",
		color: Colors.text,
	},
	moduleInfo: {
		flex: 1,
		minWidth: 0,
	},
	moduleTitleRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: Spacing.sm,
	},
	moduleTitle: {
		flex: 1,
		fontSize: FontSize.md,
		fontWeight: "700",
		color: Colors.text,
	},
	moduleSessions: {
		fontSize: FontSize.sm,
		color: Colors.textSecondary,
		marginTop: 2,
		marginBottom: Spacing.sm,
	},
	moduleProgress: {
		fontSize: FontSize.sm,
		fontWeight: "700",
		color: Colors.primary,
	},
	progressTrack: {
		width: "100%",
		height: 7,
		borderRadius: Radius.full,
		backgroundColor: Colors.border,
		overflow: "hidden",
	},
	progressFill: {
		height: "100%",
		borderRadius: Radius.full,
		backgroundColor: Colors.primary,
	},
	recentCard: {
		paddingHorizontal: Spacing.md,
		paddingVertical: Spacing.xs,
	},
	recentRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: Spacing.md,
		paddingVertical: Spacing.md,
	},
	recentIcon: {
		width: 44,
		height: 44,
		borderRadius: Radius.md,
		alignItems: "center",
		justifyContent: "center",
		flexShrink: 0,
	},
	recentIconText: {
		fontSize: FontSize.md,
		fontWeight: "700",
		color: Colors.text,
	},
	recentInfo: {
		flex: 1,
		minWidth: 0,
	},
	recentTitle: {
		fontSize: FontSize.md,
		fontWeight: "700",
		color: Colors.text,
	},
	recentDetail: {
		fontSize: FontSize.sm,
		color: Colors.textSecondary,
		marginTop: Spacing.xs,
		marginBottom: Spacing.sm,
	},
	statusChip: {
		alignSelf: "flex-start",
		backgroundColor: Colors.secondary + "33",
		borderRadius: Radius.full,
		paddingHorizontal: Spacing.sm,
		paddingVertical: Spacing.xs,
	},
	statusChipText: {
		fontSize: FontSize.xs,
		fontWeight: "600",
		color: Colors.primary,
	},
});
