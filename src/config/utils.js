export const range = (start, end) =>
  Array.from({length: end - start}, (v, k) => k + start);

export const ageArray = (start, end) => {
  const rangeArray = range(start, end);
  return rangeArray.map(value => ({
    value,
    label: value,
  }));
};

export const searchBook = (search, list) => {
  const lowSearch = search.toLowerCase();
  return list.filter(item => {
    return Object.values(item).some(val =>
      String(val).toLowerCase().includes(lowSearch),
    );
  });
};
