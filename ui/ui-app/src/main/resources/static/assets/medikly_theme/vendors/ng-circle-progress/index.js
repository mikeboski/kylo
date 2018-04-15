import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/Rx';

var CircleProgressOptions = (function () {
    function CircleProgressOptions() {
        this.class = '';
        this.backgroundColor = 'transparent';
        this.backgroundOpacity = 1;
        this.backgroundStroke = 'transparent';
        this.backgroundStrokeWidth = 0;
        this.backgroundPadding = 5;
        this.percent = 0;
        this.radius = 90;
        this.space = 4;
        this.toFixed = 0;
        this.maxPercent = 1000;
        this.renderOnClick = true;
        this.units = '%';
        this.unitsFontSize = '10';
        this.unitsColor = '#444444';
        this.outerStrokeWidth = 8;
        this.outerStrokeColor = '#78C000';
        this.outerStrokeLinecap = 'round';
        this.innerStrokeColor = '#C7E596';
        this.innerStrokeWidth = 4;
        this.titleFormat = undefined;
        this.titleColor = '#444444';
        this.titleFontSize = '20';
        this.subtitleFormat = undefined;
        this.subtitle = 'progress';
        this.subtitleColor = '#A9A9A9';
        this.subtitleFontSize = '10';
        this.animation = true;
        this.animateTitle = true;
        this.animateSubtitle = false;
        this.animationDuration = 500;
        this.showTitle = true;
        this.showSubtitle = true;
        this.showUnits = true;
        this.showBackground = true;
        this.showInnerStroke = true;
    }
    return CircleProgressOptions;
}());
var CircleProgressComponent = (function () {
    /**
     * @param {?} defaultOptions
     */
    function CircleProgressComponent(defaultOptions) {
        var _this = this;
        this.onClick = new EventEmitter();
        this.options = new CircleProgressOptions();
        this.defaultOptions = new CircleProgressOptions();
        this.applyOptions = function () {
            // the options of <circle-progress> may change already
            for (var _i = 0, _a = Object.keys(_this.options); _i < _a.length; _i++) {
                var name_1 = _a[_i];
                if (_this.hasOwnProperty(name_1) && _this[name_1] !== undefined) {
                    _this.options[name_1] = _this[name_1];
                }
                else if (_this.templateOptions && _this.templateOptions[name_1] !== undefined) {
                    _this.options[name_1] = _this.templateOptions[name_1];
                }
            }
            // make sure key options valid
            _this.options.radius = Math.abs(+_this.options.radius);
            if (_this.options.radius < 50) {
                _this.options.radius = 50;
            }
            _this.options.space = Math.abs(+_this.options.space);
            _this.options.percent = Math.abs(+_this.options.percent);
            _this.options.maxPercent = Math.abs(+_this.options.maxPercent);
            _this.options.animationDuration = Math.abs(_this.options.animationDuration);
            _this.options.outerStrokeWidth = Math.abs(+_this.options.outerStrokeWidth);
            _this.options.innerStrokeWidth = Math.abs(+_this.options.innerStrokeWidth);
            _this.options.backgroundPadding = +_this.options.backgroundPadding;
        };
        this.render = function () {
            _this.applyOptions();
            if (_this.options.animation && _this.options.animationDuration > 0) {
                _this.animate();
            }
            else {
                _this.draw(_this.options.percent);
            }
        };
        this.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
            var /** @type {?} */ angleInRadius = angleInDegrees * Math.PI / 180;
            var /** @type {?} */ x = centerX + Math.sin(angleInRadius) * radius;
            var /** @type {?} */ y = centerY - Math.cos(angleInRadius) * radius;
            return { x: x, y: y };
        };
        this.draw = function (percent) {
            // make percent reasonable
            percent = (percent === undefined) ? _this.options.percent : Math.abs(percent);
            // circle percent shouldn't be greater than 100%.
            var /** @type {?} */ circlePercent = (percent > 100) ? 100 : percent;
            // determine box size
            var /** @type {?} */ boxSize = _this.options.radius * 2 + _this.options.outerStrokeWidth * 2;
            if (_this.options.showBackground) {
                boxSize += (_this.options.backgroundStrokeWidth * 2 + _this.max(0, _this.options.backgroundPadding * 2));
            }
            // the centre of the circle
            var /** @type {?} */ centre = { x: boxSize / 2, y: boxSize / 2 };
            // the start point of the arc
            var /** @type {?} */ startPoint = { x: centre.x, y: centre.y - _this.options.radius };
            // get the end point of the arc
            var /** @type {?} */ endPoint = _this.polarToCartesian(centre.x, centre.y, _this.options.radius, 360 * circlePercent / 100);
            // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x slightly.
            if (circlePercent === 100) {
                endPoint.x = endPoint.x - 0.01;
            }
            // largeArcFlag and sweepFlag
            var /** @type {?} */ largeArcFlag, /** @type {?} */ sweepFlag;
            if (circlePercent > 50) {
                _a = [1, 1], largeArcFlag = _a[0], sweepFlag = _a[1];
            }
            else {
                _b = [0, 1], largeArcFlag = _b[0], sweepFlag = _b[1];
            }
            // percent may not equal the actual percent
            var /** @type {?} */ titlePercent = _this.options.animateTitle ? percent : _this.options.percent;
            var /** @type {?} */ titleTextPercent = titlePercent > _this.options.maxPercent ?
                _this.options.maxPercent.toFixed(_this.options.toFixed) + "+" : titlePercent.toFixed(_this.options.toFixed);
            var /** @type {?} */ subtitlePercent = _this.options.animateSubtitle ? percent : _this.options.percent;
            // assemble all
            _this.svg = {
                width: boxSize,
                height: boxSize,
                backgroundCircle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: _this.options.radius + _this.options.outerStrokeWidth / 2 + _this.options.backgroundPadding,
                    fill: _this.options.backgroundColor,
                    fillOpacity: _this.options.backgroundOpacity,
                    stroke: _this.options.backgroundStroke,
                    strokeWidth: _this.options.backgroundStrokeWidth,
                },
                path: {
                    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
                    d: "M " + startPoint.x + " " + startPoint.y + " \n        A " + _this.options.radius + " " + _this.options.radius + " 0 " + largeArcFlag + " " + sweepFlag + " " + endPoint.x + " " + endPoint.y,
                    stroke: _this.options.outerStrokeColor,
                    strokeWidth: _this.options.outerStrokeWidth,
                    strokeLinecap: _this.options.outerStrokeLinecap,
                    fill: 'none'
                },
                circle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: _this.options.radius - _this.options.space - _this.options.outerStrokeWidth / 2 - _this.options.innerStrokeWidth / 2,
                    fill: 'none',
                    stroke: _this.options.innerStrokeColor,
                    strokeWidth: _this.options.innerStrokeWidth,
                },
                title: {
                    x: centre.x,
                    y: centre.y,
                    textAnchor: 'middle',
                    text: (_this.options.titleFormat !== undefined && _this.options.titleFormat.constructor.name === 'Function')
                        ? _this.options.titleFormat(titlePercent) : titleTextPercent,
                    color: _this.options.titleColor,
                    fontSize: _this.options.titleFontSize,
                },
                units: {
                    text: "" + _this.options.units,
                    fontSize: _this.options.unitsFontSize,
                    color: _this.options.unitsColor
                },
                subtitle: {
                    x: centre.x,
                    y: centre.y + 15,
                    textAnchor: 'middle',
                    text: (_this.options.subtitleFormat !== undefined && _this.options.subtitleFormat.constructor.name === 'Function')
                        ? _this.options.subtitleFormat(subtitlePercent) : _this.options.subtitle,
                    color: _this.options.subtitleColor,
                    fontSize: _this.options.subtitleFontSize
                },
            };
            var _a, _b;
        };
        this.min = function (a, b) {
            return a < b ? a : b;
        };
        this.max = function (a, b) {
            return a > b ? a : b;
        };
        this.getAnimationParameters = function () {
            var /** @type {?} */ MIN_INTERVAL = 10;
            var /** @type {?} */ times, /** @type {?} */ step, /** @type {?} */ interval;
            if (_this.options.percent >= 100) {
                // we will finish animation in 100 times
                times = 100;
                if (!_this.options.animateTitle && !_this.options.animateSubtitle) {
                    step = 1;
                }
                else {
                    // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
                    step = Math.round(_this.min(_this.options.percent, _this.options.maxPercent) / times);
                }
            }
            else {
                // we will finish in as many times as the number of percent.
                times = _this.options.percent;
                step = 1;
            }
            // Get the interval of timer
            interval = Math.round(_this.options.animationDuration / times);
            // Readjust all values if the interval of timer is extremely small.
            if (interval < MIN_INTERVAL) {
                interval = MIN_INTERVAL;
                times = _this.options.animationDuration / interval;
                if (!_this.options.animateTitle && !_this.options.animateSubtitle && _this.options.percent > 100) {
                    step = Math.round(100 / times);
                }
                else {
                    step = Math.round(_this.min(_this.options.percent, _this.options.maxPercent) / times);
                }
            }
            // step must be greater than 0.
            if (step < 1) {
                step = 1;
            }
            return { times: times, step: step, interval: interval };
        };
        this.animate = function () {
            if (_this._timerSubscription && !_this._timerSubscription.closed) {
                _this._timerSubscription.unsubscribe();
            }
            var _a = _this.getAnimationParameters(), step = _a.step, interval = _a.interval;
            var /** @type {?} */ count = 0;
            _this._timerSubscription = Observable.timer(0, interval).subscribe(function () {
                count += step;
                if (count <= _this.options.percent) {
                    if (!_this.options.animateTitle && !_this.options.animateSubtitle && count >= 100) {
                        _this.draw(_this.options.percent);
                        _this._timerSubscription.unsubscribe();
                    }
                    else {
                        _this.draw(count);
                    }
                }
                else {
                    _this.draw(_this.options.percent);
                    _this._timerSubscription.unsubscribe();
                }
            });
        };
        this.emitClickEvent = function (event) {
            if (_this.options.renderOnClick) {
                _this.animate();
            }
            _this.onClick.emit(event);
        };
        Object.assign(this.options, defaultOptions);
        Object.assign(this.defaultOptions, defaultOptions);
    }
    /**
     * @return {?}
     */
    CircleProgressComponent.prototype.isDrawing = function () {
        return (this._timerSubscription && !this._timerSubscription.closed) ? true : false;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CircleProgressComponent.prototype.ngOnChanges = function (changes) {
        this.render();
    };
    return CircleProgressComponent;
}());
CircleProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'circle-progress',
                template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"svg\" \n      [attr.height]=\"svg.height\" [attr.width]=\"svg.width\" (click)=\"emitClickEvent($event)\" [attr.class]=\"options.class\">\n      <circle *ngIf=\"options.showBackground\" \n        [attr.cx]=\"svg.backgroundCircle.cx\" \n        [attr.cy]=\"svg.backgroundCircle.cy\" \n        [attr.r]=\"svg.backgroundCircle.r\" \n        [attr.fill]=\"svg.backgroundCircle.fill\"\n        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n        [attr.stroke]=\"svg.backgroundCircle.stroke\" \n        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n      <path \n        [attr.d]=\"svg.path.d\" \n        [attr.stroke]=\"svg.path.stroke\" \n        [attr.stroke-width]=\"svg.path.strokeWidth\" \n        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n        [attr.fill]=\"svg.path.fill\"/>\n      <circle *ngIf=\"options.showInnerStroke\" \n        [attr.cx]=\"svg.circle.cx\" \n        [attr.cy]=\"svg.circle.cy\" \n        [attr.r]=\"svg.circle.r\" \n        [attr.fill]=\"svg.circle.fill\"\n        [attr.stroke]=\"svg.circle.stroke\" \n        [attr.stroke-width]=\"svg.circle.strokeWidth\"/>\n      <text *ngIf=\"options.showTitle\" \n        [attr.text-anchor]=\"svg.title.textAnchor\" \n        [attr.x]=\"svg.title.x\" \n        [attr.y]=\"svg.title.y\">\n        <tspan \n          [attr.font-size]=\"svg.title.fontSize\" \n          [attr.fill]=\"svg.title.color\">{{svg.title.text}}</tspan>\n        <tspan *ngIf=\"options.showUnits\" \n          [attr.font-size]=\"svg.units.fontSize\"\n          [attr.fill]=\"svg.units.color\">{{svg.units.text}}</tspan>\n      </text>\n      <text *ngIf=\"options.showSubtitle\"\n        [attr.text-anchor]=\"svg.subtitle.textAnchor\" \n        [attr.fill]=\"svg.subtitle.color\" \n        [attr.x]=\"svg.subtitle.x\"\n        [attr.y]=\"svg.subtitle.y\">\n        <tspan [attr.font-size]=\"svg.subtitle.fontSize\">{{svg.subtitle.text}}</tspan>\n      </text>\n    </svg>  \n  "
            },] },
];
/**
 * @nocollapse
 */
