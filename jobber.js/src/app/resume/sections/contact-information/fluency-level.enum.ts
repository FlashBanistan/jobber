export enum FluencyLevel {
  ELEMENTARY = "ELEMENTARY",
  LIMITED_WORKING = "LIMITED_WORKING",
  PROFESSIONAL_WORKING = "PROFESSIONAL_WORKING",
  FULL_PROFESSIONAL_WORKING = "FULL_PROFESSIONAL_WORKING",
  NATIVE = "NATIVE",
}

export const getFluencyOptions = (): FluencyLevel[] => {
  return Object.values(FluencyLevel);
};
