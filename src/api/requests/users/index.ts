import { api } from '../../instance';

export type GetWorksConfig = AxiosRequestConfig;
export const getUsers = async (requestConfig?: GetWorksConfig) =>
  api.get<UserData>('/users', requestConfig?.config);