import { useFormikContext } from "formik";
import { IOption, ITopics } from "../models";
import { TopicSwitch } from "./TopicSwitch";

export const ReactCheckList = () => {
  const { values } = useFormikContext<ITopics>();
  return (
    <div className="flex flex-row flex-wrap w-100 mx-auto">
      {values.topics.map((x: IOption, k: number) => (
        <div key={k} className="flex w-[45%] flex-row text-white mb-4">
          <TopicSwitch key={`${x.name}-${k}`} topicIndex={k} />
          <h4 className="mr-6">{x.name}</h4>
        </div>
      ))}
    </div>
  );
};
