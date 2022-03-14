import { atom, selector } from "recoil"
import axios from "axios";

export const qiitaListState = atom({
  key: 'qiitaList',
  default: selector({
    key: 'getQiitaList',
    get: async ({get}) => {
      try {
        // 20件の、Qiita記事情報を取得
        const response = await axios('https://qiita.com/api/v2/items?page=1&per_page=20');
        const qiitaList = await response.data.map((v)=>v.title)
        return qiitaList;
      } catch (error) {
        throw error;
      }
    }
  })
});