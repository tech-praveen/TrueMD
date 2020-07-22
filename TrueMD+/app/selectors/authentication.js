import { createSelector } from 'reselect';
import { Storage } from '../storage/storage';

const storeUserAccessToken = state => (
    console.log('==============')
    // Storage.setItemWithKeyAndValue('APP_ACCESS_TOKEN', 'parsedResponse');
);

export const userAuthentication = createSelector(
  [storeUserAccessToken],
);
