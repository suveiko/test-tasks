export const api = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const json = await response.json() as Promise<T>;
  
  return json;
};