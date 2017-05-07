/**
 * Created by crist on 06/05/2017.
 */
export default class InputController {

}

export const Input = {
  template: require('./input.html'),
  controller: InputController,
  bindings: {
    divClass: "@",
    inputClass: "@",
    spanClass: "@",
    holder: "@",
    type: "@"
  }
};
