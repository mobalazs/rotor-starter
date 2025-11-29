module.exports = function () {
	let appTitle = 'Rotor Framework POC';

	let languages = {
		en_US: 'English',
		es_ES: 'Español',
		fr_FR: 'Français',
		hu_HU: 'Magyar',
		nl_NL: 'Nederlands'
	};

	let en_US = {
		languages: languages,
		appTitle: "Rotor Starter App",
		helloWorld: 'Hello World!',
		buttons: {
			clickMe: 'Click Me'
		},
		menu: {
			home: 'Home',
			movies: 'Movies',
			settings: 'Settings',
			exit: 'Exit'
		},
		pages: {
			home: {
				title: 'Home Page',
				content: 'Welcome to the Home page!'
			},
			movies: {
				title: 'Movies Page',
				content: 'Browse your favorite movies here.'
			},
			settings: {
				title: 'Settings Page',
				content: 'Adjust your application settings.'
			}
		}
	};

	let es_ES = {
		languages: languages,
		appTitle: "Aplicación de Inicio Rotor",
		helloWorld: '¡Hola Mundo!',
		buttons: {
			clickMe: 'Haz Clic'
		},
		menu: {
			home: 'Inicio',
			movies: 'Películas',
			settings: 'Configuración',
			exit: 'Salir'
		},
		pages: {
			home: {
				title: 'Página de Inicio',
				content: '¡Bienvenido a la página de inicio!'
			},
			movies: {
				title: 'Página de Películas',
				content: 'Explora tus películas favoritas aquí.'
			},
			settings: {
				title: 'Página de Configuración',
				content: 'Ajusta la configuración de tu aplicación.'
			}
		}
	};

	let fr_FR = {
		languages: languages,
		appTitle: "Application de Démarrage Rotor",
		helloWorld: 'Bonjour le Monde!',
		buttons: {
			clickMe: 'Cliquez Ici'
		},
		menu: {
			home: 'Accueil',
			movies: 'Films',
			settings: 'Paramètres',
			exit: 'Quitter'
		},
		pages: {
			home: {
				title: 'Page d\'Accueil',
				content: 'Bienvenue sur la page d\'accueil!'
			},
			movies: {
				title: 'Page des Films',
				content: 'Parcourez vos films préférés ici.'
			},
			settings: {
				title: 'Page des Paramètres',
				content: 'Ajustez les paramètres de votre application.'
			}
		}
	};

	let hu_HU = {
		languages: languages,
		appTitle: "Rotor Kezdő Alkalmazás",
		helloWorld: 'Helló Világ!',
		buttons: {
			clickMe: 'Kattints Ide'
		},
		menu: {
			home: 'Kezdőlap',
			movies: 'Filmek',
			settings: 'Beállítások',
			exit: 'Kilépés'
		},
		pages: {
			home: {
				title: 'Kezdőlap',
				content: 'Üdvözöljük a kezdőlapon!'
			},
			movies: {
				title: 'Filmek Oldal',
				content: 'Böngésszen kedvenc filmjei között itt.'
			},
			settings: {
				title: 'Beállítások Oldal',
				content: 'Állítsa be az alkalmazás beállításait.'
			}
		}
	};

	let nl_NL = {
		languages: languages,
		appTitle: "Rotor Starter App",
		helloWorld: 'Hallo Wereld!',
		buttons: {
			clickMe: 'Klik Hier'
		},
		menu: {
			home: 'Home',
			movies: 'Films',
			settings: 'Instellingen',
			exit: 'Afsluiten'
		},
		pages: {
			home: {
				title: 'Startpagina',
				content: 'Welkom op de startpagina!'
			},
			movies: {
				title: 'Filmenpagina',
				content: 'Blader hier door uw favoriete films.'
			},
			settings: {
				title: 'Instellingenpagina',
				content: 'Pas uw applicatie-instellingen aan.'
			}
		}
	};

	return {
		en_US: en_US,
		es_ES: es_ES,
		fr_FR: fr_FR,
		hu_HU: hu_HU,
		nl_NL: nl_NL,
	};
};
