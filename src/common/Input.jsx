const Input = ({ id, name, type = "text", formik }) => {
  return (
    <div>
      <label htmlFor="">
        <input
          type="text"
          id={id}
          type={type}
          name={name}
          {...formik.getFieldProp(name)}
        />
        {formik.error[name] && formik.touched[name] && (
          <div>{formik.error[name]}</div>
        )}
      </label>
    </div>
  );
};

export default Input;
