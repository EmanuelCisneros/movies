import homeModule from './home/home.module';
import moviesModule from './movies/movies.module';
import routerHelperProvider from './router-helper.provider';
import navigationService from './navigation.service';

const coreModule = angular.module('coreModule', [
  homeModule.name,
  moviesModule.name
]);
export default coreModule
  .provider('routerHelper', routerHelperProvider)
  .service('navigationService', navigationService);
