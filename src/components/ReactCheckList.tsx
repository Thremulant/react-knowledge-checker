import { useFormikContext } from "formik";
import { IOption, ITopics } from "../models";
import { TopicSwitch } from "./TopicSwitch";

export const ReactCheckList = () => {
  const { values } = useFormikContext<ITopics>();
  return (
    <div className="flex flex-row flex-wrap w-auto mx-auto justify-start shrink-0 grow-1">
      {values.topics.map((x: IOption, k: number) => (
        <div key={k} className="flex w-[100%] lg:w-[50%] flex-row text-white mb-4 ">
          <TopicSwitch key={`${x.name}-${k}`} topicIndex={k} obj={x} />
        </div>
      ))}
    </div>
  );
};
