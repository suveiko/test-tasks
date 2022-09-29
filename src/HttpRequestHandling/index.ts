import { getAllEpisodes } from './requests/getAllEpisodes';

const logResult = async (): Promise<void> => {
  const result = await getAllEpisodes();
  
  console.log(result);
};

await logResult();

