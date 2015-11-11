import Battery from './device/battery.js';
import Language from './device/language.js';

import Coordinates from './position/coordinates.js';
import Timezone from './position/timezone.js';

export default {
  "categories": [
    {
      "name": "Position",
      "active": true,
      "items" : [
        new Coordinates(true),
        new Timezone()
      ]
    },
    {
      "name": "Device",
      "active": false,
      "items" : [
        new Battery(true),
        new Language()
      ]
    }
  ]
}
