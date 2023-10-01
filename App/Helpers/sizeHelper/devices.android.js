import {Dimensions} from 'react-native';

const device = Dimensions.get('window');
let scale;

if (device.width <= 414) {
  // Android smartphones
  scale = device.width / 414;
} else if (device.width > 414 && device.width <= 768) {
  scale = 1.2;
} else if (device.width > 769 && device.width <= 834) {
  scale = 1.3;
} else if (device.width > 835 && device.width <= 1024) {
  scale = 1.4;
} else if (device.width > 1025) {
  scale = 1.5;
} else {
  // Android tablets
  scale = 1;
}

module.exports = {
  scale,
  size: function size(pixel) {
    return Math.ceil(pixel * scale);
  },
};
