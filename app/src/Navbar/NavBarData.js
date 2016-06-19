export default class NavBarData {

  static getBrand() {
    return {id: 0, url: '/', text: 'Matt Szabo'};
  }

  static getNavBarList() {
    return [
        {id: 0, url: 'portfolio#home', text: 'home'},
        {id: 1, url: 'portfolio#about', text: 'about'},
        {id: 2, url: 'portfolio#projects', text: 'projects'},
        {id: 3, url: 'portfolio#skills', text: 'skills'},
        {id: 4, url: 'portfolio#contact', text: 'contact'}
    ];
  }
}
