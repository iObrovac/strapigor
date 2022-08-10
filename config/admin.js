module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c21b3615fd2c26b53a137192454fa14b'),
  },
});
