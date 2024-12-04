import { api } from '../../instance';

export type GetWorksConfig = AxiosRequestConfig;
export const getWorks = async (requestConfig?: GetWorksConfig) =>
  api.get<User>('/users', requestConfig?.config);