module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '40854cf491703f782fa3668b038a93a3'),
  },
});
