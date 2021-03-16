import React, { FC } from "react";
import Badge from 'react-bootstrap/Badge';
import Tooltip from '@material-ui/core/Tooltip';

type TokenType = "Artifact" |
  "Organization" |
  "Person" |
  "Location" | 
  "Date" | 
  "Time" |
  "Money" | 
  "Percent" | 
  "Maru" |
  "SegmentBegin" | 
  "SegmentEnd";


interface TokenElement {
  key: number;
  content: string;
  type: string;
}


const TypeVariantMap = new Map<TokenType, string>([
  ["Artifact", "primary"],
  ["Organization", "secondary"],
  ["Person", "success"],
  ["Location", "danger"],
  ["Date", "warning"],
  ["Time", "light"],
  ["Money", "info"],
  ["Percent", "dark"],
]);


function renderMarked(key: number, type: string, content: string) {
  switch (type) {
    case "Maru": {
      return <>{content}</>;
    }
    default: {
      return <Tooltip title={type} arrow>
        <Badge variant={TypeVariantMap.get(type as TokenType)!} key={key}>{content}</Badge>
      </Tooltip>
    }
  }
}


function render(tokens: Array<TokenElement>) {
  const elementQueue = tokens.map(({ key, type, content }) => renderMarked(key, type, content));
  return <>{...elementQueue}</>
}


interface PropsType {
  tokenSeries: Array<TokenElement>;
}


export const TokenRender: FC<PropsType> = ({ tokenSeries }) => render(tokenSeries)
