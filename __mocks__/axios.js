module.exports = {
  get: jest.fn(() => Promise.resolve({ data: [{ shoeID: 'AV1200-001', image: 'test_image' }] })),
};
