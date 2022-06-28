const emptySet = new Set();

for (i = 0; i <= 10; i++) emptySet.add(i);

console.log(emptySet);

emptySet.clear();

const fiveStringArray = ['One', 'Two', 'Three', 'Four', 'Five'];
const fiveString = new Set(fiveStringArray);
console.log(fiveString);

const country = ['Finland', 'Japan', 'United States', 'Brazil', 'Nicaragua'];

const arrayCountryWithLength = country.map((item) => [item, item.length]);
const countryMap = new Map(arrayCountryWithLength);
console.log(countryMap);
