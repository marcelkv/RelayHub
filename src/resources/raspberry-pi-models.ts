export interface RaspberryPiModel {
  value: string;
  numGpioPins: number;
}

export const raspberryPiModels: RaspberryPiModel[] = [
  {
    value: 'Raspberry Pi Model B+ V1.2',
    numGpioPins: 27,
  },
  {
    value: 'Raspberry Pi 2 Model B V1.1',

    numGpioPins: 27,
  },
  {
    value: 'Raspberry Pi 3 Model B',

    numGpioPins: 27,
  },
  {
    value: 'Raspberry Pi 4 Model B',

    numGpioPins: 27,
  },
  { value: 'Raspberry Pi Zero', numGpioPins: 27 },
  {
    value: 'Raspberry Pi Zero W',
    numGpioPins: 27,
  },
  { value: 'Raspberry Pi 400', numGpioPins: 27 },
];
