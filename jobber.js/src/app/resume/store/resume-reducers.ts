import { createReducer, on } from "@ngrx/store";
import {
  fetchResume,
  saveEmail,
  saveLabel,
  saveLanguages,
  saveLocation,
  saveName,
  savePhone,
  savePicture,
  saveProfiles,
  saveSummary,
  saveWebsite,
  toggleIsEditingEmail,
  toggleIsEditingLabel,
  toggleIsEditingLanguages,
  toggleIsEditingLocation,
  toggleIsEditingName,
  toggleIsEditingPhone,
  toggleIsEditingPicture,
  toggleIsEditingProfiles,
  toggleIsEditingSummary,
  toggleIsEditingWebsite,
} from "./actions";
import { initialResumeState } from "./resume-state";

export const resumeReducers = createReducer(
  initialResumeState,
  on(toggleIsEditingName, (state) => ({
    ...state,
    isEditingName: !state.isEditingName,
  })),
  on(toggleIsEditingLabel, (state) => ({
    ...state,
    isEditingLabel: !state.isEditingLabel,
  })),
  on(toggleIsEditingPicture, (state) => ({
    ...state,
    isEditingPicture: !state.isEditingPicture,
  })),
  on(toggleIsEditingEmail, (state) => ({
    ...state,
    isEditingEmail: !state.isEditingEmail,
  })),
  on(toggleIsEditingPhone, (state) => ({
    ...state,
    isEditingPhone: !state.isEditingPhone,
  })),
  on(toggleIsEditingWebsite, (state) => ({
    ...state,
    isEditingWebsite: !state.isEditingWebsite,
  })),
  on(toggleIsEditingSummary, (state) => ({
    ...state,
    isEditingSummary: !state.isEditingSummary,
  })),
  on(toggleIsEditingLocation, (state) => ({
    ...state,
    isEditingLocation: !state.isEditingLocation,
  })),
  on(toggleIsEditingProfiles, (state) => ({
    ...state,
    isEditingProfiles: !state.isEditingProfiles,
  })),
  on(toggleIsEditingLanguages, (state) => ({
    ...state,
    isEditingLanguages: !state.isEditingLanguages,
  })),
  on(saveName, (state, action) => ({
    ...state,
    resume: {
      ...state.resume,
      basics: {
        ...state.resume.basics,
        name: action.name,
      },
    },
    isEditingName: false,
  })),
  on(saveLabel, (state, action) => ({
    ...state,
    resume: {
      ...state.resume,
      basics: {
        ...state.resume.basics,
        label: action.label,
      },
    },
    isEditingLabel: false,
  })),
  on(savePicture, (state, action) => ({
    ...state,
    resume: {
      ...state.resume,
      basics: {
        ...state.resume.basics,
        picture: action.picture,
      },
    },
    isEditingPicture: false,
  })),
  on(saveEmail, (state, action) => ({
    ...state,
    resume: {
      ...state.resume,
      basics: {
        ...state.resume.basics,
        email: action.email,
      },
    },
    isEditingEmail: false,
  })),
  on(savePhone, (state, action) => ({
    ...state,
    resume: {
      ...state.resume,
      basics: {
        ...state.resume.basics,
        phone: action.phone,
      },
    },
    isEditingPhone: false,
  })),
  on(saveWebsite, (state, action) => ({
    ...state,
    resume: {
      ...state.resume,
      basics: {
        ...state.resume.basics,
        website: action.website,
      },
    },
    isEditingWebsite: false,
  })),
  on(saveSummary, (state, action) => ({
    ...state,
    resume: {
      ...state.resume,
      basics: {
        ...state.resume.basics,
        summary: action.summary,
      },
    },
    isEditingSummary: false,
  })),
  on(saveLocation, (state, action) => ({
    ...state,
    resume: {
      ...state.resume,
      basics: {
        ...state.resume.basics,
        location: action.location,
      },
    },
    isEditingLocation: false,
  })),
  on(saveProfiles, (state, action) => ({
    ...state,
    resume: {
      ...state.resume,
      basics: {
        ...state.resume.basics,
        profiles: action.profiles,
      },
    },
    isEditingProfiles: false,
  })),
  on(saveLanguages, (state, action) => ({
    ...state,
    resume: {
      ...state.resume,
      languages: action.languages,
    },
    isEditingLanguages: false,
  })),
  on(fetchResume, (state) => ({
    ...state,
    isLoading: true,
  }))
);
