module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [
      '0536ed1d3531ea4f716ac267ddcf25bd16531eb08a8b070e178e9cfb11e8ef1b6fbaa0e89c0152ffaf4a5b194c7f805f17340395ae6fa9337bbeb3f6c7fd317f',
      'b03ed5757132d47790e5a90d7782efdf2ddc1dc52898f74e383b39a93e78f012f3e448220d2baab06b9e0405cbfb17a863c3b5c449d78de6bb0fcdf4d6cd0484'
    ]),
  },
});
