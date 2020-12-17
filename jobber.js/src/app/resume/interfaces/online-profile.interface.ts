import { OnlineNetwork } from "../enums/online-network.enum";

export interface OnlineProfile {
  id: number;
  resume: number;
  network: OnlineNetwork;
  username: string;
  url: string;
}
