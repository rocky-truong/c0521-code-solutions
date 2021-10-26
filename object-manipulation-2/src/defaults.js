/* exported defaults */
function defaults(target, source) {
  for (const key in source) {
    if (target[key] === null) {
      continue;
    }
    if (!target[key]) {
      target[key] = source[key];
    }
  }
}
