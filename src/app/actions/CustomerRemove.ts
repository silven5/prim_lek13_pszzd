import { ActionEx } from './ActionEx';
import { CustomerActionTypes } from './CustomerActionTypes';

export class CustomerRemove implements ActionEx {
  readonly type = CustomerActionTypes.Remove;
  constructor(public payload: any) {}
}
