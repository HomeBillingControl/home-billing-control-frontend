/**
 * Created by crist on 05/05/2017.
 */
export default class ButtonController {

}

export const Button = {
  template: require('./button.html'),
  controller: ButtonController,
  bindings: {
    label: '@',
    class: '@'
  }
};