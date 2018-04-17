/**
 * Created by development on 26/9/17.
 */
import {Component, OnInit} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
//import * as Quill from 'quill';

@Component({
  selector: 'app-project-summary',
  templateUrl: 'js/medikly/project-workspace/project-summary/project-summary.component.html',
  styleUrls: ['js/medikly/project-workspace/project-summary/project-summary.component.css']
})
export class ProjectSummaryComponent implements OnInit{
  text: string = '# Studio et Solis ramum annis quod vultus\r\n\r\n' +
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
  public form: FormGroup;

  options: any = {
    lineWrapping: true,
    toolbar: false,
  };


  constructor(private fb: FormBuilder, private http: Http) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      markdown: [ this.text , Validators.compose([Validators.maxLength(250)])],
    });
  }

}
