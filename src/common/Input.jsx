const Input = ({ id, name, inputType = "text", formik }) => {
  return (
    <div>
      <label htmlFor="">
        <input
          id={id}
          type={inputType}
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
