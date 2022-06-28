const mostSpokenLanuages = (data, n) => {
  const totalLang = data.map((country) => country.languages);
  const flatLang = [].concat(...totalLang);
  const setLang = new Set(flatLang);

  const arrayLang = [];

  for (const lang of setLang) {
    const duplicateLang = flatLang.filter((item) => item == lang);
    arrayLang.push({ lang: lang, count: duplicateLang.length });
  }

  const sortedLang = arrayLang.sort(
    (first, second) => second.count - first.count
  );

  const exitItem = [];
  for (let i = 0; i < n; i++) {
    exitItem.push({ [sortedLang[i].lang]: sortedLang[i].count });
  }
  return exitItem;
};
