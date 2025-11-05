module.exports = function () {
	let safeAreaOffsets = {
		x: 90,
		y: 60,
	};
	let designResolution = {
		w: 1920,
		h: 1080,
	};

	let colors = {
		background: '0x283E30FF',
		background_2: '0x0F1A17FF',
		primary: '0x3E6641FF',
		primary_2: '0x4CAF50FF',
		secondary: '0x78a999FF',
		secondary_2: '0xFFFFFFFF',
		error: '0xB00020FF',
		red: '0xCB450BFF',
		black: '0x000000FF',
		white: '0xFFFFFFFF',
	};

	let fonts = {
		light: 'pkg:/assets/fonts/kingsbridge-ultralight.ttf',
		normal: 'pkg:/assets/fonts/kingsbridge-light.ttf',
		normalItalic: 'pkg:/assets/fonts/kingsbridge-light-italic.ttf',
		bold: 'pkg:/assets/fonts/kingsbridge-semibold.ttf',
	};

	let fontStyles = {
		// loadingTitle
		H1_aa: {
			uri: fonts.bold,
			size: 70,
		},
		H2_aa: {
			uri: fonts.normalItalic,
			size: 56,
		},
		H3_aa: {
			uri: fonts.light,
			size: 40,
		},
		H4_aa: {
			uri: fonts.normal,
			size: 30,
		},
		H5_aa: {
			uri: fonts.bold,
			size: 28,
		},
		appTitle_aa: {
			uri: fonts.light,
			size: 60,
		},
		default_aa: {
			uri: fonts.normal,
			size: 24,
		},
		defaultBold_aa: {
			uri: fonts.bold,
			size: 24,
		},
		defaultButtonText_aa: {
			uri: fonts.normal,
			size: 22,
		},
		hintText_aa: {
			uri: fonts.normal,
			size: 20,
		},
	};

	let baseAnimation = {
		duration: 0.75,
	};

	let getButtons = function (colors) {
		return {
			simpleButton: {
				width: 180,
				height: 60,
				paddingX: 20,
				posterUrl: 'pkg:/assets/images/button-rounded_rectangle.9.png',
				fontStyle_aa: fontStyles.defaultButtonText_aa,
				textColor: colors.secondary_2,
				bgColor: colors.primary,
				textColor_focused: colors.primary,
				bgColor_focused: colors.secondary_2,
			},
		};
	};

	let getDialogs = function (colors) {
		return {
			defaultDialog: {
				posterUrl:
					'https://rotor-sample.b-cdn.net/images/bgGradient.png',
				overlayColor: colors.background_2,
				baseColor: colors.black,
				blendColor: colors.background,
				titleTextFontStyle_aa: fontStyles.H4_aa,
				bodyTextFontStyle_aa: fontStyles.default_aa,
				titleTextColor: colors.secondary_2,
				bodyTextColor: colors.secondary,
				framePadding: 10,
				animationDuration: baseAnimation.duration / 3,
			},
		};
	};

	let getCarousel = function (colors) {
		return {
			animSpeed: 1.6, // unit: px per millisecond
			fadeOutOpacity: 0.4,
			focusFrameUrl: 'pkg:/assets/images/carousel-focus_frame.9.png',
			row: {
				rowSpacing: 20,
				cardSpacing: 10,
				default: {
					height: 300 + 40,
					card: {
						width: 200,
						height: 300,
						placeholderColor: colors.black,
					},
					promoTripleCard: {
						width: 620,
						height: 300,
						placeholderColor: colors.black,
					},
					title: {
						height: 40,
						fontStyle_aa: fontStyles.H5_aa,
						textColor: colors.secondary_2,
					},
				},
				hero: {
					height: 300,
					card: {
						width: 200,
						height: 300,
						placeholderColor: colors.black,
					},
				},
			},
		};
	};

	let getMediaBackground = function (colors) {
		return {
			animDuration: 0.4,
			fadeOutOpacity: 0.4,
			quarterOverLayUrl:
				'https://rotor-sample.b-cdn.net/images/teaserDefaultOverlayUrl.png',
			fullOverlayUrl:
				'https://rotor-sample.b-cdn.net/images/bgGradient.png',
		};
	};

	let menuSeparatorLineHeight = 1080 - 2 * safeAreaOffsets.y;

	let components = {
		busySpinner: {
			url: 'pkg:/assets/images/spinner-inner.png',
			size: {
				w: 120,
				h: 120,
			},
		},
		layout: {
			appBackground: {
				posterUrl:
					'https://rotor-sample.b-cdn.net/images/bgGradient.png',
				blendColor: colors.background,
			},
			menuBackground: {
				url: 'https://rotor-sample.b-cdn.net/images/left_menu_separator_bg_gradient.png',
				size: {
					width: 300,
					height: 1000,
				},
				color: colors.background_2,
				translation: [0, menuSeparatorLineHeight - 1000],
			},
			menuSeparatorLine: {
				height: menuSeparatorLineHeight,
				width: 1.5,
				color: colors.primary_2,
				translation: [300, 0],
			},
			appTitle: {
				translation: [325, 0],
				color: colors.primary_2,
				fontStyle_aa: fontStyles.appTitle_aa,
			},
		},
		settings: {
			settingWrapperPadding: 30,
			languagePicker: {
				marginBottom: 10,
				labelWidth: 150,
			},
			rcArrowIcon: {
				url: 'pkg:/assets/images/icons/ic_keyboard_arrow_down.png',
				size: {
					width: 60,
					height: 60,
				},
			},
		},
		pageMenu: {
			sideBarPadding: 30,
			fontStyle_aa: fontStyles.default_aa,
			marginRight: 15,
			labelWidth: 215, // 245 label width + 15 margin right + 40 icon with + sideBarPadding = 300
			marginBottom: 45,
			labelHeight: 40,
			icon: {
				size: {
					width: 40,
					height: 40,
				},
			},
			textColor: {
				default: colors.secondary,
				focused: colors.secondary_2,
				active: colors.primary_2,
			},
			menuIcons_aa: {
				home: {
					url: 'pkg:/assets/images/icons/ic_home.png',
				},
				movies: {
					url: 'pkg:/assets/images/icons/ic_image.png',
				},
				series: {
					url: 'pkg:/assets/images/icons/ic_collections.png',
				},
				settings: {
					url: 'pkg:/assets/images/icons/ic_settings.png',
				},
				exitApp: {
					url: '',
				},
			},
		},
		languagePicker: {
			fontStyle_aa: fontStyles.defaultBold_aa,
			marginBottom: 15,
			labelWidth: 230,
			labelHeight: 40,
			textColor: {
				default: colors.secondary,
				focused: colors.secondary_2,
				active: colors.primary_2,
			},
		},
		carousel: getCarousel(colors),
		mediaBackground: getMediaBackground(colors),
		dialogs: getDialogs(colors),
		buttons: getButtons(colors),
	};

	return Object.assign(
		{
			designResolution: designResolution,
			safeAreaOffsets: safeAreaOffsets,
			colors: colors,
			fontStyles: fontStyles,
		},
		{ components: components }
	);
};
