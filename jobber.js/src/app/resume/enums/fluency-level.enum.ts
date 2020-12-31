export enum FluencyLevel {
  NOVICE = "NOVICE",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
  SUPERIOR = "SUPERIOR",
}

export const getFluencyOptions = (): FluencyLevel[] => {
  return Object.values(FluencyLevel);
};
