export const appConstants = {
    backendBaseUrl: 'http://localhost:8080/',
    number_regex: '^[0-9]+$',
    email_regex: '^[a-z,A-Z,0-9]+\.+@[a-z,A-Z]+[.]+[a-z,A-Z]+$'
};

export const errorConstants = {
    BackendError: 'Backend server error',
    _REQUIRED: ' is mandatory',
    _ONLY_NUMBERS: '- only numeric characters allowed',
    _INVALID_EMAIL: '- invalid email',
    _MINIMUM_LENGTH: ' characters, atleast',
    _MAXIMUM_LENGTH: ' characters, atmost'
};
