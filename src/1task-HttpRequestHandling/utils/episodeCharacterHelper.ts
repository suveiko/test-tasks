import type { ICharacter, IEpisode } from '../types/DataTypes';

import { getCharacters } from '../requests/getCharacters';

export const episodeCharacterHelper =
  async (episodes: IEpisode[]): Promise<(IEpisode | ICharacter)[]> => {
    const array: (IEpisode | ICharacter)[] = [];
    
    for (let i = 0; i < episodes.length; i++) {
      const characters = await getCharacters(episodes[i]);
      
      array.push(...characters, episodes[i]);
    }
    
    return array;
  };