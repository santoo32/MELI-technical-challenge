//Returns a regular expression that matches 
function getAlphaWithSpacesRegex() {
  return /^(?!\d)[a-zA-Z]+(?: [a-zA-Z]+)*$/;
}


module.exports = {
  getAlphaWithSpacesRegex
};
