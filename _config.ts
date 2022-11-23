import lume from 'lume/mod.ts';
import postcss from 'lume/plugins/postcss.ts';
import date from 'lume/plugins/date.ts';

const site = lume();

site.use(postcss());
site.use(date());

site.ignore('README.md');

export default site;
