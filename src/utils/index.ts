export const getHttpResponseByCode = (code: number): string => {
  switch (code) {
    case 404:
      return 'Not Found';
    case 405:
      return 'Method Not Allowed';
    default:
      return '';
  }
};
