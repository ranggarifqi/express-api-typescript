import passport from 'passport';

export const isAuthenticatedMiddleware = passport.authenticate('jwt', { session: false });