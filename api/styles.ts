type Classes =
{ readonly [key: string]: string };

export const mixin = (styles: Classes, ...classes: string[]) => Object.entries(styles)
  .filter((e) => classes.indexOf(e[0]) > -1)
  .map((e) => e[1])
  .join(' ');

export const addClasses = (style: string, ...classes: string[]) => {
  classes.push(style);
  return classes.join(' ');
};
