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
export const selectName = createSelector(selectResumeState, getName);
export const selectLabel = createSelector(selectResumeState, getLabel);
export const selectPicture = createSelector(selectResumeState, getPicture);
export const selectEmail = createSelector(selectResumeState, getEmail);
export const selectPhone = createSelector(selectResumeState, getPhone);
export const selectWebsite = createSelector(selectResumeState, getWebsite);
export const selectSummary = createSelector(selectResumeState, getSummary);
export const selectLocation = createSelector(selectResumeState, getLocation);
export const selectProfiles = createSelector(selectResumeState, getProfiles);

// IsEditing
const getIsEditingSummary = (state: ResumeState) => state.isEditingSummary;

export const selectIsEditingSummary = createSelector(
  selectResumeState,
  getIsEditingSummary
);

const getIsLoading = (state: ResumeState) => state.isLoading;
export const selectIsLoading = createSelector(selectResumeState, getIsLoading);