CircleProgressComponent.ctorParameters = function () { return [
    { type: CircleProgressOptions, },
]; };
CircleProgressComponent.propDecorators = {
    'onClick': [{ type: Output },],
    'class': [{ type: Input },],
    'backgroundColor': [{ type: Input },],
    'backgroundOpacity': [{ type: Input },],
    'backgroundStroke': [{ type: Input },],
    'backgroundStrokeWidth': [{ type: Input },],
    'backgroundPadding': [{ type: Input },],
    'radius': [{ type: Input },],
    'space': [{ type: Input },],
    'percent': [{ type: Input },],
    'toFixed': [{ type: Input },],
    'maxPercent': [{ type: Input },],
    'renderOnClick': [{ type: Input },],
    'units': [{ type: Input },],
    'unitsFontSize': [{ type: Input },],
    'unitsColor': [{ type: Input },],
    'outerStrokeWidth': [{ type: Input },],
    'outerStrokeColor': [{ type: Input },],
    'outerStrokeLinecap': [{ type: Input },],
    'innerStrokeColor': [{ type: Input },],
    'innerStrokeWidth': [{ type: Input },],
    'titleFormat': [{ type: Input },],
    'titleColor': [{ type: Input },],
    'titleFontSize': [{ type: Input },],
    'subtitleFormat': [{ type: Input },],
    'subtitle': [{ type: Input },],
    'subtitleColor': [{ type: Input },],
    'subtitleFontSize': [{ type: Input },],
    'animation': [{ type: Input },],
    'animateTitle': [{ type: Input },],
    'animateSubtitle': [{ type: Input },],
    'animationDuration': [{ type: Input },],
    'showTitle': [{ type: Input },],
    'showSubtitle': [{ type: Input },],
    'showUnits': [{ type: Input },],
    'showBackground': [{ type: Input },],
    'showInnerStroke': [{ type: Input },],
    'templateOptions': [{ type: Input, args: ['options',] },],
};

var NgCircleProgressModule = (function () {
    function NgCircleProgressModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    NgCircleProgressModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: NgCircleProgressModule,
            providers: [
                { provide: CircleProgressOptions, useValue: options }
            ]
        };
    };
    return NgCircleProgressModule;
}());
NgCircleProgressModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    CircleProgressComponent,
                ],
                exports: [
                    CircleProgressComponent,
                ]
            },] },
];
/**
 * @nocollapse
 */
NgCircleProgressModule.ctorParameters = function () { return []; };

export { NgCircleProgressModule, CircleProgressOptions, CircleProgressComponent };
