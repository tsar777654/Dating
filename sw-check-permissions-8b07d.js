function getYmid() {
    try {
        return new URL(location.href).searchParams.get('ymid');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
function getVar() {
    try {
        return new URL(location.href).searchParams.get('var');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
self.options = {
    "domain": "ahaurgoo.net",
    "resubscribeOnInstall": true,
    "zoneId": 9426048,
    "ymid": getYmid(),
    "var": getVar()
}
self.lary = "";
importScripts('https://ahaurgoo.net/act/files/sw.perm.check.min.js?r=sw');
