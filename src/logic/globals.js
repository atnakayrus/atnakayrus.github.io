const flatten = (input) => {
  const output = input.reduce((acc, item) => {
    const value = Object.values(item.data)[0]; // extract inner string
    acc[item.name] = value;
    return acc;
  }, {});
  return output;
};

export { flatten };
