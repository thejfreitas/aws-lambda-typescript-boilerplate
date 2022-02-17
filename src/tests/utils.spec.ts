import * as utils from '../utils';

describe('Test util functions', () => {
  describe('getHttpResponseByCode', () => {
    it('should return "Not Found" if code is 405', () => {
      expect(utils.getHttpResponseByCode(404)).toEqual('Not Found');
    });

    it('should return "Method Not Allowed" if code is 405', () => {
      expect(utils.getHttpResponseByCode(405)).toEqual('Method Not Allowed');
    });
  });
});
