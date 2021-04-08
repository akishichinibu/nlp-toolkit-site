import React, { Component, FC, useState } from 'react';
import { TokenRender } from './render';

import TextField from '@material-ui/core/TextField';

import { ServicePageBase } from '../ServicePageBase';
import { Typography } from '@material-ui/core';


interface RawTokenType {
  content: string;
  type: string;
}


interface ResponseType {
  result: Array<RawTokenType[]>
}


const TokenVisuable: FC<{ paragraph_id: number, part: RawTokenType[] }> = ({ part, paragraph_id: paragraphId }) => {
  const data = part.map(({ content, type }, t) => ({
    key: (paragraphId + 1) * (t + 1),
    content: content,
    type: type,
  }));
  return <>
    <TokenRender tokenSeries={data} />
  </>
}


export const ServiceBert: FC = () => {
  const [buffer, setBuffer] = useState<ResponseType | null>(null);

  const getResult = async (content: string) => {
    const req = new Request("/api/bert", {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify({
        content: content,
      }),
    });

    const res = await fetch(req);
    const data = await res.json();
    setBuffer(data);
  }

  return <>
    <ServicePageBase>
      <div>
        <Typography component="h4" variant="h4" align="left">文書を入力してください</Typography>

        <TextField
          id="bert-input"
          helperText="Input please"
          margin="normal"
          fullWidth={true}
          multiline={true}
          rows={10}
          onChange={e => getResult(e.currentTarget.value)} />

        <Typography component="h4" variant="h4" align="left">解析結果</Typography>
        <div>
          {buffer === null ? <></> : buffer.result.map((r, i) => <TokenVisuable paragraph_id={i} part={r} />)}
        </div>
      </div>
    </ServicePageBase>
  </>
}
