/**
 * Created by crist on 03/05/2017.
 */
class AppController {
  constructor() {
    this.myData = [
      {
        firstName: 'Cox',
        lastName: 'Carney',
        company: 'Enormo',
        employed: true
      },
      {
        firstName: 'Lorraine',
        lastName: 'Wise',
        company: 'Comveyer',
        employed: false
      },
      {
        firstName: 'Nancy',
        lastName: 'Waters',
        company: 'Fuelton',
        employed: false
      }
    ];
  }
}

export const App = {
  template: require('./app.html'),
  controller: AppController
};