export default class NavBarData {

  static getBrand() {
    return {id: 0, url: '/', text: 'Matt Szabo'};
  }

  static getNavBarList() {
    return [
        {id: 0, url: '#home', text: 'home'},
        {id: 1, url: '#about', text: 'about'},
        {id: 2, url: '#projects', text: 'projects'},
        {id: 3, url: '#skills', text: 'skills'},
        {id: 4, url: '#contact', text: 'contact'}
    ];
  }
}
