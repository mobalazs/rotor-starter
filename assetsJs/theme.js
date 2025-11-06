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
		displayLarge: {
			uri: fonts.light,
			size: 70,
		},
		displayMedium: {
			uri: fonts.regular,
			size: 56,
		},
		displaySmall: {
			uri: fonts.regular,
			size: 44,
		},

		// Headline styles
		headlineLarge: {
			uri: fonts.regular,
			size: 40,
		},
		headlineMedium: {
			uri: fonts.regular,
			size: 32,
		},
		headlineSmall: {
			uri: fonts.regular,
			size: 28,
		},

		// Title styles
		titleLarge: {
			uri: fonts.medium,
			size: 24,
		},
		titleMedium: {
			uri: fonts.medium,
			size: 20,
		},
		titleSmall: {
			uri: fonts.medium,
			size: 18,
		},

		// Body styles
		bodyLarge: {
			uri: fonts.regular,
			size: 22,
		},
		bodyMedium: {
			uri: fonts.regular,
			size: 20,
		},
		bodySmall: {
			uri: fonts.regular,
			size: 18,
		},

		// Label styles
		labelLarge: {
			uri: fonts.medium,
			size: 20,
		},
		labelMedium: {
			uri: fonts.medium,
			size: 18,
		},
		labelSmall: {
			uri: fonts.medium,
			size: 16,
		},
	};

	// Motion - Material Design Motion System
	let motion = {
		// Duration (in seconds) - Material Design standards
		durationFast: 0.2,      // Small elements, icons (100-200ms)
		durationMedium: 0.3,    // Most UI elements (200-300ms)
		durationSlow: 0.4,      // Large elements, complex animations (300-500ms)

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

	return {
		safeArea: safeArea,
		designResolution: designResolution,
		colors: colors,
		typography: typography,
		motion: motion,
	};
};
