/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2020-10-27 14:53:51
 * @LastEditTime: 2021-01-03 20:58:57
 * @LastEditors: rodchen
 */
import React from 'react';
import { ConfigProvider } from 'bs-sula';
import { history } from 'umi';

const baseSeparator = '{{{baseSeparator}}}' || '-';
const formatLangFile = (lang) => lang && lang.replace(baseSeparator, '_');

function getLocale() {
  const lang = '{{{default}}}' || `en${baseSeparator}US`;
  const langFile = formatLangFile(lang);

  let locale;
  try {
    locale = require(`bs-sula/es/localereceiver/${langFile}`);
    locale = locale.default || locale;
  } catch (error) {}
  return locale;
}

export const rootContainer = (container) => {
  return (
    <ConfigProvider locale={getLocale()} history={history}>
      {container}
    </ConfigProvider>
  );
};
