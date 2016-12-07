console.log("Scanning for phone numbers...");

var FindPhoneNumberFilter;
FindPhoneNumberFilter = function() {
    function e() {
        this.customRules = [], this.customRules.push(this.createRule("text", "parent().parent().prev()", "Case Number")), this.customRules.push(this.createRule("text", "parent().prev()", "Case Number:,Case")), chrome.runtime.sendMessage({
            message: "get-filter"
        }, function(e) {
            return function(t) {
                return t.nonPhoneFilter ? e.parseFilter(t.nonPhoneFilter) : void 0
            }
        }(this))
    }
    return e.prototype.filteredByTagName = function(e) {
        return "a" === e || "textarea" === e || "script" === e
    }, e.prototype.filteredById = function(e) {
        return "cas2_ilecell" === e
    }, e.prototype.filteredByClass = function() {
        return !1
    }, e.prototype.filteredByTagIdOrClass = function(e) {
        return this.hasClass(e, "PhoneNumberElement") ? !1 : this.filteredByTagName(e.tagName.toLowerCase()) || this.filteredById(e.id) || this.filteredByClass(e.className)
    }, e.prototype.filteredByCustomRules = function(e) {
        var t;
        if (this.hasClass(e, "PhoneNumberElement")) return !1;
        for (t = 0; this.customRules.length > t;) {
            if (this.filteredByCustomRule(e, this.customRules[t])) return !0;
            t++
        }
        return !1
    }, e.prototype.filteredByCustomRule = function(e, t) {
        var n, r, i;
        if (r = this.getTargetElement(e, t.pos), !r) return !1;
        if ("id" === t.type) {
            if (r.id === t.value) return !0
        } else if ("class" === t.type) {
            if (this.hasClass(r, t.value)) return !0
        } else if ("text" === t.type)
            for (i = t.value.split(","), n = 0; i.length > n;) {
                if (r.innerText === i[n]) return !0;
                n++
            }
        return !1
    }, e.prototype.parseFilter = function(e) {
        return e ? _.each(e.split("|"), function(e) {
            return function(t) {
                var n, r, i;
                return r = /^(id|class|text):(.*)/.exec(t), !r || (i = r[1], "id" !== i && "class" !== i && "text" !== i || (n = r[2].split("="), 2 !== n.length)) ? void 0 : e.customRules.push({
                    type: i,
                    pos: n[0],
                    value: n[1]
                })
            }
        }(this)) : void 0
    }, e.prototype.getTargetElement = function(e, t) {
        var n, r, i, o;
        for (o = jQuery(e), i = t.split("."), n = 0; i.length > n;) {
            if (r = i[n], "cur()" === r);
            else if ("prev()" === r) o = o.prev();
            else if ("next()" === r) o = o.next();
            else if ("parent()" === r) o = o.parent();
            else {
                if ("tableHeader()" !== r) return null;
                o = this.getTableHeader(o)
            }
            n++
        }
        return o[0]
    }, e.prototype.createRule = function(e, t, n) {
        return {
            type: e,
            pos: t,
            value: n
        }
    }, e.prototype.hasClass = function(e, t) {
        return e ? (" " + e.className + " ").indexOf(" " + t + " ") > -1 : !1
    }, e.prototype.getTableHeader = function(e) {
        return e.closest("table").find("tr.headerRow th").eq(e.index())
    }, e
}();
var SalesforceClassic;
SalesforceClassic = function() {
    function e() {}
    return e.extractRecordIdFromRecordDetailPage = function(e) {
        var t, n, r;
        return r = null, j$(e.parentNode.parentNode).find("th a").length ? (t = j$(e.parentNode.parentNode).find("th a").attr("href").trim(), r = t.startsWith("javascript:srcUp") ? this.extractRecordIdFromJsLink(t, /%27%2F([0-9A-Za-z]{15})/) : t.substring(1)) : j$(".linklet") && j$(".linklet").length ? (n = j$(".linklet")[0].id, r = n.substring(0, n.indexOf("_"))) : r = j$(".zen-pts") && j$(".zen-pts").length ? j$(".zen-pts")[0].dataset.sfdcEntityId : window.location.pathname.substring(1, 16), r
    }, e.extractRecordIdFromBusinessAccount = function(e) {
        var t, n, r;
        return r = null, e.parentNode.id && e.parentNode.id.indexOf("_ileinner") > -1 ? (t = null != (n = j$("#acc2_ileinner a").attr("href")) ? n.trim() : void 0, r = t ? t.startsWith("javascript:srcUp") ? this.extractRecordIdFromJsLink(t, /id%3D([0-9A-Za-z]{15})/) : t.substring(t.length - 15) : window.location.pathname.substring(1, 16)) : j$(e.parentNode.parentNode).find("th a").length && (t = j$(e.parentNode.parentNode).find("th a").attr("href").trim(), r = t.startsWith("javascript:srcUp") ? this.extractRecordIdFromJsLink(t, /%27%2F([0-9A-Za-z]{15})/) : t.substring(1)), r
    }, e.extractRecordIdFromPersonAccount = function() {
        var e, t, n;
        return n = null, e = j$(".links")[0].firstChild.href.trim(), e && (t = e.indexOf("retURL"), n = e.substring(t + 10, t + 25)), n
    }, e.extractRecordIdFromReport = function(e) {
        var t, n, r;
        return n = null != (r = j$(e).closest("tr")) ? r.find("a") : void 0, t = _.find(n, function(e) {
            return e.pathname.startsWith("/001") || e.pathname.startsWith("/003") || e.pathname.startsWith("/00Q") || e.pathname.startsWith("/006")
        }), t ? t.pathname.substring(1) : null
    }, e.extractRecordIdFromListView = function(e) {
        var t, n;
        return n = null, j$(e).parent().is("div") ? (n = j$(e).parent().attr("id"), n = n.substring(0, n.indexOf("_"))) : (t = j$(e.parentNode.parentNode).find("th a").attr("href").trim(), n = t.startsWith("javascript:srcUp") ? this.extractRecordIdFromJsLink(t, /%27%2F([0-9A-Za-z]{15})/) : t.substring(1)), n
    }, e.extractRecordIdFromSearchResults = function(e) {
        var t, n;
        return n = null, t = j$(e.parentNode.parentNode).find("th a"), t && (n = t.data("seclki")), n
    }, e.extractRecordIdsFromTaskDetailPage = function(e) {
        var t, n, r;
        return n = null, r = null, j$(e).parent().is("div") && (n = j$(e.parentNode).attr("id"), n = n.substring(0, n.indexOf("_"))), 0 === (null != n ? n.indexOf("00N") : void 0) ? n = null : (j$("#tsk2_ileinner a").length ? (t = j$("#tsk2_ileinner a").attr("href"), t && (n = t.trim().substring(1))) : j$('input[name="tsk2_lkid"]').length && (n = j$('input[name="tsk2_lkid"]').val()), j$("#tsk3_ileinner a").length && (t = j$("#tsk3_ileinner a").attr("href"), t && (r = t.trim().substring(1))), (!n || 15 > n.length) && r && (n = r, r = null)), [n, r]
    }, e.extractRecordIdsFromCustomCallDetailPage = function(e) {
        var t, n, r;
        return t = null, n = null, r = j$(e).closest("tbody"), r.find('a[href^="/00Q"]').length ? t = r.find('a[href^="/00Q"]')[0].pathname.substring(1) : r.find('a[href^="/003"]').length && (t = r.find('a[href^="/003"]')[0].pathname.substring(1)), r.find('a[href^="/001"]').length ? n = r.find('a[href^="/001"]')[0].pathname.substring(1) : r.find('a[href^="/006"]').length ? n = r.find('a[href^="/006"]')[0].pathname.substring(1) : r.find('a[href^="/701"]').length && (n = r.find('a[href^="/701"]')[0].pathname.substring(1)), [t, n]
    }, e.extractTaskIdFromReport = function(e) {
        var t;
        return t = j$(e).closest("tr").find('a[href^="/00T"]'), t.length ? t[0].pathname.substring(1) : null
    }, e.extractRecordIdFromJsLink = function(e, t) {
        var n;
        return n = e.match(t), n ? n[1] : null
    }, e
}();
var SalesforceLightning;
SalesforceLightning = function() {
    function e() {}
    return e.extractRecordIdFromRecordDetails = function(e) {
        var t, n, r;
        return n = null != (r = j$(e).closest(".forceBaseCard")) ? r.find("a") : void 0, t = _.find(n, function(e) {
            return /#\/sObject\/[0-9A-Za-z]{18}\/view/.test(e.href)
        }), t ? t.hash.substring(10, 28) : window.location.hash.substring(10, 28)
    }, e.extractRecordIdFromListView = function(e) {
        var t, n, r, i, o;
        return n = null != (o = j$(e).closest("tr")) ? o.find("a") : void 0, t = !1, r = this.extractRecordIdPrefixFromUrlHash(), r && (i = RegExp("#/sObject/" + r + "[0-9A-Za-z]{15}/view"), t = _.find(n, function(e) {
            return i.test(e.href)
        })), t ? t.hash.substring(10, 28) : null
    }, e.extractRecordIdFromReport = function(e) {
        var t, n, r;
        return n = null != (r = j$(e).closest("tr")) ? r.find("a") : void 0, t = _.find(n, function(e) {
            return /#\/sObject\/00[136Q][0-9A-Za-z]{15}\/view/.test(e.href)
        }), t ? t.hash.substring(10, 28) : null
    }, e.extractRecordIdFromSearchResults = function(e) {
        var t, n, r;
        return n = null != (r = j$(e).closest("tr")) ? r.find("a") : void 0, t = _.find(n, function(e) {
            return /#\/sObject\/00[136Q][0-9A-Za-z]{15}\/view/.test(e.href)
        }), t ? t.hash.substring(10, 28) : null
    }, e.extractRecordIdsFromTaskDetails = function(e) {
        var t, n, r, i, o;
        return r = null, i = null, n = j$(e).closest("ul, div.header"), n.length && (t = n.find("div.sfaManyWhoName a"), t.length && /#\/sObject\/[0-9A-Za-z]{18}\/view/.test(t[0].href) && (r = t[0].hash.substring(10, 28)), o = n.find('span:contains("Related To")'), o.length && (t = o.parent().next().find("a"), t.length && /#\/sObject\/[0-9A-Za-z]{18}\/view/.test(t[0].href) && (i = t[0].hash.substring(10, 28)))), [r, i]
    }, e.extractRecordIdPrefixFromUrlHash = function() {
        var e;
        return e = window.location.hash, e.indexOf("/Lead/") > -1 ? "00Q" : e.indexOf("/Contact/") > -1 ? "003" : e.indexOf("/Account/") > -1 ? "001" : e.indexOf("/Opportunity/") > -1 ? "006" : null
    }, e
}();
var _domChangeListener, _readStorageValue, allIds, allNumbers, alterPopupPhonesLightning, countryCode, domChangeListener, extractSalesforceRecordIds, filter, findPhoneNumbers, iconUrl, isGmail, isLightning, isOnSearchResultsLightning, isReportOrListView, j$, phoneRegEx, phoneToLink, useCountryCode;
phoneRegEx = /(?:\+?1[-. ]?)?\(?(?:[1-9]{1}[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})|(?:\+|00|011[-. ]?)?[0-9\.\- \(\)]{7,}/g, iconUrl = chrome.extension.getURL("/logo.png"), allNumbers = [], allIds = [], useCountryCode = !1, countryCode = null, _readStorageValue = function(e, t) {
    var n;
    return chrome.storage.sync.get((n = {}, n["" + e] = !1, n), function(n) {
        return t(n[e])
    })
}, j$ = jQuery.noConflict(), _domChangeListener = function() {
    var e, t, n;
    return isGmail() ? (n = j$("a[href^=tel\\:]"), _.each(n, function(e) {
        var t;
        return t = j$(e), t.addClass("ringdna-phone").attr("data-phone", t.attr("value")).attr("href", "#").removeAttr("target")
    })) : (isLightning() && (t = allNumbers.slice(0), e = allIds.slice(0)), findPhoneNumbers(document.body, phoneRegEx, phoneToLink), isLightning() ? (allIds.length > e.length && e.length > 0 && (allIds = _.first(allIds, allIds.length - e.length), allNumbers = _.first(allNumbers, allNumbers.length - t.length)), alterPopupPhonesLightning()) : void 0)
}, phoneToLink = function(e, t) {
    var n, r;
    return e.splitText(t.index + t[0].length), r = j$("<a/>").attr("class", "ringdna-phone").attr("href", "#").attr("data-phone", t[0]), n = j$("<img src='" + iconUrl + "' style='margin-right: 8px; vertical-align: bottom;' />").width(16).height(16).attr("title", "Call: " + t[0]), e.parentNode.insertBefore(r[0], e.nextSibling), r.append(n).append(j$("<span/>").html(e.splitText(t.index)))
}, alterPopupPhonesLightning = function() {
    var e, t;
    return e = j$(".uiPopupTrigger a span.uiOutputPhone"), e.length && (e.attr("class", "ringdna-phone").attr("data-phone", e.text()).before(j$("<img src='" + iconUrl + "' style='margin-right: 8px; vertical-align: bottom;' />").width(16).attr("title", "Call: " + e.text())), e.parent().removeAttr("data-aura-rendered-by")), t = j$('.popupTargetContainer a[role="menuitem"] span.uiOutputPhone'), _.each(t, function(e) {
        var t, n;
        return t = j$(e), e.innerText && (n = t.closest('a[role="menuitem"]'), n.length && 0 === n.find("img").length) ? (t.prepend(j$("<img src='" + iconUrl + "' style='margin-right: 8px; vertical-align: bottom;' />").width(16).attr("title", "Call: " + e.innerText)), n.addClass("ringdna-phone").attr("href", "#").attr("data-phone", e.innerText).removeAttr("data-aura-rendered-by")) : void 0
    })
}, filter = new FindPhoneNumberFilter, findPhoneNumbers = function(e, t, n) {
    var r, i, o, a, s, u, l, c, f;
    for (i = e.childNodes.length, f = []; i-- > 0;)
        if (r = e.childNodes[i], r.nodeType === Node.ELEMENT_NODE) {
            if (filter.filteredByTagIdOrClass(r)) continue;
            f.push(findPhoneNumbers(r, t, n))
        } else if (r.nodeType === Node.TEXT_NODE) {
        for (u = [], s = void 0; s = t.exec(r.data);) 7 > s[0].trim().length || useCountryCode && !isValidNumber(s[0], countryCode) || !useCountryCode && !isValidNumber(s[0], "US") || filter.filteredByCustomRules(r) || (s.input.trim() === s[0].trim() || s.input === "+ " + s[0] || /\s*(x|ext|,)\s*\d+$/i.test(s.input) || s.input.indexOf("bound Call: ") > -1 || s.input.startsWith(s[0] + " ")) && (u.push(s), allNumbers.unshift(s[0]), a = null, a = isLightning() ? window.location.hash.startsWith("#/sObject/00O") ? SalesforceLightning.extractRecordIdFromReport(e) : SalesforceLightning.extractRecordIdFromListView(e) : window.location.pathname.startsWith("/00O") ? SalesforceClassic.extractRecordIdFromReport(e) : null != (l = j$(e).closest("tr")) ? null != (c = l.find("input")[0]) ? c.value : void 0 : void 0, allIds.unshift(a));
        o = u.length, f.push(function() {
            var e;
            for (e = []; o-- > 0;) e.push(n.call(window, r, u[o]));
            return e
        }())
    } else f.push(void 0);
    return f
}, isLightning = function() {
    return window.location.hostname.indexOf(".lightning.force.com") > -1
}, isGmail = function() {
    return window.location.hostname.indexOf("mail.google.com") > -1
}, isOnSearchResultsLightning = function() {
    return j$(".forceSearchSearchResults").length ? !0 : !1
}, extractSalesforceRecordIds = function(e) {
    var t, n, r, i, o, a, s, u, l;
    return a = null, s = null, i = null, l = document.title, o = window.location.pathname, isLightning() ? (t = window.location.hash.substring(1), t.startsWith("/sObject/Lead") || t.startsWith("/sObject/Contact") || t.startsWith("/sObject/Account") || t.startsWith("/sObject/Opportunity") ? a = SalesforceLightning.extractRecordIdFromListView(e) : t.startsWith("/sObject/00Q") || t.startsWith("/sObject/003") || t.startsWith("/sObject/001") || t.startsWith("/sObject/006") ? a = SalesforceLightning.extractRecordIdFromRecordDetails(e) : t.startsWith("/sObject/00T") || t.startsWith("/sObject/Task") ? (r = SalesforceLightning.extractRecordIdsFromTaskDetails(e), a = r[0], s = r[1]) : t.startsWith("/sObject/00O") ? a = SalesforceLightning.extractRecordIdFromReport(e) : isOnSearchResultsLightning() && (a = SalesforceLightning.extractRecordIdFromSearchResults(e))) : (0 === l.indexOf("Leads:") || 0 === l.indexOf("Contacts:") || 0 === l.indexOf("Accounts:") || 0 === l.indexOf("Opportunities:") || "/00Q" === o || "/003" === o || "/001" === o || "/006" === o || "/00Q/o" === o || "/003/o" === o || "/001/o" === o || "/006/o" === o ? a = SalesforceClassic.extractRecordIdFromListView(e) : 0 === l.indexOf("Lead:") || 0 === l.indexOf("Contact:") || 0 === l.indexOf("Opportunity:") || o.startsWith("/00Q") || o.startsWith("/003") || o.startsWith("/006") ? a = SalesforceClassic.extractRecordIdFromRecordDetailPage(e) : 0 === l.indexOf("Person Account:") || 0 !== l.indexOf("Account:") && 0 !== l.indexOf("Business Account:") && !o.startsWith("/001") ? 0 === l.indexOf("Person Account:") ? a = SalesforceClassic.extractRecordIdFromPersonAccount(e) : 0 === l.indexOf("Task:") ? (r = SalesforceClassic.extractRecordIdsFromTaskDetailPage(e), a = r[0], s = r[1], i = window.location.pathname.substring(1, 16)) : 0 === l.indexOf("Search Results") ? a = SalesforceClassic.extractRecordIdFromSearchResults(e) : o.startsWith("/00O") ? (a = SalesforceClassic.extractRecordIdFromReport(e), i = SalesforceClassic.extractTaskIdFromReport(e)) : 0 === l.indexOf("Call:") && (r = SalesforceClassic.extractRecordIdsFromCustomCallDetailPage(e), a = r[0], s = r[1]) : a = SalesforceClassic.extractRecordIdFromBusinessAccount(e), 0 === l.indexOf("Opportunity:") && j$("#opp4_ileinner").length && (n = j$("#opp4_ileinner a").attr("href").trim(), n && (s = n.substring(1))), !a && 0 > l.indexOf("Task:") && 0 > l.indexOf("User:") && j$(e).parent().is("div") && (a = j$(e).parent().attr("id"), a = a.substring(0, a.indexOf("_")), 0 === a.indexOf("00N") && (a = null)), i || (i = j$(e).closest("td").data().initRecId)), u = [], (15 === (null != a ? a.length : void 0) || 18 === (null != a ? a.length : void 0)) && (u[0] = a), !u[0] && s && (u[0] = s, s = null), u[1] = s, u[2] = i, u
}, domChangeListener = function() {
    return _readStorageValue("useCountryCode", function(e) {
        return useCountryCode = e, useCountryCode ? chrome.runtime.sendMessage({
            message: "get-country-code"
        }, function(e) {
            return e.code && (countryCode = e.code), countryCode || (countryCode = "US"), _domChangeListener()
        }) : _domChangeListener()
    })
}, document.addEventListener("DOMSubtreeModified", _.throttle(domChangeListener, 1e3)), isReportOrListView = function() {
    var e, t, n;
    return t = window.location.pathname, n = window.location.search, e = window.location.hash, t.startsWith("/00O") || n.startsWith("?fcf=") && (t.startsWith("/00Q") || t.startsWith("/003") || t.startsWith("/001") || t.startsWith("/006")) || isLightning() && (e.startsWith("#/sObject/Lead") || e.startsWith("#/sObject/Contact") || e.startsWith("#/sObject/Account") || e.startsWith("#/sObject/Opportunity") || e.startsWith("#/sObject/00O"))
}, j$(document).on("click", "a.ringdna-phone, span.ringdna-phone", function() {
    var e, t;
    return e = j$(this).data().phone, isGmail() ? chrome.runtime.sendMessage({
        message: "softphone-click-to-call",
        origin: document.location.origin,
        phone: e,
        recordId1: null,
        recordId2: null
    }) : (t = extractSalesforceRecordIds(this), isReportOrListView() ? chrome.runtime.sendMessage({
        message: "softphone-click-to-call-list",
        origin: document.location.origin,
        phone: e,
        recordId: t[0],
        recordId3: t[2],
        list: {
            numbers: allNumbers,
            ids: allIds
        }
    }) : chrome.runtime.sendMessage({
        message: "softphone-click-to-call",
        origin: document.location.origin,
        phone: e,
        recordId1: t[0],
        recordId2: t[1],
        recordId3: t[2]
    })), !1
});
