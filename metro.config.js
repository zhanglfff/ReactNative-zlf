// const { getDefaultConfig } = require('@expo/metro-config');
// // const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// const config = getDefaultConfig(__dirname);

// config.resolver.assetExts.push(
//   // Adds support for `.db` files for Firebase database
//   'cjs'
// );

// config.resolver.sourceExts.push(
//   'cjs'
// );

// module.exports = config;


// const { getDefaultConfig } = require('@expo/metro-config');

// const defaultConfig = getDefaultConfig(__dirname);

// defaultConfig.resolver.assetExts.push('cjs');

// module.exports = defaultConfig;

const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
config.resolver.sourceExts.push('cjs');
config.resolver.unstable_enablePackageExports = true;
module.exports = config;