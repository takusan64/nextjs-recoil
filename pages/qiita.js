import { useRecoilValueLoadable } from "recoil";
import { qiitaListState } from "../recoil/qiita"

export default function Qiita() {
  // Qiita記事情報を呼び出し
  const qiitaList = useRecoilValueLoadable(qiitaListState)

  // fetchの状態によって分岐
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
