const validateName = (name) => {
  const condition =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
  return condition.test(name);
};

const validateEmail = (email) => {
  const condition = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return condition.test(email);
};

const validateDate = (date) => {
  const today = new Date();
  const inputDate = new Date(date);
  return inputDate >= today;
};

const validateGuests = (guests) => {
  return 1 <= guests && guests <= 10;
};

const validations = {
  name: validateName,
  email: validateEmail,
  date: validateDate,
  guests: validateGuests,
};

export const validateInputs = (data) => {
  return Object.entries(validations).every(([inputName, validation]) => {
    return validation(data[inputName]);
  });
};
