#!/usr/bin/env node

/**
 * Roku Static Analysis Tool Runner
 * Executes the Roku Static Analysis CLI tool on the build output
 * Documentation: https://developer.roku.com/docs/developer-program/dev-tools/static-analysis-tool/command-line-utility.md
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const SCA_CMD = path.join(__dirname, 'sca', 'bin', 'sca-cmd');
const STAGING_DIR = path.join(__dirname, '..', 'dist');

// Check if staging directory exists
if (!fs.existsSync(STAGING_DIR)) {
    console.error('❌ Error: Build output not found at', STAGING_DIR);
    console.error('   Please run "npm run build-dev" first to generate the build output.');
    process.exit(1);
}

try {
    console.log('🔍 Running Roku Static Code Analysis...');
    console.log(`   Analyzing: ${STAGING_DIR}\n`);
    execSync(`"${SCA_CMD}" "${STAGING_DIR}" --severity error`, { stdio: 'inherit' });
    console.log('\n✅ Static analysis complete!');
} catch (error) {
    console.error('\n❌ Static analysis found issues or failed');
    process.exit(error.status || 1);
}
