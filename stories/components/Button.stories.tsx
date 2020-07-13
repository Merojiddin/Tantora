import React from 'react';

import { action } from '@storybook/addon-actions';
import Button from '@material-ui/core/Button';

export default {
  title: 'components/Button',
  component: Button,
};

export const Text = () => (
  <Button variant="outlined" onClick={action('clicked')}>
    Hello Button
  </Button>
);

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

Emoji.story = {
  name: 'with emoji',
};
