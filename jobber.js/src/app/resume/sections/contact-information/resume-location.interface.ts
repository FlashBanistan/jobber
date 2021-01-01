export interface ResumeLocation {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export const getResumeLocation = (): ResumeLocation => ({
  address: "",
  postalCode: "",
  city: "",
  countryCode: "",
  region: "",
});
