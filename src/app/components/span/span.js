/**
 * Created by crist on 06/05/2017.
 */
export default class SpanController {

}

export const Span = {
  template: require('./span.html'),
  controller: SpanController,
  bindings: {
    spanClass: "@",
    spanValue: "@"
  }
};