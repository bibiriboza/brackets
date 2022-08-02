module.exports = function check(str, bracketsConfig) {
  const config = bracketsConfig.map((e) => e.join(""));
  let newStr = str;
  while (config.some((e) => newStr.includes(e))) {
    config.forEach((e) => {
      while (newStr.includes(e)) newStr = newStr.replace(e, "");
    });
  }
  return !newStr.length ? true : false;
};
