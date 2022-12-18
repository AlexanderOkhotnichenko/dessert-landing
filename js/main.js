/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/form.js":
/*!********************!*\
  !*** ./js/form.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function form(form) {
  form.addEventListener("submit", formSend);
  function formSend(_x) {
    return _formSend.apply(this, arguments);
  }
  function _formSend() {
    _formSend = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var itemsError;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              itemsError = validateInputsForm(form);
              if (!itemsError) {
                form.reset();
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Письмо отправлено!', '', 'success');
              }
            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _formSend.apply(this, arguments);
  }
  function validateInputsForm(form) {
    var error = 0;
    var regexTelephone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/gm;
    var dataInput = form.querySelectorAll('input[data-require="true"]');
    var itemsRequire = dataInput;
    var textError = form.querySelector('.text-error');
    itemsRequire.forEach(function (input) {
      removeErrorItem(input);
      if (input.id === 'form-telephone' && input.type === 'tel') {
        if (!input.value.match(regexTelephone)) {
          textError.textContent = 'Укажите корректный номер!';
          addErrorItem(input);
          error++;
        } else {
          textError.textContent = '';
        }
      }
      if (input.id === 'form-checkbox' && input.type === 'checkbox' && input.checked === false) {
        addErrorItem(input);
        error++;
      }
      if (input.value.trim() === '') {
        textError.textContent = 'Поле пустое!';
      }
    });
    return error;
  }
  function addErrorItem(input) {
    input.parentElement.classList.add('error');
  }
  function removeErrorItem(input) {
    input.parentElement.classList.remove('error');
  }
}

/***/ }),

/***/ "./js/handleToOpenModal.js":
/*!*********************************!*\
  !*** ./js/handleToOpenModal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleToOpenModal": () => (/* binding */ handleToOpenModal)
/* harmony export */ });
function handleToOpenModal(event) {
  var selection = document.querySelector('.gallery-list');
  var currentTarget = event.target;
  var modal = document.querySelector('#modal');
  var modalImg = modal.querySelector("img");
  var modalTitle = modal.querySelector('.modal-body__title');
  var openToModal = function openToModal() {
    modal.classList.remove('out');
    document.body.style.paddingRight = getComputedStyle(document.querySelector('.scroll-fix')).width;
    document.body.classList.add('modal-active');
  };
  var closeToModal = function closeToModal() {
    if (currentTarget.classList.contains('close-modal')) {
      modal.classList.add('out');
      document.body.classList.remove('modal-active');
      document.body.style.paddingRight = '0px';
    }
  };
  var updateDataModal = function updateDataModal() {
    var imgSrc = currentTarget.src;
    var imgTitle = currentTarget.title;
    modalImg.src = imgSrc;
    modalImg.alt = imgTitle;
    modalImg.title = imgTitle;
    modalTitle.textContent = imgTitle;
  };
  if (currentTarget === selection) return;
  if (currentTarget.classList.contains('_show-modal')) {
    openToModal();
    updateDataModal();
  }
  closeToModal();
}

/***/ }),

/***/ "./js/loadingPreview.js":
/*!******************************!*\
  !*** ./js/loadingPreview.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadingPreview": () => (/* binding */ loadingPreview)
/* harmony export */ });
function loadingPreview() {
  var preview = document.querySelector(".page-content__background");
  var input = document.querySelector("input[type=file]");
  var file = input.files[0];
  if (!file) return;
  var loadingImage = function loadingImage() {
    preview.src = URL.createObjectURL(file);
  };
  loadingImage();
}

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _scripts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts.js */ "./js/scripts.js");




/***/ }),

/***/ "./js/parallaxItems.js":
/*!*****************************!*\
  !*** ./js/parallaxItems.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parallaxItems": () => (/* binding */ parallaxItems)
/* harmony export */ });
function parallaxItems(event) {
  var items = document.querySelectorAll(".parallax-item");
  items.forEach(function (item) {
    var moveValue = item.getAttribute("data-value");
    var y = event.clientY * moveValue / 160;
    var x = event.clientX * moveValue / 160;
    item.style.transform = "translate3d(".concat(x, "px, ").concat(y, "px, 0px)");
  });
}

/***/ }),

/***/ "./js/scripts.js":
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parallaxItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parallaxItems */ "./js/parallaxItems.js");
/* harmony import */ var _loadingPreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadingPreview */ "./js/loadingPreview.js");
/* harmony import */ var _handleToOpenModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleToOpenModal */ "./js/handleToOpenModal.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./js/form.js");
/* harmony import */ var _swiperSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./swiperSlider */ "./js/swiperSlider.js");
/* harmony import */ var _sliderButtonRead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sliderButtonRead */ "./js/sliderButtonRead.js");






