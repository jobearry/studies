type API_ROOT = string
const  root: API_ROOT = "/data";
export const fetchAll = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetch(`${root}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    // const data: T = await response.json();
    return await response.json() as T;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchAllRegion = async <T>(endpoint: string, field: string): Promise<T> => {
  try {
    const response = await fetch(`${root}/${endpoint}?fields=${field}`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    // const data: T = await response.json();
    return await response.json() as T;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchCountry = async <T>(endpoint: string, field: string): Promise<T> => {
  try {
    const response = await fetch(`${root}/${endpoint}/${field}`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    // const data: T = await response.json();
    return await response.json() as T;
  } catch (error) {
    console.error(error);
    throw error;
  }
};