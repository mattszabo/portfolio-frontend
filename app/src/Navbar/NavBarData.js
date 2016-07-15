export default class NavBarData {

  static getBrand() {
    return {id: 0, url: '/', text: 'Matt Szabo'};
  }

  static getNavBarList() {
    return [
        {id: 0, url: '#home'      , text: 'home'       },
        {id: 1, url: '#about'     , text: 'AbouT'      },
        {id: 2, url: '#projects'  , text: 'projecTs'   },
        {id: 3, url: '#references', text: 'references' },
        {id: 4, url: '#contact'   , text: 'conTAcT'    }
    ];
  }
}
