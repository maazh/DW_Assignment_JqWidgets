import { baseURL } from './baseurl';

// Function for settting the default restangular configuration
// this is where you configure the restapi server route to commuincate
export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl(baseURL);
}