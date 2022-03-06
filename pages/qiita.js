import { useRecoilValueLoadable } from "recoil";
import { qiitaListState } from "../recoil/atom"

export default function Qiita() {
  // Pet Listを呼び出し
  // React.Suspenseの代用
  const qiitaList = useRecoilValueLoadable(qiitaListState)

  switch (qiitaList.state) {
    case "hasError":
      throw qiitaList.contents;
    case "loading":
      return <div>Loading...</div>;
    case "hasValue":
      return (
        <div>
          <p>Qiita List</p>
          <ul>
            {qiitaList.contents.length && qiitaList.contents.map((v,i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        </div>
      );
  }
}
