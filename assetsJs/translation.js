module.exports = function () {
	let appTitle = 'Rotor Starter Template';

	let languages = {
		en_US: 'English',
		es_ES: 'Español',
		fr_FR: 'Français',
		hu_HU: 'Magyar',
		nl_NL: 'Nederlands',
	};

	let en_US = {
		languages: languages,
		appTitle: 'Rotor Starter App',
		helloWorld: 'Hello World!',
		buttons: {
			clickMe: 'Click Me',
		},
		picker: {
			selectPlaceholder: 'Select...',
		},
		settings: {
			language: 'Language',
		},
		menu: {
			home: 'Home',
			movies: 'Movies',
			settings: 'Settings',
			exit: 'Exit',
		},
		pages: {
			home: {
				title: 'Home Page',
				content:
					'Welcome to the homepage! This `RowList` is shown here as a demonstration \
to illustrate that the framework can operate in a hybrid mode. Creating a fully custom \
`carousel` ViewModel driven by the Rotor Framework is also feasible and recommended. \
For more information, contact the author.',
			},
			movies: {
				title: 'Movies Page',
				content: 'Browse your favorite movies here.',
			},
			settings: {
				title: 'Settings Page',
				content: 'Adjust your application settings.',
			},
		},
		categories: {
			popularMovies: 'Popular Movies',
			topRated: 'Top Rated',
			nowPlaying: 'Now Playing',
			upcoming: 'Upcoming',
			trendingThisWeek: 'Trending This Week',
		},
	};

	let es_ES = {
		languages: languages,
		appTitle: 'Aplicación de Inicio Rotor',
		helloWorld: '¡Hola Mundo!',
		buttons: {
			clickMe: 'Haz Clic',
		},
		picker: {
			selectPlaceholder: 'Seleccionar...',
		},
		settings: {
			language: 'Idioma',
		},
		menu: {
			home: 'Inicio',
			movies: 'Películas',
			settings: 'Configuración',
			exit: 'Salir',
		},
		pages: {
			home: {
				title: 'Página de Inicio',
				content:
					'¡Bienvenido a la página de inicio! Esta `RowList` se muestra aquí como demostración \
para ilustrar que el framework puede operar en modo híbrido. Crear un `carousel` ViewModel \
completamente personalizado impulsado por Rotor Framework también es factible y recomendado. \
Para más información, contacte al autor.',
			},
			movies: {
				title: 'Página de Películas',
				content: 'Explora tus películas favoritas aquí.',
			},
			settings: {
				title: 'Página de Configuración',
				content: 'Ajusta la configuración de tu aplicación.',
			},
		},
		categories: {
			popularMovies: 'Películas Populares',
			topRated: 'Mejor Valoradas',
			nowPlaying: 'En Cartelera',
			upcoming: 'Próximamente',
			trendingThisWeek: 'Tendencias de la Semana',
		},
	};

	let fr_FR = {
		languages: languages,
		appTitle: 'Application de Démarrage Rotor',
		helloWorld: 'Bonjour le Monde!',
		buttons: {
			clickMe: 'Cliquez Ici',
		},
		picker: {
			selectPlaceholder: 'Sélectionner...',
		},
		settings: {
			language: 'Langue',
		},
		menu: {
			home: 'Accueil',
			movies: 'Films',
			settings: 'Paramètres',
			exit: 'Quitter',
		},
		pages: {
			home: {
				title: "Page d'Accueil",
				content:
					"Bienvenue sur la page d'accueil ! Cette `RowList` est affichée ici comme démonstration \
pour illustrer que le framework peut fonctionner en mode hybride. Créer un `carousel` ViewModel \
entièrement personnalisé piloté par Rotor Framework est également possible et recommandé. \
Pour plus d'informations, contactez l'auteur.",
			},
			movies: {
				title: 'Page des Films',
				content: 'Parcourez vos films préférés ici.',
			},
			settings: {
				title: 'Page des Paramètres',
				content: 'Ajustez les paramètres de votre application.',
			},
		},
		categories: {
			popularMovies: 'Films Populaires',
			topRated: 'Mieux Notés',
			nowPlaying: 'À l\'Affiche',
			upcoming: 'À Venir',
			trendingThisWeek: 'Tendances de la Semaine',
		},
	};

	let hu_HU = {
		languages: languages,
		appTitle: 'Rotor Kezdő Alkalmazás',
		helloWorld: 'Helló Világ!',
		buttons: {
			clickMe: 'Kattints Ide',
		},
		picker: {
			selectPlaceholder: 'Válassz...',
		},
		settings: {
			language: 'Nyelv',
		},
		menu: {
			home: 'Kezdőlap',
			movies: 'Filmek',
			settings: 'Beállítások',
			exit: 'Kilépés',
		},
		pages: {
			home: {
				title: 'Kezdőlap',
				content:
					'Üdvözöljük a kezdőlapon! Ez a `RowList` bemutatóként jelenik meg itt, hogy \
szemléltesse, hogy a keretrendszer hibrid módban is képes működni. Egy teljesen egyedi, \
Rotor Framework által vezérelt `carousel` ViewModel létrehozása szintén megvalósítható és ajánlott. \
További információért vegye fel a kapcsolatot a szerzővel.',
			},
			movies: {
				title: 'Filmek Oldal',
				content: 'Böngésszen kedvenc filmjei között itt.',
			},
			settings: {
				title: 'Beállítások Oldal',
				content: 'Állítsa be az alkalmazás beállításait.',
			},
		},
		categories: {
			popularMovies: 'Népszerű Filmek',
			topRated: 'Legjobb Értékelésűek',
			nowPlaying: 'Most a Mozikban',
			upcoming: 'Hamarosan',
			trendingThisWeek: 'A Hét Slágerei',
		},
	};

	let nl_NL = {
		languages: languages,
		appTitle: 'Rotor Starter App',
		helloWorld: 'Hallo Wereld!',
		buttons: {
			clickMe: 'Klik Hier',
		},
		picker: {
			selectPlaceholder: 'Selecteer...',
		},
		settings: {
			language: 'Taal',
		},
		menu: {
			home: 'Home',
			movies: 'Films',
			settings: 'Instellingen',
			exit: 'Afsluiten',
		},
		pages: {
			home: {
				title: 'Startpagina',
				content:
					'Welkom op de startpagina! Deze `RowList` wordt hier als demonstratie getoond om te \
illustreren dat het framework in hybride modus kan werken. Het maken van een volledig aangepast \
`carousel` ViewModel aangedreven door Rotor Framework is ook haalbaar en aanbevolen. \
Voor meer informatie, neem contact op met de auteur.',
			},
			movies: {
				title: 'Filmenpagina',
				content: 'Blader hier door uw favoriete films.',
			},
			settings: {
				title: 'Instellingenpagina',
				content: 'Pas uw applicatie-instellingen aan.',
			},
		},
		categories: {
			popularMovies: 'Populaire Films',
			topRated: 'Best Beoordeeld',
			nowPlaying: 'Nu in de Bioscoop',
			upcoming: 'Binnenkort',
			trendingThisWeek: 'Trending deze Week',
		},
	};

	return {
		en_US: en_US,
		es_ES: es_ES,
		fr_FR: fr_FR,
		hu_HU: hu_HU,
		nl_NL: nl_NL,
	};
};
