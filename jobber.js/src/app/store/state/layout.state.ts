export interface Layout {
  sidenavOpened: boolean;
  isMobile: boolean;
  isJobDetailView: boolean;
  sidenavMode: string;
}

export const initialLayoutState: Layout = {
  sidenavOpened: true,
  isMobile: false,
  isJobDetailView: false,
  sidenavMode: "side",
};