document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("mousemove", _parallaxItems__WEBPACK_IMPORTED_MODULE_0__.parallaxItems);
  document.addEventListener("change", _loadingPreview__WEBPACK_IMPORTED_MODULE_1__.loadingPreview);
  document.addEventListener("click", _handleToOpenModal__WEBPACK_IMPORTED_MODULE_2__.handleToOpenModal);
  (0,_form__WEBPACK_IMPORTED_MODULE_3__.form)(document.querySelector('form'));
  (0,_swiperSlider__WEBPACK_IMPORTED_MODULE_4__.swiperSlider)();
  (0,_sliderButtonRead__WEBPACK_IMPORTED_MODULE_5__.sliderButtonRead)(document.querySelectorAll('.comment-slider-content__read'));
});

/***/ }),

/***/ "./js/sliderButtonRead.js":
/*!********************************!*\
  !*** ./js/sliderButtonRead.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sliderButtonRead": () => (/* binding */ sliderButtonRead)
/* harmony export */ });
function sliderButtonRead(elements) {
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      element.classList.toggle('open-read');
    });
  });
}

/***/ }),

/***/ "./js/swiperSlider.js":
/*!****************************!*\
  !*** ./js/swiperSlider.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swiperSlider": () => (/* binding */ swiperSlider)
