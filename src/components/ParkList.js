import Park from './Park';

const parks = [
  new Park('North Creek Trail', [47.79424000606273, -122.20100224333618], 4.1),
  new Park('Shelton View Forest', [47.78423829567166, -122.24205518813842], 4.0),
  new Park('Burke Gilman Trail', [47.750249838223255, -122.21313988465711], 1.9),
  new Park('Bothell Landing Trail', [47.758375235019784, -122.20765723231874], 1.3),
  new Park('Centennial Trail', [47.80890259900624, -122.21770236115123], 5.3),
  new Park('Sammammish River Trail', [47.758487063490136, -122.20486634232856], 3.4),
  new Park('Blyth Park Trail', [47.750620548440125, -122.20895637464787], 1.8, [require('../images/image2.jpg')]),
  new Park('Greenbrier Trailhead', [47.76202022970643, -122.14903418999002], 3.5),
  new Park('Gold Creek County Park', [47.74248995514461, -122.13949380533415], 4.2),
];

export default parks;