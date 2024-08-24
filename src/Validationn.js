const Validationn = (data) => {
  let errors = {};
  if (!data.name) {
    errors.name = "Name Required";
  } else if (data.name.length < 5) {
    errors.name = "Name is greater than 5";
  } else if (!data.password) {
    errors.password = "Password Required";
  } else if (data.password.length < 5) {
    errors.password = "Password is more than 5 Requireds ";
  }
  return errors;
};

export default Validationn;
