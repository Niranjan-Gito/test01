cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "pushbots-cordova-plugin.PushbotsPlugin",
        "file": "plugins/pushbots-cordova-plugin/www/pushbots.js",
        "pluginId": "pushbots-cordova-plugin",
        "clobbers": [
            "PushbotsPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-device": "1.1.5",
    "cordova-plugin-console": "1.0.6",
    "pushbots-cordova-plugin": "1.4.7"
};
// BOTTOM OF METADATA
});