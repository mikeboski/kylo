export class MockModel {
    title: string;
    icon?: string;
    type: string;
    description?: string;
    background?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
  title: string;
  icon?: string;
  type: string;
  badge?: BadgeItem[];
  filter?: FilterItems[];
}
export interface FilterItems {
  form: string;
}
export interface BadgeItem {
  type: string;
  value: string;
}
