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
	};

	let es_ES = {
		languages: languages,
		appTitle: "Aplicación de Inicio Rotor",
		helloWorld: '¡Hola Mundo!',
	};

	let fr_FR = {
		languages: languages,
		appTitle: "Application de Démarrage Rotor",
		helloWorld: 'Bonjour le Monde!',
	};

	let hu_HU = {
		languages: languages,
		appTitle: "Rotor Kezdő Alkalmazás",
		helloWorld: 'Helló Világ!',
	};

	let nl_NL = {
		languages: languages,
		appTitle: "Rotor Starter App",
		helloWorld: 'Hallo Wereld!',
	};

	return {
		en_US: en_US,
		es_ES: es_ES,
		fr_FR: fr_FR,
		hu_HU: hu_HU,
		nl_NL: nl_NL,
	};
};
