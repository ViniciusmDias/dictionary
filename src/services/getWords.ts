import api from "./api";

export async function getWords(limit = 100): Promise<string[] | false> {
  try {
    const response = await api.get(`/words?_limit=${limit}`);
    const words: string[] = response.data;
    return words;
  } catch (err) {
    console.error(
      `Ocorreu algum problema ao carregar as palavras, atualize a página e tente novamente 😕`,
      err
    );
    return false;
  }
}
