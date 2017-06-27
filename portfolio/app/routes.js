// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'BabyOnlineDetails',
      name: 'BabyOnlineDetails',
      getComponent(location, cb) {
        import('containers/BabyOnlineDetails')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'TuristicosDetails',
      name: 'turisticosDetails',
      getComponent(location, cb) {
        import('containers/TuristicosDetails')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'DigaDetails',
      name: 'digaDetails',
      getComponent(location, cb) {
        import('containers/DigaDetails')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'EvergreenDetails',
      name: 'evergreenDetails',
      getComponent(location, cb) {
        import('containers/EvergreenDetails')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'RefugioDetails',
      name: 'refugioDetails',
      getComponent(location, cb) {
        import('containers/RefugioDetails')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'ElMundoDetails',
      name: 'elMundoDetails',
      getComponent(location, cb) {
        import('containers/ElMundoDetails')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'PamelaCayonDetails',
      name: 'pamelaCayonDetails',
      getComponent(location, cb) {
        import('containers/PamelaCayonDetails')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'RallyDetails',
      name: 'rallyDetails',
      getComponent(location, cb) {
        import('containers/RallyDetails')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'AdrianDetails',
      name: 'adrianDetails',
      getComponent(location, cb) {
        import('containers/AdrianDetails')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'ReySolDetails',
      name: 'reySolDetails',
      getComponent(location, cb) {
        import('containers/ReySolDetails')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'CenterDetails',
      name: 'centerDetails',
      getComponent(location, cb) {
        import('containers/CenterDetails')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'MagazineDetails',
      name: 'magazineDetails',
      getComponent(location, cb) {
        import('containers/MagazineDetails')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'TicxDetails',
      name: 'ticxDetails',
      getComponent(location, cb) {
        import('containers/TicxDetails')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'SocialClubDetails',
      name: 'socialClubDetails',
      getComponent(location, cb) {
        import('containers/SocialClubDetails')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
