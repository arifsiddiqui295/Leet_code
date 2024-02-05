var isPalindrome = function (x) {
    var ulta = 0;
    var copy = x;
    var rem;
    if (x < 0) {
      return false;
    } 
    else {
      while (x != 0) {
        rem = x % 10;
        ulta = ulta * 10 + rem;
        x = Math.floor(x / 10);
      }
      if (ulta == copy) {
        return true;
      } else {
        return false;
      }
    }
  };