const fs = require('fs');
const path = require('path');

class ManifestPlugin {
    constructor() {
        this.name = 'ManifestPlugin';
    }

    afterProgramTranspile(program) {
        try {
            // Read config.json
            const configPath = path.join(process.cwd(), 'config.json');
            if (!fs.existsSync(configPath)) {
                console.warn('[ManifestPlugin] Warning: config.json not found.');
                return;
            }

            const configContent = fs.readFileSync(configPath, 'utf8');
            const config = JSON.parse(configContent);

            // Get TMDB API key from config
            const tmdbApiKey = config.TMDB_API_KEY || '';

            if (!tmdbApiKey || tmdbApiKey === 'YOUR_API_KEY_HERE') {
                console.warn('[ManifestPlugin] Warning: TMDB_API_KEY not set in config.json');
            }

            // Read manifest file from staging directory
            const stagingDir = program.options?.outDir || program.options?.stagingDir || 'dist';
            const manifestPath = path.join(stagingDir, 'manifest');

            if (!fs.existsSync(manifestPath)) {
                console.warn('[ManifestPlugin] Warning: manifest file not found at', manifestPath);
                return;
            }

            let manifestContent = fs.readFileSync(manifestPath, 'utf8');

            // Update tmdb_api_key in manifest
            const tmdbKeyRegex = /^tmdb_api_key=.*$/m;
            if (tmdbKeyRegex.test(manifestContent)) {
                manifestContent = manifestContent.replace(tmdbKeyRegex, `tmdb_api_key=${tmdbApiKey}`);
            } else {
                // If tmdb_api_key doesn't exist, add it
                manifestContent += `\ntmdb_api_key=${tmdbApiKey}\n`;
            }

            // Write updated manifest
            fs.writeFileSync(manifestPath, manifestContent, 'utf8');
            console.log('[ManifestPlugin] Updated manifest with TMDB_API_KEY from config.json');

        } catch (error) {
            console.error('[ManifestPlugin] Error:', error);
        }
    }
}

module.exports = function() {
    return new ManifestPlugin();
};
