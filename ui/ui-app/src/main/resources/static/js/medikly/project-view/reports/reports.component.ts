import {Component, OnDestroy, OnInit} from '@angular/core';
//import {ToolbarService} from '../../core/toolbar/toolbar.service';
import { DialogFolder } from '../../shared/dialog/dialog-folder.component';
import {MatDialog} from "@angular/material";
import { DialogLabel } from '../../shared/dialog/dialog-label.component';
@Component({
  selector: 'app-projects-reports',
  templateUrl: 'js/medikly/project-view/reports/reports.component.html',
  styleUrls: ['js/medikly/project-view/reports/reports.component.css']
})
export class ReportsComponent implements OnInit, OnDestroy {
    folderMenu = [{icon: 'folder', title: 'Folder 1'}, {icon: 'folder', title: 'Folder 2'}];
    labelMenu = [{icon: 'label', title: 'Label 1'}, {icon: 'label', title: 'Label 2'}];
    dataMenu = [{icon: 'subtitles', title: 'Data Model'}, {icon: 'settings_input_component', title: 'Data Sources'}];
    infoMenu = [{icon: 'settings', title: 'Settings'}, {icon: 'feedback', title: 'Send feedback'}, {
        icon: 'help',
        title: 'Help'
    }];

    pieRadius: 75;

    chartOptionsVertical = {
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

    chartOptions = {
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

    constructor(public dialog: MatDialog) {

    }
    //Dialog New Folder
    openDialogFolder() {
        let dialogRef = this.dialog.open(DialogFolder);
        dialogRef.afterClosed().subscribe(result => {
            if (result) this.createFolder(result);
        });
    }

    createFolder(name) {
        this.folderMenu.push({icon: 'folder', title: name});
    }

    //Dialog New Label
    openDialogLabel() {
        let dialogRef = this.dialog.open(DialogLabel);
        dialogRef.afterClosed().subscribe(result => {
            if (result) this.createLabel(result);
        });
    }

    createLabel(name) {
        this.labelMenu.push({icon: 'label', title: name});
    }
    isOver(): boolean {
        return window.matchMedia(`(max-width: 960px)`).matches;
    }

    ngOnInit() {
        //this.ts.setToolbarColor('dark-blue');
        //this.ts.setSearchBarVisible(false);
        // this.ts.setBackRoute('/projects/home/recent');
    }

    ngOnDestroy() {
        //this.ts.restoreToolbarColor();
        // this.ts.setBackRoute('');
        //this.ts.setSearchBarVisible(true);
    }
}
