import { ActionEx } from './ActionEx';
import { CustomerActionTypes } from './CustomerActionTypes';

export class CustomerAdd implements ActionEx {
  readonly type = CustomerActionTypes.Add;
  constructor(public payload: any) {}
}
