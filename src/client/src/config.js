export const bff =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : ''
