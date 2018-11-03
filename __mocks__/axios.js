module.exports = {
  get: jest.fn(() => Promise.resolve({ data: [['AV1200-600', 'https://s3.amazonaws.com/warp-v/images/AJ1936_001.jpeg']] })),
};
