import Park from './Park';

const parks = [
  new Park('North Creek Trail', [47.79424000606273, -122.20100224333618], 4.1, [require('../images/image1.jpg')], "easy"),
  new Park('Shelton View Forest', [47.78423829567166, -122.24205518813842], 4.0, [require('../images/image12.jpg'), require('../images/image13.jpg'), require('../images/image16.jpg')], "easy"),
  new Park('Burke Gilman Trail', [47.750249838223255, -122.21313988465711], 1.9, [require('../images/image11.jpg')], "intermediate"),
  new Park('Bothell Landing Trail', [47.758375235019784, -122.20765723231874], 1.3, [require('../images/image3.jpg'), require('../images/image6.jpg'), require('../images/image14.jpg')], "easy"),
  new Park('Centennial Trail', [47.80890259900624, -122.21770236115123], 5.3, [], "difficult"),
  new Park('Sammammish River Trail', [47.758487063490136, -122.20486634232856], 3.4, [require('../images/image5.jpg')], "intermediate"),
  new Park('Blyth Park Trail', [47.750620548440125, -122.20895637464787], 1.8, [require('../images/image2.jpg')], "easy"),
  new Park('Greenbrier Trailhead', [47.76202022970643, -122.14903418999002], 3.5, [require('../images/image15.jpg'), require('../images/image19.jpg')], "TBD"),
  new Park('Gold Creek County Park', [47.74248995514461, -122.13949380533415], 4.2, [require('../images/image8.jpg'), require('../images/image10.jpg'), require('../images/image17.jpg'), require('../images/image18.jpg')], "easy"),
];

export default parks;