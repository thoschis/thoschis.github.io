!function() {
    var e = function(e) {
        var t = {
            exports: {}
        };
        return e.call(t.exports, t, t.exports),
        t.exports
    }
      , t = (window,
    function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    )
      , n = function(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
      , r = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
      , i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
      , a = function(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
      , s = function Je(e, t, n) {
        null === e && (e = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(e, t);
        if (void 0 === r) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : Je(i, t, n)
        }
        if ("value"in r)
            return r.value;
        var o = r.get;
        return void 0 === o ? void 0 : o.call(n)
    }
      , u = function(e, t) {
        var n = {};
        for (var r in e)
            t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    };
    (function() {
        this.ScriptLoader = function() {
            function e() {}
            return e.lazyLoad = function(e, t, n) {
                var r;
                return r = document.querySelector("." + t),
                null != r ? "function" == typeof n ? n() : void 0 : (r = document.createElement("script"),
                r.async = !0,
                r.defer = !0,
                r.onload = n,
                r.src = e,
                r.className = t,
                void document.getElementsByTagName("head")[0].appendChild(r))
            }
            ,
            e
        }()
    }
    ).call(this),
    function() {
        var e;
        this.AmazonPayments = {
            metadataTag: function() {
                return document.getElementById("amazon-payments-metadata")
            },
            metadata: function(e) {
                return AmazonPayments.metadataTag().getAttribute("data-amazon-payments-" + e)
            },
            withinFlow: function() {
                return null != AmazonPayments.metadataTag()
            },
            sellerId: function() {
                return AmazonPayments.metadata("seller-id")
            },
            language: function() {
                return AmazonPayments.metadata("language")
            },
            authorize: function() {
                var e, t;
                return e = AmazonPayments.metadata("callback-url"),
                t = {
                    popup: !1,
                    scope: "payments:widget payments:shipping_address"
                },
                amazon.Login.authorize(t, e)
            }
        },
        e = function() {
            function e() {}
            return e.prototype.assign = function(e) {
                return this.flow = this[e]
            }
            ,
            e.prototype.execute = function(e) {
                return this.flow.call(this, e)
            }
            ,
            e.prototype.checkout = function(e) {
                return AmazonPayments.authorize()
            }
            ,
            e.prototype.cart = function(e) {
                var t;
                return t = document.createElement("input"),
                t.type = "hidden",
                t.name = "goto_amazon_payments",
                t.value = "amazon_payments",
                e.parentElement.appendChild(t),
                t.form.submit()
            }
            ,
            e
        }(),
        this.amazonPaymentsButtonHandler = new e,
        this.AmazonPaymentsPayButton = function() {
            var e, t;
            if (AmazonPayments.withinFlow())
                return t = AmazonPayments.metadata("widget-library-url"),
                e = "amazon-payments-widget-library",
                ScriptLoader.lazyLoad(t, e, onAmazonPaymentsReady)
        }
        ,
        this.AmazonPaymentsPayButtonReady = function() {
            var e, t, n, r, i, o;
            for (n = document.getElementsByClassName("amazon-payments-pay-button"),
            o = [],
            r = 0,
            i = n.length; i > r; r++)
                t = n[r],
                "true" !== t.getAttribute("data-amazon-payments-pay-button") && (OffAmazonPayments.Button(t.id, AmazonPayments.sellerId(), {
                    type: "PwA",
                    size: "small",
                    language: AmazonPayments.language(),
                    authorization: function() {
                        return amazonPaymentsButtonHandler.execute(t)
                    },
                    onError: function(e) {
                        return "undefined" != typeof console && null !== console ? console.error(e.getErrorCode() + ": " + e.getErrorMessage()) : void 0
                    }
                }),
                t.setAttribute("data-amazon-payments-pay-button", "true"),
                e = t.querySelector("img:not(.alt-payment-list__item__logo):not(.additional-checkout-button__logo)"),
                o.push(e.className += " alt-payment-list-amazon-button-image"));
            return o
        }
    }
    .call(this);
    var l = (e(function(e, t) {
        "use strict";
        window.amazonPaymentsButtonHandler.assign("cart"),
        window.onAmazonLoginReady = function() {
            amazon.Login.setSandboxMode(JSON.parse(AmazonPayments.metadata("sandbox-mode"))),
            amazon.Login.setClientId(AmazonPayments.metadata("client-id")),
            amazon.Login.setRegion(AmazonPayments.metadata("region")),
            amazon.Login.setUseCookie(!0)
        }
        ,
        window.onAmazonPaymentsReady = function() {
            AmazonPaymentsPayButtonReady()
        }
    }),
    e(function(e, t) {
        "use strict";
        function n(e) {
            var t = document.createElement("input");
            t.setAttribute("type", "hidden"),
            t.setAttribute("name", "clear_cart"),
            t.setAttribute("value", "true"),
            e.appendChild(t);
            var n = e.elements.quantity
              , r = e.elements.id
              , i = document.createElement("input");
            i.setAttribute("type", "hidden"),
            i.setAttribute("name", "updates[" + r.value + "]"),
            i.setAttribute("value", n ? n.value : 1),
            e.appendChild(i),
            e.setAttribute("action", "/checkout"),
            window.ShopifyAnalytics.lib.track("Buy Now Button"),
            e.submit()
        }
        function r() {
            var e = document.getElementById("buy-now-button--checkout");
            if (e) {
                for (var t = void 0, r = document.forms, i = 0; i < r.length; i++)
                    if (document.forms[i].action && -1 !== r[i].action.indexOf("cart/add")) {
                        t = r[i];
                        break
                    }
                t && t.elements.id && (e.style.display = "inline-block",
                e.onclick = function(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    e.preventDefault(),
                    n(t)
                }
                )
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t["default"] = r,
        window.Shopify = window.Shopify || {},
        Shopify.StorefrontExpressButtons = Shopify.StorefrontExpressButtons || {},
        Shopify.StorefrontExpressButtons.ExpressCheckout = {
            initialize: r
        }
    }),
    e(function(e, t) {
        "use strict";
        function n(e) {
            var t = document.querySelector('meta[name="' + r + "-" + e + '"]');
            return t ? t.getAttribute("content") : null
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = "shopify-checkout"
          , i = {
            getApiToken: function() {
                return n("api-token")
            },
            getAuthorizationToken: function() {
                return n("authorization-token")
            }
        };
        t["default"] = i
    }))
      , c = e(function(e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = function(e) {
            function i(e) {
                r(this, i);
                var t = n(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return t.response = e,
                t.stack = (new Error).stack,
                t.name = t.constructor.name,
                t
            }
            return t(i, e),
            i
        }(Error);
        i["default"] = o
    });
    !function(e) {
        "use strict";
        function t(e) {
            if ("string" != typeof e && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))
                throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }
        function n(e) {
            return "string" != typeof e && (e = String(e)),
            e
        }
        function r(e) {
            var t = {
                next: function() {
                    var t = e.shift();
                    return {
                        done: void 0 === t,
                        value: t
                    }
                }
            };
            return y.iterable && (t[Symbol.iterator] = function() {
                return t
            }
            ),
            t
        }
        function i(e) {
            this.map = {},
            e instanceof i ? e.forEach(function(e, t) {
                this.append(t, e)
            }, this) : Array.isArray(e) ? e.forEach(function(e) {
                this.append(e[0], e[1])
            }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                this.append(t, e[t])
            }, this)
        }
        function o(e) {
            return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void (e.bodyUsed = !0)
        }
        function a(e) {
            return new Promise(function(t, n) {
                e.onload = function() {
                    t(e.result)
                }
                ,
                e.onerror = function() {
                    n(e.error)
                }
            }
            )
        }
        function s(e) {
            var t = new FileReader
              , n = a(t);
            return t.readAsArrayBuffer(e),
            n
        }
        function u(e) {
            var t = new FileReader
              , n = a(t);
            return t.readAsText(e),
            n
        }
        function l(e) {
            for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++)
                n[r] = String.fromCharCode(t[r]);
            return n.join("")
        }
        function c(e) {
            if (e.slice)
                return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)),
            t.buffer
        }
        function d() {
            return this.bodyUsed = !1,
            this._initBody = function(e) {
                if (this._bodyInit = e,
                e)
                    if ("string" == typeof e)
                        this._bodyText = e;
                    else if (y.blob && Blob.prototype.isPrototypeOf(e))
                        this._bodyBlob = e;
                    else if (y.formData && FormData.prototype.isPrototypeOf(e))
                        this._bodyFormData = e;
                    else if (y.searchParams && URLSearchParams.prototype.isPrototypeOf(e))
                        this._bodyText = e.toString();
                    else if (y.arrayBuffer && y.blob && _(e))
                        this._bodyArrayBuffer = c(e.buffer),
                        this._bodyInit = new Blob([this._bodyArrayBuffer]);
                    else {
                        if (!y.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !b(e))
                            throw new Error("unsupported BodyInit type");
                        this._bodyArrayBuffer = c(e)
                    }
                else
                    this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : y.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }
            ,
            y.blob && (this.blob = function() {
                var e = o(this);
                if (e)
                    return e;
                if (this._bodyBlob)
                    return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }
            ,
            this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? o(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(s)
            }
            ),
            this.text = function() {
                var e = o(this);
                if (e)
                    return e;
                if (this._bodyBlob)
                    return u(this._bodyBlob);
                if (this._bodyArrayBuffer)
                    return Promise.resolve(l(this._bodyArrayBuffer));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }
            ,
            y.formData && (this.formData = function() {
                return this.text().then(p)
            }
            ),
            this.json = function() {
                return this.text().then(JSON.parse)
            }
            ,
            this
        }
        function h(e) {
            var t = e.toUpperCase();
            return A.indexOf(t) > -1 ? t : e
        }
        function f(e, t) {
            t = t || {};
            var n = t.body;
            if (e instanceof f) {
                if (e.bodyUsed)
                    throw new TypeError("Already read");
                this.url = e.url,
                this.credentials = e.credentials,
                t.headers || (this.headers = new i(e.headers)),
                this.method = e.method,
                this.mode = e.mode,
                n || null == e._bodyInit || (n = e._bodyInit,
                e.bodyUsed = !0)
            } else
                this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "omit",
            (t.headers || !this.headers) && (this.headers = new i(t.headers)),
            this.method = h(t.method || this.method || "GET"),
            this.mode = t.mode || this.mode || null,
            this.referrer = null,
            ("GET" === this.method || "HEAD" === this.method) && n)
                throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
        }
        function p(e) {
            var t = new FormData;
            return e.trim().split("&").forEach(function(e) {
                if (e) {
                    var n = e.split("=")
                      , r = n.shift().replace(/\+/g, " ")
                      , i = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(i))
                }
            }),
            t
        }
        function m(e) {
            var t = new i;
            return e.split(/\r?\n/).forEach(function(e) {
                var n = e.split(":")
                  , r = n.shift().trim();
                if (r) {
                    var i = n.join(":").trim();
                    t.append(r, i)
                }
            }),
            t
        }
        function g(e, t) {
            t || (t = {}),
            this.type = "default",
            this.status = "status"in t ? t.status : 200,
            this.ok = this.status >= 200 && this.status < 300,
            this.statusText = "statusText"in t ? t.statusText : "OK",
            this.headers = new i(t.headers),
            this.url = t.url || "",
            this._initBody(e)
        }
        if (!e.fetch) {
            var y = {
                searchParams: "URLSearchParams"in e,
                iterable: "Symbol"in e && "iterator"in Symbol,
                blob: "FileReader"in e && "Blob"in e && function() {
                    try {
                        return new Blob,
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                formData: "FormData"in e,
                arrayBuffer: "ArrayBuffer"in e
            };
            if (y.arrayBuffer)
                var v = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                  , _ = function(e) {
                    return e && DataView.prototype.isPrototypeOf(e)
                }
                  , b = ArrayBuffer.isView || function(e) {
                    return e && v.indexOf(Object.prototype.toString.call(e)) > -1
                }
                ;
            i.prototype.append = function(e, r) {
                e = t(e),
                r = n(r);
                var i = this.map[e];
                this.map[e] = i ? i + "," + r : r
            }
            ,
            i.prototype["delete"] = function(e) {
                delete this.map[t(e)]
            }
            ,
            i.prototype.get = function(e) {
                return e = t(e),
                this.has(e) ? this.map[e] : null
            }
            ,
            i.prototype.has = function(e) {
                return this.map.hasOwnProperty(t(e))
            }
            ,
            i.prototype.set = function(e, r) {
                this.map[t(e)] = n(r)
            }
            ,
            i.prototype.forEach = function(e, t) {
                for (var n in this.map)
                    this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
            }
            ,
            i.prototype.keys = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push(n)
                }),
                r(e)
            }
            ,
            i.prototype.values = function() {
                var e = [];
                return this.forEach(function(t) {
                    e.push(t)
                }),
                r(e)
            }
            ,
            i.prototype.entries = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push([n, t])
                }),
                r(e)
            }
            ,
            y.iterable && (i.prototype[Symbol.iterator] = i.prototype.entries);
            var A = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            f.prototype.clone = function() {
                return new f(this,{
                    body: this._bodyInit
                })
            }
            ,
            d.call(f.prototype),
            d.call(g.prototype),
            g.prototype.clone = function() {
                return new g(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new i(this.headers),
                    url: this.url
                })
            }
            ,
            g.error = function() {
                var e = new g(null,{
                    status: 0,
                    statusText: ""
                });
                return e.type = "error",
                e
            }
            ;
            var N = [301, 302, 303, 307, 308];
            g.redirect = function(e, t) {
                if (-1 === N.indexOf(t))
                    throw new RangeError("Invalid status code");
                return new g(null,{
                    status: t,
                    headers: {
                        location: e
                    }
                })
            }
            ,
            e.Headers = i,
            e.Request = f,
            e.Response = g,
            e.fetch = function(e, t) {
                return new Promise(function(n, r) {
                    var i = new f(e,t)
                      , o = new XMLHttpRequest;
                    o.onload = function() {
                        var e = {
                            status: o.status,
                            statusText: o.statusText,
                            headers: m(o.getAllResponseHeaders() || "")
                        };
                        e.url = "responseURL"in o ? o.responseURL : e.headers.get("X-Request-URL");
                        var t = "response"in o ? o.response : o.responseText;
                        n(new g(t,e))
                    }
                    ,
                    o.onerror = function() {
                        r(new TypeError("Network request failed"))
                    }
                    ,
                    o.ontimeout = function() {
                        r(new TypeError("Network request failed"))
                    }
                    ,
                    o.open(i.method, i.url, !0),
                    "include" === i.credentials && (o.withCredentials = !0),
                    "responseType"in o && y.blob && (o.responseType = "blob"),
                    i.headers.forEach(function(e, t) {
                        o.setRequestHeader(t, e)
                    }),
                    o.send("undefined" == typeof i._bodyInit ? null : i._bodyInit)
                }
                )
            }
            ,
            e.fetch.polyfill = !0
        }
    }("undefined" != typeof self ? self : this);
    var d = e(function(e, t) {
        "use strict";
        function n(e, t) {
            var n = this
              , r = o({
                poll: !0,
                timeout: 2e4
            }, e)
              , i = r.poll
              , a = r.timeout;
            if (!i || 202 !== t.status)
                return t;
            var s = {
                method: "GET",
                headers: this.headers
            };
            return new Promise(function(e, r) {
                n._pollExpiryTimeout = setTimeout(function() {
                    clearTimeout(n._pollScheduleTimeout),
                    r(new Error("API request polling timed out. Exceeded maximum timeout of " + a + "ms"))
                }, a),
                function i(t) {
                    var n = this;
                    if (202 === t.status) {
                        var o = t.headers.get("Location")
                          , a = 1e3 * (Number(t.headers.get("Retry-After")) || 1);
                        this._pollScheduleTimeout = setTimeout(function() {
                            fetch(o, s).then(i.bind(n))["catch"](r)
                        }, a)
                    } else
                        clearTimeout(this._pollExpiryTimeout),
                        e(t)
                }
                .call(n, t)
            }
            )
        }
        function s(e) {
            return e.status >= 200 && e.status < 300 ? e : Promise.reject(new u["default"](e))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = a(c)
          , l = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                r(this, e),
                this.host = t,
                this.headers = o({
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }, n)
            }
            return i(e, [{
                key: "get",
                value: function(e, t) {
                    return this.request("GET", e, null, t)
                }
            }, {
                key: "post",
                value: function(e, t, n) {
                    return this.request("POST", e, t, n)
                }
            }, {
                key: "patch",
                value: function(e, t, n) {
                    return this.request("PATCH", e, t, n)
                }
            }, {
                key: "put",
                value: function(e, t, n) {
                    return this.request("PUT", e, t, n)
                }
            }, {
                key: "stopPolling",
                value: function() {
                    clearTimeout(this._pollExpiryTimeout),
                    clearTimeout(this._pollScheduleTimeout)
                }
            }, {
                key: "request",
                value: function(e, t, r, i) {
                    var o = {
                        method: e,
                        headers: this.headers,
                        body: r ? JSON.stringify(r) : null,
                        credentials: "same-origin"
                    };
                    return "GET" === e && delete o.body,
                    "/" === t[0] && this.host && (t = "https://" + this.host + t),
                    fetch(t, o).then(n.bind(this, i)).then(s)
                }
            }]),
            e
        }();
        t["default"] = l
    })
      , h = e(function(e, o) {
        "use strict";
        function u(e) {
            var t = e.headers.get(m);
            return e.ok && this.storeAuthorizationToken(t),
            e
        }
        function c(e) {
            return 204 === e.status || 202 === e.status ? e : e.json()
        }
        function h(e) {
            return btoa(e + ":")
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var f = a(l)
          , p = a(d)
          , m = "X-Shopify-Checkout-Authorization-Token"
          , g = function(e) {
            function o(e) {
                r(this, o);
                var t = f["default"].getApiToken()
                  , i = {
                    Authorization: "Basic " + h(t),
                    "X-Shopify-Checkout-Version": "2016-09-06"
                }
                  , a = n(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e, i));
                return a.storeAuthorizationToken(f["default"].getAuthorizationToken()),
                a
            }
            return t(o, e),
            i(o, [{
                key: "request",
                value: function(e, t, n, r) {
                    return s(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "request", this).call(this, e, t, n, r).then(u.bind(this)).then(c)
                }
            }, {
                key: "storeAuthorizationToken",
                value: function(e) {
                    e && (this.headers[m] = e)
                }
            }]),
            o
        }(p["default"]);
        o["default"] = g
    })
      , f = e(function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    })
      , p = e(function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    })
      , m = e(function(e, t) {
        var n = "__core-js_shared__"
          , r = p[n] || (p[n] = {});
        e.exports = function(e) {
            return r[e] || (r[e] = {})
        }
    })
      , g = e(function(e, t) {
        var n = 0
          , r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    })
      , y = e(function(e, t) {
        var n = m("wks")
          , r = p.Symbol
          , i = "function" == typeof r
          , o = e.exports = function(e) {
            return n[e] || (n[e] = i && r[e] || (i ? r : g)("Symbol." + e))
        }
        ;
        o.store = n
    })
      , v = e(function(e, t) {
        var n = y("toStringTag")
          , r = "Arguments" == f(function() {
            return arguments
        }())
          , i = function(e, t) {
            try {
                return e[t]
            } catch (n) {}
        };
        e.exports = function(e) {
            var t, o, a;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (o = i(t = Object(e), n)) ? o : r ? f(t) : "Object" == (a = f(t)) && "function" == typeof t.callee ? "Arguments" : a
        }
    })
      , _ = e(function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    })
      , b = e(function(e, t) {
        e.exports = function(e) {
            if (!_(e))
                throw TypeError(e + " is not an object!");
            return e
        }
    })
      , A = e(function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        }
    })
      , N = e(function(e, t) {
        e.exports = !A(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    })
      , C = e(function(e, t) {
        var n = p.document
          , r = _(n) && _(n.createElement);
        e.exports = function(e) {
            return r ? n.createElement(e) : {}
        }
    })
      , S = e(function(e, t) {
        e.exports = !N && !A(function() {
            return 7 != Object.defineProperty(C("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    })
      , w = e(function(e, t) {
        e.exports = function(e, t) {
            if (!_(e))
                return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !_(r = n.call(e)))
                return r;
            if ("function" == typeof (n = e.valueOf) && !_(r = n.call(e)))
                return r;
            if (!t && "function" == typeof (n = e.toString) && !_(r = n.call(e)))
                return r;
            throw TypeError("Can't convert object to primitive value")
        }
    })
      , E = e(function(e, t) {
        var n = Object.defineProperty;
        t.f = N ? Object.defineProperty : function(e, t, r) {
            if (b(e),
            t = w(t, !0),
            b(r),
            S)
                try {
                    return n(e, t, r)
                } catch (i) {}
            if ("get"in r || "set"in r)
                throw TypeError("Accessors not supported!");
            return "value"in r && (e[t] = r.value),
            e
        }
    })
      , T = e(function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    })
      , x = e(function(e, t) {
        e.exports = N ? function(e, t, n) {
            return E.f(e, t, T(1, n))
        }
        : function(e, t, n) {
            return e[t] = n,
            e
        }
    })
      , k = e(function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    })
      , P = e(function(e, t) {
        var n = e.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = n)
    })
      , $ = e(function(e, t) {
        var n = g("src")
          , r = "toString"
          , i = Function[r]
          , o = ("" + i).split(r);
        P.inspectSource = function(e) {
            return i.call(e)
        }
        ,
        (e.exports = function(e, t, r, i) {
            var a = "function" == typeof r;
            a && (k(r, "name") || x(r, "name", t)),
            e[t] !== r && (a && (k(r, n) || x(r, n, e[t] ? "" + e[t] : o.join(String(t)))),
            e === p ? e[t] = r : i ? e[t] ? e[t] = r : x(e, t, r) : (delete e[t],
            x(e, t, r)))
        }
        )(Function.prototype, r, function() {
            return "function" == typeof this && this[n] || i.call(this)
        })
    })
      , R = (e(function(e, t) {
        "use strict";
        var n = {};
        n[y("toStringTag")] = "z",
        n + "" != "[object z]" && $(Object.prototype, "toString", function() {
            return "[object " + v(this) + "]"
        }, !0)
    }),
    e(function(e, t) {
        var n = Math.ceil
          , r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
        }
    }))
      , D = e(function(e, t) {
        e.exports = function(e) {
            if (void 0 == e)
                throw TypeError("Can't call method on  " + e);
            return e
        }
    })
      , O = e(function(e, t) {
        e.exports = function(e) {
            return function(t, n) {
                var r, i, o = String(D(t)), a = R(n), s = o.length;
                return 0 > a || a >= s ? e ? "" : void 0 : (r = o.charCodeAt(a),
                55296 > r || r > 56319 || a + 1 === s || (i = o.charCodeAt(a + 1)) < 56320 || i > 57343 ? e ? o.charAt(a) : r : e ? o.slice(a, a + 2) : (r - 55296 << 10) + (i - 56320) + 65536)
            }
        }
    })
      , M = e(function(e, t) {
        e.exports = !1
    })
      , L = e(function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e)
                throw TypeError(e + " is not a function!");
            return e
        }
    })
      , I = e(function(e, t) {
        e.exports = function(e, t, n) {
            if (L(e),
            void 0 === t)
                return e;
            switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                }
                ;
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                }
                ;
            case 3:
                return function(n, r, i) {
                    return e.call(t, n, r, i)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    })
      , F = e(function(e, t) {
        var n = "prototype"
          , r = function(e, t, i) {
            var o, a, s, u, l = e & r.F, c = e & r.G, d = e & r.S, h = e & r.P, f = e & r.B, m = c ? p : d ? p[t] || (p[t] = {}) : (p[t] || {})[n], g = c ? P : P[t] || (P[t] = {}), y = g[n] || (g[n] = {});
            c && (i = t);
            for (o in i)
                a = !l && m && void 0 !== m[o],
                s = (a ? m : i)[o],
                u = f && a ? I(s, p) : h && "function" == typeof s ? I(Function.call, s) : s,
                m && $(m, o, s, e & r.U),
                g[o] != s && x(g, o, u),
                h && y[o] != s && (y[o] = s)
        };
        p.core = P,
        r.F = 1,
        r.G = 2,
        r.S = 4,
        r.P = 8,
        r.B = 16,
        r.W = 32,
        r.U = 64,
        r.R = 128,
        e.exports = r
    })
      , B = e(function(e, t) {
        e.exports = {}
    })
      , j = e(function(e, t) {
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == f(e) ? e.split("") : Object(e)
        }
    })
      , H = e(function(e, t) {
        e.exports = function(e) {
            return j(D(e))
        }
    })
      , U = e(function(e, t) {
        var n = Math.min;
        e.exports = function(e) {
            return e > 0 ? n(R(e), 9007199254740991) : 0
        }
    })
      , z = e(function(e, t) {
        var n = Math.max
          , r = Math.min;
        e.exports = function(e, t) {
            return e = R(e),
            0 > e ? n(e + t, 0) : r(e, t)
        }
    })
      , V = e(function(e, t) {
        e.exports = function(e) {
            return function(t, n, r) {
                var i, o = H(t), a = U(o.length), s = z(r, a);
                if (e && n != n) {
                    for (; a > s; )
                        if (i = o[s++],
                        i != i)
                            return !0
                } else
                    for (; a > s; s++)
                        if ((e || s in o) && o[s] === n)
                            return e || s || 0;
                return !e && -1
            }
        }
    })
      , W = e(function(e, t) {
        var n = m("keys");
        e.exports = function(e) {
            return n[e] || (n[e] = g(e))
        }
    })
      , q = e(function(e, t) {
        var n = V(!1)
          , r = W("IE_PROTO");
        e.exports = function(e, t) {
            var i, o = H(e), a = 0, s = [];
            for (i in o)
                i != r && k(o, i) && s.push(i);
            for (; t.length > a; )
                k(o, i = t[a++]) && (~n(s, i) || s.push(i));
            return s
        }
    })
      , G = e(function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    })
      , Y = e(function(e, t) {
        e.exports = Object.keys || function(e) {
            return q(e, G)
        }
    })
      , K = e(function(e, t) {
        e.exports = N ? Object.defineProperties : function(e, t) {
            b(e);
            for (var n, r = Y(t), i = r.length, o = 0; i > o; )
                E.f(e, n = r[o++], t[n]);
            return e
        }
    })
      , X = e(function(e, t) {
        e.exports = p.document && document.documentElement
    })
      , J = e(function(e, t) {
        var n = W("IE_PROTO")
          , r = function() {}
          , i = "prototype"
          , o = function() {
            var e, t = C("iframe"), n = G.length, r = ">";
            for (t.style.display = "none",
            X.appendChild(t),
            t.src = "javascript:",
            e = t.contentWindow.document,
            e.open(),
            e.write("<script>document.F=Object</script" + r),
            e.close(),
            o = e.F; n--; )
                delete o[i][G[n]];
            return o()
        };
        e.exports = Object.create || function(e, t) {
            var a;
            return null !== e ? (r[i] = b(e),
            a = new r,
            r[i] = null,
            a[n] = e) : a = o(),
            void 0 === t ? a : K(a, t)
        }
    })
      , Z = e(function(e, t) {
        var n = E.f
          , r = y("toStringTag");
        e.exports = function(e, t, i) {
            e && !k(e = i ? e : e.prototype, r) && n(e, r, {
                configurable: !0,
                value: t
            })
        }
    })
      , Q = e(function(e, t) {
        "use strict";
        var n = {};
        x(n, y("iterator"), function() {
            return this
        }),
        e.exports = function(e, t, r) {
            e.prototype = J(n, {
                next: T(1, r)
            }),
            Z(e, t + " Iterator")
        }
    })
      , ee = e(function(e, t) {
        e.exports = function(e) {
            return Object(D(e))
        }
    })
      , te = e(function(e, t) {
        var n = W("IE_PROTO")
          , r = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = ee(e),
            k(e, n) ? e[n] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? r : null
        }
    })
      , ne = e(function(e, t) {
        "use strict";
        var n = y("iterator")
          , r = !([].keys && "next"in [].keys())
          , i = "@@iterator"
          , o = "keys"
          , a = "values"
          , s = function() {
            return this
        };
        e.exports = function(e, t, u, l, c, d, h) {
            Q(u, t, l);
            var f, p, m, g = function(e) {
                if (!r && e in b)
                    return b[e];
                switch (e) {
                case o:
                    return function() {
                        return new u(this,e)
                    }
                    ;
                case a:
                    return function() {
                        return new u(this,e)
                    }
                }
                return function() {
                    return new u(this,e)
                }
            }, y = t + " Iterator", v = c == a, _ = !1, b = e.prototype, A = b[n] || b[i] || c && b[c], N = A || g(c), C = c ? v ? g("entries") : N : void 0, S = "Array" == t ? b.entries || A : A;
            if (S && (m = te(S.call(new e)),
            m !== Object.prototype && (Z(m, y, !0),
            M || k(m, n) || x(m, n, s))),
            v && A && A.name !== a && (_ = !0,
            N = function() {
                return A.call(this)
            }
            ),
            M && !h || !r && !_ && b[n] || x(b, n, N),
            B[t] = N,
            B[y] = s,
            c)
                if (f = {
                    values: v ? N : g(a),
                    keys: d ? N : g(o),
                    entries: C
                },
                h)
                    for (p in f)
                        p in b || $(b, p, f[p]);
                else
                    F(F.P + F.F * (r || _), t, f);
            return f
        }
    })
      , re = (e(function(e, t) {
        "use strict";
        var n = O(!0);
        ne(String, "String", function(e) {
            this._t = String(e),
            this._i = 0
        }, function() {
            var e, t = this._t, r = this._i;
            return r >= t.length ? {
                value: void 0,
                done: !0
            } : (e = n(t, r),
            this._i += e.length,
            {
                value: e,
                done: !1
            })
        })
    }),
    e(function(e, t) {
        var n = y("unscopables")
          , r = Array.prototype;
        void 0 == r[n] && x(r, n, {}),
        e.exports = function(e) {
            r[n][e] = !0
        }
    }))
      , ie = e(function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    })
      , oe = e(function(e, t) {
        "use strict";
        e.exports = ne(Array, "Array", function(e, t) {
            this._t = H(e),
            this._i = 0,
            this._k = t
        }, function() {
            var e = this._t
              , t = this._k
              , n = this._i++;
            return !e || n >= e.length ? (this._t = void 0,
            ie(1)) : "keys" == t ? ie(0, n) : "values" == t ? ie(0, e[n]) : ie(0, [n, e[n]])
        }, "values"),
        B.Arguments = B.Array,
        re("keys"),
        re("values"),
        re("entries")
    })
      , ae = (e(function(e, t) {
        for (var n = y("iterator"), r = y("toStringTag"), i = B.Array, o = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], a = 0; 5 > a; a++) {
            var s, u = o[a], l = p[u], c = l && l.prototype;
            if (c) {
                c[n] || x(c, n, i),
                c[r] || x(c, r, u),
                B[u] = i;
                for (s in oe)
                    c[s] || $(c, s, oe[s], !0)
            }
        }
    }),
    e(function(e, t) {
        e.exports = function(e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e)
                throw TypeError(n + ": incorrect invocation!");
            return e
        }
    }))
      , se = e(function(e, t) {
        e.exports = function(e, t, n, r) {
            try {
                return r ? t(b(n)[0], n[1]) : t(n)
            } catch (i) {
                var o = e["return"];
                throw void 0 !== o && b(o.call(e)),
                i
            }
        }
    })
      , ue = e(function(e, t) {
        var n = y("iterator")
          , r = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (B.Array === e || r[n] === e)
        }
    })
      , le = e(function(e, t) {
        var n = y("iterator");
        e.exports = P.getIteratorMethod = function(e) {
            return void 0 != e ? e[n] || e["@@iterator"] || B[v(e)] : void 0
        }
    })
      , ce = e(function(e, t) {
        var n = {}
          , r = {}
          , t = e.exports = function(e, t, i, o, a) {
            var s, u, l, c, d = a ? function() {
                return e
            }
            : le(e), h = I(i, o, t ? 2 : 1), f = 0;
            if ("function" != typeof d)
                throw TypeError(e + " is not iterable!");
            if (ue(d)) {
                for (s = U(e.length); s > f; f++)
                    if (c = t ? h(b(u = e[f])[0], u[1]) : h(e[f]),
                    c === n || c === r)
                        return c
            } else
                for (l = d.call(e); !(u = l.next()).done; )
                    if (c = se(l, h, u.value, t),
                    c === n || c === r)
                        return c
        }
        ;
        t.BREAK = n,
        t.RETURN = r
    })
      , de = e(function(e, t) {
        t.f = {}.propertyIsEnumerable
    })
      , he = e(function(e, t) {
        var n = Object.getOwnPropertyDescriptor;
        t.f = N ? n : function(e, t) {
            if (e = H(e),
            t = w(t, !0),
            S)
                try {
                    return n(e, t)
                } catch (r) {}
            return k(e, t) ? T(!de.f.call(e, t), e[t]) : void 0
        }
    })
      , fe = e(function(e, t) {
        var n = function(e, t) {
            if (b(e),
            !_(t) && null !== t)
                throw TypeError(t + ": can't set as prototype!")
        };
        e.exports = {
            set: Object.setPrototypeOf || ("__proto__"in {} ? function(e, t, r) {
                try {
                    r = I(Function.call, he.f(Object.prototype, "__proto__").set, 2),
                    r(e, []),
                    t = !(e instanceof Array)
                } catch (i) {
                    t = !0
                }
                return function(e, i) {
                    return n(e, i),
                    t ? e.__proto__ = i : r(e, i),
                    e
                }
            }({}, !1) : void 0),
            check: n
        }
    })
      , pe = e(function(e, t) {
        var n = y("species");
        e.exports = function(e, t) {
            var r, i = b(e).constructor;
            return void 0 === i || void 0 == (r = b(i)[n]) ? t : L(r)
        }
    })
      , me = e(function(e, t) {
        e.exports = function(e, t, n) {
            var r = void 0 === n;
            switch (t.length) {
            case 0:
                return r ? e() : e.call(n);
            case 1:
                return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
            }
            return e.apply(n, t)
        }
    })
      , ge = e(function(e, t) {
        var n, r, i, o = p.process, a = p.setImmediate, s = p.clearImmediate, u = p.MessageChannel, l = 0, c = {}, d = "onreadystatechange", h = function() {
            var e = +this;
            if (c.hasOwnProperty(e)) {
                var t = c[e];
                delete c[e],
                t()
            }
        }, m = function(e) {
            h.call(e.data)
        };
        a && s || (a = function(e) {
            for (var t = [], r = 1; arguments.length > r; )
                t.push(arguments[r++]);
            return c[++l] = function() {
                me("function" == typeof e ? e : Function(e), t)
            }
            ,
            n(l),
            l
        }
        ,
        s = function(e) {
            delete c[e]
        }
        ,
        "process" == f(o) ? n = function(e) {
            o.nextTick(I(h, e, 1))
        }
        : u ? (r = new u,
        i = r.port2,
        r.port1.onmessage = m,
        n = I(i.postMessage, i, 1)) : p.addEventListener && "function" == typeof postMessage && !p.importScripts ? (n = function(e) {
            p.postMessage(e + "", "*")
        }
        ,
        p.addEventListener("message", m, !1)) : n = d in C("script") ? function(e) {
            X.appendChild(C("script"))[d] = function() {
                X.removeChild(this),
                h.call(e)
            }
        }
        : function(e) {
            setTimeout(I(h, e, 1), 0)
        }
        ),
        e.exports = {
            set: a,
            clear: s
        }
    })
      , ye = e(function(e, t) {
        var n = ge.set
          , r = p.MutationObserver || p.WebKitMutationObserver
          , i = p.process
          , o = p.Promise
          , a = "process" == f(i);
        e.exports = function() {
            var e, t, s, u = function() {
                var n, r;
                for (a && (n = i.domain) && n.exit(); e; ) {
                    r = e.fn,
                    e = e.next;
                    try {
                        r()
                    } catch (o) {
                        throw e ? s() : t = void 0,
                        o
                    }
                }
                t = void 0,
                n && n.enter()
            };
            if (a)
                s = function() {
                    i.nextTick(u)
                }
                ;
            else if (r) {
                var l = !0
                  , c = document.createTextNode("");
                new r(u).observe(c, {
                    characterData: !0
                }),
                s = function() {
                    c.data = l = !l
                }
            } else if (o && o.resolve) {
                var d = o.resolve();
                s = function() {
                    d.then(u)
                }
            } else
                s = function() {
                    n.call(p, u)
                }
                ;
            return function(n) {
                var r = {
                    fn: n,
                    next: void 0
                };
                t && (t.next = r),
                e || (e = r,
                s()),
                t = r
            }
        }
    })
      , ve = e(function(e, t) {
        e.exports = function(e, t, n) {
            for (var r in t)
                $(e, r, t[r], n);
            return e
        }
    })
      , _e = e(function(e, t) {
        "use strict";
        var n = y("species");
        e.exports = function(e) {
            var t = p[e];
            N && t && !t[n] && E.f(t, n, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    })
      , be = e(function(e, t) {
        var n = y("iterator")
          , r = !1;
        try {
            var i = [7][n]();
            i["return"] = function() {
                r = !0
            }
            ,
            Array.from(i, function() {
                throw 2
            })
        } catch (o) {}
        e.exports = function(e, t) {
            if (!t && !r)
                return !1;
            var i = !1;
            try {
                var o = [7]
                  , a = o[n]();
                a.next = function() {
                    return {
                        done: i = !0
                    }
                }
                ,
                o[n] = function() {
                    return a
                }
                ,
                e(o)
            } catch (s) {}
            return i
        }
    })
      , Ae = (e(function(e, t) {
        "use strict";
        var n, r, i, o = (fe.set,
        ge.set), a = ye(), s = "Promise", u = p.TypeError, l = p.process, c = p[s], l = p.process, d = "process" == v(l), h = function() {}, f = !!function() {
            try {
                var e = c.resolve(1)
                  , t = (e.constructor = {})[y("species")] = function(e) {
                    e(h, h)
                }
                ;
                return (d || "function" == typeof PromiseRejectionEvent) && e.then(h)instanceof t
            } catch (n) {}
        }(), m = function(e, t) {
            return e === t || e === c && t === i
        }, g = function(e) {
            var t;
            return _(e) && "function" == typeof (t = e.then) ? t : !1
        }, b = function(e) {
            return m(c, e) ? new A(e) : new r(e)
        }, A = r = function(e) {
            var t, n;
            this.promise = new e(function(e, r) {
                if (void 0 !== t || void 0 !== n)
                    throw u("Bad Promise constructor");
                t = e,
                n = r
            }
            ),
            this.resolve = L(t),
            this.reject = L(n)
        }
        , N = function(e) {
            try {
                e()
            } catch (t) {
                return {
                    error: t
                }
            }
        }, C = function(e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                a(function() {
                    for (var r = e._v, i = 1 == e._s, o = 0, a = function(t) {
                        var n, o, a = i ? t.ok : t.fail, s = t.resolve, l = t.reject, c = t.domain;
                        try {
                            a ? (i || (2 == e._h && E(e),
                            e._h = 1),
                            a === !0 ? n = r : (c && c.enter(),
                            n = a(r),
                            c && c.exit()),
                            n === t.promise ? l(u("Promise-chain cycle")) : (o = g(n)) ? o.call(n, s, l) : s(n)) : l(r)
                        } catch (d) {
                            l(d)
                        }
                    }; n.length > o; )
                        a(n[o++]);
                    e._c = [],
                    e._n = !1,
                    t && !e._h && S(e)
                })
            }
        }, S = function(e) {
            o.call(p, function() {
                var t, n, r, i = e._v;
                if (w(e) && (t = N(function() {
                    d ? l.emit("unhandledRejection", i, e) : (n = p.onunhandledrejection) ? n({
                        promise: e,
                        reason: i
                    }) : (r = p.console) && r.error && r.error("Unhandled promise rejection", i)
                }),
                e._h = d || w(e) ? 2 : 1),
                e._a = void 0,
                t)
                    throw t.error
            })
        }, w = function(e) {
            if (1 == e._h)
                return !1;
            for (var t, n = e._a || e._c, r = 0; n.length > r; )
                if (t = n[r++],
                t.fail || !w(t.promise))
                    return !1;
            return !0
        }, E = function(e) {
            o.call(p, function() {
                var t;
                d ? l.emit("rejectionHandled", e) : (t = p.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                })
            })
        }, T = function(e) {
            var t = this;
            t._d || (t._d = !0,
            t = t._w || t,
            t._v = e,
            t._s = 2,
            t._a || (t._a = t._c.slice()),
            C(t, !0))
        }, x = function(e) {
            var t, n = this;
            if (!n._d) {
                n._d = !0,
                n = n._w || n;
                try {
                    if (n === e)
                        throw u("Promise can't be resolved itself");
                    (t = g(e)) ? a(function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            t.call(e, I(x, r, 1), I(T, r, 1))
                        } catch (i) {
                            T.call(r, i)
                        }
                    }) : (n._v = e,
                    n._s = 1,
                    C(n, !1))
                } catch (r) {
                    T.call({
                        _w: n,
                        _d: !1
                    }, r)
                }
            }
        };
        f || (c = function(e) {
            ae(this, c, s, "_h"),
            L(e),
            n.call(this);
            try {
                e(I(x, this, 1), I(T, this, 1))
            } catch (t) {
                T.call(this, t)
            }
        }
        ,
        n = function(e) {
            this._c = [],
            this._a = void 0,
            this._s = 0,
            this._d = !1,
            this._v = void 0,
            this._h = 0,
            this._n = !1
        }
        ,
        n.prototype = ve(c.prototype, {
            then: function(e, t) {
                var n = b(pe(this, c));
                return n.ok = "function" == typeof e ? e : !0,
                n.fail = "function" == typeof t && t,
                n.domain = d ? l.domain : void 0,
                this._c.push(n),
                this._a && this._a.push(n),
                this._s && C(this, !1),
                n.promise
            },
            "catch": function(e) {
                return this.then(void 0, e)
            }
        }),
        A = function() {
            var e = new n;
            this.promise = e,
            this.resolve = I(x, e, 1),
            this.reject = I(T, e, 1)
        }
        ),
        F(F.G + F.W + F.F * !f, {
            Promise: c
        }),
        Z(c, s),
        _e(s),
        i = P[s],
        F(F.S + F.F * !f, s, {
            reject: function(e) {
                var t = b(this)
                  , n = t.reject;
                return n(e),
                t.promise
            }
        }),
        F(F.S + F.F * (M || !f), s, {
            resolve: function(e) {
                if (e instanceof c && m(e.constructor, this))
                    return e;
                var t = b(this)
                  , n = t.resolve;
                return n(e),
                t.promise
            }
        }),
        F(F.S + F.F * !(f && be(function(e) {
            c.all(e)["catch"](h)
        })), s, {
            all: function(e) {
                var t = this
                  , n = b(t)
                  , r = n.resolve
                  , i = n.reject
                  , o = N(function() {
                    var n = []
                      , o = 0
                      , a = 1;
                    ce(e, !1, function(e) {
                        var s = o++
                          , u = !1;
                        n.push(void 0),
                        a++,
                        t.resolve(e).then(function(e) {
                            u || (u = !0,
                            n[s] = e,
                            --a || r(n))
                        }, i)
                    }),
                    --a || r(n)
                });
                return o && i(o.error),
                n.promise
            },
            race: function(e) {
                var t = this
                  , n = b(t)
                  , r = n.reject
                  , i = N(function() {
                    ce(e, !1, function(e) {
                        t.resolve(e).then(n.resolve, r)
                    })
                });
                return i && r(i.error),
                n.promise
            }
        })
    }),
    e(function(e, t) {
        e.exports = P.Promise
    }),
    e(function(e, t) {
        "use strict";
        function n(e, t) {
            var n = void 0
              , r = !0
              , i = !1
              , a = void 0;
            try {
                for (var s, u = e[Symbol.iterator](); !(r = (s = u.next()).done); r = !0) {
                    var l = s.value;
                    if (l.id === t.id) {
                        n = l;
                        break
                    }
                }
            } catch (c) {
                i = !0,
                a = c
            } finally {
                try {
                    !r && u["return"] && u["return"]()
                } finally {
                    if (i)
                        throw a
                }
            }
            return n || o(e)[0]
        }
        function o(e) {
            return e.sort(function(e, t) {
                var n = parseFloat(e.price, 10)
                  , r = parseFloat(t.price, 10);
                return n > r ? 1 : r > n ? -1 : 0
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = a(h)
          , u = function() {
            function e(t) {
                r(this, e);
                var n = window.Shopify.Checkout ? window.Shopify.Checkout.apiHost : null;
                this.apiClient = new s["default"](n),
                this.checkoutToken = t
            }
            return i(e, [{
                key: "createCheckoutFor",
                value: function(e) {
                    var t = this;
                    return new Promise(function(n, r) {
                        return t.createOrUpdateCheckout(e).then(t.pollShippingRates.bind(t), r).then(t.submitCheckout.bind(t), r).then(n, r)
                    }
                    )
                }
            }, {
                key: "authorize",
                value: function(e) {
                    return this.apiClient.patch("/api/checkouts/" + this.checkoutToken + ".json", {
                        checkout: {
                            payment_session_id: e
                        }
                    })
                }
            }, {
                key: "createOrUpdateCheckout",
                value: function(e) {
                    return this.lastUsedShippingRate = e.shipping_rate,
                    this.paymentSessionId = e.payment_session_id,
                    delete e.payment_session_id,
                    delete e.shipping_rate,
                    e.web_buyer_must_review_checkout = !0,
                    this.checkoutToken ? this.apiClient.patch("/api/checkouts/" + this.checkoutToken + ".json", {
                        card_source: "vault",
                        checkout: e
                    }) : this.apiClient.post("/api/checkouts.json", {
                        card_source: "vault",
                        checkout: e
                    })
                }
            }, {
                key: "pollShippingRates",
                value: function(e) {
                    return this.checkoutToken || (this.checkoutToken = e.checkout.token),
                    this.checkoutIsFree = 0 === parseFloat(e.checkout.total_price),
                    e.checkout.requires_shipping ? this.apiClient.get("/api/checkouts/" + this.checkoutToken + "/shipping_rates.json") : Promise.resolve({
                        shipping_rates: []
                    })
                }
            }, {
                key: "submitCheckout",
                value: function(e) {
                    var t = e.shipping_rates
                      , r = {};
                    if (t && t.length > 0) {
                        var i = n(t, this.lastUsedShippingRate);
                        this.checkoutIsFree && parseFloat(i.price) > 0 && (this.checkoutIsFree = !1),
                        r.shipping_rate = {
                            id: i.id
                        }
                    }
                    return this.checkoutIsFree ? r.payment_gateway = "" : r.payment_session_id = this.paymentSessionId,
                    this.apiClient.patch("/api/checkouts/" + this.checkoutToken + ".json", {
                        checkout: r
                    })
                }
            }]),
            e
        }();
        t["default"] = u,
        window.RememberMeCheckoutUpdater = u
    }))
      , Ne = e(function(e, t) {
        "use strict";
        function n(e) {
            return c = i(),
            r(e).then(o).then(s)["catch"](u)
        }
        function r(e) {
            return fetch("https://" + Shopify.Checkout.rememberMeHost + "/customers?session_token=" + e, {
                method: "GET",
                headers: {
                    "X-Remember-Me-Access-Token": Shopify.Checkout.rememberMeAccessToken
                }
            })
        }
        function i() {
            var e = document.querySelector('form[action="/cart"]');
            return fetch("/cart.json", {
                method: "POST",
                body: new FormData(e),
                headers: {
                    Accept: "application/json"
                },
                credentials: "same-origin"
            }).then(function(e) {
                return e.json()
            })
        }
        function o(e) {
            return 200 === e.status ? e.json() : u()
        }
        function s(e) {
            return c.then(function(t) {
                return e.cart_token = t.token,
                ShopifyAnalytics.lib.track("remember_me_same_store", {
                    step: "processing",
                    cart_token: t.cart_token
                }),
                (new l["default"]).createCheckoutFor(e).then(function(e) {
                    return window.location = e.checkout.web_url
                })["catch"](u)
            })
        }
        function u() {
            return Promise.reject("RememberMe not working")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t["default"] = n;
        var l = a(Ae)
          , c = void 0
    })
      , Ce = e(function(e, t) {
        "use strict";
        function n() {
            if (window.ShopifyExperiments && window.ShopifyExperiments.rememberMe && (c = i())) {
                var e = document.querySelectorAll(s)
                  , t = !0
                  , n = !1
                  , o = void 0;
                try {
                    for (var a, u = e[Symbol.iterator](); !(t = (a = u.next()).done); t = !0) {
                        var d = a.value;
                        -1 === l.indexOf(d) && (l.push(d),
                        d.addEventListener("click", r))
                    }
                } catch (h) {
                    n = !0,
                    o = h
                } finally {
                    try {
                        !t && u["return"] && u["return"]()
                    } finally {
                        if (n)
                            throw o
                    }
                }
            }
        }
        function r(e) {
            e.preventDefault(),
            e.target.removeEventListener("click", r),
            ShopifyAnalytics.lib.track("remember_me_same_store", {
                step: "started"
            }),
            setTimeout(function() {
                e.target.disabled = !0
            }),
            o["default"](c)["catch"](function() {
                ShopifyAnalytics.lib.track("remember_me_same_store", {
                    step: "failed"
                }),
                e.target.disabled = !1,
                e.target.click()
            })
        }
        function i() {
            var e = u.exec(document.cookie);
            return e ? unescape(e[1]) : !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t["default"] = n;
        var o = a(Ne)
          , s = 'form[action="/cart"] [type="submit"][name="checkout"]'
          , u = new RegExp("remember_me_authentication=([^;]+)")
          , l = []
          , c = void 0
    })
      , Se = e(function(e, t) {
        var n = g("meta")
          , r = E.f
          , i = 0
          , o = Object.isExtensible || function() {
            return !0
        }
          , a = !A(function() {
            return o(Object.preventExtensions({}))
        })
          , s = function(e) {
            r(e, n, {
                value: {
                    i: "O" + ++i,
                    w: {}
                }
            })
        }
          , u = function(e, t) {
            if (!_(e))
                return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!k(e, n)) {
                if (!o(e))
                    return "F";
                if (!t)
                    return "E";
                s(e)
            }
            return e[n].i
        }
          , l = function(e, t) {
            if (!k(e, n)) {
                if (!o(e))
                    return !0;
                if (!t)
                    return !1;
                s(e)
            }
            return e[n].w
        }
          , c = function(e) {
            return a && d.NEED && o(e) && !k(e, n) && s(e),
            e
        }
          , d = e.exports = {
            KEY: n,
            NEED: !1,
            fastKey: u,
            getWeak: l,
            onFreeze: c
        }
    })
      , we = e(function(e, t) {
        t.f = y
    })
      , Ee = e(function(e, t) {
        var n = E.f;
        e.exports = function(e) {
            var t = P.Symbol || (P.Symbol = M ? {} : p.Symbol || {});
            "_" == e.charAt(0) || e in t || n(t, e, {
                value: we.f(e)
            })
        }
    })
      , Te = e(function(e, t) {
        e.exports = function(e, t) {
            for (var n, r = H(e), i = Y(r), o = i.length, a = 0; o > a; )
                if (r[n = i[a++]] === t)
                    return n
        }
    })
      , xe = e(function(e, t) {
        t.f = Object.getOwnPropertySymbols
    })
      , ke = e(function(e, t) {
        e.exports = function(e) {
            var t = Y(e)
              , n = xe.f;
            if (n)
                for (var r, i = n(e), o = de.f, a = 0; i.length > a; )
                    o.call(e, r = i[a++]) && t.push(r);
            return t
        }
    })
      , Pe = e(function(e, t) {
        e.exports = Array.isArray || function(e) {
            return "Array" == f(e)
        }
    })
      , $e = e(function(e, t) {
        var n = G.concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(e) {
            return q(e, n)
        }
    })
      , Re = e(function(e, t) {
        var n = $e.f
          , r = {}.toString
          , i = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
          , o = function(e) {
            try {
                return n(e)
            } catch (t) {
                return i.slice()
            }
        };
        e.exports.f = function(e) {
            return i && "[object Window]" == r.call(e) ? o(e) : n(H(e))
        }
    })
      , De = (e(function(e, t) {
        "use strict";
        var n = Se.KEY
          , r = he.f
          , i = E.f
          , o = Re.f
          , a = p.Symbol
          , s = p.JSON
          , u = s && s.stringify
          , l = "prototype"
          , c = y("_hidden")
          , d = y("toPrimitive")
          , h = {}.propertyIsEnumerable
          , f = m("symbol-registry")
          , v = m("symbols")
          , _ = m("op-symbols")
          , C = Object[l]
          , S = "function" == typeof a
          , P = p.QObject
          , R = !P || !P[l] || !P[l].findChild
          , D = N && A(function() {
            return 7 != J(i({}, "a", {
                get: function() {
                    return i(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(e, t, n) {
            var o = r(C, t);
            o && delete C[t],
            i(e, t, n),
            o && e !== C && i(C, t, o)
        }
        : i
          , O = function(e) {
            var t = v[e] = J(a[l]);
            return t._k = e,
            t
        }
          , L = S && "symbol" == typeof a.iterator ? function(e) {
            return "symbol" == typeof e
        }
        : function(e) {
            return e instanceof a
        }
          , I = function(e, t, n) {
            return e === C && I(_, t, n),
            b(e),
            t = w(t, !0),
            b(n),
            k(v, t) ? (n.enumerable ? (k(e, c) && e[c][t] && (e[c][t] = !1),
            n = J(n, {
                enumerable: T(0, !1)
            })) : (k(e, c) || i(e, c, T(1, {})),
            e[c][t] = !0),
            D(e, t, n)) : i(e, t, n)
        }
          , B = function(e, t) {
            b(e);
            for (var n, r = ke(t = H(t)), i = 0, o = r.length; o > i; )
                I(e, n = r[i++], t[n]);
            return e
        }
          , j = function(e, t) {
            return void 0 === t ? J(e) : B(J(e), t)
        }
          , U = function(e) {
            var t = h.call(this, e = w(e, !0));
            return this === C && k(v, e) && !k(_, e) ? !1 : t || !k(this, e) || !k(v, e) || k(this, c) && this[c][e] ? t : !0
        }
          , z = function(e, t) {
            if (e = H(e),
            t = w(t, !0),
            e !== C || !k(v, t) || k(_, t)) {
                var n = r(e, t);
                return !n || !k(v, t) || k(e, c) && e[c][t] || (n.enumerable = !0),
                n
            }
        }
          , V = function(e) {
            for (var t, r = o(H(e)), i = [], a = 0; r.length > a; )
                k(v, t = r[a++]) || t == c || t == n || i.push(t);
            return i
        }
          , W = function(e) {
            for (var t, n = e === C, r = o(n ? _ : H(e)), i = [], a = 0; r.length > a; )
                k(v, t = r[a++]) && (n ? k(C, t) : !0) && i.push(v[t]);
            return i
        };
        S || (a = function() {
            if (this instanceof a)
                throw TypeError("Symbol is not a constructor!");
            var e = g(arguments.length > 0 ? arguments[0] : void 0)
              , t = function(n) {
                this === C && t.call(_, n),
                k(this, c) && k(this[c], e) && (this[c][e] = !1),
                D(this, e, T(1, n))
            };
            return N && R && D(C, e, {
                configurable: !0,
                set: t
            }),
            O(e)
        }
        ,
        $(a[l], "toString", function() {
            return this._k
        }),
        he.f = z,
        E.f = I,
        $e.f = Re.f = V,
        de.f = U,
        xe.f = W,
        N && !M && $(C, "propertyIsEnumerable", U, !0),
        we.f = function(e) {
            return O(y(e))
        }
        ),
        F(F.G + F.W + F.F * !S, {
            Symbol: a
        });
        for (var q = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), G = 0; q.length > G; )
            y(q[G++]);
        for (var q = Y(y.store), G = 0; q.length > G; )
            Ee(q[G++]);
        F(F.S + F.F * !S, "Symbol", {
            "for": function(e) {
                return k(f, e += "") ? f[e] : f[e] = a(e)
            },
            keyFor: function(e) {
                if (L(e))
                    return Te(f, e);
                throw TypeError(e + " is not a symbol!")
            },
            useSetter: function() {
                R = !0
            },
            useSimple: function() {
                R = !1
            }
        }),
        F(F.S + F.F * !S, "Object", {
            create: j,
            defineProperty: I,
            defineProperties: B,
            getOwnPropertyDescriptor: z,
            getOwnPropertyNames: V,
            getOwnPropertySymbols: W
        }),
        s && F(F.S + F.F * (!S || A(function() {
            var e = a();
            return "[null]" != u([e]) || "{}" != u({
                a: e
            }) || "{}" != u(Object(e))
        })), "JSON", {
            stringify: function(e) {
                if (void 0 !== e && !L(e)) {
                    for (var t, n, r = [e], i = 1; arguments.length > i; )
                        r.push(arguments[i++]);
                    return t = r[1],
                    "function" == typeof t && (n = t),
                    (n || !Pe(t)) && (t = function(e, t) {
                        return n && (t = n.call(this, e, t)),
                        L(t) ? void 0 : t
                    }
                    ),
                    r[1] = t,
                    u.apply(s, r)
                }
            }
        }),
        a[l][d] || x(a[l], d, a[l].valueOf),
        Z(a, "Symbol"),
        Z(Math, "Math", !0),
        Z(p.JSON, "JSON", !0)
    }),
    e(function(e, t) {
        e.exports = P.Symbol
    }),
    e(function(e, t) {
        "use strict";
        function n(e) {
            "loading" !== document.readyState ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", function() {
                "loading" !== document.readyState && e()
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t["default"] = n
    }))
      , Oe = e(function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {
            eventListeners: {
                completePayment: []
            },
            register: function(e, t) {
                n.eventListeners[e].push(t)
            },
            trigger: function(e, t) {
                var r = void 0
                  , i = n.eventListeners[e] || []
                  , o = i.reduce(function(e, t) {
                    return e.then(t)
                }, new Promise(function(e) {
                    r = e
                }
                ))["catch"](function() {}).then(function() {
                    return t
                })["catch"](function() {});
                return r(t),
                o
            }
        };
        t["default"] = n
    })
      , Me = e(function(e, t) {
        "use strict";
        function n(e) {
            var t = {
                city: e.locality,
                province_code: e.administrativeArea,
                zip: e.postalCode
            };
            e.countryCode ? t.country_code = e.countryCode.toLowerCase() : e.country && (t.country = e.country.toLowerCase(),
            "usa" === t.country && (t.country = "united states")),
            e.givenName && (t.first_name = e.givenName),
            e.familyName && (t.last_name = e.familyName),
            e.phoneNumber && (t.phone = e.phoneNumber);
            var n = e.addressLines;
            return n && n.length && (t.address1 = n[0],
            n[1] && (t.address2 = n[1])),
            s(t)
        }
        function r(e, t) {
            return {
                type: "final",
                label: t,
                amount: e.total_price
            }
        }
        function i(e) {
            var t = [{
                type: "final",
                label: "Subtotal",
                amount: c(e)
            }];
            return e.shipping_line && (t = t.concat([{
                type: "final",
                label: "Shipping",
                amount: e.shipping_line.price
            }])),
            e.total_tax && (t = t.concat([{
                type: "final",
                label: "Estimated Tax",
                amount: e.total_tax
            }])),
            e.applied_discount && (t = t.concat([{
                type: "final",
                label: "Discount",
                amount: -e.applied_discount.amount
            }])),
            t
        }
        function o(e) {
            return a(e).map(l)
        }
        function a(e) {
            return [].concat(e).sort(u)
        }
        function s(e) {
            var t = e.country_code
              , n = e.country
              , r = e.zip
              , i = {};
            return d.test(r) && (("ca" === t || "canada" === n) && (i.zip = r.trim() + " 0Z0"),
            "gb" === t && (i.zip = r.trim() + " 0ZZ")),
            Object.assign({}, e, i)
        }
        function u(e, t) {
            var n = parseFloat(e.price)
              , r = parseFloat(t.price);
            return r > n ? -1 : n > r ? 1 : 0
        }
        function l(e) {
            return {
                identifier: e.id,
                label: e.title,
                detail: "",
                amount: e.price
            }
        }
        function c(e) {
            return (e.line_items || []).reduce(function(e, t) {
                return e + t.quantity * t.price
            }, 0)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.addressFromEvent = n,
        t.totalFromCheckout = r,
        t.lineItemsFromCheckout = i,
        t.transformedShippingRates = o,
        t.sortShippingRates = a;
        var d = /^[a-z0-9]{2,4}\s?$/i
    })
      , Le = e(function(e, t) {
        "use strict";
        function n() {
            for (var e = [], t = r(), n = t.length - 1; n >= 0; n--)
                e.push(i(t[n]));
            return e.join("")
        }
        function r() {
            var e = window.crypto || window.msCrypto;
            if (e && e.getRandomValues) {
                var t = new Uint8Array(16);
                return e.getRandomValues(t),
                t
            }
            for (var n, r = new Array(16), i = 0; 16 > i; i++)
                0 === (3 & i) && (n = 4294967296 * Math.random()),
                r[i] = n >>> ((3 & i) << 3) & 255;
            return r
        }
        function i(e) {
            return (e + 256).toString(16).substr(1)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.generateRandomId = n
    })
      , Ie = e(function(e, t) {
        "use strict";
        function n(e, t) {
            for (var n = 0; n < a.length; n++)
                if (a[n][0].test(e)) {
                    var r = a[n][1];
                    return "function" == typeof r && t ? r(t.field) : r
                }
            return s
        }
        function r(e) {
            var t = [];
            return Object.keys(e).forEach(function(r) {
                Object.keys(e[r]).forEach(function(i) {
                    e[r][i].forEach(function(e) {
                        e && e.code && t.push(n(r + "_" + i + "_" + e.code, {
                            field: i,
                            category: r
                        }))
                    })
                })
            }),
            t
        }
        function i(e) {
            e = Array.isArray(e) ? e : [e];
            var t = e.map(function(e) {
                return o(e)
            });
            return 1 === t.length && t[0].startsWith("Enter ") && (t = ["Please e" + t[0].substr(1) + " and try again"]),
            t
        }
        function o(e) {
            switch (e) {
            case "Some products became unavailable and your cart has been updated. We're sorry for the inconvenience.":
                return n("not_enough_in_stock");
            default:
                return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.errorFromCode = n,
        t.errorMessagesFromJson = r,
        t.normalizeErrors = i;
        var a = [[/failed_session/, "There was a problem with the payment service. Please select a different payment method or try again later."], [/first_name_blank$/, "Enter a first name for your shipping address"], [/last_name_blank$/, "Enter a last name for your shipping address"], [/address1_blank$/, "Enter your shipping address"], [/address2_blank$/, "Enter the apt, suite, etc. for your shipping address"], [/city_blank$/, "Enter the city of your shipping address"], [/country(_code)?_blank$/, "Select a country for your shipping address"], [/country(_code)?_not_supported$/, "Enter a valid country for your shipping address"], [/province(_code)?_blank$/, "Enter a state / province for your shipping address"], [/province(_code)?_invalid_state_in_country$/, "Enter a valid state for your shipping address country"], [/province(_code)?_invalid_province_in_country$/, "Enter a valid province for your shipping address country"], [/province(_code)?_invalid_region_in_country$/, "Enter a valid region for your shipping address country"], [/company_blank$/, "Enter a company name for your shipping address"], [/phone_blank$/, "Enter a valid phone number for your shipping address"], [/zip(_code)?_blank$/, "Enter a ZIP code / postal code for your shipping address"], [/zip(_code)?_invalid_for_country$/, "Enter a valid ZIP code / postal code for your shipping address"], [/zip(_code)?_invalid_for_country_and_province$/, "Enter a valid ZIP code / postal code for your shipping address"], [/email_invalid$/, "Enter a valid email address"], [/generic_error$/, "An error occurred while processing your payment. Please try again."], [/credit_card_processing$/, "Your card can't be processed due to technical difficulties. Please try again in a few minutes."], [/not_enough_in_stock$/, "Some items became unavailable. Refresh your cart and try again."], [/full_name_required$/, "Enter both your first and last name"], [/total_price_too_big$/, "Your order total exceeds the limit. Please edit your cart and try again."], [/total_price_zero$/, "To check out with Apple Pay, your order total must be greater than 0. Please choose a new payment method and try again."], [/no_shipping_option$/, "Sorry, we currently don't ship to this country. Please choose a new shipping address and try again."], [/expired_card/, "Your credit card is expired. Please update your card."], [/card_declined/, "Your credit card was declined. In order to resolve this issue, you will need to contact your bank."], [/(invalid|blank)$/, function(e) {
            return "Enter a valid " + e
        }
        ]]
          , s = "An error occurred while processing your checkout. Please try again."
    })
      , Fe = e(function(e, t) {
        "use strict";
        function n() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.checkout || e;
            return t.billing_address ? ApplePaySession.STATUS_INVALID_BILLING_POSTAL_ADDRESS : t.shipping_address ? ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS : ApplePaySession.STATUS_FAILURE
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = a(Oe)
          , s = function() {
            function e(t) {
                var n = t.apiClient
                  , i = t.sessionToken
                  , o = t.merchantName
                  , a = t.session
                  , s = t.strategy
                  , u = t.shopId
                  , l = t.showErrors;
                if (r(this, e),
                this.apiClient = n,
                this.strategy = s,
                this._sessionToken = i || Le.generateRandomId(),
                this._merchantName = o,
                this._session = a,
                this._shopId = u,
                this._showErrors = l,
                this._firstShippingContactSelected = !0,
                !s)
                    throw new Error("`strategy` must be supplied to ShopifyApplePaySession");
                this._session.oncancel = this._trackCallback("cancelled", this._onCancel).bind(this),
                this._session.onvalidatemerchant = this._trackCallback("merchant validated", this._onValidateMerchant.bind(this)),
                this._session.onshippingcontactselected = this._trackCallback("shipping contact selected", this._onShippingContactSelected).bind(this),
                this._session.onshippingmethodselected = this._trackCallback("shipping method selected", this._onShippingMethodSelected).bind(this),
                this._session.onpaymentauthorized = this._trackCallback("payment authorized", this._onPaymentAuthorized).bind(this),
                this._session.onpaymentmethodselected = this._trackCallback("payment method selected", this._onPaymentMethodSelected).bind(this)
            }
            return i(e, [{
                key: "begin",
                value: function() {
                    this._session.begin()
                }
            }, {
                key: "_onCancel",
                value: function() {
                    return this.apiClient.stopPolling(),
                    Promise.resolve()
                }
            }, {
                key: "_onValidateMerchant",
                value: function(e) {
                    var t = this
                      , n = e.validationURL
                      , r = {
                        domain: window.location.hostname,
                        id: this._sessionToken,
                        validation_url: n
                    };
                    return this.strategy.build().then(function(e) {
                        return t.checkout = e
                    }).then(function() {
                        return t.apiClient.post("/" + t._shopId + "/apple_pay/sessions", r)
                    }).then(function(e) {
                        var n = e.body;
                        return t._session.completeMerchantValidation(n)
                    })["catch"](function() {
                        return t._handleErrors(Ie.errorFromCode("failed_session"))
                    })
                }
            }, {
                key: "_onShippingContactSelected",
                value: function(e) {
                    var t = this
                      , n = {
                        partial_addresses: !0,
                        shipping_address: Me.addressFromEvent(e.shippingContact)
                    };
                    return this._updateCheckout(n).then(this._fetchShippingRates.bind(this)).then(this._setDefaultShippingRate.bind(this)).then(function(e) {
                        return t._session.completeShippingContactSelection(ApplePaySession.STATUS_SUCCESS, Me.transformedShippingRates(t.availableShippingRates), Me.totalFromCheckout(e, t._merchantName), Me.lineItemsFromCheckout(e))
                    }).then(function() {
                        return t._firstShippingContactSelected = !1
                    })["catch"](function(e) {
                        return t._displayInitialAddressError(e)
                    })["catch"](function(e) {
                        return t._handleResponseError(e)
                    })["catch"](function(e) {
                        return t._catchPaymentRequestValidatorError(e)
                    })
                }
            }, {
                key: "_onShippingMethodSelected",
                value: function(e) {
                    var t = this
                      , n = e.shippingMethod
                      , r = {
                        shipping_line: {
                            handle: n.identifier
                        }
                    };
                    return this._updateCheckout(r).then(function(e) {
                        return t._session.completeShippingMethodSelection(ApplePaySession.STATUS_SUCCESS, Me.totalFromCheckout(e, t._merchantName), Me.lineItemsFromCheckout(e))
                    })["catch"](function() {
                        return t._session.completeShippingMethodSelection(ApplePaySession.STATUS_FAILURE)
                    })
                }
            }, {
                key: "_onPaymentAuthorized",
                value: function(e) {
                    var t = e.payment
                      , n = t.token.paymentData
                      , r = {
                        email: t.billingContact.emailAddress || t.shippingContact.emailAddress,
                        billing_address: Me.addressFromEvent(t.billingContact),
                        shipping_address: Me.addressFromEvent(t.shippingContact)
                    };
                    if (this.checkout.requires_shipping !== !1 && !this.checkout.shipping_line)
                        return this._handleErrors([Ie.errorFromCode("no_shipping_option")]);
                    var i = {
                        unique_token: Le.generateRandomId(),
                        amount: this.checkout.total_price,
                        payment_token: {
                            type: "apple_pay",
                            payment_data: JSON.stringify(n)
                        }
                    };
                    return this._updateCheckout(r).then(this._submitPayment.bind(this, i)).then(this._completePayment.bind(this))["catch"](this._handlePaymentError.bind(this))
                }
            }, {
                key: "_onPaymentMethodSelected",
                value: function() {
                    return this._session.completePaymentMethodSelection(Me.totalFromCheckout(this.checkout, this._merchantName), Me.lineItemsFromCheckout(this.checkout)),
                    Promise.resolve()
                }
            }, {
                key: "_fetchShippingRates",
                value: function() {
                    var e = this;
                    return this.checkout.requires_shipping === !1 ? (this.availableShippingRates = [],
                    this.checkout) : this.apiClient.get("/api/checkouts/" + this.checkout.token + "/shipping_rates").then(function(t) {
                        var n = t.shipping_rates;
                        return e.availableShippingRates = Me.sortShippingRates(n),
                        e.checkout
                    })
                }
            }, {
                key: "_setDefaultShippingRate",
                value: function() {
                    if (this.checkout.requires_shipping === !1 || this.checkout.shipping_line)
                        return this.checkout;
                    var e = this.availableShippingRates || []
                      , t = e[0];
                    return t ? this._updateCheckout({
                        shipping_line: {
                            handle: t.id
                        }
                    }) : this.checkout
                }
            }, {
                key: "_getCheckout",
                value: function() {
                    var e = this;
                    return this.apiClient.get("/api/checkouts/" + this.checkout.token).then(function(t) {
                        return e.checkout = t.checkout
                    })
                }
            }, {
                key: "_updateCheckout",
                value: function(e) {
                    var t = this;
                    return this.apiClient.patch("/api/checkouts/" + this.checkout.token, {
                        checkout: e
                    }).then(function(e) {
                        return t.checkout = e.checkout
                    })
                }
            }, {
                key: "_submitPayment",
                value: function(e) {
                    return this.apiClient.post("/api/checkouts/" + this.checkout.token + "/payments", {
                        payment: e
                    })
                }
            }, {
                key: "_completePayment",
                value: function(e) {
                    var t = this
                      , n = e.payment
                      , r = n && n.transaction
                      , i = void 0;
                    return n && n.payment_processing_error_message ? i = n.payment_processing_error_message : r && "success" !== r.status && "pending" !== r.status && (i = r.message || "Payment Transaction " + r.status),
                    i ? (this._handleErrors([i]),
                    e) : this._getCheckout().then(function(e) {
                        var n = e.order;
                        return t._session.completePayment(ApplePaySession.STATUS_SUCCESS),
                        n
                    }).then(function(e) {
                        return t._track("payment completed"),
                        e
                    }).then(function(e) {
                        return o["default"].trigger("completePayment", e)
                    }).then(function(e) {
                        return t._redirect(e.status_url)
                    })
                }
            }, {
                key: "_handlePaymentError",
                value: function(e) {
                    var t = this;
                    e && e.response && 422 === e.response.status ? e.response.json().then(function(e) {
                        var t = e.errors;
                        return n(t)
                    }).then(function(e) {
                        return t._session.completePayment(e)
                    })["catch"](function() {
                        return t._session.completePayment(ApplePaySession.STATUS_FAILURE)
                    }) : this._session.completePayment(ApplePaySession.STATUS_FAILURE)
                }
            }, {
                key: "_displayInitialAddressError",
                value: function(e) {
                    if (e.response && 422 === e.response.status && this._firstShippingContactSelected)
                        return this._session.completeShippingContactSelection(ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS, [], Me.totalFromCheckout(this.checkout, this._merchantName), Me.lineItemsFromCheckout(this.checkout)),
                        this._firstShippingContactSelected = !1,
                        this.checkout;
                    throw e
                }
            }, {
                key: "_catchPaymentRequestValidatorError",
                value: function(e) {
                    switch (e.message) {
                    case "Total amount must be greater than zero":
                        return this._handleErrors([Ie.errorFromCode("total_price_zero")]);
                    case "Total amount is too big":
                        return this._handleErrors([Ie.errorFromCode("total_price_too_big")]);
                    default:
                        return this._session.abort()
                    }
                }
            }, {
                key: "_trackCallback",
                value: function(e, t) {
                    var n = this;
                    return function(r) {
                        return t.call(n, r).then(function() {
                            return n._track(e)
                        })["catch"](function(e) {
                            throw e
                        })
                    }
                }
            }, {
                key: "_handleErrors",
                value: function(e) {
                    var t = this;
                    this._showErrors && setTimeout(function() {
                        t._showErrors(Ie.normalizeErrors(e))
                    }, 200),
                    this._session.abort()
                }
            }, {
                key: "_handleResponseError",
                value: function(e) {
                    var t = this;
                    if (!e.response || 422 !== e.response.status)
                        throw e;
                    e.response.json().then(function(e) {
                        var n = e.errors;
                        return t._handleErrors(Ie.errorMessagesFromJson(n))
                    })["catch"](function(e) {
                        throw e
                    })
                }
            }, {
                key: "_track",
                value: function(e) {
                    window.ShopifyAnalytics && ShopifyAnalytics.lib && ShopifyAnalytics.lib.track && ShopifyAnalytics.lib.track("Apple Pay slate - " + e, {
                        strategy: this.strategy.identifier,
                        checkoutToken: this.checkout && this.checkout.token
                    })
                }
            }, {
                key: "_redirect",
                value: function(e) {
                    window.location = e
                }
            }]),
            e
        }();
        t["default"] = s,
        s.hooks = o["default"]
    })
      , Be = e(function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = t.apiClient
                  , i = t.type;
                r(this, e),
                this.gatewayParams = {
                    type: i
                },
                this.setApiClient(n),
                this.identifier = "NA"
            }
            return i(e, [{
                key: "setApiClient",
                value: function(e) {
                    this.apiClient = e
                }
            }, {
                key: "getCheckout",
                value: function(e) {
                    return this.apiClient.patch("/api/checkouts/" + e, this.params()).then(function(e) {
                        var t = e.checkout;
                        return t
                    })
                }
            }, {
                key: "createCheckout",
                value: function(e) {
                    return this.apiClient.post("/api/checkouts", this.params(e)).then(function(e) {
                        var t = e.checkout;
                        return t
                    })
                }
            }, {
                key: "params",
                value: function(e) {
                    return {
                        checkout: o({}, e, {
                            gateway_params: this.gatewayParams
                        })
                    }
                }
            }]),
            e
        }();
        t["default"] = n
    })
      , je = e(function(e, o) {
        "use strict";
        function s() {
            var e = document.querySelector('form[action^="/cart/add"]');
            if (!e)
                return {};
            var t = e.elements.quantity
              , n = t ? t.value : 1;
            return {
                line_items: [{
                    variant_id: e.elements.id.value,
                    quantity: n
                }]
            }
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var u = a(Be)
          , l = function(e) {
            function o() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.apiClient
                  , i = e.type;
                r(this, o);
                var a = n(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, {
                    apiClient: t,
                    type: i
                }));
                return a.identifier = "product",
                a
            }
            return t(o, e),
            i(o, [{
                key: "build",
                value: function() {
                    return this.createCheckout(s())
                }
            }]),
            o
        }(u["default"]);
        o["default"] = l
    })
      , He = e(function(e, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = a(Be)
          , u = /^(https?:\/\/[^\/]+)?\/checkout\/poll/
          , l = function(e) {
            function o() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.apiClient
                  , i = e.type;
                r(this, o);
                var a = n(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, {
                    apiClient: t,
                    type: i
                }));
                return a.identifier = "cart",
                a
            }
            return t(o, e),
            i(o, [{
                key: "build",
                value: function() {
                    var e = this;
                    return this.updateCart().then(function(t) {
                        var n = t.token;
                        return e.createCheckout({
                            cart_token: n
                        })
                    })
                }
            }, {
                key: "createCheckout",
                value: function(e) {
                    return e.secret = !0,
                    this.apiClient.post("/api/checkouts", this.params(e), {
                        poll: !1
                    }).then(this.handleThrottling.bind(this)).then(function(e) {
                        var t = e.checkout;
                        return t
                    })
                }
            }, {
                key: "handleThrottling",
                value: function(e) {
                    if (202 === e.status && e.headers) {
                        var t = e.headers.get("Location");
                        return u.test(t) ? (this.redirectToQueue(),
                        Promise.reject()) : this.apiClient.get(t)
                    }
                    return e
                }
            }, {
                key: "updateCart",
                value: function() {
                    return fetch("/cart", {
                        method: "POST",
                        body: new FormData(this.form),
                        headers: {
                            Accept: "application/json"
                        },
                        credentials: "same-origin"
                    }).then(function(e) {
                        return e.json()
                    })
                }
            }, {
                key: "redirectToQueue",
                value: function() {
                    var e = document.createElement("input");
                    e.type = "hidden",
                    e.name = "checkout",
                    e.value = "1",
                    this.form.appendChild(e),
                    this.form.submit()
                }
            }, {
                key: "form",
                get: function() {
                    return this._form ? this._form : (this._form = document.querySelector('form[action^="/cart"]'),
                    this._form)
                }
            }]),
            o
        }(s["default"]);
        o["default"] = l
    })
      , Ue = e(function(e, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = a(Be)
          , u = function(e) {
            function o() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.apiClient
                  , i = e.token
                  , a = e.type;
                r(this, o);
                var s = n(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, {
                    apiClient: t,
                    type: a
                }));
                return s.token = i,
                s.identifier = "checkout",
                s
            }
            return t(o, e),
            i(o, [{
                key: "build",
                value: function() {
                    return this.getCheckout(this.token)
                }
            }]),
            o
        }(s["default"]);
        o["default"] = u
    })
      , ze = e(function(e, t) {
        "use strict";
        function n(e, t, n) {
            window.ShopifyAnalytics && ShopifyAnalytics.lib && ShopifyAnalytics.lib.track && ShopifyAnalytics.lib.track(e + " button - " + t, {
                strategy: n
            })
        }
        function r(e) {
            return DigitalWalletsDialog.showMessage({
                title: "Transaction unsuccessful",
                errors: e,
                button: "Return to checkout"
            })
        }
        function i(e) {
            return a(e, "cart")
        }
        function o(e) {
            return a(e, "product")
        }
        function a(e, t) {
            return Shopify.StorefrontExpressButtons.DigitalWalletsDialog.showMessage({
                title: "Transaction unsuccessful",
                errors: e,
                button: "Return to " + t
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.track = n,
        t.checkoutShowErrors = r,
        t.cartShowErrors = i,
        t.productShowErrors = o
    })
      , Ve = e(function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a(je)
          , o = a(He)
          , s = a(Ue)
          , u = a(h)
          , l = function() {
            function e(t, i) {
                r(this, e);
                var a = t.getAttribute("data-strategy");
                if (!a)
                    throw new Error("Unspecified strategy");
                switch (this.button = t,
                this.apiClient = new u["default"],
                this.requireActiveCard = !1,
                a) {
                case "cart":
                    this.strategy = new o["default"]({
                        apiClient: this.apiClient,
                        type: i
                    }),
                    this.showErrors = ze.cartShowErrors;
                    break;
                case "product":
                    this.strategy = new n["default"]({
                        apiClient: this.apiClient,
                        type: i
                    }),
                    this.requireActiveCard = !0,
                    this.showErrors = ze.productShowErrors;
                    break;
                case "checkout":
                    this.strategy = new s["default"]({
                        apiClient: this.apiClient,
                        token: Shopify.Checkout.token,
                        type: i
                    }),
                    this.showErrors = ze.checkoutShowErrors,
                    this.apiClient.host = Shopify.Checkout.apiHost
                }
            }
            return i(e, [{
                key: "init",
                value: function() {
                    throw new Error("You must overwrite the init method.")
                }
            }]),
            e
        }();
        t["default"] = l
    })
      , We = e(function(e, o) {
        "use strict";
        function s(e, t) {
            e.style.display = e.getAttribute("data-display-value") || "inline-block",
            ze.track(m, "shown", t)
        }
        function l(e) {
            e.button.addEventListener("click", c.bind(e))
        }
        function c(e) {
            e.preventDefault(),
            ze.track(m, "clicked", this.strategy.identifier);
            var t = new ApplePaySession(p,d(this.merchantCapabilities));
            new h["default"]({
                merchantName: this.merchantCapabilities.merchantName,
                apiClient: this.apiClient,
                strategy: this.strategy,
                shopId: this.shopId,
                showErrors: this.showErrors,
                session: t
            }).begin()
        }
        function d(e) {
            var t = e.merchantName
              , n = u(e, ["merchantName"]);
            return n.total = {
                type: "pending",
                label: t,
                amount: "1.00"
            },
            n
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var h = a(Fe)
          , f = a(Ve)
          , p = 1
          , m = "Apple Pay";
        window.ShopifyApplePaySessionHooks = h["default"].hooks;
        var g = function(e) {
            function o(e) {
                return r(this, o),
                n(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e, "apple_pay_web"))
            }
            return t(o, e),
            i(o, [{
                key: "init",
                value: function() {
                    var e = this
                      , t = document.getElementById("apple-pay-shop-capabilities");
                    if (!t)
                        return Promise.reject(new Error("Missing shop capabilities for Apple Pay"));
                    var n = JSON.parse(t.textContent)
                      , r = n.shopId
                      , i = n.merchantId
                      , o = u(n, ["shopId", "merchantId"]);
                    return this.shopId = r,
                    this.merchantId = i,
                    this.merchantCapabilities = o,
                    this.canMakePayments().then(function(t) {
                        return t ? (s(e.button, e.strategy.identifier),
                        l(e),
                        Promise.resolve(e)) : Promise.reject(new Error("Apple Pay canMakePayments is false"))
                    })
                }
            }, {
                key: "canMakePayments",
                value: function() {
                    var e = this;
                    if (!window.ApplePaySession)
                        return Promise.resolve(!1);
                    var t = ApplePaySession.canMakePaymentsWithActiveCard(this.merchantId).then(function(t) {
                        return ze.track(m, "canMakePaymentsWithActiveCard: " + t, e.strategy.identifier),
                        t
                    });
                    return this.requireActiveCard ? t : Promise.resolve(ApplePaySession.canMakePayments())
                }
            }]),
            o
        }(f["default"]);
        o["default"] = g
    })
      , qe = e(function(e, t) {
        "use strict";
        function n(e) {
            if (c = [],
            !e)
                return Promise.reject(new Error("No checkout buttons provided"));
            for (var t = new s["default"], n = l.length - 1; n >= 0; n--)
                r(l[n], e[l[n]], t);
            return Promise.all(c).then(function(e) {
                return e.filter(function(e) {
                    return e
                })
            })
        }
        function r(e, t, n) {
            var r = document.querySelectorAll(t);
            if (r.length)
                for (var o = r.length - 1; o >= 0; o--)
                    c.push(i(e, r[o], n)["catch"](function() {
                        return !1
                    }))
        }
        function i(e, t, n) {
            try {
                switch (e) {
                case "applePay":
                    var r = new u["default"](t,n);
                    return r.init();
                default:
                    throw new Error("Invalid checkout method " + e)
                }
            } catch (i) {
                return o(i),
                Promise.reject(i)
            }
        }
        function o(e) {
            console.error("Error" === e.constructor.name ? e.message : e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t["default"] = n;
        var s = a(h)
          , u = a(We)
          , l = ["applePay"]
          , c = void 0
    })
      , Ge = e(function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Symbol("targetSymbol")
          , o = Symbol("actionQueueSymbol")
          , a = Symbol("finishedLoadingSymbol")
          , s = function() {
            function e(t) {
                var i = this
                  , s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
                if (r(this, e),
                this[o] = [],
                this[a] = !1,
                s) {
                    var u = t.onload;
                    t.onload = function() {
                        u && u(),
                        i[n] = t,
                        i[a] = !0,
                        i[o].forEach(function(e) {
                            return e()
                        })
                    }
                } else
                    this[n] = t,
                    this[a] = !0
            }
            return i(e, [{
                key: "postMessage",
                value: function(e) {
                    var t = this
                      , r = function() {
                        e.digitalWalletsDialog = !0,
                        t[n].postMessage(e, t[n].location)
                    };
                    this[a] ? r() : this[o].push(function() {
                        r()
                    })
                }
            }]),
            e
        }();
        t["default"] = s
    })
      , Ye = e(function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = t.EVENTS_PREFIX = "DigitalWalletsDialog";
        t.DIALOG_CHANGE = n + ":change",
        t.DIALOG_CHANGED = n + ":changed",
        t.DIALOG_DISMISSED = n + ":dismissed",
        t.IFRAME_SHOWN = n + ":iframe_shown",
        t.IFRAME_HIDDEN = n + ":iframe_hidden",
        t.HTML_ESCAPED_CHARACTERS = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        }
    })
      , Ke = e(function(e, t) {
        "use strict";
        function n(e) {
            e[f] = new d["default"](e[h].contentWindow,!0)
        }
        function o(e, t) {
            e[h] = document.createElement("iframe"),
            e[h].src = t,
            e[h].style.position = "fixed",
            e[h].style.top = 0,
            e[h].style.left = 0,
            e[h].style.zIndex = 99999,
            e[h].style.height = 0,
            e[h].style.width = 0,
            e[h].style.border = 0,
            e[h].scrolling = "no",
            document.body.appendChild(e[h])
        }
        function s(e, t) {
            switch (t.data.type) {
            case Ye.DIALOG_CHANGED:
                g = window.pageYOffset,
                u(e[h], !0),
                l(!0),
                c(e, Ye.IFRAME_SHOWN),
                e[f].postMessage({
                    type: Ye.IFRAME_SHOWN
                });
                break;
            case Ye.DIALOG_DISMISSED:
                u(e[h], !1),
                l(!1, g),
                c(e, Ye.IFRAME_HIDDEN);
                break;
            default:
                return
            }
        }
        function u(e, t) {
            var n = t ? "100%" : "0";
            e.style.height = n,
            e.style.width = n
        }
        function l(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            document.documentElement.style.overflow = e ? "hidden" : "visible",
            document.documentElement.style.height = e ? "100%" : "auto",
            document.body.style.overflow = e ? "hidden" : "visible",
            document.body.style.height = e ? "100%" : "auto",
            window.scrollTo(0, t)
        }
        function c(e, t) {
            if (-1 !== p.indexOf(t)) {
                var n = new Event(t);
                e[h].dispatchEvent(n)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var d = a(Ge)
          , h = Symbol("iframeSymbol")
          , f = Symbol("messengerSymbol")
          , p = [Ye.IFRAME_SHOWN, Ye.IFRAME_HIDDEN]
          , m = void 0
          , g = void 0
          , y = function() {
            function e(t) {
                var i = this;
                return r(this, e),
                m || (m = this,
                o(this, t),
                n(this),
                this._messageHandler = function(e) {
                    e.data && e.data.type && e.data.digitalWalletsDialog && s(i, e)
                }
                ,
                window.addEventListener("message", this._messageHandler)),
                m
            }
            return i(e, [{
                key: "showMessage",
                value: function(e) {
                    return this[f].postMessage({
                        payload: e,
                        type: Ye.DIALOG_CHANGE
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    null !== this[h] && this[h].remove(),
                    m = null,
                    this[h] = null,
                    this[f] = null,
                    window.removeEventListener("message", this._messageHandler),
                    l(!1)
                }
            }]),
            e
        }();
        t["default"] = y
    })
      , Xe = e(function(e, t) {
        "use strict";
        function n() {
            if (!Shopify.StorefrontExpressButtons.DigitalWalletsDialog) {
                var e = document.getElementById("shopify-digital-wallet");
                e && (Shopify.StorefrontExpressButtons.DigitalWalletsDialog = new r["default"](e.getAttribute("content")))
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t["default"] = n;
        var r = a(Ke)
    });
    e(function(e, t) {
        "use strict";
        var n = a(De)
          , r = a(qe)
          , i = a(Xe)
          , o = a(Ce);
        Shopify.StorefrontExpressButtons.initialize = function() {
            r["default"]({
                applePay: ".additional-checkout-button--apple-pay"
            }),
            AmazonPaymentsPayButton(),
            Shopify.StorefrontExpressButtons.ExpressCheckout.initialize(),
            i["default"](),
            o["default"]()
        }
        ,
        n["default"](Shopify.StorefrontExpressButtons.initialize)
    })
}();
