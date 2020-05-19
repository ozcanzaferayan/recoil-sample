import React from "react";
import { useRecoilValue } from "recoil";
import { currentUserNameQuery } from "../state/selectors";

export function UserInfo() {
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>Fetch from network: {userName}</div>;
}
