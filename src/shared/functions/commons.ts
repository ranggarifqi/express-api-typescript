import * as bcrypt from 'bcrypt';
import { serverConfig } from '../../config';
/**
 * Sample Utility method
 */
export const sampleUtilMethod = (): unknown => {
  return {};
};

export const generatepassword = async (
  password: string
): Promise<string> => {
  return await bcrypt.hash(password, serverConfig.SALT_ROUNDS);
};

export const comparepassword = async(password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

