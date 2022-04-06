import replace from 'gulp-replace'; // Search and replace
import plumber from 'gulp-plumber'; // Error handle
import notify from 'gulp-notify'; // Notifies
import browsersync from 'browser-sync'; // Local server
import newer from 'gulp-newer'; // check updated
import ifPlugin from 'gulp-if'; // condition

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin
};
