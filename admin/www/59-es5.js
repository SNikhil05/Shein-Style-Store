(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-ripple-effect.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-ripple-effect.entry.js ***!
  \**************************************************************************/
/*! exports provided: ion_ripple_effect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_ripple_effect", function() { return RippleEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");



var RippleEffect = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        /**
         * Sets the type of ripple-effect:
         *
         * - `bounded`: the ripple effect expands from the user's click position
         * - `unbounded`: the ripple effect expands from the center of the button and overflows the container.
         *
         * NOTE: Surfaces for bounded ripples should have the overflow property set to hidden,
         * while surfaces for unbounded ripples should have it set to visible.
         */
        this.type = 'bounded';
    }
    /**
     * Adds the ripple effect to the parent element.
     *
     * @param x The horizontal coordinate of where the ripple should start.
     * @param y The vertical coordinate of where the ripple should start.
     */
    class_1.prototype.addRipple = function (x, y) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["f"])(function () {
                            var rect = _this.el.getBoundingClientRect();
                            var width = rect.width;
                            var height = rect.height;
                            var hypotenuse = Math.sqrt(width * width + height * height);
                            var maxDim = Math.max(height, width);
                            var maxRadius = _this.unbounded ? maxDim : hypotenuse + PADDING;
                            var initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
                            var finalScale = maxRadius / initialSize;
                            var posX = x - rect.left;
                            var posY = y - rect.top;
                            if (_this.unbounded) {
                                posX = width * 0.5;
                                posY = height * 0.5;
                            }
                            var styleX = posX - initialSize * 0.5;
                            var styleY = posY - initialSize * 0.5;
                            var moveX = width * 0.5 - posX;
                            var moveY = height * 0.5 - posY;
                            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["w"])(function () {
                                var div = document.createElement('div');
                                div.classList.add('ripple-effect');
                                var style = div.style;
                                style.top = styleY + 'px';
                                style.left = styleX + 'px';
                                style.width = style.height = initialSize + 'px';
                                style.setProperty('--final-scale', "" + finalScale);
                                style.setProperty('--translate-end', moveX + "px, " + moveY + "px");
                                var container = _this.el.shadowRoot || _this.el;
                                container.appendChild(div);
                                setTimeout(function () {
                                    resolve(function () {
                                        removeRipple(div);
                                    });
                                }, 225 + 100);
                            });
                        });
                    })];
            });
        });
    };
    Object.defineProperty(class_1.prototype, "unbounded", {
        get: function () {
            return this.type === 'unbounded';
        },
        enumerable: true,
        configurable: true
    });
    class_1.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { role: "presentation", class: (_a = {},
                _a[mode] = true,
                _a['unbounded'] = this.unbounded,
                _a) }));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}\@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}\@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var removeRipple = function (ripple) {
    ripple.classList.add('fade-out');
    setTimeout(function () {
        ripple.remove();
    }, 200);
};
var PADDING = 10;
var INITIAL_ORIGIN_SCALE = 0.5;



/***/ })

}]);
//# sourceMappingURL=59-es5.js.map