/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _mithril = __webpack_require__(1);

	var _mithril2 = _interopRequireDefault(_mithril);

	var _Layout = __webpack_require__(6);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _Nav = __webpack_require__(8);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _Home = __webpack_require__(11);

	var _Home2 = _interopRequireDefault(_Home);

	var _Client = __webpack_require__(12);

	var _Client2 = _interopRequireDefault(_Client);

	var _ClientChildView = __webpack_require__(17);

	var _ClientChildView2 = _interopRequireDefault(_ClientChildView);

	var _Contact = __webpack_require__(19);

	var _Contact2 = _interopRequireDefault(_Contact);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// m.route.prefix("#!")

	_mithril2.default.route(document.body, '/', {
	    '/': {
	        render: function render(vnode) {
	            return [(0, _mithril2.default)(_Layout2.default, vnode.attrs, (0, _mithril2.default)(_Home2.default, vnode.attrs)), (0, _mithril2.default)(_Nav2.default, vnode.attrs)];
	        }
	    },
	    '/client/:id': {
	        render: function render(vnode) {
	            return [(0, _mithril2.default)(_Layout2.default, vnode.attrs, [(0, _mithril2.default)(_Client2.default, vnode.attrs, (0, _mithril2.default)(_ClientChildView2.default, vnode.attrs))]), (0, _mithril2.default)(_Nav2.default, vnode.attrs)];
	        }
	    },
	    '/contact': {
	        render: function render(vnode) {
	            return [(0, _mithril2.default)(_Layout2.default, vnode.attrs, (0, _mithril2.default)(_Contact2.default, vnode.attrs)), (0, _mithril2.default)(_Nav2.default, vnode.attrs)];
	        }
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, global, module) {new function() {

	function Vnode(tag, key, attrs0, children, text, dom) {
		return {tag: tag, key: key, attrs: attrs0, children: children, text: text, dom: dom, domSize: undefined, state: {}, events: undefined, instance: undefined, skip: false}
	}
	Vnode.normalize = function(node) {
		if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
		if (node != null && typeof node !== "object") return Vnode("#", undefined, undefined, node === false ? "" : node, undefined, undefined)
		return node
	}
	Vnode.normalizeChildren = function normalizeChildren(children) {
		for (var i = 0; i < children.length; i++) {
			children[i] = Vnode.normalize(children[i])
		}
		return children
	}
	var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
	var selectorCache = {}
	function hyperscript(selector) {
		if (selector == null || typeof selector !== "string" && typeof selector.view !== "function") {
			throw Error("The selector must be either a string or a component.");
		}
		if (typeof selector === "string" && selectorCache[selector] === undefined) {
			var match, tag, classes = [], attributes = {}
			while (match = selectorParser.exec(selector)) {
				var type = match[1], value = match[2]
				if (type === "" && value !== "") tag = value
				else if (type === "#") attributes.id = value
				else if (type === ".") classes.push(value)
				else if (match[3][0] === "[") {
					var attrValue = match[6]
					if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
					if (match[4] === "class") classes.push(attrValue)
					else attributes[match[4]] = attrValue || true
				}
			}
			if (classes.length > 0) attributes.className = classes.join(" ")
			selectorCache[selector] = function(attrs, children) {
				var hasAttrs = false, childList, text
				var className = attrs.className || attrs.class
				for (var key in attributes) attrs[key] = attributes[key]
				if (className !== undefined) {
					if (attrs.class !== undefined) {
						attrs.class = undefined
						attrs.className = className
					}
					if (attributes.className !== undefined) attrs.className = attributes.className + " " + className
				}
				for (var key in attrs) {
					if (key !== "key") {
						hasAttrs = true
						break
					}
				}
				if (Array.isArray(children) && children.length == 1 && children[0] != null && children[0].tag === "#") text = children[0].children
				else childList = children
				return Vnode(tag || "div", attrs.key, hasAttrs ? attrs : undefined, childList, text, undefined)
			}
		}
		var attrs, children, childrenIndex
		if (arguments[1] == null || typeof arguments[1] === "object" && arguments[1].tag === undefined && !Array.isArray(arguments[1])) {
			attrs = arguments[1]
			childrenIndex = 2
		}
		else childrenIndex = 1
		if (arguments.length === childrenIndex + 1) {
			children = Array.isArray(arguments[childrenIndex]) ? arguments[childrenIndex] : [arguments[childrenIndex]]
		}
		else {
			children = []
			for (var i = childrenIndex; i < arguments.length; i++) children.push(arguments[i])
		}
		if (typeof selector === "string") return selectorCache[selector](attrs || {}, Vnode.normalizeChildren(children))
		return Vnode(selector, attrs && attrs.key, attrs || {}, Vnode.normalizeChildren(children), undefined, undefined)
	}
	hyperscript.trust = function(html) {
		if (html == null) html = ""
		return Vnode("<", undefined, undefined, html, undefined, undefined)
	}
	hyperscript.fragment = function(attrs1, children) {
		return Vnode("[", attrs1.key, attrs1, Vnode.normalizeChildren(children), undefined, undefined)
	}
	var m = hyperscript
	/** @constructor */
	var PromisePolyfill = function(executor) {
		if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`")
		if (typeof executor !== "function") throw new TypeError("executor must be a function")
		var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
		var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
		var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
		function handler(list, shouldAbsorb) {
			return function execute(value) {
				var then
				try {
					if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
						if (value === self) throw new TypeError("Promise can't be resolved w/ itself")
						executeOnce(then.bind(value))
					}
					else {
						callAsync(function() {
							if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
							for (var i = 0; i < list.length; i++) list[i](value)
							resolvers.length = 0, rejectors.length = 0
							instance.state = shouldAbsorb
							instance.retry = function() {execute(value)}
						})
					}
				}
				catch (e) {
					rejectCurrent(e)
				}
			}
		}
		function executeOnce(then) {
			var runs = 0
			function run(fn) {
				return function(value) {
					if (runs++ > 0) return
					fn(value)
				}
			}
			var onerror = run(rejectCurrent)
			try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
		}
		executeOnce(executor)
	}
	PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
		var self = this, instance = self._instance
		function handle(callback, list, next, state) {
			list.push(function(value) {
				if (typeof callback !== "function") next(value)
				else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
			})
			if (typeof instance.retry === "function" && state === instance.state) instance.retry()
		}
		var resolveNext, rejectNext
		var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
		handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
		return promise
	}
	PromisePolyfill.prototype.catch = function(onRejection) {
		return this.then(null, onRejection)
	}
	PromisePolyfill.resolve = function(value) {
		if (value instanceof PromisePolyfill) return value
		return new PromisePolyfill(function(resolve) {resolve(value)})
	}
	PromisePolyfill.reject = function(value) {
		return new PromisePolyfill(function(resolve, reject) {reject(value)})
	}
	PromisePolyfill.all = function(list) {
		return new PromisePolyfill(function(resolve, reject) {
			var total = list.length, count = 0, values = []
			if (list.length === 0) resolve([])
			else for (var i = 0; i < list.length; i++) {
				(function(i) {
					function consume(value) {
						count++
						values[i] = value
						if (count === total) resolve(values)
					}
					if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
						list[i].then(consume, reject)
					}
					else consume(list[i])
				})(i)
			}
		})
	}
	PromisePolyfill.race = function(list) {
		return new PromisePolyfill(function(resolve, reject) {
			for (var i = 0; i < list.length; i++) {
				list[i].then(resolve, reject)
			}
		})
	}
	if (typeof window !== "undefined") {
		if (typeof window.Promise === "undefined") window.Promise = PromisePolyfill
		var PromisePolyfill = window.Promise
	} else if (typeof global !== "undefined") {
		if (typeof global.Promise === "undefined") global.Promise = PromisePolyfill
		var PromisePolyfill = global.Promise
	} else {
	}
	var buildQueryString = function(object) {
		if (Object.prototype.toString.call(object) !== "[object Object]") return ""
		var args = []
		for (var key0 in object) {
			destructure(key0, object[key0])
		}
		return args.join("&")
		function destructure(key0, value) {
			if (Array.isArray(value)) {
				for (var i = 0; i < value.length; i++) {
					destructure(key0 + "[" + i + "]", value[i])
				}
			}
			else if (Object.prototype.toString.call(value) === "[object Object]") {
				for (var i in value) {
					destructure(key0 + "[" + i + "]", value[i])
				}
			}
			else args.push(encodeURIComponent(key0) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
		}
	}
	var _8 = function($window, Promise) {
		var callbackCount = 0
		var oncompletion
		function setCompletionCallback(callback) {oncompletion = callback}
		function finalizer() {
			var count = 0
			function complete() {if (--count === 0 && typeof oncompletion === "function") oncompletion()}
			return function finalize(promise0) {
				var then0 = promise0.then
				promise0.then = function() {
					count++
					var next = then0.apply(promise0, arguments)
					next.then(complete, function(e) {
						complete()
						if (count === 0) throw e
					})
					return finalize(next)
				}
				return promise0
			}
		}
		function normalize(args, extra) {
			if (typeof args === "string") {
				var url = args
				args = extra || {}
				if (args.url == null) args.url = url
			}
			return args
		}
		function request(args, extra) {
			var finalize = finalizer()
			args = normalize(args, extra)
			var promise0 = new Promise(function(resolve, reject) {
				if (args.method == null) args.method = "GET"
				args.method = args.method.toUpperCase()
				var useBody = typeof args.useBody === "boolean" ? args.useBody : args.method !== "GET" && args.method !== "TRACE"
				if (typeof args.serialize !== "function") args.serialize = typeof FormData !== "undefined" && args.data instanceof FormData ? function(value) {return value} : JSON.stringify
				if (typeof args.deserialize !== "function") args.deserialize = deserialize
				if (typeof args.extract !== "function") args.extract = extract
				args.url = interpolate(args.url, args.data)
				if (useBody) args.data = args.serialize(args.data)
				else args.url = assemble(args.url, args.data)
				var xhr = new $window.XMLHttpRequest()
				xhr.open(args.method, args.url, typeof args.async === "boolean" ? args.async : true, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)
				if (args.serialize === JSON.stringify && useBody) {
					xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
				}
				if (args.deserialize === deserialize) {
					xhr.setRequestHeader("Accept", "application/json, text/*")
				}
				if (args.withCredentials) xhr.withCredentials = args.withCredentials
				for (var key in args.headers) if ({}.hasOwnProperty.call(args.headers, key)) {
					xhr.setRequestHeader(key, args.headers[key])
				}
				if (typeof args.config === "function") xhr = args.config(xhr, args) || xhr
				xhr.onreadystatechange = function() {
					// Don't throw errors on xhr.abort(). XMLHttpRequests ends up in a state of
					// xhr.status == 0 and xhr.readyState == 4 if aborted after open, but before completion.
					if (xhr.status && xhr.readyState === 4) {
						try {
							var response = (args.extract !== extract) ? args.extract(xhr, args) : args.deserialize(args.extract(xhr, args))
							if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
								resolve(cast(args.type, response))
							}
							else {
								var error = new Error(xhr.responseText)
								for (var key in response) error[key] = response[key]
								reject(error)
							}
						}
						catch (e) {
							reject(e)
						}
					}
				}
				if (useBody && (args.data != null)) xhr.send(args.data)
				else xhr.send()
			})
			return args.background === true ? promise0 : finalize(promise0)
		}
		function jsonp(args, extra) {
			var finalize = finalizer()
			args = normalize(args, extra)
			var promise0 = new Promise(function(resolve, reject) {
				var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
				var script = $window.document.createElement("script")
				$window[callbackName] = function(data) {
					script.parentNode.removeChild(script)
					resolve(cast(args.type, data))
					delete $window[callbackName]
				}
				script.onerror = function() {
					script.parentNode.removeChild(script)
					reject(new Error("JSONP request failed"))
					delete $window[callbackName]
				}
				if (args.data == null) args.data = {}
				args.url = interpolate(args.url, args.data)
				args.data[args.callbackKey || "callback"] = callbackName
				script.src = assemble(args.url, args.data)
				$window.document.documentElement.appendChild(script)
			})
			return args.background === true? promise0 : finalize(promise0)
		}
		function interpolate(url, data) {
			if (data == null) return url
			var tokens = url.match(/:[^\/]+/gi) || []
			for (var i = 0; i < tokens.length; i++) {
				var key = tokens[i].slice(1)
				if (data[key] != null) {
					url = url.replace(tokens[i], data[key])
				}
			}
			return url
		}
		function assemble(url, data) {
			var querystring = buildQueryString(data)
			if (querystring !== "") {
				var prefix = url.indexOf("?") < 0 ? "?" : "&"
				url += prefix + querystring
			}
			return url
		}
		function deserialize(data) {
			try {return data !== "" ? JSON.parse(data) : null}
			catch (e) {throw new Error(data)}
		}
		function extract(xhr) {return xhr.responseText}
		function cast(type0, data) {
			if (typeof type0 === "function") {
				if (Array.isArray(data)) {
					for (var i = 0; i < data.length; i++) {
						data[i] = new type0(data[i])
					}
				}
				else return new type0(data)
			}
			return data
		}
		return {request: request, jsonp: jsonp, setCompletionCallback: setCompletionCallback}
	}
	var requestService = _8(window, PromisePolyfill)
	var coreRenderer = function($window) {
		var $doc = $window.document
		var $emptyFragment = $doc.createDocumentFragment()
		var onevent
		function setEventCallback(callback) {return onevent = callback}
		//create
		function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
			for (var i = start; i < end; i++) {
				var vnode = vnodes[i]
				if (vnode != null) {
					createNode(parent, vnode, hooks, ns, nextSibling)
				}
			}
		}
		function createNode(parent, vnode, hooks, ns, nextSibling) {
			var tag = vnode.tag
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			if (typeof tag === "string") {
				switch (tag) {
					case "#": return createText(parent, vnode, nextSibling)
					case "<": return createHTML(parent, vnode, nextSibling)
					case "[": return createFragment(parent, vnode, hooks, ns, nextSibling)
					default: return createElement(parent, vnode, hooks, ns, nextSibling)
				}
			}
			else return createComponent(parent, vnode, hooks, ns, nextSibling)
		}
		function createText(parent, vnode, nextSibling) {
			vnode.dom = $doc.createTextNode(vnode.children)
			insertNode(parent, vnode.dom, nextSibling)
			return vnode.dom
		}
		function createHTML(parent, vnode, nextSibling) {
			var match1 = vnode.children.match(/^\s*?<(\w+)/im) || []
			var parent1 = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}[match1[1]] || "div"
			var temp = $doc.createElement(parent1)
			temp.innerHTML = vnode.children
			vnode.dom = temp.firstChild
			vnode.domSize = temp.childNodes.length
			var fragment = $doc.createDocumentFragment()
			var child
			while (child = temp.firstChild) {
				fragment.appendChild(child)
			}
			insertNode(parent, fragment, nextSibling)
			return fragment
		}
		function createFragment(parent, vnode, hooks, ns, nextSibling) {
			var fragment = $doc.createDocumentFragment()
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(fragment, children, 0, children.length, hooks, null, ns)
			}
			vnode.dom = fragment.firstChild
			vnode.domSize = fragment.childNodes.length
			insertNode(parent, fragment, nextSibling)
			return fragment
		}
		function createElement(parent, vnode, hooks, ns, nextSibling) {
			var tag = vnode.tag
			switch (vnode.tag) {
				case "svg": ns = "http://www.w3.org/2000/svg"; break
				case "math": ns = "http://www.w3.org/1998/Math/MathML"; break
			}
			var attrs2 = vnode.attrs
			var is = attrs2 && attrs2.is
			var element = ns ?
				is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
				is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
			vnode.dom = element
			if (attrs2 != null) {
				setAttrs(vnode, attrs2, ns)
			}
			insertNode(parent, element, nextSibling)
			if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
				setContentEditable(vnode)
			}
			else {
				if (vnode.text != null) {
					if (vnode.text !== "") element.textContent = vnode.text
					else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
				}
				if (vnode.children != null) {
					var children = vnode.children
					createNodes(element, children, 0, children.length, hooks, null, ns)
					setLateAttrs(vnode)
				}
			}
			return element
		}
		function createComponent(parent, vnode, hooks, ns, nextSibling) {
			vnode.state = Object.create(vnode.tag)
			var view = vnode.tag.view
			if (view.reentrantLock != null) return $emptyFragment
			view.reentrantLock = true
			initLifecycle(vnode.tag, vnode, hooks)
			vnode.instance = Vnode.normalize(view.call(vnode.state, vnode))
			view.reentrantLock = null
			if (vnode.instance != null) {
				if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as arguments")
				var element = createNode(parent, vnode.instance, hooks, ns, nextSibling)
				vnode.dom = vnode.instance.dom
				vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
				insertNode(parent, element, nextSibling)
				return element
			}
			else {
				vnode.domSize = 0
				return $emptyFragment
			}
		}
		//update
		function updateNodes(parent, old, vnodes, recycling, hooks, nextSibling, ns) {
			if (old === vnodes || old == null && vnodes == null) return
			else if (old == null) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, undefined)
			else if (vnodes == null) removeNodes(old, 0, old.length, vnodes)
			else {
				if (old.length === vnodes.length) {
					var isUnkeyed = false
					for (var i = 0; i < vnodes.length; i++) {
						if (vnodes[i] != null && old[i] != null) {
							isUnkeyed = vnodes[i].key == null && old[i].key == null
							break
						}
					}
					if (isUnkeyed) {
						for (var i = 0; i < old.length; i++) {
							if (old[i] === vnodes[i]) continue
							else if (old[i] == null && vnodes[i] != null) createNode(parent, vnodes[i], hooks, ns, getNextSibling(old, i + 1, nextSibling))
							else if (vnodes[i] == null) removeNodes(old, i, i + 1, vnodes)
							else updateNode(parent, old[i], vnodes[i], hooks, getNextSibling(old, i + 1, nextSibling), false, ns)
						}
						return
					}
				}
				recycling = recycling || isRecyclable(old, vnodes)
				if (recycling) old = old.concat(old.pool)
				
				var oldStart = 0, start = 0, oldEnd = old.length - 1, end = vnodes.length - 1, map
				while (oldEnd >= oldStart && end >= start) {
					var o = old[oldStart], v = vnodes[start]
					if (o === v && !recycling) oldStart++, start++
					else if (o == null) oldStart++
					else if (v == null) start++
					else if (o.key === v.key) {
						oldStart++, start++
						updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), recycling, ns)
						if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling)
					}
					else {
						var o = old[oldEnd]
						if (o === v && !recycling) oldEnd--, start++
						else if (o == null) oldEnd--
						else if (v == null) start++
						else if (o.key === v.key) {
							updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), recycling, ns)
							if (recycling || start < end) insertNode(parent, toFragment(o), getNextSibling(old, oldStart, nextSibling))
							oldEnd--, start++
						}
						else break
					}
				}
				while (oldEnd >= oldStart && end >= start) {
					var o = old[oldEnd], v = vnodes[end]
					if (o === v && !recycling) oldEnd--, end--
					else if (o == null) oldEnd--
					else if (v == null) end--
					else if (o.key === v.key) {
						updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), recycling, ns)
						if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling)
						if (o.dom != null) nextSibling = o.dom
						oldEnd--, end--
					}
					else {
						if (!map) map = getKeyMap(old, oldEnd)
						if (v != null) {
							var oldIndex = map[v.key]
							if (oldIndex != null) {
								var movable = old[oldIndex]
								updateNode(parent, movable, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), recycling, ns)
								insertNode(parent, toFragment(movable), nextSibling)
								old[oldIndex].skip = true
								if (movable.dom != null) nextSibling = movable.dom
							}
							else {
								var dom = createNode(parent, v, hooks, undefined, nextSibling)
								nextSibling = dom
							}
						}
						end--
					}
					if (end < start) break
				}
				createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
				removeNodes(old, oldStart, oldEnd + 1, vnodes)
			}
		}
		function updateNode(parent, old, vnode, hooks, nextSibling, recycling, ns) {
			var oldTag = old.tag, tag = vnode.tag
			if (oldTag === tag) {
				vnode.state = old.state
				vnode.events = old.events
				if (shouldUpdate(vnode, old)) return
				if (vnode.attrs != null) {
					updateLifecycle(vnode.attrs, vnode, hooks, recycling)
				}
				if (typeof oldTag === "string") {
					switch (oldTag) {
						case "#": updateText(old, vnode); break
						case "<": updateHTML(parent, old, vnode, nextSibling); break
						case "[": updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns); break
						default: updateElement(old, vnode, recycling, hooks, ns)
					}
				}
				else updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns)
			}
			else {
				removeNode(old, null)
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
		function updateText(old, vnode) {
			if (old.children.toString() !== vnode.children.toString()) {
				old.dom.nodeValue = vnode.children
			}
			vnode.dom = old.dom
		}
		function updateHTML(parent, old, vnode, nextSibling) {
			if (old.children !== vnode.children) {
				toFragment(old)
				createHTML(parent, vnode, nextSibling)
			}
			else vnode.dom = old.dom, vnode.domSize = old.domSize
		}
		function updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns) {
			updateNodes(parent, old.children, vnode.children, recycling, hooks, nextSibling, ns)
			var domSize = 0, children = vnode.children
			vnode.dom = null
			if (children != null) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null && child.dom != null) {
						if (vnode.dom == null) vnode.dom = child.dom
						domSize += child.domSize || 1
					}
				}
				if (domSize !== 1) vnode.domSize = domSize
			}
		}
		function updateElement(old, vnode, recycling, hooks, ns) {
			var element = vnode.dom = old.dom
			switch (vnode.tag) {
				case "svg": ns = "http://www.w3.org/2000/svg"; break
				case "math": ns = "http://www.w3.org/1998/Math/MathML"; break
			}
			if (vnode.tag === "textarea") {
				if (vnode.attrs == null) vnode.attrs = {}
				if (vnode.text != null) {
					vnode.attrs.value = vnode.text //FIXME handle0 multiple children
					vnode.text = undefined
				}
			}
			updateAttrs(vnode, old.attrs, vnode.attrs, ns)
			if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
				setContentEditable(vnode)
			}
			else if (old.text != null && vnode.text != null && vnode.text !== "") {
				if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text
			}
			else {
				if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
				if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
				updateNodes(element, old.children, vnode.children, recycling, hooks, null, ns)
			}
		}
		function updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns) {
			vnode.instance = Vnode.normalize(vnode.tag.view.call(vnode.state, vnode))
			updateLifecycle(vnode.tag, vnode, hooks, recycling)
			if (vnode.instance != null) {
				if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
				else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, recycling, ns)
				vnode.dom = vnode.instance.dom
				vnode.domSize = vnode.instance.domSize
			}
			else if (old.instance != null) {
				removeNode(old.instance, null)
				vnode.dom = undefined
				vnode.domSize = 0
			}
			else {
				vnode.dom = old.dom
				vnode.domSize = old.domSize
			}
		}
		function isRecyclable(old, vnodes) {
			if (old.pool != null && Math.abs(old.pool.length - vnodes.length) <= Math.abs(old.length - vnodes.length)) {
				var oldChildrenLength = old[0] && old[0].children && old[0].children.length || 0
				var poolChildrenLength = old.pool[0] && old.pool[0].children && old.pool[0].children.length || 0
				var vnodesChildrenLength = vnodes[0] && vnodes[0].children && vnodes[0].children.length || 0
				if (Math.abs(poolChildrenLength - vnodesChildrenLength) <= Math.abs(oldChildrenLength - vnodesChildrenLength)) {
					return true
				}
			}
			return false
		}
		function getKeyMap(vnodes, end) {
			var map = {}, i = 0
			for (var i = 0; i < end; i++) {
				var vnode = vnodes[i]
				if (vnode != null) {
					var key2 = vnode.key
					if (key2 != null) map[key2] = i
				}
			}
			return map
		}
		function toFragment(vnode) {
			var count0 = vnode.domSize
			if (count0 != null || vnode.dom == null) {
				var fragment = $doc.createDocumentFragment()
				if (count0 > 0) {
					var dom = vnode.dom
					while (--count0) fragment.appendChild(dom.nextSibling)
					fragment.insertBefore(dom, fragment.firstChild)
				}
				return fragment
			}
			else return vnode.dom
		}
		function getNextSibling(vnodes, i, nextSibling) {
			for (; i < vnodes.length; i++) {
				if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
			}
			return nextSibling
		}
		function insertNode(parent, dom, nextSibling) {
			if (nextSibling && nextSibling.parentNode) parent.insertBefore(dom, nextSibling)
			else parent.appendChild(dom)
		}
		function setContentEditable(vnode) {
			var children = vnode.children
			if (children != null && children.length === 1 && children[0].tag === "<") {
				var content = children[0].children
				if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
			}
			else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
		}
		//remove
		function removeNodes(vnodes, start, end, context) {
			for (var i = start; i < end; i++) {
				var vnode = vnodes[i]
				if (vnode != null) {
					if (vnode.skip) vnode.skip = false
					else removeNode(vnode, context)
				}
			}
		}
		function removeNode(vnode, context) {
			var expected = 1, called = 0
			if (vnode.attrs && vnode.attrs.onbeforeremove) {
				var result = vnode.attrs.onbeforeremove.call(vnode.state, vnode)
				if (result != null && typeof result.then === "function") {
					expected++
					result.then(continuation, continuation)
				}
			}
			if (typeof vnode.tag !== "string" && vnode.tag.onbeforeremove) {
				var result = vnode.tag.onbeforeremove.call(vnode.state, vnode)
				if (result != null && typeof result.then === "function") {
					expected++
					result.then(continuation, continuation)
				}
			}
			continuation()
			function continuation() {
				if (++called === expected) {
					onremove(vnode)
					if (vnode.dom) {
						var count0 = vnode.domSize || 1
						if (count0 > 1) {
							var dom = vnode.dom
							while (--count0) {
								removeNodeFromDOM(dom.nextSibling)
							}
						}
						removeNodeFromDOM(vnode.dom)
						if (context != null && vnode.domSize == null && !hasIntegrationMethods(vnode.attrs) && typeof vnode.tag === "string") { //TODO test custom elements
							if (!context.pool) context.pool = [vnode]
							else context.pool.push(vnode)
						}
					}
				}
			}
		}
		function removeNodeFromDOM(node) {
			var parent = node.parentNode
			if (parent != null) parent.removeChild(node)
		}
		function onremove(vnode) {
			if (vnode.attrs && vnode.attrs.onremove) vnode.attrs.onremove.call(vnode.state, vnode)
			if (typeof vnode.tag !== "string" && vnode.tag.onremove) vnode.tag.onremove.call(vnode.state, vnode)
			if (vnode.instance != null) onremove(vnode.instance)
			else {
				var children = vnode.children
				if (Array.isArray(children)) {
					for (var i = 0; i < children.length; i++) {
						var child = children[i]
						if (child != null) onremove(child)
					}
				}
			}
		}
		//attrs2
		function setAttrs(vnode, attrs2, ns) {
			for (var key2 in attrs2) {
				setAttr(vnode, key2, null, attrs2[key2], ns)
			}
		}
		function setAttr(vnode, key2, old, value, ns) {
			var element = vnode.dom
			if (key2 === "key" || key2 === "is" || (old === value && !isFormAttribute(vnode, key2)) && typeof value !== "object" || typeof value === "undefined" || isLifecycleMethod(key2)) return
			var nsLastIndex = key2.indexOf(":")
			if (nsLastIndex > -1 && key2.substr(0, nsLastIndex) === "xlink") {
				element.setAttributeNS("http://www.w3.org/1999/xlink", key2.slice(nsLastIndex + 1), value)
			}
			else if (key2[0] === "o" && key2[1] === "n" && typeof value === "function") updateEvent(vnode, key2, value)
			else if (key2 === "style") updateStyle(element, old, value)
			else if (key2 in element && !isAttribute(key2) && ns === undefined && !isCustomElement(vnode)) {
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if (vnode.tag === "input" && key2 === "value" && vnode.dom.value === value && vnode.dom === $doc.activeElement) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select" && key2 === "value" && vnode.dom.value === value && vnode.dom === $doc.activeElement) return
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && key2 === "value" && vnode.dom.value === value) return
				element[key2] = value
			}
			else {
				if (typeof value === "boolean") {
					if (value) element.setAttribute(key2, "")
					else element.removeAttribute(key2)
				}
				else element.setAttribute(key2 === "className" ? "class" : key2, value)
			}
		}
		function setLateAttrs(vnode) {
			var attrs2 = vnode.attrs
			if (vnode.tag === "select" && attrs2 != null) {
				if ("value" in attrs2) setAttr(vnode, "value", null, attrs2.value, undefined)
				if ("selectedIndex" in attrs2) setAttr(vnode, "selectedIndex", null, attrs2.selectedIndex, undefined)
			}
		}
		function updateAttrs(vnode, old, attrs2, ns) {
			if (attrs2 != null) {
				for (var key2 in attrs2) {
					setAttr(vnode, key2, old && old[key2], attrs2[key2], ns)
				}
			}
			if (old != null) {
				for (var key2 in old) {
					if (attrs2 == null || !(key2 in attrs2)) {
						if (key2 === "className") key2 = "class"
						if (key2[0] === "o" && key2[1] === "n" && !isLifecycleMethod(key2)) updateEvent(vnode, key2, undefined)
						else if (key2 !== "key") vnode.dom.removeAttribute(key2)
					}
				}
			}
		}
		function isFormAttribute(vnode, attr) {
			return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === $doc.activeElement
		}
		function isLifecycleMethod(attr) {
			return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
		}
		function isAttribute(attr) {
			return attr === "href" || attr === "list" || attr === "form" || attr === "width" || attr === "height"// || attr === "type"
		}
		function isCustomElement(vnode){
			return vnode.attrs.is || vnode.tag.indexOf("-") > -1
		}
		function hasIntegrationMethods(source) {
			return source != null && (source.oncreate || source.onupdate || source.onbeforeremove || source.onremove)
		}
		//style
		function updateStyle(element, old, style) {
			if (old === style) element.style.cssText = "", old = null
			if (style == null) element.style.cssText = ""
			else if (typeof style === "string") element.style.cssText = style
			else {
				if (typeof old === "string") element.style.cssText = ""
				for (var key2 in style) {
					element.style[key2] = style[key2]
				}
				if (old != null && typeof old !== "string") {
					for (var key2 in old) {
						if (!(key2 in style)) element.style[key2] = ""
					}
				}
			}
		}
		//event
		function updateEvent(vnode, key2, value) {
			var element = vnode.dom
			var callback = typeof onevent !== "function" ? value : function(e) {
				var result = value.call(element, e)
				onevent.call(element, e)
				return result
			}
			if (key2 in element) element[key2] = typeof value === "function" ? callback : null
			else {
				var eventName = key2.slice(2)
				if (vnode.events === undefined) vnode.events = {}
				if (vnode.events[key2] === callback) return
				if (vnode.events[key2] != null) element.removeEventListener(eventName, vnode.events[key2], false)
				if (typeof value === "function") {
					vnode.events[key2] = callback
					element.addEventListener(eventName, vnode.events[key2], false)
				}
			}
		}
		//lifecycle
		function initLifecycle(source, vnode, hooks) {
			if (typeof source.oninit === "function") source.oninit.call(vnode.state, vnode)
			if (typeof source.oncreate === "function") hooks.push(source.oncreate.bind(vnode.state, vnode))
		}
		function updateLifecycle(source, vnode, hooks, recycling) {
			if (recycling) initLifecycle(source, vnode, hooks)
			else if (typeof source.onupdate === "function") hooks.push(source.onupdate.bind(vnode.state, vnode))
		}
		function shouldUpdate(vnode, old) {
			var forceVnodeUpdate, forceComponentUpdate
			if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") forceVnodeUpdate = vnode.attrs.onbeforeupdate.call(vnode.state, vnode, old)
			if (typeof vnode.tag !== "string" && typeof vnode.tag.onbeforeupdate === "function") forceComponentUpdate = vnode.tag.onbeforeupdate.call(vnode.state, vnode, old)
			if (!(forceVnodeUpdate === undefined && forceComponentUpdate === undefined) && !forceVnodeUpdate && !forceComponentUpdate) {
				vnode.dom = old.dom
				vnode.domSize = old.domSize
				vnode.instance = old.instance
				return true
			}
			return false
		}
		function render(dom, vnodes) {
			if (!dom) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
			var hooks = []
			var active = $doc.activeElement
			// First time0 rendering into a node clears it out
			if (dom.vnodes == null) dom.textContent = ""
			if (!Array.isArray(vnodes)) vnodes = [vnodes]
			updateNodes(dom, dom.vnodes, Vnode.normalizeChildren(vnodes), false, hooks, null, undefined)
			dom.vnodes = vnodes
			for (var i = 0; i < hooks.length; i++) hooks[i]()
			if ($doc.activeElement !== active) active.focus()
		}
		return {render: render, setEventCallback: setEventCallback}
	}
	function throttle(callback) {
		//60fps translates to 16.6ms, round it down since setTimeout requires int
		var time = 16
		var last = 0, pending = null
		var timeout = typeof requestAnimationFrame === "function" ? requestAnimationFrame : setTimeout
		return function() {
			var now = Date.now()
			if (last === 0 || now - last >= time) {
				last = now
				callback()
			}
			else if (pending === null) {
				pending = timeout(function() {
					pending = null
					callback()
					last = Date.now()
				}, time - (now - last))
			}
		}
	}
	var _11 = function($window) {
		var renderService = coreRenderer($window)
		renderService.setEventCallback(function(e) {
			if (e.redraw !== false) redraw()
		})
		var callbacks = []
		function subscribe(key1, callback) {
			unsubscribe(key1)
			callbacks.push(key1, throttle(callback))
		}
		function unsubscribe(key1) {
			var index = callbacks.indexOf(key1)
			if (index > -1) callbacks.splice(index, 2)
		}
	    function redraw() {
	        for (var i = 1; i < callbacks.length; i += 2) {
	            callbacks[i]()
	        }
	    }
		return {subscribe: subscribe, unsubscribe: unsubscribe, redraw: redraw, render: renderService.render}
	}
	var redrawService = _11(window)
	requestService.setCompletionCallback(redrawService.redraw)
	var _16 = function(redrawService0) {
		return function(root, component) {
			if (component === null) {
				redrawService0.render(root, [])
				redrawService0.unsubscribe(root)
				return
			}
			
			if (component.view == null) throw new Error("m.mount(element, component) expects a component, not a vnode")
			
			var run0 = function() {
				redrawService0.render(root, Vnode(component))
			}
			redrawService0.subscribe(root, run0)
			redrawService0.redraw()
		}
	}
	m.mount = _16(redrawService)
	var Promise = PromisePolyfill
	var parseQueryString = function(string) {
		if (string === "" || string == null) return {}
		if (string.charAt(0) === "?") string = string.slice(1)
		var entries = string.split("&"), data0 = {}, counters = {}
		for (var i = 0; i < entries.length; i++) {
			var entry = entries[i].split("=")
			var key5 = decodeURIComponent(entry[0])
			var value = entry.length === 2 ? decodeURIComponent(entry[1]) : ""
			if (value === "true") value = true
			else if (value === "false") value = false
			var levels = key5.split(/\]\[?|\[/)
			var cursor = data0
			if (key5.indexOf("[") > -1) levels.pop()
			for (var j = 0; j < levels.length; j++) {
				var level = levels[j], nextLevel = levels[j + 1]
				var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
				var isValue = j === levels.length - 1
				if (level === "") {
					var key5 = levels.slice(0, j).join()
					if (counters[key5] == null) counters[key5] = 0
					level = counters[key5]++
				}
				if (cursor[level] == null) {
					cursor[level] = isValue ? value : isNumber ? [] : {}
				}
				cursor = cursor[level]
			}
		}
		return data0
	}
	var coreRouter = function($window) {
		var supportsPushState = typeof $window.history.pushState === "function"
		var callAsync0 = typeof setImmediate === "function" ? setImmediate : setTimeout
		function normalize1(fragment0) {
			var data = $window.location[fragment0].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
			if (fragment0 === "pathname" && data[0] !== "/") data = "/" + data
			return data
		}
		var asyncId
		function debounceAsync(callback0) {
			return function() {
				if (asyncId != null) return
				asyncId = callAsync0(function() {
					asyncId = null
					callback0()
				})
			}
		}
		function parsePath(path, queryData, hashData) {
			var queryIndex = path.indexOf("?")
			var hashIndex = path.indexOf("#")
			var pathEnd = queryIndex > -1 ? queryIndex : hashIndex > -1 ? hashIndex : path.length
			if (queryIndex > -1) {
				var queryEnd = hashIndex > -1 ? hashIndex : path.length
				var queryParams = parseQueryString(path.slice(queryIndex + 1, queryEnd))
				for (var key4 in queryParams) queryData[key4] = queryParams[key4]
			}
			if (hashIndex > -1) {
				var hashParams = parseQueryString(path.slice(hashIndex + 1))
				for (var key4 in hashParams) hashData[key4] = hashParams[key4]
			}
			return path.slice(0, pathEnd)
		}
		var router = {prefix: "#!"}
		router.getPath = function() {
			var type2 = router.prefix.charAt(0)
			switch (type2) {
				case "#": return normalize1("hash").slice(router.prefix.length)
				case "?": return normalize1("search").slice(router.prefix.length) + normalize1("hash")
				default: return normalize1("pathname").slice(router.prefix.length) + normalize1("search") + normalize1("hash")
			}
		}
		router.setPath = function(path, data, options) {
			var queryData = {}, hashData = {}
			path = parsePath(path, queryData, hashData)
			if (data != null) {
				for (var key4 in data) queryData[key4] = data[key4]
				path = path.replace(/:([^\/]+)/g, function(match2, token) {
					delete queryData[token]
					return data[token]
				})
			}
			var query = buildQueryString(queryData)
			if (query) path += "?" + query
			var hash = buildQueryString(hashData)
			if (hash) path += "#" + hash
			if (supportsPushState) {
				var state = options ? options.state : null
				var title = options ? options.title : null
				$window.onpopstate()
				if (options && options.replace) $window.history.replaceState(state, title, router.prefix + path)
				else $window.history.pushState(state, title, router.prefix + path)
			}
			else $window.location.href = router.prefix + path
		}
		router.defineRoutes = function(routes, resolve, reject) {
			function resolveRoute() {
				var path = router.getPath()
				var params = {}
				var pathname = parsePath(path, params, params)
				var state = $window.history.state
				if (state != null) {
					for (var k in state) params[k] = state[k]
				}
				for (var route0 in routes) {
					var matcher = new RegExp("^" + route0.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$")
					if (matcher.test(pathname)) {
						pathname.replace(matcher, function() {
							var keys = route0.match(/:[^\/]+/g) || []
							var values = [].slice.call(arguments, 1, -2)
							for (var i = 0; i < keys.length; i++) {
								params[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i])
							}
							resolve(routes[route0], params, path, route0)
						})
						return
					}
				}
				reject(path, params)
			}
			if (supportsPushState) $window.onpopstate = debounceAsync(resolveRoute)
			else if (router.prefix.charAt(0) === "#") $window.onhashchange = resolveRoute
			resolveRoute()
		}
		return router
	}
	var _20 = function($window, redrawService0) {
		var routeService = coreRouter($window)
		var identity = function(v) {return v}
		var render1, component, attrs3, currentPath, lastUpdate
		var route = function(root, defaultRoute, routes) {
			if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
			var run1 = function() {
				if (render1 != null) redrawService0.render(root, render1(Vnode(component, attrs3.key, attrs3)))
			}
			var bail = function(path) {
				if (path !== defaultRoute) routeService.setPath(defaultRoute, null, {replace: true})
				else throw new Error("Could not resolve default route " + defaultRoute)
			}
			routeService.defineRoutes(routes, function(payload, params, path) {
				var update = lastUpdate = function(routeResolver, comp) {
					if (update !== lastUpdate) return
					component = comp != null && typeof comp.view === "function" ? comp : "div", attrs3 = params, currentPath = path, lastUpdate = null
					render1 = (routeResolver.render || identity).bind(routeResolver)
					run1()
				}
				if (payload.view) update({}, payload)
				else {
					if (payload.onmatch) {
						Promise.resolve(payload.onmatch(params, path)).then(function(resolved) {
							update(payload, resolved)
						}, bail)
					}
					else update(payload, "div")
				}
			}, bail)
			redrawService0.subscribe(root, run1)
		}
		route.set = function(path, data, options) {
			if (lastUpdate != null) options = {replace: true}
			lastUpdate = null
			routeService.setPath(path, data, options)
		}
		route.get = function() {return currentPath}
		route.prefix = function(prefix0) {routeService.prefix = prefix0}
		route.link = function(vnode1) {
			vnode1.dom.setAttribute("href", routeService.prefix + vnode1.attrs.href)
			vnode1.dom.onclick = function(e) {
				if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return
				e.preventDefault()
				e.redraw = false
				var href = this.getAttribute("href")
				if (href.indexOf(routeService.prefix) === 0) href = href.slice(routeService.prefix.length)
				route.set(href, undefined, undefined)
			}
		}
		route.param = function(key3) {
			if(typeof attrs3 !== "undefined" && typeof key3 !== "undefined") return attrs3[key3]
			return attrs3
		}
		return route
	}
	m.route = _20(window, redrawService)
	m.withAttr = function(attrName, callback1, context) {
		return function(e) {
			callback1.call(context || this, attrName in e.currentTarget ? e.currentTarget[attrName] : e.currentTarget.getAttribute(attrName))
		}
	}
	var _28 = coreRenderer(window)
	m.render = _28.render
	m.redraw = redrawService.redraw
	m.request = requestService.request
	m.jsonp = requestService.jsonp
	m.parseQueryString = parseQueryString
	m.buildQueryString = buildQueryString
	m.version = "1.0.1"
	m.vnode = Vnode
	if (true) module["exports"] = m
	else window.m = m
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).setImmediate, (function() { return this; }()), __webpack_require__(5)(module)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// setimmediate attaches itself to the global object
	__webpack_require__(3);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";

	    if (global.setImmediate) {
	        return;
	    }

	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;

	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }

	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }

	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }

	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }

	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }

	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }

	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };

	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }

	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }

	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };

	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }

	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }

	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }

	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();

	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();

	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();

	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();

	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }

	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(4)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mithril = __webpack_require__(1);

	var _mithril2 = _interopRequireDefault(_mithril);

	var _ClientModel = __webpack_require__(7);

	var _ClientModel2 = _interopRequireDefault(_ClientModel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Layout = function () {
	    function Layout() {
	        _classCallCheck(this, Layout);
	    }

	    _createClass(Layout, null, [{
	        key: 'oninit',
	        value: function oninit(vnode) {
	            var _this = this;

	            // Load client data
	            _ClientModel2.default.loadList(vnode.attrs.id);

	            window.addEventListener("navopen", function () {
	                _this.onnavopen(vnode);
	            });

	            window.addEventListener("navclose", function () {
	                _this.onnavclose(vnode);
	            });
	        }
	    }, {
	        key: 'onnavopen',
	        value: function onnavopen(vnode) {
	            vnode.dom.classList.add('layout--nav-open');
	            vnode.dom.classList.remove('layout--nav-closed');
	        }
	    }, {
	        key: 'onnavclose',
	        value: function onnavclose(vnode) {
	            vnode.dom.classList.add('layout--nav-closed');
	            vnode.dom.classList.remove('layout--nav-open');
	        }
	    }, {
	        key: 'onupdate',
	        value: function onupdate(vnode) {
	            setTimeout(function () {
	                vnode.dom.scrollTop = 0;
	            }, 500);
	        }
	    }, {
	        key: 'view',
	        value: function view(vnode) {
	            return (0, _mithril2.default)(
	                'main',
	                { id: 'Layout', 'class': 'layout' },
	                vnode.children
	            );
	        }
	    }]);

	    return Layout;
	}();

	module.exports = Layout;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mithril = __webpack_require__(1);

	var _mithril2 = _interopRequireDefault(_mithril);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ClientsModel = function () {
	    function ClientsModel() {
	        _classCallCheck(this, ClientsModel);
	    }

	    _createClass(ClientsModel, null, [{
	        key: 'loadList',

	        // Load client data JSON file
	        value: function loadList(id) {
	            this.list = [];
	            this.currentClient = [];
	            this.nextClient = [];
	            this.prevClient = [];
	            this.currentIndex = 0;
	            this.prevIndex = 0;
	            this.nextIndex = 0;
	            this.id = '';

	            return _mithril2.default.request({
	                method: "GET",
	                url: "/assets/data/projects.json"
	            }).then(function (result) {
	                ClientsModel.list = result;
	                if (id === undefined) {
	                    ClientsModel.setClientByIndex(0);
	                } else {
	                    ClientsModel.setCurrentClientId(id);
	                    ClientsModel.setClientData();
	                }
	            });
	        }

	        // Defines the client slug

	    }, {
	        key: 'setCurrentClientId',
	        value: function setCurrentClientId(id) {
	            this.id = id;
	        }

	        // Defines previous, current, and next client data into separate objects based on global id

	    }, {
	        key: 'setClientData',
	        value: function setClientData() {
	            var clientData = this.getClientById(this.id);
	            this.currentIndex = clientData.index;
	            this.currentClient = clientData.client;
	            this.setPrevClient();
	            this.setNextClient();
	        }

	        // Defines previous, current, and next client data into separate objects based on @param index

	    }, {
	        key: 'setClientByIndex',
	        value: function setClientByIndex(index) {
	            this.currentIndex = index;
	            this.currentClient = this.list[0];
	            this.setPrevClient();
	            this.setNextClient();
	        }
	    }, {
	        key: 'setNextClient',
	        value: function setNextClient() {
	            this.nextIndex = this.currentIndex == this.list.length - 1 ? 0 : this.currentIndex + 1;
	            this.nextClient = this.list[this.nextIndex];
	        }
	    }, {
	        key: 'setPrevClient',
	        value: function setPrevClient() {
	            this.prevIndex = this.currentIndex === 0 ? this.list.length - 1 : this.currentIndex - 1;
	            this.prevClient = this.list[this.prevIndex];
	        }

	        // Returns current client based on client slug @param id

	    }, {
	        key: 'getClientById',
	        value: function getClientById(id) {
	            var index = 0;
	            for (var i in ClientsModel.list) {
	                var client = ClientsModel.list[i];
	                if (client.slug == id) return { client: client, index: index };

	                index++;
	            }
	        }
	    }]);

	    return ClientsModel;
	}();

	module.exports = ClientsModel;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mithril = __webpack_require__(1);

	var _mithril2 = _interopRequireDefault(_mithril);

	var _App = __webpack_require__(9);

	var _App2 = _interopRequireDefault(_App);

	var _ClientModel = __webpack_require__(7);

	var _ClientModel2 = _interopRequireDefault(_ClientModel);

	var _NavItem = __webpack_require__(10);

	var _NavItem2 = _interopRequireDefault(_NavItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Nav = function () {
	    function Nav() {
	        _classCallCheck(this, Nav);
	    }

	    _createClass(Nav, null, [{
	        key: 'oninit',
	        value: function oninit(vnode) {
	            vnode.state.nav = false;
	        }
	    }, {
	        key: 'onupdate',
	        value: function onupdate(vnode) {
	            // Open or close nav
	            if (vnode.state.nav) this.navToggle(vnode);
	        }
	    }, {
	        key: 'view',
	        value: function view(vnode) {
	            var _this = this;

	            return (0, _mithril2.default)(
	                'nav',
	                { id: 'nav', 'class': 'nav layout__nav' },
	                (0, _mithril2.default)(
	                    'button',
	                    { 'class': 'menu', onclick: function onclick(e) {
	                            e.redraw = false;_this.navToggle(vnode);
	                        } },
	                    (0, _mithril2.default)('i', { 'class': 'fa fa-chevron-circle-down' })
	                ),
	                (0, _mithril2.default)(
	                    'ul',
	                    { 'class': 'nav__list-main' },
	                    (0, _mithril2.default)(_NavItem2.default, { type: 'link', route: '/', icon: 'fa-home', title: 'Home' }),
	                    (0, _mithril2.default)(_NavItem2.default, { type: 'spacer', 'spacer-type': 'bullet' }),
	                    (0, _mithril2.default)(_NavItem2.default, { type: 'link', route: '/client/' + _ClientModel2.default.currentClient.slug, icon: 'fa-cloud', title: 'Projects' }),
	                    (0, _mithril2.default)(_NavItem2.default, { type: 'spacer', 'spacer-type': 'bullet' }),
	                    (0, _mithril2.default)(_NavItem2.default, { type: 'link', route: '/contact/', icon: 'fa-address-card', title: 'Contact' })
	                )
	            );
	        }
	    }, {
	        key: 'navToggle',
	        value: function navToggle(vnode) {
	            if (!vnode.state.nav) {
	                vnode.dom.classList.add('nav--open');
	                vnode.state.nav = true;
	                _App2.default.sendUpdate(new Event('navopen'));
	            } else {
	                vnode.dom.classList.remove('nav--open');
	                vnode.state.nav = false;
	                _App2.default.sendUpdate(new Event('navclose'));
	            }
	        }
	    }]);

	    return Nav;
	}();

	module.exports = Nav;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var App = function () {
	    function App() {
	        _classCallCheck(this, App);
	    }

	    _createClass(App, null, [{
	        key: "sendUpdate",

	        // Dispatch event helper
	        value: function sendUpdate(e) {
	            window.dispatchEvent(e);
	        }
	    }]);

	    return App;
	}();

	module.exports = App;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _mithril = __webpack_require__(1);

	var _mithril2 = _interopRequireDefault(_mithril);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavItem = {
	    onupdate: function onupdate(vnode) {
	        if (vnode.attrs.type == 'link') {
	            // Add link class
	            vnode.dom.classList.add('nav__list-main__list-item');

	            // Set active and inactive classes
	            if (_mithril2.default.route.get() == vnode.attrs.route) vnode.dom.classList.add('nav__list-main__list-item-active');else vnode.dom.classList.remove('nav__list-main__list-item-active');
	        } else if (vnode.attrs.type == 'spacer') {
	            // Add spacer class
	            vnode.dom.classList.add('nav__list-main__bullet');
	        }
	    },
	    view: function view(_ref) {
	        var attrs = _ref.attrs;

	        return (0, _mithril2.default)(
	            'li',
	            null,
	            attrs.type == 'link' && (0, _mithril2.default)(
	                'a',
	                { href: attrs.route, oncreate: _mithril2.default.route.link },
	                (0, _mithril2.default)('i', { 'class': "fa " + attrs.icon + " fa-5x", 'aria-hidden': 'true' }),
	                attrs.title
	            ),
	            attrs.type == 'spacer' && (0, _mithril2.default)(
	                'span',
	                null,
	                '\u2022'
	            )
	        );
	    }
	};

	module.exports = NavItem;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mithril = __webpack_require__(1);

	var _mithril2 = _interopRequireDefault(_mithril);

	var _App = __webpack_require__(9);

	var _App2 = _interopRequireDefault(_App);

	var _ClientModel = __webpack_require__(7);

	var _ClientModel2 = _interopRequireDefault(_ClientModel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeView = function () {
	    function HomeView() {
	        _classCallCheck(this, HomeView);
	    }

	    _createClass(HomeView, null, [{
	        key: 'oncreate',
	        value: function oncreate(vnode) {
	            // Wait for transition in animation to complere (.5s) and remove the class
	            setTimeout(function () {
	                vnode.dom.classList.remove("content-container--transition-in--next");
	            }, 500);
	        }
	    }, {
	        key: 'onbeforeremove',
	        value: function onbeforeremove(vnode) {
	            // Add transition out class to dom container
	            vnode.dom.classList.add("content-container--transition-out--next");

	            // This hold's the mithril lifecycle until the transition animation complextes
	            // On complete the onremove method is called and this view is destroyed
	            return new Promise(function (resolve) {
	                setTimeout(resolve, 500);
	            });
	        }
	    }, {
	        key: 'view',
	        value: function view(vnode) {
	            return (0, _mithril2.default)(
	                'section',
	                { id: 'content-container', 'class': 'home content-container content-container--transition-in--next' },
	                (0, _mithril2.default)(
	                    'div',
	                    { id: 'content-container__home', 'class': 'content-container__home' },
	                    (0, _mithril2.default)(
	                        'div',
	                        { 'class': 'content-container__home__title' },
	                        (0, _mithril2.default)(
	                            'h2',
	                            { 'class': 'content-container__home__title__name content-container__home__title--text-shadow--size-8' },
	                            'CHUCK MASUCCI'
	                        ),
	                        (0, _mithril2.default)(
	                            'h3',
	                            { 'class': 'content-container__home__title__description content-container__home__title--text-shadow--size-3' },
	                            'TECHNICAL DIRECTOR / DEVELOPER'
	                        ),
	                        Object.keys(_ClientModel2.default.currentClient).length > 0 && (0, _mithril2.default)(
	                            'a',
	                            { 'class': 'btn btn--green btn--box-shadow', href: "/client/" + _ClientModel2.default.currentClient.slug, oncreate: _mithril2.default.route.link },
	                            (0, _mithril2.default)(
	                                'span',
	                                { 'class': 'btn__copy' },
	                                'VIEW WORK'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return HomeView;
	}();

	module.exports = HomeView;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mithril = __webpack_require__(1);

	var _mithril2 = _interopRequireDefault(_mithril);

	var _App = __webpack_require__(9);

	var _App2 = _interopRequireDefault(_App);

	var _ClientModel = __webpack_require__(7);

	var _ClientModel2 = _interopRequireDefault(_ClientModel);

	var _ClientButton = __webpack_require__(13);

	var _ClientButton2 = _interopRequireDefault(_ClientButton);

	var _SwipeOverlay = __webpack_require__(14);

	var _SwipeOverlay2 = _interopRequireDefault(_SwipeOverlay);

	var _stream = __webpack_require__(15);

	var _stream2 = _interopRequireDefault(_stream);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ClientView = function () {
	    function ClientView() {
	        _classCallCheck(this, ClientView);
	    }

	    _createClass(ClientView, null, [{
	        key: 'oninit',
	        value: function oninit(vnode) {
	            // Inform the client model of the current project based on the url slug
	            _ClientModel2.default.setCurrentClientId(vnode.attrs.id);

	            this.direction = (0, _stream2.default)('next');
	        }
	    }, {
	        key: 'onbeforeupdate',
	        value: function onbeforeupdate(vnode) {
	            // When url updates we update the client model with the current project based on the url slug
	            _ClientModel2.default.setCurrentClientId(vnode.attrs.id);

	            // Update the client with new data based on the new project
	            _ClientModel2.default.setClientData();

	            // Sets the direction in attrs object so ClientChildView recieves the direction
	            vnode.attrs.navDirection = this.direction();
	        }
	    }, {
	        key: 'onupdate',
	        value: function onupdate(vnode) {
	            var _this = this;

	            // Initialize Hammer for touch events
	            this.clientTouch = new Hammer(vnode.dom);
	            this.clientTouch.on("swipe", function (ev) {
	                if (ev.direction == Hammer.DIRECTION_LEFT) {
	                    _this.direction('next');
	                    _this.changeClient('next');
	                } else if (ev.direction == Hammer.DIRECTION_RIGHT) {
	                    _this.direction('prev');
	                    _this.changeClient('prev');
	                }
	            });
	        }
	    }, {
	        key: 'onbeforeremove',
	        value: function onbeforeremove(vnode) {
	            // Inform the App model the view is about to be removed and transition out
	            vnode.dom.classList.add("content-container--transition-out--next");

	            return new Promise(function (resolve) {
	                setTimeout(resolve, 500);
	            });
	        }
	    }, {
	        key: 'view',
	        value: function view(vnode) {
	            return (0, _mithril2.default)(
	                'section',
	                { id: 'content-container', 'class': 'content-container client-container' },
	                (0, _mithril2.default)(_SwipeOverlay2.default, { copy: 'SWIPE TO NAVIGATE' }),
	                (0, _mithril2.default)(_ClientButton2.default, { direction: 'prev', setdirection: this.direction, changeClient: this.changeClient }),
	                (0, _mithril2.default)(_ClientButton2.default, { direction: 'next', setdirection: this.direction, changeClient: this.changeClient }),
	                vnode.children
	            );
	        }
	    }, {
	        key: 'changeClient',
	        value: function changeClient(direction) {
	            if (direction == 'prev') _mithril2.default.route.set('/client/' + _ClientModel2.default.prevClient.slug);else if (direction == 'next') _mithril2.default.route.set('/client/' + _ClientModel2.default.nextClient.slug);

	            return false;
	        }
	    }]);

	    return ClientView;
	}();

	module.exports = ClientView;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _mithril = __webpack_require__(1);

	var _mithril2 = _interopRequireDefault(_mithril);

	var _ClientModel = __webpack_require__(7);

	var _ClientModel2 = _interopRequireDefault(_ClientModel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ClientButtonView = {
	    oncreate: function oncreate(vnode) {
	        setTimeout(function () {
	            vnode.dom.classList.add('client-container__toggle--transition-in');
	        }, 500);
	    },
	    view: function view(vnode) {
	        var _this = this;

	        return (0, _mithril2.default)(
	            'a',
	            { onclick: function onclick(e) {
	                    return _this.changeClient(e, vnode.attrs.changeClient, vnode.attrs.setdirection, vnode.attrs.direction);
	                }, href: vnode.attrs.direction == 'prev' && "/client/" + _ClientModel2.default.prevClient.slug || vnode.attrs.direction == 'next' && '/client/' + _ClientModel2.default.nextClient.slug, oncreate: _mithril2.default.route.link, 'class': "client-container__toggle client-container__toggle-shadow--size-8 client-container__" + vnode.attrs.direction },
	            (0, _mithril2.default)(
	                'div',
	                { 'class': 'client-container__toggle__arrow' },
	                (0, _mithril2.default)(
	                    'svg',
	                    { xmlns: 'http://www.w3.org/2000/svg', width: '21', height: '25', viewBox: '0 0 21 25' },
	                    vnode.attrs.direction == 'prev' && (0, _mithril2.default)('path', { d: 'M13.8 25H21L7.2 12.5 21 0H13.8L0 12.5Z', 'stroke-width': '0.3' }),
	                    vnode.attrs.direction == 'next' && (0, _mithril2.default)('path', { d: 'M7.2 0H0L13.8 12.5 0 25H7.2L21 12.5Z', 'stroke-width': '0.3' })
	                )
	            )
	        );
	    },
	    changeClient: function changeClient(e, setdirection, _changeClient, direction) {
	        // TODO Get back/prev browser buttons to work with prev direction
	        // TODO Clicking fast issues

	        e.redraw = false;
	        e.preventDefault = true;

	        setdirection(direction);
	        _changeClient(direction);

	        // Prevents href from firing
	        return false;
	    }
	};

	module.exports = ClientButtonView;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _mithril = __webpack_require__(1);

	var _mithril2 = _interopRequireDefault(_mithril);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SwipeOverlay = {
	    view: function view(_ref) {
	        var attrs = _ref.attrs;

	        return (0, _mithril2.default)(
	            "div",
	            { "class": "client-container__overlay-swipe" },
	            (0, _mithril2.default)(
	                "span",
	                null,
	                attrs.copy
	            )
	        );
	    }
	};

	module.exports = SwipeOverlay;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16)

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict"

	var guid = 0, HALT = {}
	function createStream() {
		function stream() {
			if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0])
			return stream._state.value
		}
		initStream(stream)

		if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0])

		return stream
	}
	function initStream(stream) {
		stream.constructor = createStream
		stream._state = {id: guid++, value: undefined, state: 0, derive: undefined, recover: undefined, deps: {}, parents: [], endStream: undefined}
		stream.map = stream["fantasy-land/map"] = map, stream["fantasy-land/ap"] = ap, stream["fantasy-land/of"] = createStream
		stream.valueOf = valueOf, stream.toJSON = toJSON, stream.toString = valueOf

		Object.defineProperties(stream, {
			end: {get: function() {
				if (!stream._state.endStream) {
					var endStream = createStream()
					endStream.map(function(value) {
						if (value === true) unregisterStream(stream), unregisterStream(endStream)
						return value
					})
					stream._state.endStream = endStream
				}
				return stream._state.endStream
			}}
		})
	}
	function updateStream(stream, value) {
		updateState(stream, value)
		for (var id in stream._state.deps) updateDependency(stream._state.deps[id], false)
		finalize(stream)
	}
	function updateState(stream, value) {
		stream._state.value = value
		stream._state.changed = true
		if (stream._state.state !== 2) stream._state.state = 1
	}
	function updateDependency(stream, mustSync) {
		var state = stream._state, parents = state.parents
		if (parents.length > 0 && parents.every(active) && (mustSync || parents.some(changed))) {
			var value = stream._state.derive()
			if (value === HALT) return false
			updateState(stream, value)
		}
	}
	function finalize(stream) {
		stream._state.changed = false
		for (var id in stream._state.deps) stream._state.deps[id]._state.changed = false
	}

	function combine(fn, streams) {
		if (!streams.every(valid)) throw new Error("Ensure that each item passed to m.prop.combine/m.prop.merge is a stream")
		return initDependency(createStream(), streams, function() {
			return fn.apply(this, streams.concat([streams.filter(changed)]))
		})
	}

	function initDependency(dep, streams, derive) {
		var state = dep._state
		state.derive = derive
		state.parents = streams.filter(notEnded)

		registerDependency(dep, state.parents)
		updateDependency(dep, true)

		return dep
	}
	function registerDependency(stream, parents) {
		for (var i = 0; i < parents.length; i++) {
			parents[i]._state.deps[stream._state.id] = stream
			registerDependency(stream, parents[i]._state.parents)
		}
	}
	function unregisterStream(stream) {
		for (var i = 0; i < stream._state.parents.length; i++) {
			var parent = stream._state.parents[i]
			delete parent._state.deps[stream._state.id]
		}
		for (var id in stream._state.deps) {
			var dependent = stream._state.deps[id]
			var index = dependent._state.parents.indexOf(stream)
			if (index > -1) dependent._state.parents.splice(index, 1)
		}
		stream._state.state = 2 //ended
		stream._state.deps = {}
	}

	function map(fn) {return combine(function(stream) {return fn(stream())}, [this])}
	function ap(stream) {return combine(function(s1, s2) {return s1()(s2())}, [stream, this])}
	function valueOf() {return this._state.value}
	function toJSON() {return this._state.value != null && typeof this._state.value.toJSON === "function" ? this._state.value.toJSON() : this._state.value}

	function valid(stream) {return stream._state }
	function active(stream) {return stream._state.state === 1}
	function changed(stream) {return stream._state.changed}
	function notEnded(stream) {return stream._state.state !== 2}

	function merge(streams) {
		return combine(function() {
			return streams.map(function(s) {return s()})
		}, streams)
	}
	createStream["fantasy-land/of"] = createStream
	createStream.merge = merge
	createStream.combine = combine
	createStream.HALT = HALT

	if (true) module["exports"] = createStream
	else window.stream = createStream

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mithril = __webpack_require__(1);

	var _mithril2 = _interopRequireDefault(_mithril);

	var _App = __webpack_require__(9);

	var _App2 = _interopRequireDefault(_App);

	var _ClientAttrView = __webpack_require__(18);

	var _ClientAttrView2 = _interopRequireDefault(_ClientAttrView);

	var _ClientModel = __webpack_require__(7);

	var _ClientModel2 = _interopRequireDefault(_ClientModel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ClientChildView = function () {
	    function ClientChildView() {
	        _classCallCheck(this, ClientChildView);
	    }

	    _createClass(ClientChildView, null, [{
	        key: 'oninit',
	        value: function oninit() {
	            // Set this to false until onupdate completes. This is used to allow or disallow onupdate from firing to accomodate transitions between clients
	            this.clientSet = false;
	        }
	    }, {
	        key: 'oncreate',
	        value: function oncreate(vnode) {
	            // Transition in
	            if (vnode.attrs.navDirection == 'next') {
	                vnode.dom.classList.remove('content-container--transition-out--next');
	                vnode.dom.classList.add('content-container--transition-in--next');
	            }

	            _mithril2.default.redraw();
	        }
	    }, {
	        key: 'onbeforeupdate',
	        value: function onbeforeupdate(vnode) {
	            // Set navDirection to component state
	            this.navDirection = vnode.attrs.navDirection;

	            // Checks to see if the client has finished transitioning in and is ready to be transitioned out
	            if (this.clientSet) {
	                if (this.navDirection == 'next') {
	                    this.container.classList.add('content-container--transition-out--next');
	                    this.container.classList.remove('content-container--transition-in--next');
	                } else if (this.navDirection == 'prev') {
	                    this.container.classList.add('content-container--transition-out--prev');
	                    this.container.classList.remove('content-container--transition-in--prev');
	                }

	                // Pauses the redraw for .5s to allow the transitions to finish
	                setTimeout(_mithril2.default.redraw, 500);

	                // Resets back to false so this conditional is bypassed when m.redraw is called
	                this.clientSet = false;

	                // This stops onupdate from being fired allowing the timeout to complete
	                return false;
	            }
	        }
	    }, {
	        key: 'onupdate',
	        value: function onupdate(vnode) {
	            var _this = this;

	            // Let's load the image dynamically so we can use the img's onload callback to properly animate the image.
	            // This will stop the new client from animating in before the image is loaded and on the dom
	            var clientImg = document.getElementById('client-container__clients__content__hero');
	            clientImg.src = _ClientModel2.default.currentClient.images.hero;
	            clientImg.onload = function () {
	                // Show the dom before we transition in
	                vnode.dom.style.display = 'block';

	                // Transition in content
	                if (_this.navDirection == 'next') {
	                    vnode.dom.classList.add('content-container--transition-in--next');
	                    vnode.dom.classList.remove('content-container--transition-out--next');
	                } else if (_this.navDirection == 'prev') {
	                    vnode.dom.classList.add('content-container--transition-in--prev');
	                    vnode.dom.classList.remove('content-container--transition-out--prev');
	                }

	                setTimeout(function () {
	                    vnode.dom.classList.remove('content-container--transition-in--next');
	                    vnode.dom.classList.remove('content-container--transition-in--prev');
	                }, 500);

	                // Get the container dom element
	                // it will be used during transition out since onbeforeupdate's vnode does not contain a dom
	                _this.container = vnode.dom;

	                // Set to true to allow the next client to transition in
	                _this.clientSet = true;
	            };
	        }
	    }, {
	        key: 'view',
	        value: function view(vnode) {
	            return (0, _mithril2.default)(
	                'div',
	                { id: 'client-container__clients', 'class': 'client-container__clients' },
	                'title' in _ClientModel2.default.currentClient && (0, _mithril2.default)(
	                    'div',
	                    { 'class': 'client-container__clients__content' },
	                    (0, _mithril2.default)(
	                        'span',
	                        null,
	                        (0, _mithril2.default)('img', { src: '', id: 'client-container__clients__content__hero', 'class': 'client-container__clients__content__hero' }),
	                        (0, _mithril2.default)(
	                            'div',
	                            { 'class': 'client-container__clients__content__title client-container__clients__content__title--shadow-size-8' },
	                            _ClientModel2.default.currentClient.title
	                        )
	                    ),
	                    (0, _mithril2.default)(
	                        'div',
	                        { 'class': 'client-container__clients__content__attributes' },
	                        (0, _mithril2.default)(_ClientAttrView2.default, { description: '// Agency', copy: _ClientModel2.default.currentClient.agency, bgcolor: _ClientModel2.default.currentClient.color }),
	                        (0, _mithril2.default)(_ClientAttrView2.default, { description: '// Project(s)', copy: _ClientModel2.default.currentClient.project, bgcolor: _ClientModel2.default.currentClient.color }),
	                        (0, _mithril2.default)(_ClientAttrView2.default, { description: '// Role', copy: _ClientModel2.default.currentClient.role, bgcolor: _ClientModel2.default.currentClient.color }),
	                        (0, _mithril2.default)(_ClientAttrView2.default, { description: '// Technologies', copy: _ClientModel2.default.currentClient.technologies, bgcolor: _ClientModel2.default.currentClient.color })
	                    )
	                )
	            );
	        }
	    }]);

	    return ClientChildView;
	}();

	module.exports = ClientChildView;

	// "technologies": "HTML & CSS (Sass, Compass, Responsive Design)\r\nJavascript (Backbone, Raphael, Require, Three, Google Maps API, TweenMax)\r\nSVG",

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _mithril = __webpack_require__(1);

	var _mithril2 = _interopRequireDefault(_mithril);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ClientAttr = {
	    view: function view(_ref) {
	        var attrs = _ref.attrs;

	        return (0, _mithril2.default)(
	            "div",
	            { "class": "client-container__clients__content__attributes__container client-container__clients__content__attributes__container--box-shadow", style: "background-color:" + attrs.bgcolor },
	            (0, _mithril2.default)(
	                "p",
	                { "class": "client-container__clients__content__attributes__container__desc" },
	                attrs.description
	            ),
	            (0, _mithril2.default)(
	                "p",
	                { "class": "client-container__clients__content__attributes__container__copy" },
	                attrs.copy
	            )
	        );
	    }
	};

	module.exports = ClientAttr;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mithril = __webpack_require__(1);

	var _mithril2 = _interopRequireDefault(_mithril);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ContactView = function () {
	    function ContactView() {
	        _classCallCheck(this, ContactView);
	    }

	    _createClass(ContactView, null, [{
	        key: "oncreate",
	        value: function oncreate(vnode) {
	            // Wait for transition in animation to complere (.5s) and remove the class
	            setTimeout(function () {
	                vnode.dom.classList.remove("content-container--transition-in--next");
	            }, 500);
	        }
	    }, {
	        key: "onbeforeremove",
	        value: function onbeforeremove(vnode) {
	            // Add transition out class to dom container
	            vnode.dom.classList.add("content-container--transition-out--next");

	            // This hold's the mithril lifecycle until the transition animation complextes
	            // On complete the onremove method is called and this view is destroyed
	            return new Promise(function (resolve) {
	                setTimeout(resolve, 500);
	            });
	        }
	    }, {
	        key: "view",
	        value: function view() {
	            return (0, _mithril2.default)(
	                "section",
	                { id: "content-container", "class": "content-container contact-container content-container--transition-in--next" },
	                (0, _mithril2.default)(
	                    "div",
	                    { "class": "contact-container__holder" },
	                    (0, _mithril2.default)(
	                        "div",
	                        { "class": "contact-container__information" },
	                        (0, _mithril2.default)(
	                            "h2",
	                            { "class": "contact-container__title__name contact-container__title--text-shadow--size-8" },
	                            "CONTACT"
	                        ),
	                        (0, _mithril2.default)(
	                            "div",
	                            { "class": "contact-container__information__content-container contact-container__information__content-container--photo" },
	                            (0, _mithril2.default)("img", { "class": "contact-container__information__photo", src: "assets/images/picture-chuck.jpg", alt: "Chuck Masucci" })
	                        ),
	                        (0, _mithril2.default)(
	                            "div",
	                            { "class": "contact-container__information__content-container contact-container__information__content-container--text" },
	                            (0, _mithril2.default)(
	                                "div",
	                                { "class": "contact-container__information__content-container__content-items" },
	                                (0, _mithril2.default)(
	                                    "div",
	                                    { "class": "contact-container__information__content-container__content-item" },
	                                    (0, _mithril2.default)(
	                                        "div",
	                                        { "class": "contact-container__information__content-container__content-item--title" },
	                                        "// Email"
	                                    ),
	                                    (0, _mithril2.default)(
	                                        "div",
	                                        { "class": "contact-container__information__content-container__content-item--link" },
	                                        (0, _mithril2.default)(
	                                            "a",
	                                            { href: "mailto:cmasucci@gmail.com" },
	                                            "cmasucci@gmail.com"
	                                        )
	                                    )
	                                ),
	                                (0, _mithril2.default)(
	                                    "div",
	                                    { "class": "contact-container__information__content-container__content-item" },
	                                    (0, _mithril2.default)(
	                                        "div",
	                                        { "class": "contact-container__information__content-container__content-item--title" },
	                                        "// LinkedIn"
	                                    ),
	                                    (0, _mithril2.default)(
	                                        "div",
	                                        { "class": "contact-container__information__content-container__content-item--link" },
	                                        (0, _mithril2.default)(
	                                            "a",
	                                            { href: "http://linkedin.com/in/chuckmasucci/", target: "_blank" },
	                                            "linkedin.com/in/chuckmasucci"
	                                        )
	                                    )
	                                ),
	                                (0, _mithril2.default)(
	                                    "div",
	                                    { "class": "contact-container__information__content-container__content-item" },
	                                    (0, _mithril2.default)(
	                                        "div",
	                                        { "class": "contact-container__information__content-container__content-item--title" },
	                                        "// Resume"
	                                    ),
	                                    (0, _mithril2.default)(
	                                        "div",
	                                        { "class": "contact-container__information__content-container__content-item--link" },
	                                        (0, _mithril2.default)(
	                                            "a",
	                                            { href: "https://www.dropbox.com/s/9ln2fihrpa4fhxi/Resume-Chuck_Masucci.pdf?dl=1", target: "_blank" },
	                                            "Download PDF"
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return ContactView;
	}();

	module.exports = ContactView;

/***/ }
/******/ ]);