var _getActiveTab, _readCookieValue, _readStorageValue, clickedPhone, clickedPhoneList, clickedRecordId1, clickedRecordId2, clickedRecordId3, isSalesforceDomain, nonPhoneFilter, openSoftphone, salesforce, softphoneWindowId, userSettings;
softphoneWindowId = null, clickedPhone = null, clickedRecordId1 = null, clickedRecordId2 = null, clickedRecordId3 = null, clickedPhoneList = null, salesforce = {}, nonPhoneFilter = null, userSettings = {}, userSettings.countryCode = null, chrome.runtime.onMessageExternal.addListener(function(e, t, n) {
    return e && e.message ? "version" === e.message ? n({
        version: ringdna["package"].version
    }) : "focus" === e.message ? clickedPhone ? (n({
        phone: clickedPhone,
        primaryRecordId: clickedRecordId1,
        secondaryRecordId: clickedRecordId2,
        initiatingRecordId: clickedRecordId3,
        phoneList: clickedPhoneList,
        salesforce: salesforce,
        extensionVersion: chrome.app.getDetails().version
    }), clickedPhone = null, clickedRecordId1 = null, clickedRecordId2 = null, clickedPhoneList = null) : (salesforce.passThroughLogin ? n({
        salesforce: salesforce,
        phoneList: []
    }) : n(), void 0) : "non-phone-filter" === e.message ? nonPhoneFilter = e.filter : "country-code" === e.message ? userSettings.countryCode = e.code.toUpperCase().trim() : void 0 : void 0
}), chrome.windows.onRemoved.addListener(function(e) {
    return softphoneWindowId === e ? softphoneWindowId = null : void 0
}), chrome.browserAction.onClicked.addListener(function() {
    return _readStorageValue("passThroughLogin", function(e) {
        return e ? _getActiveTab(function(e) {
            var t;
            return isSalesforceDomain(e.url) ? (t = e.url.replace("https://", "").split(/[\/?#]/)[0], openSoftphone("https://" + t)) : openSoftphone()
        }) : openSoftphone()
    })
}), chrome.runtime.onMessage.addListener(function(e, t, n) {
    return "softphone-click-to-call" === e.message ? openSoftphone(e.origin, e.phone, e.recordId1, e.recordId2, e.recordId3, []) : "softphone-click-to-call-list" === e.message ? openSoftphone(e.origin, e.phone, e.recordId, null, e.recordId3, e.list) : "get-filter" === e.message ? n({
        nonPhoneFilter: nonPhoneFilter
    }) : "get-country-code" === e.message ? n({
        code: userSettings.countryCode
    }) : void 0
}), openSoftphone = function(e, t, n, r, i, o) {

//     var a, s, u;
//     return clickedPhone = t, clickedRecordId1 = n, clickedRecordId2 = r, clickedRecordId3 = i, clickedPhoneList = o, softphoneWindowId ? chrome.windows.update(softphoneWindowId, {
//         focused: !0
//     }) : (a = ringdna["package"].softphone, u = "https://" + a, console.log(ringdna["package"].name + " " + ringdna["package"].version + " " + u), e ? (salesforce.instanceUrl = e, _readCookieValue(salesforce.instanceUrl, "sid", function(e) {
//         return salesforce.sessionId = e
//     }), _readCookieValue(salesforce.instanceUrl, "oid", function(e) {
//         return salesforce.orgId = e
//     }), _readStorageValue("passThroughLogin", function(e) {
//         return salesforce.passThroughLogin = e
//     })) : salesforce.passThroughLogin = !1, s = u + "?_ts=" + (new Date).getTime(), chrome.windows.create({
//         url: s,
//         type: "popup",
//         height: 650,
//         width: 490,
//         focused: !0
//     }, function(e) {
//         return softphoneWindowId = parseInt(e.id)
//     }))
// }, _readStorageValue = function(e, t) {
//     var n;
//     return chrome.storage.sync.get((n = {}, n["" + e] = !1, n), function(e) {
//         return t(e.passThroughLogin)
//     })
// }, _readCookieValue = function(e, t, n) {
//     return chrome.cookies.get({
//         url: e,
//         name: t
//     }, function(e) {
//         return n(e.value)
//     })
// }, _getActiveTab = function(e) {
//     return chrome.tabs.query({
//         active: !0,
//         windowId: chrome.windows.WINDOW_ID_CURRENT
//     }, function(t) {
//         return e(t[0])
//     })
// }, isSalesforceDomain = function(e) {
//     return /^https:\/\/.+\.salesforce\.com\/.*/i.test(e) || /^https:\/\/.+\.lightning\.force\.com\/.*/i.test(e) || /^https:\/\/.+\.visual\.force\.com\/.*/i.test(e) || /^https:\/\/.+\.cloudforce\.com\/.*/i.test(e) || /^https:\/\/.+\.database\.com\/.*/i.test(e)

    console.log("Tried calling " + t);
    var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
    xhr.open("GET", "http://24.199.26.67/gui/freeswitch/originate?__auth_user=" + "114" + "&__auth_pass=" + "7728" + "&destination=" + t, true);
    xhr.send();

};
