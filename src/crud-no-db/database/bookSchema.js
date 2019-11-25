import * as Yup from "yup";

const schema = Yup.object().shape({
  title: Yup.string().required(),
  author: Yup.string().required()
});

export default schema;