/* harmony export */ });
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "../node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/core */ "../node_modules/swiper/esm/components/navigation/navigation.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/core */ "../node_modules/swiper/esm/components/autoplay/autoplay.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_1__["default"], swiper_core__WEBPACK_IMPORTED_MODULE_2__["default"]]);
function swiperSlider() {
  var _Swiper;
  var swiper = new swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"](".comment-content__slider", (_Swiper = {
    spaceBetween: 1,
    slidesPerView: 2,
    centeredSlides: true
  }, _defineProperty(_Swiper, "slidesPerView", "auto"), _defineProperty(_Swiper, "allowTouchMove", false), _defineProperty(_Swiper, "autoplay", {
    delay: 4000,
    disableOnInteraction: false
  }), _defineProperty(_Swiper, "loop", true), _defineProperty(_Swiper, "loopAdditionalSlides", 4), _defineProperty(_Swiper, "navigation", {
    nextEl: ".swiper-custom-button-next",
    prevEl: ".swiper-custom-button-prev"
  }), _defineProperty(_Swiper, "breakpoints", {
    320: {
      allowTouchMove: true
    },
    640: {
      allowTouchMove: true
    }
  }), _Swiper));
  document.querySelector('.comment-content__slider').addEventListener("mouseover", function (event) {
    if (event.target) {
      swiper.autoplay.stop();
    }
  });
  document.querySelector('.comment-content__slider').addEventListener("mouseout", function (event) {
    if (event.target) {
      swiper.autoplay.start();
    }
  });
}

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/home-background.png */ "./img/home-background.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/catallog/cream-1.png */ "./img/catallog/cream-1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/catallog/cream-2.png */ "./img/catallog/cream-2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/catallog/cream-4.png */ "./img/catallog/cream-4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/catallog/cream-5.png */ "./img/catallog/cream-5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/catallog/cream-6.png */ "./img/catallog/cream-6.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/catallog/cream-7.png */ "./img/catallog/cream-7.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/catallog/cream-8.png */ "./img/catallog/cream-8.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/catallog/cream-9.png */ "./img/catallog/cream-9.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/content/phone.png */ "./img/content/phone.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/about/woman.png */ "./img/about/woman.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/comment/quotes.png */ "./img/comment/quotes.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/comment/hero-1.png */ "./img/comment/hero-1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/comment/hero-2.png */ "./img/comment/hero-2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/gallery/photo-1.png */ "./img/gallery/photo-1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/gallery/photo-2.png */ "./img/gallery/photo-2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/gallery/photo-3.png */ "./img/gallery/photo-3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/gallery/photo-4.png */ "./img/gallery/photo-4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/gallery/photo-5.png */ "./img/gallery/photo-5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/gallery/photo-6.png */ "./img/gallery/photo-6.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/gallery/photo-7.png */ "./img/gallery/photo-7.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/gallery/photo-8.png */ "./img/gallery/photo-8.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./img/gallery/photo-9.png */ "./img/gallery/photo-9.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\r\n  <" + "script src=\"https://kit.fontawesome.com/997cd69c9a.js\" crossorigin=\"anonymous\"><" + "/script>\r\n  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>\r\n  <link rel=\"icon\" sizes=\"16x16\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n  <link rel=\"stylesheet\" type=\"text/css\"\r\n    href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://unpkg.com/swiper/swiper-bundle.min.css\" />\r\n  <title>Сладкий сундук</title>\r\n</head>\r\n\r\n<body>\r\n  <div class=\"scroll-fix\"></div>\r\n  <div class=\"modal out\" id=\"modal\">\r\n    <div class=\"modal-overlay close-modal\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-content__body modal-body\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\r\n          <i class=\"fa-solid fa-xmark modal-body__close close-modal\"></i>\r\n          <div class=\"modal-body__wrapper\">\r\n            <h1 class=\"modal-body__title\">Пирожное</h1>\r\n            <p class=\"modal-body__text font-500\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi alias\r\n              eos, velit iure maxime cupiditate nobis explicabo ex quae, facilis saepe assumenda recusandae? Inventore\r\n              corporis eligendi repellat in officia! Pariatur.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <header class=\"header\">\r\n    <div class=\"header__container\">\r\n      <div class=\"header__content content\">\r\n        <h4 class=\"title font-500\">Сладкий сундук</h4>\r\n        <div class=\"content__row\">\r\n          <div class=\"content__address address\">\r\n            <div class=\"address__location\"><i class=\"fa fa-solid fa-location-dot location\"></i></div>\r\n            <span class=\"address__name font-400\">г. Санкт Петербург, ул. Куйбышева 31</span>\r\n          </div>\r\n          <div class=\"content__connection connection\">\r\n            <i class=\"fa fa-duotone fa-phone-volume phone\"></i>\r\n            <div class=\"connection__content\">\r\n              <div class=\"connection__telephone font-700\">8 (812) 844-95-49</div>\r\n              <div class=\"connection__description font-400\">Ежедневно с 9:00 до 20:00</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <main class=\"main\">\r\n    <section class=\"page-home home__parrent\">\r\n      <div class=\"page-home__container\">\r\n        <div class=\"page-home__parallax-items parallax-items\">\r\n          <div class=\"parallax-items__berry i-1 parallax-item\" data-value=\"-2\"></div>\r\n          <div class=\"parallax-items__berry i-2 parallax-item\" data-value=\"4\"></div>\r\n          <div class=\"parallax-items__berry i-3 parallax-item\" data-value=\"-3\"></div>\r\n          <div class=\"parallax-items__leaf i-4 parallax-item\" data-value=\"1.5\"></div>\r\n        </div>\r\n        <div class=\"page-home__content home-content\">\r\n          <div class=\"home-content__background\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"background\">\r\n          </div>\r\n          <div class=\"home-content__box-description\">\r\n            <div class=\"home-content__subtitle\">\r\n              <span>вкуснейшие</span>\r\n            </div>\r\n            <h1 class=\"home-content__title font-700\">Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу\r\n            </h1>\r\n            <p class=\"home-content__description font-400\">Приготовим за 3 часа в день заказа. Доставка на авто в\r\n              холодильнике.</p>\r\n            <div class=\"home-content__row\">\r\n              <a href=\"#catallog\" class=\"home-content__link font-500 link\"><span>Перейти в каталог</span></a>\r\n              <div class=\"home-content__text font-400\">9 различных видов на выбор</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"page-catallog catallog__parrent\" id=\"catallog\">\r\n      <div class=\"page-catallog__container\">\r\n        <div class=\"page-home__parallax-items parallax-items\">\r\n          <div class=\"parallax-items__berry c-1 parallax-item\" data-value=\"-4\"></div>\r\n          <div class=\"parallax-items__leaf c-2 parallax-item\" data-value=\"1\"></div>\r\n          <div class=\"parallax-items__leaf c-3 parallax-item\" data-value=\"-2\"></div>\r\n        </div>\r\n        <div class=\"page-catallog__content catallog-content\">\r\n          <h1 class=\"catallog-content__title font-500\">Для любых событий и дорогих вам людей </h1>\r\n          <div class=\"catallog-content__items section\">\r\n            <div class=\"catallog-content__item catallog-item\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"cream\">\r\n              <div class=\"catallog-item__content\">\r\n                <h3 class=\"catallog-item__title font-700\">Кремовый замок</h3>\r\n                <p class=\"catallog-item__description font-400\">Нежный крем любого цвета на выбор, вафельная основа</p>\r\n                <span class=\"catallog-item__price font-500\">150 ₽/шт.</span>\r\n                <a href=\"#form\" class=\"catallog-item__button font-500 link\" title=\"Заказать\">Заказать</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"catallog-content__item catallog-item\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"cream\">\r\n              <div class=\"catallog-item__content\">\r\n                <h3 class=\"catallog-item__title font-700\">Малиновый рай</h3>\r\n                <p class=\"catallog-item__description font-400\">Воздушный крем, темная основа и ягода малины</p>\r\n                <span class=\"catallog-item__price font-500\">150 ₽/шт.</span>\r\n                <a href=\"#form\" class=\"catallog-item__button font-500 link\" title=\"Заказать\">Заказать</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"catallog-content__item catallog-item\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"cream\">\r\n              <div class=\"catallog-item__content\">\r\n                <h3 class=\"catallog-item__title font-700\">Фейерверк</h3>\r\n                <p class=\"catallog-item__description font-400\">Разноцветные крем, с бисквитной основой</p>\r\n                <span class=\"catallog-item__price font-500\">150 ₽/шт.</span>\r\n                <a href=\"#form\" class=\"catallog-item__button font-500 link\" title=\"Заказать\">Заказать</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"catallog-content__item catallog-item\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"cream\">\r\n              <div class=\"catallog-item__content\">\r\n                <h3 class=\"catallog-item__title font-700\">Шоколадный мир</h3>\r\n                <p class=\"catallog-item__description font-400\">Ореховая стружка, нежный крем и шоколадная основа</p>\r\n                <span class=\"catallog-item__price font-500\">150 ₽/шт.</span>\r\n                <a href=\"#form\" class=\"catallog-item__button font-500 link\" title=\"Заказать\">Заказать</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"catallog-content__item catallog-item\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"cream\">\r\n              <div class=\"catallog-item__content\">\r\n                <h3 class=\"catallog-item__title font-700\">Слезы дракона</h3>\r\n                <p class=\"catallog-item__description font-400\">Нежный крем любого цвета на выбор, вафельная основа</p>\r\n                <span class=\"catallog-item__price font-500\">150 ₽/шт.</span>\r\n                <a href=\"#form\" class=\"catallog-item__button font-500 link\" title=\"Заказать\">Заказать</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"catallog-content__item catallog-item\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"cream\">\r\n              <div class=\"catallog-item__content\">\r\n                <h3 class=\"catallog-item__title font-700\">Летняя фантазия</h3>\r\n                <p class=\"catallog-item__description font-400\">Украшения в форме сердец, для любимого человека</p>\r\n                <span class=\"catallog-item__price font-500\">150 ₽/шт.</span>\r\n                <a href=\"#form\" class=\"catallog-item__button font-500 link\" title=\"Заказать\">Заказать</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"catallog-content__item catallog-item\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"cream\">\r\n              <div class=\"catallog-item__content\">\r\n                <h3 class=\"catallog-item__title font-700\">Мыс безумия</h3>\r\n                <p class=\"catallog-item__description font-400\">Разноцветная основа, стружка и нежный крем</p>\r\n                <span class=\"catallog-item__price font-500\">150 ₽/шт.</span>\r\n                <a href=\"#form\" class=\"catallog-item__button font-500 link\" title=\"Заказать\">Заказать</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"catallog-content__item catallog-item\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"cream\">\r\n              <div class=\"catallog-item__content\">\r\n                <h3 class=\"catallog-item__title font-700\">Облачная сказка</h3>\r\n                <p class=\"catallog-item__description font-400\">Светлая основа, нежный крем со стружкой сверху</p>\r\n                <span class=\"catallog-item__price font-500\">150 ₽/шт.</span>\r\n                <a href=\"#form\" class=\"catallog-item__button font-500 link\" title=\"Заказать\">Заказать</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"catallog-content__item catallog-item\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"cream\">\r\n              <div class=\"catallog-item__content\">\r\n                <h3 class=\"catallog-item__title font-700\">Темный рыцарь</h3>\r\n                <p class=\"catallog-item__description font-400\">Тёмная основа, нежный крем и вкусные шарики</p>\r\n                <span class=\"catallog-item__price font-500\">150 ₽/шт.</span>\r\n                <a href=\"#form\" class=\"catallog-item__button font-500 link\" title=\"Заказать\">Заказать</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"page-content content__parrent\">\r\n      <div class=\"page-content__container\">\r\n        <div class=\"page-content__parallax-items parallax-items\">\r\n          <div class=\"parallax-items__berry j-1 parallax-item\" data-value=\"-1.5\"></div>\r\n          <div class=\"parallax-items__leaf j-2 parallax-item\" data-value=\"1.4\"></div>\r\n        </div>\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" class=\"page-content__background parallax-item vis\" data-value=\"-0.8\"\r\n          alt=\"Phone\">\r\n        <div class=\"page-content__content content-content\">\r\n          <div class=\"content-content__box-description\">\r\n            <div class=\"content-content__subtitle\">\r\n              <span>Не нашли то что нужно?</span>\r\n            </div>\r\n            <h1 class=\"content-content__title font-500\">Приготовим заказ любой сложности по фото или эскизу</h1>\r\n            <p class=\"content-content__description\">Загрузите фотографию или эскиз капкейков и мы рассчитаем стоимость\r\n              за 30 минут</p>\r\n            <label for=\"file\" class=\"content-content__file font-500\">Загрузить фотографию\r\n              <input type=\"file\" id=\"file\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"page-about about__parrent\">\r\n      <div class=\"page-about__container\">\r\n        <div class=\"page-about__content about-content\">\r\n          <div class=\"about-content__description content-description\">\r\n            <div class=\"content-description__wrapper\">\r\n              <div class=\"content-description__subtitle\">\r\n                <span>Кто будет готовить?</span>\r\n              </div>\r\n              <h1 class=\"content-description__title font-500\">Лично приготовлю и всё красиво упакую для вашего события\r\n              </h1>\r\n              <ul class=\"content-description__list-services list-services\">\r\n                <li class=\"list-services__item\">Проконсультирую по выбору капкейко и придумаю нестандартную идею</li>\r\n                <li class=\"list-services__item\">Приготовлю капкейки для вашего события, которые обязательно всем\r\n                  понравятся </li>\r\n                <li class=\"list-services__item\">Аккуратно и красиво всё упакую, если вы хотите сделать приятный\r\n                  подарок</li>\r\n              </ul>\r\n            </div>\r\n            <a href=\"https://web.telegram.org/z/\" class=\"content-description__link link\"><span>Задать вопрос Юлии</span></a>\r\n          </div>\r\n          <div class=\"about-content__hero content-hero\">\r\n            <div class=\"page-content__parallax-items parallax-items vis\">\r\n              <div class=\"parallax-items__berry a-1 parallax-item\" data-value=\"-1.5\"></div>\r\n              <div class=\"parallax-items__leaf a-2 parallax-item\" data-value=\"1.4\"></div>\r\n              <div class=\"parallax-items__leaf a-3 parallax-item\" data-value=\"1.8\"></div>\r\n              <div class=\"parallax-items__leaf a-4 parallax-item\" data-value=\"2.2\"></div>\r\n            </div>\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"woman\">\r\n            <ul class=\"content-hero__user-description user-description\">\r\n              <li class=\"user-description__first-name font-500\"><span>Юлия Кондратьева</span></li>\r\n              <li class=\"user-description__last-name\"><span>ваш кондитер</span></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"page-comment comment__parrent\">\r\n      <div class=\"page-comment__container\">\r\n        <div class=\"page-comment__content comment-content\">\r\n          <h1 class=\"comment-content__title font-500 padd\">Почитайте отзывы довольных клиентов</h1>\r\n          <div class=\"swiper-container comment-content__slider\">\r\n            <div class=\"swiper-wrapper comment-slider__wrapper\">\r\n              <div class=\"swiper-slide comment-slider__item\">\r\n                <div class=\"comment-slider-content\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"quotes\"\r\n                    class=\"comment-slider-content__quotes-image color-blue\">\r\n                  <h1 class=\"comment-slider-content__title font-500\">«Результат дико порадовал, друзья были в восторге»\r\n                  </h1>\r\n                  <div class=\"comment-slider-content__box-description\">\r\n                    <p class=\"comment-slider-content__description\">«Заказала капкейки, как подарок на новый год. Делать\r\n                      заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и\r\n                      на вкус капкейки были просто замечательные. Обязательно буду заказывать еще)) Уже строю планы,\r\n                      чтобы\r\n                      попробовать все начинки. Они восхитительны!) Даже кушать было жалко, такая красота!) </p>\r\n                  </div>\r\n                  <div class=\"comment-slider-content__box-button\">\r\n                    <button class=\"comment-slider-content__read\">Читать отзыв полностью</button>\r\n                    <span>Вы думали тут что-то будет)?</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"comment-slider-content\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" class=\"comment-slider-content__hero-image\">\r\n                  <div class=\"comment-slider-content__hero-box\">\r\n                    <h3 class=\"comment-slider-content__hero-title font-500\">Ирина Ларионова</h3>\r\n                    <div class=\"comment-slider-content__hero-city\">Санкт-Петербург</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"swiper-slide comment-slider__item\">\r\n                <div class=\"comment-slider-content\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"quotes\"\r\n                    class=\"comment-slider-content__quotes-image color-yellow\">\r\n                  <h1 class=\"comment-slider-content__title font-500\">«Лучшую фразу из отзыва напишите в заголовке»</h1>\r\n                  <div class=\"comment-slider-content__box-description\">\r\n                    <p class=\"comment-slider-content__description\">«Вставьте отзыв целиком или часть отзыва клиента.\r\n                      Никогда не выдумывайте отзывы самостоятельно. Фильшивые отзывы всегда видно. Будьте честны.</p>\r\n                    <p class=\"comment-slider-content__description\">Опишите конечный результат, который получил человек\r\n                      после работы с вами. Что конеретно ему это дало. Можно описывать результат в цифрах, чтобы была\r\n                      конкретика»</p>\r\n                  </div>\r\n                  <div class=\"comment-slider-content__box-button\">\r\n                    <button class=\"comment-slider-content__read\">Читать отзыв полностью</button>\r\n                    <span>Вы думали тут что-то будет)?</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"comment-slider-content\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" class=\"comment-slider-content__hero-image\">\r\n                  <div class=\"comment-slider-content__hero-box\">\r\n                    <h3 class=\"comment-slider-content__hero-title font-500\">Елена Демидова</h3>\r\n                    <div class=\"comment-slider-content__hero-city\">Санкт-Петербург</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"swiper-slide comment-slider__item\">\r\n                <div class=\"comment-slider-content\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"quotes\"\r\n                    class=\"comment-slider-content__quotes-image color-yellow\">\r\n                  <h1 class=\"comment-slider-content__title font-500\">«Спасибо за прекрасные капкейки, все на высоте»\r\n                  </h1>\r\n                  <div class=\"comment-slider-content__box-description\">\r\n                    <p class=\"comment-slider-content__description\">«Вставьте отзыв целиком или часть отзыва клиента.\r\n                      Никогда не выдумывайте отзывы самостоятельно. Фильшивые отзывы всегда видно. Будьте честны.</p>\r\n                    <p class=\"comment-slider-content__description\">Опишите конечный результат, который получил человек\r\n                      после работы с вами. Что конеретно ему это дало. Можно описывать результат в цифрах, чтобы была\r\n                      конкретика»</p>\r\n                  </div>\r\n                  <div class=\"comment-slider-content__box-button\">\r\n                    <button class=\"comment-slider-content__read\">Читать отзыв полностью</button>\r\n                    <span>Вы думали тут что-то будет)?</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"comment-slider-content\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" class=\"comment-slider-content__hero-image\">\r\n                  <div class=\"comment-slider-content__hero-box\">\r\n                    <h3 class=\"comment-slider-content__hero-title font-500\">Елена Демидова</h3>\r\n                    <div class=\"comment-slider-content__hero-city\">Санкт-Петербург</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"swiper-slide comment-slider__item\">\r\n                <div class=\"comment-slider-content\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"quotes\"\r\n                    class=\"comment-slider-content__quotes-image color-yellow\">\r\n                  <h1 class=\"comment-slider-content__title font-500\">«Спасибо за прекрасные капкейки, все на высоте»\r\n                  </h1>\r\n                  <div class=\"comment-slider-content__box-description\">\r\n                    <p class=\"comment-slider-content__description\">«Вставьте отзыв целиком или часть отзыва клиента.\r\n                      Никогда не выдумывайте отзывы самостоятельно. Фильшивые отзывы всегда видно. Будьте честны.</p>\r\n                    <p class=\"comment-slider-content__description\">Опишите конечный результат, который получил человек\r\n                      после работы с вами. Что конеретно ему это дало. Можно описывать результат в цифрах, чтобы была\r\n                      конкретика»</p>\r\n                  </div>\r\n                  <div class=\"comment-slider-content__box-button\">\r\n                    <button class=\"comment-slider-content__read\">Читать отзыв полностью</button>\r\n                    <span>Вы думали тут что-то будет)?</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"comment-slider-content\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" class=\"comment-slider-content__hero-image\">\r\n                  <div class=\"comment-slider-content__hero-box\">\r\n                    <h3 class=\"comment-slider-content__hero-title font-500\">Елена Демидова</h3>\r\n                    <div class=\"comment-slider-content__hero-city\">Санкт-Петербург</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-navigation\">\r\n              <div class=\"swiper-button-wrapper swiper-custom-button-prev\">\r\n                <button class=\"swiper-button-prev\"></button>\r\n              </div>\r\n              <div class=\"swiper-button-wrapper swiper-custom-button-next\">\r\n                <button class=\"swiper-button-next\"></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"page-gallery gallery__parrent\">\r\n      <div class=\"page-gallery__container\">\r\n        <div class=\"page-gallery__content gallery-content\">\r\n          <div class=\"gallery-content__description content-gallery-description\">\r\n            <h1 class=\"content-gallery-description__title font-500\">Сделали более 3.000 заказов за 2 года</h1>\r\n            <p class=\"content-gallery-description__text\">Посмотрите фото реальных заказов из нашего instagram</p>\r\n          </div>\r\n          <div class=\"gallery-content__gallery content-gallery-gallery\">\r\n            <ul class=\"content-gallery-gallery__list-gallery gallery-list\">\r\n              <li class=\"gallery-list__item\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Dessert\" class=\"_show-modal\" title=\"Кремовый замок\" />\r\n                <div class=\"item-gallery-hover\">\r\n                  <div class=\"item-gallery-hover__name font-600\">Кремовый замок</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"gallery-list__item\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"Dessert\" class=\"_show-modal\" title=\"Фейерверк\" />\r\n                <div class=\"item-gallery-hover\">\r\n                  <div class=\"item-gallery-hover__name font-600\">Фейерверк</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"gallery-list__item\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"Dessert\" class=\"_show-modal\" title=\"Шоколадное наслождение\" />\r\n                <div class=\"item-gallery-hover\">\r\n                  <div class=\"item-gallery-hover__name font-600\">Шоколадное наслождение</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"gallery-list__item\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"Dessert\" class=\"_show-modal\" title=\"Шоколадный мир\" />\r\n                <div class=\"item-gallery-hover\">\r\n                  <div class=\"item-gallery-hover__name font-600\">Шоколадный мир</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"gallery-list__item\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"Dessert\" class=\"_show-modal\" title=\"Слезы дракона\" />\r\n                <div class=\"item-gallery-hover\">\r\n                  <div class=\"item-gallery-hover__name font-600\">Слезы дракона</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"gallery-list__item\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"Dessert\" class=\"_show-modal\" title=\"Летняя фантазия\" />\r\n                <div class=\"item-gallery-hover\">\r\n                  <div class=\"item-gallery-hover__name font-600\">Летняя фантазия</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"gallery-list__item\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"Dessert\" class=\"_show-modal\" title=\"Мыс безумия\" />\r\n                <div class=\"item-gallery-hover\">\r\n                  <div class=\"item-gallery-hover__name font-600\">Мыс безумия</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"gallery-list__item\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"Dessert\" class=\"_show-modal\" title=\"Облачная сказка\" />\r\n                <div class=\"item-gallery-hover\">\r\n                  <div class=\"item-gallery-hover__name font-600\">Облачная сказка</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"gallery-list__item\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"Dessert\" class=\"_show-modal\" title=\"Темный рыцарь\" />\r\n                <div class=\"item-gallery-hover\">\r\n                  <div class=\"item-gallery-hover__name font-600\">Темный рыцарь</div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"page-form form__parrent\">\r\n      <div class=\"page-form__container\">\r\n        <div class=\"page-form__content form-content\">\r\n          <div class=\"page-form__parallax-items parallax-items\">\r\n            <div class=\"parallax-items__leaf f-1 parallax-item\" data-value=\"-2\"></div>\r\n            <div class=\"parallax-items__berry f-2 parallax-item\" data-value=\"2\"></div>\r\n            <div class=\"parallax-items__leaf f-3 parallax-item\" data-value=\"-2\"></div>\r\n            <div class=\"parallax-items__berry f-4 parallax-item\" data-value=\"2\"></div>\r\n          </div>\r\n          <form action=\"\" class=\"form\" id=\"form\">\r\n            <div class=\"form__description form-description\">\r\n              <h1 class=\"form-description__title forn-700\">Чтобы сделать заказ, укажите ваш телефон</h1>\r\n              <p class=\"form-description__text\">Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания</p>\r\n            </div>\r\n            <div class=\"form__input form-input\">\r\n              <div class=\"form-input__box-inputs box-inputs\">\r\n                <div class=\"box-inputs__wrapper\">\r\n                  <label for=\"form-telephone\" class=\"box-inputs__label\">\r\n                    <i class=\"fa fa-solid fa-phone\"></i>\r\n                    <input type=\"tel\" id=\"form-telephone\" class=\"pisca\" data-require=\"true\" placeholder=\"Номер телефона\" name=\"tel\" maxlength=\"15\">\r\n                  </label>\r\n                  <span class=\"text-error\"></span>\r\n                </div>\r\n                <button type=\"submit\" class=\"box-inputs__submit font-500\"><span>Сделать заказ</span></button>\r\n              </div>\r\n              <div class=\"form-input__checkbox\">\r\n                <label for=\"form-checkbox\" class=\"form-input-label\">\r\n                  <input type=\"checkbox\" id=\"form-checkbox\" data-require=\"true\">\r\n                  <span>Нажамая на кнопку, вы соглашаетесь с условиями обработки персональных данных</span>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </main>\r\n  <footer class=\"footer\">\r\n    <div class=\"footer__container\">\r\n      <div class=\"footer__content footer-content\">\r\n        <ul class=\"footer-content__list footer-list\">\r\n          <li class=\"footer-list__item\"><a href=\"#\" class=\"footer-list__link link\">Согласие на обработку данных</a></li>\r\n          <li class=\"footer-list__item\"><a href=\"#\" class=\"footer-list__link link\">Служба поддержки</a></li>\r\n          <li class=\"footer-list__item\"><a href=\"#\" class=\"footer-list__link link\">Политика конфиденциальности</a></li>\r\n        </ul>\r\n        <p class=\"footer-content__text\">© nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000</p>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e937fff98a03d6dd641.ico";

