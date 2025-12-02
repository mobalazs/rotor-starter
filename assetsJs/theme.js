/**
 * Rotor Starter Theme Configuration
 *
 * Material Design inspired theme system for Roku applications
 * Includes: Colors, Typography, Layout, Motion specifications
 */

module.exports = function () {
	// Layout
	let safeArea = {
		x: 90,
		y: 60,
	};

	let designResolution = {
		w: 1920,
		h: 1080,
	};

	// Material Design Color Palette
	let colors = {
		// Primary colors
		primary: '0x4CAF50FF',
		primaryHover: '0x66BB6AFF',
		primaryPressed: '0x388E3CFF',
		onPrimary: '0xFFFFFFFF',

		// Secondary colors
		secondary: '0x78a999FF',
		secondaryHover: '0x8BB9A9FF',
		secondaryPressed: '0x659488FF',
		onSecondary: '0x000000FF',

		// Background colors
		background: '0x283E30FF',
		onBackground: '0xFFFFFFFF',

		// Surface colors
		surface: '0x0F1A17FF',
		surfaceHover: '0x1A2621FF',
		onSurface: '0xFFFFFFFF',

		// Error colors
		error: '0xB00020FF',
		errorHover: '0xCF002FFF',
		errorPressed: '0x8B0019FF',
		onError: '0xFFFFFFFF',
	};

	// Typography - Font families
	let fonts = {
		regular: 'pkg:/assets/fonts/Roboto-Regular.ttf',
		medium: 'pkg:/assets/fonts/Roboto-Medium.ttf',
		bold: 'pkg:/assets/fonts/Roboto-Bold.ttf',
		light: 'pkg:/assets/fonts/Roboto-Light.ttf',
	};

	// Typography - Material Design Type Scale
	let typography = {
		// Display styles
		displayLarge_aa: {
			uri: fonts.light,
			size: 70,
		},
		displayMedium_aa: {
			uri: fonts.regular,
			size: 56,
		},
		displaySmall_aa: {
			uri: fonts.regular,
			size: 44,
		},

		// Headline styles
		headlineLarge_aa: {
			uri: fonts.regular,
			size: 40,
		},
		headlineMedium_aa: {
			uri: fonts.regular,
			size: 32,
		},
		headlineSmall_aa: {
			uri: fonts.regular,
			size: 28,
		},
		headlineSmall_bold_aa: {
			uri: fonts.bold,
			size: 28,
		},

		// Title styles
		titleLarge_aa: {
			uri: fonts.medium,
			size: 24,
		},
		titleMedium_aa: {
			uri: fonts.medium,
			size: 20,
		},
		titleSmall_aa: {
			uri: fonts.medium,
			size: 18,
		},

		// Body styles
		bodyLarge_aa: {
			uri: fonts.regular,
			size: 22,
		},
		bodyMedium_aa: {
			uri: fonts.regular,
			size: 20,
		},
		bodySmall_aa: {
			uri: fonts.regular,
			size: 18,
		},

		// Label styles
		labelLarge_aa: {
			uri: fonts.medium,
			size: 20,
		},
		labelMedium_aa: {
			uri: fonts.medium,
			size: 18,
		},
		labelSmall_aa: {
			uri: fonts.medium,
			size: 16,
		},
	};

	// Motion - Material Design Motion System
	let motion = {
		// Duration (in seconds) - Material Design standards
		durationFast: 0.2, // Small elements, icons (100-200ms)
		durationMedium: 0.3, // Most UI elements (200-300ms)
		durationSlow: 0.4, // Large elements, complex animations (300-500ms)

		// Easing functions - Native Roku SceneGraph Animation easing
		// Standard - Most common, balanced ease-in and ease-out
		easingStandard: 'inOutCubic',

		// Decelerate - Elements entering the screen (fast start, slow end)
		easingDecelerate: 'outCubic',

		// Accelerate - Elements leaving the screen (slow start, fast end)
		easingAccelerate: 'inCubic',

		// Emphasized - Important state changes, more dramatic
		easingEmphasized: 'inOutQuintic',

		// Subtle - Gentle, barely noticeable animations
		easingSubtle: 'inOutQuad',

		// Sharp - Quick, responsive animations
		easingSharp: 'outQuartic',
	};
	// Images - Application image assets
	let menuBar = {
		rightPadding: 18,
		pageOffset: safeArea.x + 32 + 18 + 2 * 18, // safeArea.x + iconSize + rightPadding + rightMargin
		// Menu icons
		menuItem: {
			iconSize: 32,
			iconUri: {
				home: 'pkg:/assets/images/menuIcons/home_32dp_FFFFFF.png',
				movies: 'pkg:/assets/images/menuIcons/movie_32dp_FFFFFF.png',
				settings:
					'pkg:/assets/images/menuIcons/settings_32dp_FFFFFF.png',
				exit: 'pkg:/assets/images/menuIcons/exit_to_app_32dp_FFFFFF.png',
			},
		},
	};

	let settings = {
		settingIcon: {
			iconSize: 32,
			iconUri: {
				language:
					'pkg:/assets/images/settingIcons/language_32dp_FFFFFF.png',
			},
		},
	};

	return {
		safeArea: safeArea,
		designResolution: designResolution,
		colors: colors,
		typography: typography,
		motion: motion,
		components: {
			menuBar: menuBar,
			settings: settings,
		},
	};
};
