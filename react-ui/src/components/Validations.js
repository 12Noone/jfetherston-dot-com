export const REQUIRED = (value) => {
  if (typeof value === 'string') {
    return value && value.trim() ? undefined : 'Required';
  }
  return value ? undefined : 'Required';
};

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export const EMAIL = value => (value && !EMAIL_REGEX.test(value) ? 'Real email, please' : undefined);

const maxLength = max => value => (value && value.length > max ? `Must be ${max} characters or less` : undefined);

export const MAX_LENGTH_100 = maxLength(100);
export const MAX_LENGTH_1000 = maxLength(1000);