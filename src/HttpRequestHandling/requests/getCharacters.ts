import type { ICharacter, IEpisode } from '../types/DataTypes';

import { api } from '../instance/api';

export const getCharacters = async ({ characters }: IEpisode): Promise<ICharacter[]> => {
  try {
    const episodeCharacters: ICharacter[] = [];
    
    for (let i = 0; i < characters.length; i++) {
      const data = await api<ICharacter>(characters[i]);
      
      episodeCharacters.push(data);
    }
    
    return episodeCharacters;
  } catch (error) {
    throw new Error('getCharacters error');
  }
};