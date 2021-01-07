import { HomePage } from './';
import { VaultPage } from '../vault/';

export default {
  path: '',
  childRoutes: [
    { path: 'index', component: VaultPage, isIndex: true },
  ],
};
