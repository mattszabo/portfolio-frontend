export default class NavBarData {

  static getBrand() {
    return {id: 0, url: '/', text: 'Matt Szabo'};
  }

  static getNavBarList() {
    return [
        {id: 0, url: '#home'      , text: 'HOME'       },
        {id: 1, url: '#about'     , text: 'ABOUT'      },
        {id: 2, url: '#projects'  , text: 'PROJECTS'   },
        {id: 5, url: '#references', text: 'REFERENCES' },
        {id: 6, url: '#contact'   , text: 'CONTACT'    }
    ];
  }
}
