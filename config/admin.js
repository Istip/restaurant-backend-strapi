module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'faa90595e8de1000275030e5b872c120'),
  },
});
