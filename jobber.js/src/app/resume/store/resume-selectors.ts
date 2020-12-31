import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ResumeState } from "./resume-state";

export const selectResumeState = createFeatureSelector<ResumeState>("resume");

// ResumeBasics
const getName = (state: ResumeState) => state.resume.basics.name;
const getLabel = (state: ResumeState) => state.resume.basics.label;
const getPicture = (state: ResumeState) => state.resume.basics.picture;
const getEmail = (state: ResumeState) => state.resume.basics.email;
const getPhone = (state: ResumeState) => state.resume.basics.phone;
const getWebsite = (state: ResumeState) => state.resume.basics.website;
const getSummary = (state: ResumeState) => state.resume.basics.summary;
const getLocation = (state: ResumeState) => state.resume.basics.location;
const getProfiles = (state: ResumeState) => state.resume.basics.profiles;
const getLanguages = (state: ResumeState) => state.resume.languages;
export const selectName = createSelector(selectResumeState, getName);
export const selectLabel = createSelector(selectResumeState, getLabel);
export const selectPicture = createSelector(selectResumeState, getPicture);
export const selectEmail = createSelector(selectResumeState, getEmail);
export const selectPhone = createSelector(selectResumeState, getPhone);
export const selectWebsite = createSelector(selectResumeState, getWebsite);
export const selectSummary = createSelector(selectResumeState, getSummary);
export const selectLocation = createSelector(selectResumeState, getLocation);
export const selectProfiles = createSelector(selectResumeState, getProfiles);
export const selectLanguages = createSelector(selectResumeState, getLanguages);

// IsEditing
const getIsEditingName = (state: ResumeState) => state.isEditingName;
const getIsEditingLabel = (state: ResumeState) => state.isEditingLabel;
const getIsEditingPicture = (state: ResumeState) => state.isEditingPicture;
const getIsEditingEmail = (state: ResumeState) => state.isEditingEmail;
const getIsEditingPhone = (state: ResumeState) => state.isEditingPhone;
const getIsEditingWebsite = (state: ResumeState) => state.isEditingWebsite;
const getIsEditingSummary = (state: ResumeState) => state.isEditingSummary;
const getIsEditingLocation = (state: ResumeState) => state.isEditingLocation;
const getIsEditingProfiles = (state: ResumeState) => state.isEditingProfiles;
const getIsEditingLanguages = (state: ResumeState) => state.isEditingLanguages;
export const selectIsEditingName = createSelector(
  selectResumeState,
  getIsEditingName
);
export const selectIsEditingLabel = createSelector(
  selectResumeState,
  getIsEditingLabel
);
export const selectIsEditingPicture = createSelector(
  selectResumeState,
  getIsEditingPicture
);
export const selectIsEditingEmail = createSelector(
  selectResumeState,
  getIsEditingEmail
);
export const selectIsEditingPhone = createSelector(
  selectResumeState,
  getIsEditingPhone
);
export const selectIsEditingWebsite = createSelector(
  selectResumeState,
  getIsEditingWebsite
);
export const selectIsEditingSummary = createSelector(
  selectResumeState,
  getIsEditingSummary
);
export const selectIsEditingLocation = createSelector(
  selectResumeState,
  getIsEditingLocation
);
export const selectIsEditingProfiles = createSelector(
  selectResumeState,
  getIsEditingProfiles
);
export const selectIsEditingLanguages = createSelector(
  selectResumeState,
  getIsEditingLanguages
);

const getIsLoading = (state: ResumeState) => state.isLoading;
export const selectIsLoading = createSelector(selectResumeState, getIsLoading);
