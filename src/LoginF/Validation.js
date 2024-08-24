const Validation = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name Required";
  } else if (values.name.length < 5) {
    errors.name = "Name is greater than 5";
  } else if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 5) {
    errors.password = "Password is more than 5 Requireds ";
  }
  return errors;
};

export default Validation;
