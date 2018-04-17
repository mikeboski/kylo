var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../../shared/dialog/dialog-folder.component", "@angular/material", "../../shared/dialog/dialog-label.component"], function (require, exports, core_1, dialog_folder_component_1, material_1, dialog_label_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReportsComponent = /** @class */ (function () {
        function ReportsComponent(dialog) {
            this.dialog = dialog;
            this.folderMenu = [{ icon: 'folder', title: 'Folder 1' }, { icon: 'folder', title: 'Folder 2' }];
            this.labelMenu = [{ icon: 'label', title: 'Label 1' }, { icon: 'label', title: 'Label 2' }];
            this.dataMenu = [{ icon: 'subtitles', title: 'Data Model' }, { icon: 'settings_input_component', title: 'Data Sources' }];
            this.infoMenu = [{ icon: 'settings', title: 'Settings' }, { icon: 'feedback', title: 'Send feedback' }, {
                    icon: 'help',
                    title: 'Help'
                }];
            this.chartOptionsVertical = {
                credits: {
                    enabled: false
                },
                chart: {
                    type: 'bar',
                    height: '50px',
                    margin: [10, 0, 0, 0]
                },
                title: {
                    text: '<span class="hc-percent-value">68%</span> <span class="hc-percent-descr">Prescribers</span>',
                    useHTML: true
                },
                xAxis: {
                    categories: ['Prescribers'],
                    visible: false
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    visible: false,
                    gridLineWidth: 0,
                    reversed: true,
                    reversedStacks: true,
                    labels: {
                        enabled: false
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        stacking: 'percent'
                    }
                },
                series: [{
                        name: 'John',
                        data: [68],
                        color: '#C2185B',
                        showInLegend: false,
                    }, {
                        name: 'Jane',
                        data: [22],
                        color: '#f48fb1',
                        showInLegend: false,
                    }, {
                        name: 'Joe',
                        data: [10],
                        color: '#FCE4EC',
                        showInLegend: false,
                    }]
            };
            this.chartOptions = {
                credits: {
                    enabled: false
                },
                chart: {
                    type: 'bar',
                    height: '100px',
                    margin: [59, 10, 0, 0]
                },
                title: {
                    text: '<span class="hc-percent-value">68%</span> <span class="hc-percent-descr">Prescribers</span>',
                    useHTML: true
                },
                xAxis: {
                    categories: ['Prescribers'],
                    visible: false
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    visible: false,
                    gridLineWidth: 0,
                    reversed: true,
                    reversedStacks: true,
                    labels: {
                        enabled: false
                    }
                },
                legend: {
                    reversed: false,
                    verticalAlign: 'top',
                    align: 'right',
                    width: 200
                },
                plotOptions: {
                    series: {
                        stacking: 'percent'
                    }
                },
                series: [{
                        name: 'John',
                        data: [68],
                        color: '#C2185B',
                    }, {
                        name: 'Jane',
                        data: [22],
                        color: '#f48fb1'
                    }, {
                        name: 'Joe',
                        data: [10],
                        color: '#FCE4EC'
                    }]
            };
        }
        //Dialog New Folder
        ReportsComponent.prototype.openDialogFolder = function () {
            var _this = this;
            var dialogRef = this.dialog.open(dialog_folder_component_1.DialogFolder);
            dialogRef.afterClosed().subscribe(function (result) {
                if (result)
                    _this.createFolder(result);
            });
        };
        ReportsComponent.prototype.createFolder = function (name) {
            this.folderMenu.push({ icon: 'folder', title: name });
        };
        //Dialog New Label
        ReportsComponent.prototype.openDialogLabel = function () {
            var _this = this;
            var dialogRef = this.dialog.open(dialog_label_component_1.DialogLabel);
            dialogRef.afterClosed().subscribe(function (result) {
                if (result)
                    _this.createLabel(result);
            });
        };
        ReportsComponent.prototype.createLabel = function (name) {
            this.labelMenu.push({ icon: 'label', title: name });
        };
        ReportsComponent.prototype.isOver = function () {
            return window.matchMedia("(max-width: 960px)").matches;
        };
        ReportsComponent.prototype.ngOnInit = function () {
            //this.ts.setToolbarColor('dark-blue');
            //this.ts.setSearchBarVisible(false);
            // this.ts.setBackRoute('/projects/home/recent');
        };
        ReportsComponent.prototype.ngOnDestroy = function () {
            //this.ts.restoreToolbarColor();
            // this.ts.setBackRoute('');
            //this.ts.setSearchBarVisible(true);
        };
        ReportsComponent = __decorate([
            core_1.Component({
                selector: 'app-projects-reports',
                templateUrl: 'js/medikly/project-view/reports/reports.component.html',
                styleUrls: ['js/medikly/project-view/reports/reports.component.css']
            }),
            __metadata("design:paramtypes", [material_1.MatDialog])
        ], ReportsComponent);
        return ReportsComponent;
    }());
    exports.ReportsComponent = ReportsComponent;
});
//# sourceMappingURL=reports.component.js.map