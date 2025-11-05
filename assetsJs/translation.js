module.exports = function () {
	let appTitle = 'Rotor Framework POC';

	let languages = {
		en_US: 'English',
		// es_ES: 'Español',
		// fr_FR: 'Français',
		// de_DE: 'Deutsch',
		// hu_HU: 'Magyar',
		// it_IT: 'Italiano',
		// nl_NL: 'Nederlands',
		// pl_PL: 'Polski',
		// pt_PT: 'Português',
		// sv_SE: 'Svenska'
	};

	let en_US = {
		appTitle: appTitle,
		languages: languages,
		helloWorld: 'Hello World!',
		menuItems: {
			home: {
				text: 'Home',
			},
			movies: {
				text: 'Movies',
			},
			series: {
				text: 'Series',
			},
			settings: {
				text: 'Settings',
			},
			exitApp: {
				text: 'Exit POC',
			},
		},
		loadingScreen: {
			almostDone: "Almost done...",
			loading: "LOADING"
		},
		settings: {
			languagePicker: {
				headlineText: 'Languages:',
			},
		},
		dialog: {
			cancelButton: 'Cancel',
			okButton: 'OK',
			exitAppTitle: 'Exit App',
			confirmExitAppMessage: `Are you sure you want to exit POC App?`,
			exitAppButton: 'Exit',
		},
		promoButtonTexts: {
			limitedTimeOffer:'Limited-Time Offers!',
			learnMore: 'Learn more'
		}
	};

	return {
		// de_DE: de_DE,
		en_US: en_US,
		de_DE: en_US,
		// 	es_ES: es_ES,
		// 	fr_FR: fr_FR,
		// 	hu_HU: hu_HU,
		// 	it_IT: it_IT,
		// 	nl_NL: nl_NL,
		// 	pl_PL: pl_PL,
		// 	pt_PT: pt_PT,
		// 	sv_SE: sv_SE,
	};
};
