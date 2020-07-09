import roomCreator from 'helpers/roomCreator';

export default {
  title: 'helpers/roomCreator',
  component: roomCreator,
};

export const CorrectData = () => roomCreator('gloompi', 'tinaytini', '2', '11');

CorrectData.story = {
  name: 'with correct data',
};
