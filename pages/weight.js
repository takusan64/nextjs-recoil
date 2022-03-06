import { useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil";
import { weightState, weightUnitState } from "../recoil/atom"

export default function Weight() {
  // 体重のAtomを呼び出し
  const weightAtom = useRecoilValue(weightState)
  // Selectorを呼び出し
  const [weightSelector, setWeightSelector] = useRecoilState(weightUnitState)

  
  const [weight, setWeight] = useState(0)

  // 体重を更新する
  const updateWeight = (newWeight) => {
    setWeightSelector(newWeight)
    setWeight(0)
  }

  const handleChange = (e) =>{
    setWeight(e.target.value)
  }

  return (
    <div>
      <p>Atomの値:{weightAtom}</p>
      <p>Selectorの値:{weightSelector}</p>
      <div>
        <input type="number" value={weight} onChange={handleChange} />
        <button onClick={() => updateWeight(weight)}>
          Update Weight
        </button>
      </div>
    </div>
  )
}