/***/ }),

/***/ "./img/about/woman.png":
/*!*****************************!*\
  !*** ./img/about/woman.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/woman.png";

/***/ }),

/***/ "./img/catallog/cream-1.png":
/*!**********************************!*\
  !*** ./img/catallog/cream-1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/cream-1.png";

/***/ }),

/***/ "./img/catallog/cream-2.png":
/*!**********************************!*\
  !*** ./img/catallog/cream-2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/cream-2.png";

/***/ }),

/***/ "./img/catallog/cream-4.png":
/*!**********************************!*\
  !*** ./img/catallog/cream-4.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/cream-4.png";

/***/ }),

/***/ "./img/catallog/cream-5.png":
/*!**********************************!*\
  !*** ./img/catallog/cream-5.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/cream-5.png";

/***/ }),

/***/ "./img/catallog/cream-6.png":
/*!**********************************!*\
  !*** ./img/catallog/cream-6.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/cream-6.png";

/***/ }),

/***/ "./img/catallog/cream-7.png":
/*!**********************************!*\
  !*** ./img/catallog/cream-7.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/cream-7.png";

/***/ }),

/***/ "./img/catallog/cream-8.png":
/*!**********************************!*\
  !*** ./img/catallog/cream-8.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/cream-8.png";

/***/ }),

