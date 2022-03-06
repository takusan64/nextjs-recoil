import { useRecoilValue } from "recoil";
import { qiitaListState } from "../recoil/atom"

export default function Home() {
  // Pet Listを呼び出し
  const qiitaList = useRecoilValue(qiitaListState)

  return (
    <div>
      <p>Qiita List</p>
      <ul>
        {qiitaList.length && qiitaList.map((v) => (
          <li>{v}</li>
        ))}
      </ul>
    </div>
  )
}
