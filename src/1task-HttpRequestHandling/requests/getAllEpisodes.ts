import type { IResponse } from '../types/ResponseTypes';
import type { ICharacter, IEpisode } from '../types/DataTypes';

import { getEpisodes } from './getEpisodes';
import { episodeCharacterHelper } from '../utils/episodeCharacterHelper';

export const getAllEpisodes = async (): Promise<(ICharacter | IEpisode)[]> => {
  try {
    const { results }: IResponse<IEpisode> = await getEpisodes();
    const helper = await episodeCharacterHelper(results);
    
    return helper;
  } catch (error) {
    throw new Error('getFullEpisodes error');
  }
};