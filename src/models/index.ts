export interface IOption {
  name: string;
  desc?: string;
  score: number;
  enabled: boolean;
}

export interface ITopics {
  topics: IOption[];
}
