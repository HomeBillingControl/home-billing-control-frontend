/**
 * Created by crist on 06/05/2017.
 */
import {Button} from './button/button';
import {Input} from './input/input';
import {Span} from './span/span';

export default angular.module('components', ['ui.router'])
  .component('cmpButton', Button)
  .component('cmpInput', Input)
  .component('cmpSpan', Span)
  .name;