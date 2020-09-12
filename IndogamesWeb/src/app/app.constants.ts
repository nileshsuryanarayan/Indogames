export const appConstants = {
    backendBaseUrl: 'http://localhost:8080/',
    number_regex: '^[0-9]+$',
    email_regex: '^[a-z,A-Z,0-9]+\.+@[a-z,A-Z]+.[a-z,A-Z]+$'
};

export const errorConstants = {
    BackendError: 'Something went wrong',
    _REQUIRED: ' is mandatory',
    REQUIRED_FIRSTNAME: 'Firstname is required',
    REQUIRED_LASTNAME: 'Lastname is required',
    REQUIRED_EMAIL: 'Email is required',
    REQUIRED_MOBILE: 'Mobile is required',
    REQUIRED_PASSWORD: 'Password is required',
    PASSWORD_MUST_MATCH: 'Password do not match'
};
