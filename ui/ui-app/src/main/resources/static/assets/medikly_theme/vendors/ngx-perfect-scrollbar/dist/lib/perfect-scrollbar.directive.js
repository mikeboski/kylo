"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ps = require("perfect-scrollbar");
var resize_observer_polyfill_1 = require("resize-observer-polyfill");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var perfect_scrollbar_interfaces_1 = require("./perfect-scrollbar.interfaces");
var PerfectScrollbarDirective = /** @class */ (function () {
    function PerfectScrollbarDirective(defaults, zone, elementRef, differs) {
        this.defaults = defaults;
        this.zone = zone;
        this.elementRef = elementRef;
        this.differs = differs;
        this.fxShow = true;
        this.fxHide = false;
        this.hidden = false;
        this.disabled = false;
        this.usePSClass = true;
        this.psPosStyle = 'relative';
        this.runInsideAngular = false;
    }
    Object.defineProperty(PerfectScrollbarDirective.prototype, "oldConfig", {
        set: function (config) {
            console.warn('Deprecated use of perfect-scrollbar selector, use perfectScrollbar instead!');
            this.config = config;
        },
        enumerable: true,
        configurable: true
    });
    PerfectScrollbarDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.ro) {
            this.ro.disconnect();
        }
        if (this.timeout) {
            window.clearTimeout(this.timeout);
        }
        if (this.runInsideAngular) {
            Ps.destroy(this.elementRef.nativeElement);
        }
        else {
            this.zone.runOutsideAngular(function () {
                Ps.destroy(_this.elementRef.nativeElement);
            });
        }
    };
    PerfectScrollbarDirective.prototype.ngDoCheck = function () {
        var _this = this;
        if (!this.disabled && this.configDiff) {
            var changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.ngOnDestroy();
                // Timeout is needed for the styles to update properly
                window.setTimeout(function () {
                    _this.ngAfterViewInit();
                }, 0);
            }
        }
    };
    PerfectScrollbarDirective.prototype.ngOnChanges = function (changes) {
        if (changes['fxHide']) {
            changes['hidden'] = changes['fxHide'];
        }
        else if (changes['fxShow']) {
            changes['hidden'] = changes['fxShow'];
            changes['hidden'].currentValue = !changes['fxShow'].currentValue;
            changes['hidden'].previousValue = !changes['fxShow'].previousValue;
        }
        if (changes['disabled'] && !changes['disabled'].isFirstChange()) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.ngOnDestroy();
                }
                else if (changes['disabled'].currentValue === false) {
                    this.ngAfterViewInit();
                }
            }
        }
        else if (changes['hidden'] && !changes['hidden'].isFirstChange()) {
            if (changes['hidden'].currentValue !== changes['hidden'].previousValue) {
                if (changes['hidden'].currentValue === false) {
                    this.update();
                }
            }
        }
    };
    PerfectScrollbarDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.disabled) {
            var config_1 = new perfect_scrollbar_interfaces_1.PerfectScrollbarConfig(this.defaults);
            config_1.assign(this.config);
            if (this.runInsideAngular) {
                Ps.initialize(this.elementRef.nativeElement, config_1);
            }
            else {
                this.zone.runOutsideAngular(function () {
                    Ps.initialize(_this.elementRef.nativeElement, config_1);
                });
            }
            if (!this.configDiff) {
                this.configDiff = this.differs.find(this.config || {}).create(null);
            }
            this.zone.runOutsideAngular(function () {
                _this.ro = new resize_observer_polyfill_1.default(function (entries, observer) {
                    _this.update();
                });
                _this.ro.observe(_this.elementRef.nativeElement);
            });
        }
    };
    PerfectScrollbarDirective.prototype.update = function () {
        var _this = this;
        if (this.timeout) {
            window.clearTimeout(this.timeout);
        }
        this.timeout = window.setTimeout(function () {
            if (!_this.disabled && _this.configDiff) {
                try {
                    if (_this.runInsideAngular) {
                        Ps.update(_this.elementRef.nativeElement);
                    }
                    else {
                        _this.zone.runOutsideAngular(function () {
                            Ps.update(_this.elementRef.nativeElement);
                        });
                    }
                }
                catch (error) {
                    // Update can be finished after destroy so catch errors
                }
            }
        }, 0);
    };
    PerfectScrollbarDirective.prototype.geometry = function (property) {
        if (property === void 0) { property = 'scroll'; }
        return {
            x: this.elementRef.nativeElement[property + 'Left'],
            y: this.elementRef.nativeElement[property + 'Top'],
            w: this.elementRef.nativeElement[property + 'Width'],
            h: this.elementRef.nativeElement[property + 'Height']
        };
    };
    PerfectScrollbarDirective.prototype.scrollable = function (direction) {
        if (direction === void 0) { direction = 'any'; }
        var element = this.elementRef.nativeElement;
        if (direction === 'any') {
            return element.classList.contains('ps--active-x') ||
                element.classList.contains('ps--active-y');
        }
        else if (direction === 'both') {
            return element.classList.contains('ps--active-x') &&
                element.classList.contains('ps--active-y');
        }
        else {
            return element.classList.contains('ps--active-' + direction);
        }
    };
    PerfectScrollbarDirective.prototype.scrollTo = function (x, y, speed) {
        if (!this.disabled) {
            if (y == null && speed == null) {
                console.warn('Deprecated use of scrollTo, use the scrollToY function instead!');
                this.animateScrolling('scrollTop', x, speed);
            }
            else {
                if (x != null) {
                    this.animateScrolling('scrollLeft', x, speed);
                }
                if (y != null) {
                    this.animateScrolling('scrollTop', y, speed);
                }
            }
        }
    };
    PerfectScrollbarDirective.prototype.scrollToX = function (x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    };
    PerfectScrollbarDirective.prototype.scrollToY = function (y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    };
    PerfectScrollbarDirective.prototype.scrollToTop = function (offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    };
    PerfectScrollbarDirective.prototype.scrollToLeft = function (offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    };
    PerfectScrollbarDirective.prototype.scrollToRight = function (offset, speed) {
        var width = this.elementRef.nativeElement.scrollWidth;
        this.animateScrolling('scrollLeft', width - (offset || 0), speed);
    };
    PerfectScrollbarDirective.prototype.scrollToBottom = function (offset, speed) {
        var height = this.elementRef.nativeElement.scrollHeight;
        this.animateScrolling('scrollTop', height - (offset || 0), speed);
    };
    PerfectScrollbarDirective.prototype.animateScrolling = function (target, value, speed) {
        var _this = this;
        if (!speed) {
            this.elementRef.nativeElement[target] = value;
            this.update();
            // PS has weird event sending order, this is a workaround for that
            this.timeout = null;
            this.update();
        }
        else if (value !== this.elementRef.nativeElement[target]) {
            var newValue_1 = 0;
            var scrollCount_1 = 0;
            var oldTimestamp_1 = performance.now();
            var oldValue_1 = this.elementRef.nativeElement[target];
            var cosParameter_1 = (oldValue_1 - value) / 2;
            var step_1 = function (newTimestamp) {
                scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                // Only continue animation if scroll position has not changed
                if (_this.elementRef.nativeElement[target] === oldValue_1) {
                    if (scrollCount_1 >= Math.PI) {
                        _this.elementRef.nativeElement[target] = value;
                        _this.update();
                        // PS has weird event sending order, this is a workaround for that
                        _this.timeout = null;
                        _this.update();
                    }
                    else {
                        _this.elementRef.nativeElement[target] = oldValue_1 = newValue_1;
                        oldTimestamp_1 = newTimestamp;
                        window.requestAnimationFrame(step_1);
                    }
                }
            };
            window.requestAnimationFrame(step_1);
        }
    };
    PerfectScrollbarDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[perfect-scrollbar], [perfectScrollbar]',
                    exportAs: 'ngxPerfectScrollbar'
                },] },
    ];
    /** @nocollapse */
    PerfectScrollbarDirective.ctorParameters = function () { return [
        { type: perfect_scrollbar_interfaces_1.PerfectScrollbarConfig, decorators: [{ type: core_1.Optional },] },
        { type: core_1.NgZone, },
        { type: core_3.ElementRef, },
        { type: core_2.KeyValueDiffers, },
    ]; };
    PerfectScrollbarDirective.propDecorators = {
        'fxShow': [{ type: core_3.Input },],
        'fxHide': [{ type: core_3.Input },],
        'hidden': [{ type: core_3.Input },],
        'disabled': [{ type: core_3.Input },],
        'usePSClass': [{ type: core_3.HostBinding, args: ['class.ps',] }, { type: core_3.Input },],
        'psPosStyle': [{ type: core_3.HostBinding, args: ['style.position',] }, { type: core_3.Input },],
        'runInsideAngular': [{ type: core_3.Input },],
        'config': [{ type: core_3.Input, args: ['perfectScrollbar',] },],
        'oldConfig': [{ type: core_3.Input, args: ['perfect-scrollbar',] },],
    };
    return PerfectScrollbarDirective;
}());
exports.PerfectScrollbarDirective = PerfectScrollbarDirective;
//# sourceMappingURL=perfect-scrollbar.directive.js.map