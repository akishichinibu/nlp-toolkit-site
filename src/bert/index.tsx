import React, { Component, FC, useState } from 'react';
import { TokenRender } from './render';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


interface RawTokenType {
  content: string;
  type: string;
}


interface ResponseType {
  result: Array<RawTokenType[]>
}


class TokenVisuable extends Component<{ paragraph_id: number, part: RawTokenType[] }> {

  render() {
    const temp = this.props.part.map(({ content, type }, t) => ({
      key: (this.props.paragraph_id + 1) * (t + 1),
      content: content,
      type: type,
    }));

    return <>
      <TokenRender tokenSeries={temp}></TokenRender>
    </>;
  };
}


export const BertQuery: FC = () => {
  const [buffer, setBuffer] = useState<ResponseType | null>(null);

  const getResult = (content: string) => {
    const req = new Request("/api/predict", {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify({
        content: content,
      }),
    });

    fetch(req).then(async (res) => {
      const data = await res.json();
      setBuffer(data);
    });
  }

  return <>
    <h5>文書を入力してください：</h5>
    <TextareaAutosize id="bert-input" rowsMin={5} onChange={e => getResult(e.currentTarget.value)} />
    <h5>解析結果：</h5>
    {buffer === null ? <></> : buffer.result.map((r, i) => <div><TokenVisuable paragraph_id={i} part={r}/></div>)}
  </>
}
