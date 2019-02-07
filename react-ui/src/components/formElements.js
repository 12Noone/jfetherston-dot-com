import React from 'react';

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label className="control-label">{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="form-control" />
      {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)


export function RenderTextareaField({ input, label, id, rows, cols, required, placeholder, disabled, meta: { touched, error }, className, wrap, onKeyDown }) {
  return (
    <div className={`${className} ${touched && error ? 'form-group has-error' : 'form-group'}`}>
      {label && (
        <label htmlFor={id}>{label} {required && <span className="text-danger danger-asterisk">*</span>}</label>
      )}
      <textarea
        {...input}
        className="form-control"
        id={id}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        disabled={disabled}
        onKeyDown={onKeyDown}
        wrap={wrap}
        style={{ verticalAlign: 'top' }}
      />
      {touched && error && (
        <span className="error">{error}</span>
      )}
    </div>
  );
}
