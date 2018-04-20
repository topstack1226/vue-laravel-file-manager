import HTTP from './axios-settings';

const getQueries = {
  /**
   * Get configuration data from server
   * @returns {AxiosPromise<any>}
   */
  initialize() {
    return HTTP.get('initialize');
  },

  /**
   * Get directories for the tree (upper level)
   * @param disk
   * @param path
   * @returns {AxiosPromise<any>}
   */
  tree(disk, path) {
    return HTTP.get('tree', {
      params: {
        disk,
        path,
      },
    });
  },

  /**
   * Select disk
   * @param disk
   * @returns {AxiosPromise<any>}
   */
  selectDisk(disk) {
    return HTTP.get('select-disk', {
      params: { disk },
    });
  },

  /**
   * Get content (files and folders)
   * @param disk
   * @param path
   * @returns {AxiosPromise<any>}
   */
  content(disk, path) {
    return HTTP.get('content', {
      params: {
        disk,
        path,
      },
    });
  },

  /**
   * Item properties
   * @param disk
   * @param path
   * @returns {AxiosPromise<any>}
   */
  properties(disk, path) {
    return HTTP.get('properties', {
      params: {
        disk,
        path,
      },
    });
  },

  url(disk, path) {
    return HTTP.get('url', {
      params: {
        disk,
        path,
      },
    });
  },
};

export default getQueries;
