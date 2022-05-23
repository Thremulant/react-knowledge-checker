import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { useFormikContext } from "formik";
import { IOption, ITopics } from "../models";

export const TopicSwitch = ({ topicIndex, obj }: { topicIndex: number, obj: IOption }) => {
  const [enabled, setEnabled] = useState(false);
  const { values, setFieldValue } = useFormikContext<ITopics>();

  useEffect(() => {
    setFieldValue(`topics[${topicIndex}].enabled`, enabled);
  }, [enabled]);

  useEffect(() => {
    if (values.topics[topicIndex].enabled !== enabled) {
      setEnabled(!enabled)
    }
  }, [values.topics])

  return (
    <>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? values.topics[topicIndex].score === 3 ? "bg-red-500" : values.topics[topicIndex].score === 2 ? 'bg-amber-500' : 'bg-green-500' : "bg-zinc-800"
          } relative inline-flex h-6 w-11 items-center rounded-full mr-2 min-w-[44px] mt-[2px]`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-zinc-100`}
        />
      </Switch>
      <div className="flex flex-col cursor-pointer" onClick={() => setEnabled(!enabled)}>
        <h4 className="text-md md:text-xl text-zinc-100 font-bold">{obj.name}</h4>
        <p className="text-sm text-zinc-400">{obj.desc}</p>
      </div>
    </>
  );
};
