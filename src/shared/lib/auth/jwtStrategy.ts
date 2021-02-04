import { PassportStatic } from 'passport';
import { ExtractJwt, Strategy as JWTStrategy, StrategyOptions } from 'passport-jwt';
import { serverConfig } from '../../../config';
import * as userRepository from '../../../database/default/repository/userRepository';

export const useJwtStrategy = (passport: PassportStatic): void => {
  const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: serverConfig.AUTH_TOKEN.SECRET,
  };
  
  const jwtStrategy = new JWTStrategy(opts, async (payload, done) => {
    const user = await userRepository.findById(payload.id, {
      relations: ['role'],
    });

    if (!user) {
      return done(new Error('Invalid user'), null);
    }

    return done(null, user);
  });

  passport.use(jwtStrategy);
};