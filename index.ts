import './types/interfaces/augment-api';
import './types/interfaces/augment-types';
import './types/interfaces/index';
import './types/interfaces/types-lookup';

import * as definitions from './types/interfaces/definitions';

// extract all types from definitions - fast and dirty approach, flatted on 'types'
const aroTypes = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

export const typesBundleForAroNetwork = {
  spec: {
    aro: {
      types: [
        {
          minmax: [0, undefined],
          types: aroTypes
        }
      ]
    },
  }
};
