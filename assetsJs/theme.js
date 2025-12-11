/**
 * Rotor Starter Theme Configuration
 *
 * Material Design 3 aligned theme system for Roku applications.
 * Colors are generated from seed colors via Material color utilities.
 */

const {
	argbFromHex,
	hexFromArgb,
	CorePalette,
	DynamicScheme,
} = require('@material/material-color-utilities');

// Convert ARGB int to Roku hex string (0xRRGGBBAA)
function argbToRokuHex(argb) {
	const hexRgb = hexFromArgb(argb).replace('#', '').toUpperCase();
	const alpha = ((argb >> 24) & 0xff).toString(16).padStart(2, '0').toUpperCase();
	return `0x${hexRgb}${alpha}`;
}

module.exports = function () {
	// Seed colors (primary/secondary/tertiary) for palette generation
	const seedColors = {
		primary: '#4CAF50',
		secondary: '#78A999',
		tertiary: '#A1D7E7',
	};

	// Layout
	let safeArea = {
		x: 90,
		y: 60,
	};

	let designResolution = {
		w: 1920,
		h: 1080,
	};

	// Generate palettes from seed colors
	const primaryPalette = CorePalette.of(argbFromHex(seedColors.primary));
	const secondaryPalette = CorePalette.of(argbFromHex(seedColors.secondary));
	const tertiaryPalette = CorePalette.of(argbFromHex(seedColors.tertiary));

	// Build a dark DynamicScheme using custom palettes (primary/secondary/tertiary seeds)
	const dynamicScheme = new DynamicScheme({
		sourceColorArgb: argbFromHex(seedColors.primary),
		variant: 2, // Variant.TONAL_SPOT
		contrastLevel: 0,
		isDark: true,
		primaryPalette: primaryPalette.a1,
		secondaryPalette: secondaryPalette.a2,
		tertiaryPalette: tertiaryPalette.a3,
		neutralPalette: primaryPalette.n1,
		neutralVariantPalette: primaryPalette.n2,
	});

	// Material Design 3 color roles (dark theme, generated)
	// Also you can hard coded the colors if you want to customize them manually
	let colors = {
		// Core brand
		primary: argbToRokuHex(dynamicScheme.primary),
		onPrimary: argbToRokuHex(dynamicScheme.onPrimary),
		primaryContainer: argbToRokuHex(dynamicScheme.primaryContainer),
		onPrimaryContainer: argbToRokuHex(dynamicScheme.onPrimaryContainer),

		secondary: argbToRokuHex(dynamicScheme.secondary),
		onSecondary: argbToRokuHex(dynamicScheme.onSecondary),
		secondaryContainer: argbToRokuHex(dynamicScheme.secondaryContainer),
		onSecondaryContainer: argbToRokuHex(dynamicScheme.onSecondaryContainer),

		tertiary: argbToRokuHex(dynamicScheme.tertiary),
		onTertiary: argbToRokuHex(dynamicScheme.onTertiary),
		tertiaryContainer: argbToRokuHex(dynamicScheme.tertiaryContainer),
		onTertiaryContainer: argbToRokuHex(dynamicScheme.onTertiaryContainer),

		// Neutral / surfaces
		background: argbToRokuHex(dynamicScheme.background),
		onBackground: argbToRokuHex(dynamicScheme.onBackground),
		surface: argbToRokuHex(dynamicScheme.surface),
		surfaceDim: argbToRokuHex(dynamicScheme.surfaceDim),
		surfaceBright: argbToRokuHex(dynamicScheme.surfaceBright),
		surfaceContainerLowest: argbToRokuHex(dynamicScheme.surfaceContainerLowest),
		surfaceContainerLow: argbToRokuHex(dynamicScheme.surfaceContainerLow),
		surfaceContainer: argbToRokuHex(dynamicScheme.surfaceContainer),
		surfaceContainerHigh: argbToRokuHex(dynamicScheme.surfaceContainerHigh),
		surfaceContainerHighest: argbToRokuHex(dynamicScheme.surfaceContainerHighest),
		surfaceVariant: argbToRokuHex(dynamicScheme.surfaceVariant),
		onSurface: argbToRokuHex(dynamicScheme.onSurface),
		onSurfaceVariant: argbToRokuHex(dynamicScheme.onSurfaceVariant),
		outline: argbToRokuHex(dynamicScheme.outline),
		outlineVariant: argbToRokuHex(dynamicScheme.outlineVariant),

		// Status
		error: argbToRokuHex(dynamicScheme.error),
		onError: argbToRokuHex(dynamicScheme.onError),
		errorContainer: argbToRokuHex(dynamicScheme.errorContainer),
		onErrorContainer: argbToRokuHex(dynamicScheme.onErrorContainer),

		// Inverse and depth
		inverseSurface: argbToRokuHex(dynamicScheme.inverseSurface),
		inverseOnSurface: argbToRokuHex(dynamicScheme.inverseOnSurface),
		inversePrimary: argbToRokuHex(dynamicScheme.inversePrimary),
		scrim: argbToRokuHex(dynamicScheme.scrim),
		shadow: argbToRokuHex(dynamicScheme.shadow),

		// Hover/pressed variants derived from tonal palettes
		primaryHover: argbToRokuHex(primaryPalette.a1.tone(90)),
		primaryPressed: argbToRokuHex(primaryPalette.a1.tone(70)),
		secondaryHover: argbToRokuHex(secondaryPalette.a2.tone(90)),
		secondaryPressed: argbToRokuHex(secondaryPalette.a2.tone(70)),
	};

	// Elevation overlay (use overlay alpha to tint surfaces)
	let elevation = {
		level0: { overlayAlpha: 0 },
		level1: { overlayAlpha: 0.05 },
		level2: { overlayAlpha: 0.08 },
		level3: { overlayAlpha: 0.11 },
		level4: { overlayAlpha: 0.12 },
		level5: { overlayAlpha: 0.14 },
	};

	// Utility: blend overlay on top of a base Roku hex color (0xRRGGBBAA)
	function applyOverlay(baseHex, overlayHex, overlayAlpha) {
		let toRgba = function (hex) {
			let v = hex.replace(/^0x/, '');
			return {
				r: parseInt(v.slice(0, 2), 16),
				g: parseInt(v.slice(2, 4), 16),
				b: parseInt(v.slice(4, 6), 16),
				a: parseInt(v.slice(6, 8), 16) / 255,
			};
		};

		let toHex = function (rgba) {
			let channels = [rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 255)];
			let hex = channels
				.map(function (c) {
					return c.toString(16).padStart(2, '0').toUpperCase();
				})
				.join('');
			return '0x' + hex;
		};

		let base = toRgba(baseHex);
		let overlay = toRgba(overlayHex);
		let oa = overlayAlpha * overlay.a;

		let out = {
			r: Math.round((1 - oa) * base.r + oa * overlay.r),
			g: Math.round((1 - oa) * base.g + oa * overlay.g),
			b: Math.round((1 - oa) * base.b + oa * overlay.b),
			a: base.a, // keep base alpha
		};
		return toHex(out);
	}

	// Precomputed elevation surfaces for dark mode (white overlay on surface)
	const overlayColor = '0xFFFFFFFF';
	let elevationSurfaces = {
		level0: colors.surface,
		level1: applyOverlay(
			colors.surface,
			overlayColor,
			elevation.level1.overlayAlpha
		),
		level2: applyOverlay(
			colors.surface,
			overlayColor,
			elevation.level2.overlayAlpha
		),
		level3: applyOverlay(
			colors.surface,
			overlayColor,
			elevation.level3.overlayAlpha
		),
		level4: applyOverlay(
			colors.surface,
			overlayColor,
			elevation.level4.overlayAlpha
		),
		level5: applyOverlay(
			colors.surface,
			overlayColor,
			elevation.level5.overlayAlpha
		),
	};
	colors.elevationSurfaces = elevationSurfaces;

	// Material Design state-layer opacities
	let stateLayers = {
		hover: 0.08,
		focus: 0.12,
		pressed: 0.12,
		dragged: 0.16,
	};

	// Typography - Font families
	let fonts = {
		regular: 'pkg:/assets/fonts/Roboto-Regular.ttf',
		medium: 'pkg:/assets/fonts/Roboto-Medium.ttf',
		bold: 'pkg:/assets/fonts/Roboto-Bold.ttf',
	};

	// Typography - Material Design 3 type scale
	let typography = {
		// Display styles
		displayLarge_aa: {
			uri: fonts.regular,
			size: 86,
		},
		displayMedium_aa: {
			uri: fonts.regular,
			size: 68,
		},
		displaySmall_aa: {
			uri: fonts.regular,
			size: 54,
		},

		// Headline styles
		headlineLarge_aa: {
			uri: fonts.regular,
			size: 48,
		},
		headlineMedium_aa: {
			uri: fonts.regular,
			size: 42,
		},
		headlineSmall_aa: {
			uri: fonts.regular,
			size: 36,
		},
		headlineSmall_bold_aa: {
			uri: fonts.bold,
			size: 36,
		},

		// Title styles
		titleLarge_aa: {
			uri: fonts.medium,
			size: 33,
		},
		titleMedium_aa: {
			uri: fonts.medium,
			size: 24,
		},
		titleSmall_aa: {
			uri: fonts.medium,
			size: 21,
		},

		// Body styles
		bodyLarge_aa: {
			uri: fonts.regular,
			size: 24,
		},
		bodyMedium_aa: {
			uri: fonts.regular,
			size: 21,
		},
		bodySmall_aa: {
			uri: fonts.regular,
			size: 18,
		},

		// Label styles
		labelLarge_aa: {
			uri: fonts.medium,
			size: 21,
		},
		labelMedium_aa: {
			uri: fonts.medium,
			size: 18,
		},
		labelSmall_aa: {
			uri: fonts.medium,
			size: 17,
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
		pickerArrow: {
			iconSize: 24,
			iconUri: {
				down: 'pkg:/assets/images/settingIcons/arrow_drop_down_24dp_FFFFFF.png',
				up: 'pkg:/assets/images/settingIcons/arrow_drop_up_24dp_FFFFFF.png',
			},
		},
	};

	return {
		safeArea: safeArea,
		designResolution: designResolution,
		colors: colors,
		stateLayers: stateLayers,
		typography: typography,
		motion: motion,
		components: {
			menuBar: menuBar,
			settings: settings,
		},
	};
};
