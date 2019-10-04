import { Ferment} from './ferment';

export const FERMENTS: Ferment[] = [
    {id: 1, name: 'Elderflower Kombucha V1', stage: 'fermenting', time: '-6', steps:
        [{id: 1, name: 'Brew Black Tea', order: 1, interval: '-6 d', comment: 'Mixture 20% Black Tea, 80% Jasmin Tea'},
        {id: 2, name: 'Cool Down To 32°C', order: 2, interval: '', comment: 'Wait until 32°C is reached. Take out SCOPY to bring it to the same temprature.'},
        {id: 3, name: 'Infuse Kombucha', order: 3, interval: '-6 d', comment: 'Take 200ml of old Kombucha'},
        {id: 4, name: 'Fermentation', order: 4, interval: '-6 min', comment: ''},
        {id: 5, name: 'Fridge', order: 5, interval: '-6 min', comment: ''},
        {id: 6, name: 'Second Fermentation', order: 6, interval: '-6 min', comment: ''}]
    },
    {id: 2, name: 'Elderflower Kombucha V2', stage: 'fermenting', time: '-6', steps:
        [{id: 1, name: 'Brew Black Tea', order: 1, interval: '-6 d', comment: 'Mixture 20% Black Tea, 80% Jasmin Tea'},
          {id: 2, name: 'Cool Down To 32°C', order: 2, interval: '', comment: 'Wait until 32°C is reached. Take out SCOPY to bring it to the same temprature.'},
          {id: 3, name: 'Infuse Kombucha', order: 3, interval: '-6 d', comment: 'Take 200ml of old Kombucha'},
          {id: 4, name: 'Fermentation', order: 4, interval: '-6 min', comment: ''}]
    },
    {id: 3, name: 'Elderflower Kombucha V3', stage: 'fermenting', time: '-6'},
    {id: 4, name: 'Elderflower Kombucha V4', stage: 'fermenting', time: '-6'},
    {id: 5, name: 'Elderflower Kombucha V5', stage: 'fermenting', time: '-6'},
    {id: 6, name: 'Elderflower Kombucha V6', stage: 'fermenting', time: '-6'}
]
