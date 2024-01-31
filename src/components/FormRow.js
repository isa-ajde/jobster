function FormRow({ type, name, handleChange, value, labelText }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        className="form-input "
      />
    </div>
  )
}

export default FormRow
