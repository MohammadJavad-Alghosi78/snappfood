export const STATUS_CODES = {
  // Successfull
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  // Redirection
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,
  // Client Error
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  // Server Error
  INTERNAL_SERVER_ERROR: 500,
};

export const defaultParams = {
  page_size: 10,
  lat: 35.754,
  long: 51.328,
};
