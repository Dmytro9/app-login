import { CONST } from '../constants';
import { storageGet } from '../utils/local-storage';

export const checkAuth = () => {
  const username = storageGet(CONST.STORAGE_KEY);
  if (username) {
    return true;
  }
  return false;
};
