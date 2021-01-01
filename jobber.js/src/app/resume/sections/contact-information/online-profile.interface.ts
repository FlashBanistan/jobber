import { OnlineNetwork } from "./online-network.enum";

export interface OnlineProfile {
  readonly id: number;
  readonly resume: number;
  network: OnlineNetwork;
  username: string;
  url: string;
}
