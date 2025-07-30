const flatten = (input) => {
  const output = input.reduce((acc, item) => {
    const value = Object.values(item.data)[0]; // extract inner string
    acc[item.name] = value;
    return acc;
  }, {});
  return output;
};

const toggleTheme = () => {
  document.body.classList.toggle('dark')
  if(document.body.classList.contains('dark')){
    localStorage.setItem('theme', 'dark')
  }
  else{
    localStorage.setItem('theme', 'light')
  }
}

export { flatten ,toggleTheme };
