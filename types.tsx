/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
  TabFour: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  MovieDetailScreen: undefined;
};

export type TabTwoParamList = {
  TabTwo: undefined;
};

export type Episode = {
  id: string,
  title: string,
  poster: string,
  duration: string,
  plot: string,
  video: string,
}