import { api } from '../instance/api';

import { BASE_URL } from '../instance/baseUrl';

import type { IResponse } from '../types/ResponseTypes';
import type { IEpisode } from '../types/DataTypes';

export const getEpisodes = (): Promise<IResponse<IEpisode>> => {
  return api<IResponse<IEpisode>>(`${BASE_URL}/episode`);
};