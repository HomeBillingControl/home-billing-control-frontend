/**
 * Created by crist on 05/05/2017.
 */
export default class ButtonController {
  constructor($state) {
    this._$state = $state;
  }
}

export const Button = {
  template: require('./button.html'),
  controller: ButtonController,
  bindings: {
    label: '@',
    btnClass: '@',
    bntAction: '='
  }
};