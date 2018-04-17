var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/http", "@angular/forms"], function (require, exports, core_1, http_1, forms_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //import * as Quill from 'quill';
    var ProjectSummaryComponent = /** @class */ (function () {
        function ProjectSummaryComponent(fb, http) {
            this.fb = fb;
            this.http = http;
            this.text = '# Studio et Solis ramum annis quod vultus\r\n\r\n' +
                '## Fortibus propior\r\n\r\n' +
                'Lorem markdownum quid quoque trahit ales quoque petentem lacusque praedictaque\r\n' +
                'amore spectacula perque aret pectus, est! Umbrosum hoc nescio? Fortuna carpitque\r\n' +
                'saltuque Olympi *pictam*, iamque istis tristique ossa reor.\r\n\r\n ' +
                'if (tMp) {\r\n ' +
                'deprecatedInbox = 83;\r\n ' +
                'switch_aiff(class_reimage);\r\n } else {\r\n ' +
                'middleware.pseudocode(minicomputer_rss, 3);\r\n }\r\n ' +
                'if (web) {\r\n software_alignment_guid(google_bps, storage, spam);\r\n ' +
                '} else {\r\n mail_pppoe_internet *= unit_system_sector;\r\n ' +
                'blob *= ping_lossy + fifoLogic;\r\n }\r\n controller = wi;\r\n ' +
                'drive_point_codec.push_reader_activex = 4 + imap_ppga + tape;\r\n ' +
                'wwwAd += cardHalftoneYobibyte \/ dvi_name_quicktime + -5;\r\n\r\n' +
                '## Futuro sive ope silentia sed\r\n\r\n' +
                'Quod dederatque coacti pars, non, agat mea. Ubi miserrima **venatrixque** summe\r\n' +
                'etiam minimo sanguinis in fine bello!\r\n\r\n' +
                '## Tibi aevo communis domitae Corinthus sic sorte\r\n\r\n' +
                'Picta poma manibus scelerato atque, quisque hosti lustrabere autumnus profugus\r\n' +
                'cecidisse tamen labori caput dolore. Animis terras iste et deus graviore tuo,\r\nillo Troada contingat suis.\r\n\r\n' +
                '## Tantum ad qui progenuit\r\n\r\n*Patre venerantur a* orbem simul Cypro columnae terricula ardent verbere avidos.\r\n' +
                'Fuit tutus manare eburnea spiritus coniuge. Me pia\r\n[ille](http:\/\/dominumcrimen.org\/satis-robora): corpore **ut bustum flamine**\r\n' +
                'nocte rursusque tectis mutant ipsa: dimittit.\r\n\r\nRemovit recens et tergum gravitate mergit descendat medullis Anius; signum.\r\n' +
                'Insidias domini circumstetit aquae [spectata tertia perpetuum](http:\/\/nec.org\/)\r\n' +
                'seu templum, suam. Quamvis qui grave carissime tantique parvum decebat dies.\r\n' +
                'Hister est instar caput nisi infelix, **tum levibus**, cum volat.\r\n\r\n' +
                'Modo plura tantum tenus, verticibus qua dei insignia nostris adhuc! ' +
                'Tene ille\r\npicae corpora? Et solibus moenibus Achaia pervenerat sed nocte harenae pectora\r\nvel! ' +
                'Tenebat omnia fratri armentis in dabat Achillis.';
            this.options = {
                lineWrapping: true,
                toolbar: false,
            };
        }
        ProjectSummaryComponent.prototype.ngOnInit = function () {
            this.form = this.fb.group({
                markdown: [this.text, forms_1.Validators.compose([forms_1.Validators.maxLength(250)])],
            });
        };
        ProjectSummaryComponent = __decorate([
            core_1.Component({
                selector: 'app-project-summary',
                templateUrl: 'js/medikly/project-workspace/project-summary/project-summary.component.html',
                styleUrls: ['js/medikly/project-workspace/project-summary/project-summary.component.css']
            }),
            __metadata("design:paramtypes", [forms_1.FormBuilder, http_1.Http])
        ], ProjectSummaryComponent);
        return ProjectSummaryComponent;
    }());
    exports.ProjectSummaryComponent = ProjectSummaryComponent;
});
//# sourceMappingURL=project-summary.component.js.map