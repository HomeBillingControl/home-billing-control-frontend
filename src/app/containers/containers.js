/**
 * Created by crist on 06/05/2017.
 */
import {Login} from "./login/login";
import {Home} from "./home/home";
import {Content} from "./content/content";
import {Header} from "./header/header";
import {Footer} from "./footer/footer";
import {Sidebar} from './sidebar/sidebar';
import {SidebarMenu} from './sidebar/side-bar-menu/side-bar-menu';

export default angular
  .module('containers', ['ui.router'])
  .component('loginForm', Login)
  .component('homeForm', Home)
  .component('contentForm', Content)
  .component('headerForm', Header)
  .component('footerForm', Footer)
  .component('sidebarForm', Sidebar)
  .component('sidebarMenuForm', SidebarMenu)
  .name;
