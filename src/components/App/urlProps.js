import { UrlQueryParamTypes, Serialize } from 'react-url-query';

/**
 * This object documents state that we want to keep in the URL. This configuration
 * will be shared mymultiple containers.
 * @type {Object}
 */
export const urlPropsQueryConfig = {
  colorBy: { type: UrlQueryParamTypes.string },
  search: {
    type: {
      encode: Serialize.encodeJson,
      decode: Serialize.decodeJson,
    },
  },
  filters: {
    type: {
      encode: Serialize.encodeJson,
      decode: Serialize.decodeJson,
    },
  },
};

export const urlPropDefaults = {
  filters: {},
};
