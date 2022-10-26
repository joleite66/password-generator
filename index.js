
let letters = {
    uppercase_Letters : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    lowercase_letters : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    symbols  : ['@', '%', '+', '/', '\'', '!', '#', '$', '^', '?', ':', '.', '(',')', '{', '}', '[', ']', '~'],
    numbers : [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
};

//Generate a character according to what type of input
function get_Random(input_letters) {
    return input_letters[Math.floor(Math.random() * input_letters.length)];
  }
  
const getPassword = function (password_size) {
    let result = "";

    for (let i = 0; i < password_size; i++) {
      let password_letter = Math.floor(Math.random() * password_size);
      if (password_letter < password_size / 4) {
        result += get_Random(letters.uppercase_Letters);
      } else if (password_letter < password_size / 3) {
        result += get_Random(letters.lowercase_letters);
      } else if (password_letter < password_size / 2) {
        result += get_Random(letters.numbers);
      } else {
        result += get_Random(letters.symbols);
      }
    }
    return result;
};
  
  console.log('Your password is: ' + '\n' +  getPassword(100));
