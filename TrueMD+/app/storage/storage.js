
import { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export class Storage extends Component {
  static async getItemWithKey(key, action) {
    try {
      const data = await AsyncStorage.getItem(key);
      const parsedData = JSON.parse(data);
      action(parsedData);
    } catch (error) {
      action(null);
    }
  }

  static async setItemWithKeyAndValue(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  }

  static async deleteItem(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  }


  static async deleteMultipleItem(keys) {
    try {
      await AsyncStorage.multiRemove(keys);
      return true;
    } catch (error) {
      return false;
    }
  }

  static async clearAsyncStorage() {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (error) {
      return false;
    }
  }
}

export const StorageKeys = {
  APP_ACCESS_TOKEN: 'APP_ACCESS_TOKEN',
};
