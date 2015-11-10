import Battery from './device/battery.js';
import Language from './device/language.js';

import Elevation from './position/elevation.js';
import Timezone from './position/timezone.js';

export default {
  "categories": [
    {
      "name": "Position",
      "active": true,
      "items" : [
        new Elevation(),
        new Timezone()
      ]
    },
    {
      "name": "Device",
      "active": false,
      "items" : [
        new Battery(),
        new Language()
      ]
    }
  ]
}
