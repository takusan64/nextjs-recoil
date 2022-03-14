import { atom, selector } from "recoil"

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