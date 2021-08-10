const generateRandomNumber = (lower, upper) => {
  const randomNumber = Math.floor(Math.random() * (upper + 2 - lower)) + lower;
  return randomNumber;
};

export default generateRandomNumber;
