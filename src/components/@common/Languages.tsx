import React, { ChangeEventHandler } from 'react';
import { observer } from 'mobx-react-lite';
import { makeStyles } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import useStore from 'hooks/useStore';
import { LANGUAGES } from 'stores/appStore';

const Languages = observer(() => {
  const { appStore } = useStore();
  const classes = useStyles();

  const handleChange: ChangeEventHandler<{ value: any }> = (e) => {
    appStore.setLang(e.target.value);
  };

  return (
    <Select
      className={classes.select}
      value={appStore.lang}
      onChange={handleChange}
    >
      <MenuItem value={LANGUAGES.en}>{LANGUAGES.en}</MenuItem>
      <MenuItem value={LANGUAGES.ru}>{LANGUAGES.ru}</MenuItem>
      <MenuItem value={LANGUAGES.cn}>{LANGUAGES.cn}</MenuItem>
    </Select>
  );
});

const useStyles = makeStyles((theme) => ({
  select: {
    color: theme.palette.common.white,
    marginRight: 10,
    border: 'none',
  },
}));

export default Languages;
