import { atom, selector } from "recoil"
import axios from "axios";

//todo Atom
export const todoState = atom({
  key: "todo",
  default: ["todo1"]
});


// 体重のAtomを作成
export const weightState = atom({
  key: "weight",
  default: 50
});

// Selectorを作成
export const weightUnitState = selector({
  key: 'weightUnit',

  // 参照先を元に新しい値を作成する場合は、「get」を利用します
  get: ({ get }) => {
    // 体重のAtomを参照
    const weight = get(weightState);
    const unit = 'kg';

    // 単位(kg)付きの体重をreturn
    return `${weight}${unit}`;
  },

  // 参照先の値を更新する場合は、「set」を利用します
  set: ({ set }, newValue) => {
    set(weightState, newValue)
  }
});



export const qiitaListState = atom({
  key: 'qiitaList',
  default: selector({
    key: 'getQiitaList',
    get: async ({get}) => {
      try {
        const response = await axios('https://qiita.com/api/v2/items?page=1&per_page=20');
        const qiitaList = await response.data.map((v)=>v.title)
        return qiitaList;
      } catch (error) {
        throw error;
      }
    }
  })
});