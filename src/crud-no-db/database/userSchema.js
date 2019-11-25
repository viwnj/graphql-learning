import * as Yup from "yup";

const schema = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required()
});

export default schema;
