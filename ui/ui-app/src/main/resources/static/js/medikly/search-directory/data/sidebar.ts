/**
 * Created by development on 30/6/17.
 */
import {MockModel} from './model';
export const DATA: MockModel[] = [
  {
    title: 'Providers',
    icon: 'person', type: 'sub',
    children: [
      {
        title: 'Provider Details',
        icon: 'Pd',
        type: 'sub',
        badge: [
          {type: 'blue', value: '23'}
        ], filter: [{form: ''}]
      },

      {
        title: 'Group Practices', icon: 'Gp', type: 'sub', badge: [
        {type: 'blue', value: '99'}
      ], filter: [{form: ''}]
      },
      {title: 'Education and Expertise', icon: 'Ee', type: 'sub', filter: [{form: ''}]},
      {title: 'Practice Overview', icon: 'Po', type: 'sub', filter: [{form: ''}]},
      {
        title: 'Affiliations', icon: 'Af', type: 'sub', badge: [
        {type: 'blue', value: '51'}
      ], filter: [{form: ''}]
      },
      {title: 'Identifiers', icon: 'If', type: 'sub', filter: [{form: ''}]},
    ]
  },
  {
    title: 'Facilities',
    type: 'sub',
    icon: 'domain',
    children: [
      {
        title: 'Organization Details',
        icon: 'Od',
        type: 'sub',
        badge: [
          {type: 'blue', value: '23'}
        ], filter: [{form: ''}]
      },
      {title: 'Hospital type', icon: 'Ht', type: 'sub', filter: [{form: ''}]},
      {
        title: 'Hospital Ownership', icon: 'Ho', type: 'sub', badge: [
        {type: 'blue', value: '99'}
      ], filter: [{form: ''}]
      }/*,
      {
        title: 'Emergency Services', icon: 'Es', type: 'sub', badge: [
        {type: 'blue', value: '99'}
      ], filter: [{form: ''}]
      }*/
    ]
  },
  {
    title: 'Geography',
    type: 'sub',
    icon: 'group'
  },
  {
    title: 'Conditions',
    type: 'sub',
    icon: 'group'
  },
  {
    title: 'Prescriptions',
    type: 'sub',
    icon: 'group',
    children: [
      {title: 'Prescriptions Details', icon: 'Pd', type: 'sub', filter: [{form: ''}]},
      {title: 'Prescriptions Metrics', icon: 'Pc', type: 'sub', filter: [{form: ''}]},
      {title: 'Other Prescriptions', icon: 'Op', type: 'sub', filter: [{form: ''}]},
      {title: 'Mapd Prescriptions', icon: 'Mp', type: 'sub', filter: [{form: ''}]}/*,
      {title: 'PDP Prescriptions', icon: 'Pp', type: 'sub', filter: [{form: ''}]},
      {title: 'Opioid Prescriptions', icon: 'Op', type: 'sub', filter: [{form: ''}]},
      {title: 'Antibiotic  Prescriptions', icon: 'Ap', type: 'sub', filter: [{form: ''}]},
      {title: 'Antipsychotic Prescriptions', icon: 'Ap', type: 'sub', filter: [{form: ''}]}*/
    ]
  },
  {
    title: 'Procedures',
    type: 'sub',
    icon: 'group'
  },
  {
    title: 'Referrals',
    type: 'sub',
    icon: 'share'
  },
  {
    title: 'Campaign',
    type: 'sub',
    icon: 'group'
  },
];