/***/ "./img/catallog/cream-9.png":
/*!**********************************!*\
  !*** ./img/catallog/cream-9.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/cream-9.png";

/***/ }),

/***/ "./img/comment/hero-1.png":
/*!********************************!*\
  !*** ./img/comment/hero-1.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/hero-1.png";

/***/ }),

/***/ "./img/comment/hero-2.png":
/*!********************************!*\
  !*** ./img/comment/hero-2.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/hero-2.png";

/***/ }),

/***/ "./img/comment/quotes.png":
/*!********************************!*\
  !*** ./img/comment/quotes.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/quotes.png";

/***/ }),

/***/ "./img/content/phone.png":
/*!*******************************!*\
  !*** ./img/content/phone.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/phone.png";

/***/ }),

/***/ "./img/gallery/photo-1.png":
/*!*********************************!*\
  !*** ./img/gallery/photo-1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/photo-1.png";

/***/ }),

/***/ "./img/gallery/photo-2.png":
/*!*********************************!*\
  !*** ./img/gallery/photo-2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/photo-2.png";

/***/ }),

/***/ "./img/gallery/photo-3.png":
/*!*********************************!*\
  !*** ./img/gallery/photo-3.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/photo-3.png";

/***/ }),

/***/ "./img/gallery/photo-4.png":
/*!*********************************!*\
  !*** ./img/gallery/photo-4.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/photo-4.png";

/***/ }),

/***/ "./img/gallery/photo-5.png":
/*!*********************************!*\
  !*** ./img/gallery/photo-5.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/photo-5.png";

/***/ }),

/***/ "./img/gallery/photo-6.png":
/*!*********************************!*\
  !*** ./img/gallery/photo-6.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/photo-6.png";

/***/ }),

/***/ "./img/gallery/photo-7.png":
/*!*********************************!*\
  !*** ./img/gallery/photo-7.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/photo-7.png";

/***/ }),

/***/ "./img/gallery/photo-8.png":
/*!*********************************!*\
  !*** ./img/gallery/photo-8.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/photo-8.png";

/***/ }),

/***/ "./img/gallery/photo-9.png":
/*!*********************************!*\
  !*** ./img/gallery/photo-9.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/photo-9.png";

/***/ }),

/***/ "./img/home-background.png":
/*!*********************************!*\
  !*** ./img/home-background.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/home-background.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_html-loader_dist_runtime_getUrl_js-node_modules_sweetalert2_dist_sweetal-c3597a"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map