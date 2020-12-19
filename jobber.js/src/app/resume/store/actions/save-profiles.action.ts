import { createAction, props } from "@ngrx/store";
import { OnlineProfile } from "../../interfaces/online-profile.interface";

export const saveProfiles = createAction(
  "[Resume] Save Profiles",
  props<{ profiles: OnlineProfile[] }>()
);
