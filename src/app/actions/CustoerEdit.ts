import { ActionEx } from './ActionEx';
import { CustomerActionTypes } from './CustomerActionTypes';

export class CustomerEdit implements ActionEx {
  readonly type = CustomerActionTypes.Edit;
  constructor(public payload: any) {}
}
