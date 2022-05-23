import { useFormikContext } from "formik";
import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useReward } from "react-rewards";
import { ITopics } from "../models";

export const ReactLevel = () => {
  const { values, setFieldValue } = useFormikContext<ITopics>();
  const [total, setTotal] = useState<number>(0);
  const x = useSpring(0, { stiffness: 100 })


  const max = values.topics.reduce((x, b) => x + b.score, 0);
  const width = useTransform(x, [0, max], ["0%", "100%"]);

  const BEGIN = 10;
  const INTER = max / 2;
  const ADVAN = max;

  useEffect(() => {
    let isActive = true;
    if (isActive) {
      const totalScore = values.topics.reduce(
        (previousValue, currentValue) =>
          previousValue + (currentValue.enabled ? currentValue.score : 0),
        0
      );
      x.set(totalScore)
      setTotal(totalScore)
    }
    return () => { isActive = false };

  }, [values]);



  const handleClear = () => {
    const clear = values.topics.map(x => ({
      ...x,
      enabled: false
    }))
    setFieldValue('topics', clear);
  }

  const handleSelectAll = () => {
    const clear = values.topics.map(x => ({
      ...x,
      enabled: true
    }))
    setFieldValue('topics', clear);
  }


  return (
    <>
      <div className="sticky top-0 z-20 pt-16 -mx-8 xl:mx-0 ">
        <div className="w-full mx-auto  bg-zinc-900 h-[200px] px-8 xl:px-0">
          <div className="h-12 rounded-full w-100 drop-shadow-xl overflow-clip shadow-inner shadow-xl bg-zinc-800 mb-4 ">
            <motion.div style={{ width: width }} transition={{ duration: .2 }} className="h-12 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></motion.div>
          </div>
          <div className="w-100 top-8 flex flex-row justify-between mx-auto text-white pl-6 md:pl-32 h-16">
            <Level current={total} text="Beginner" msg="Nice!!" points={BEGIN} />
            <Level current={total} text="Intermediate" msg="Epic!" points={INTER} />
            <Level current={total} text="Advanced" msg={`Congratulations!\nyou're the king of the React nerds!`} points={ADVAN} />
          </div>
          <div className="w-100 top-8 flex flex-row justify-center mx-auto text-white py-6">
            <div onClick={handleClear} className='transition duration-300 ease-in-out cursor-pointer px-4 py-2 border-[1px] hover:border-0 border-solid border-zinc-200 hover:bg-gradient-to-br from-yellow-500 hover:font-bold to-orange-500 drop-shadow-xl rounded-lg'>
              Clear
            </div>
            {/* <div onClick={handleSelectAll} className='transition-all ease-in-out cursor-pointer px-4 py-2 bg-gradient-to-br from-rose-500 to-orange-500 drop-shadow-xl rounded-lg hover:-top-[5px] relative mr-5'>
              All
            </div> */}
          </div>
        </div>
        <div className="bg-gradient-to-b from-zinc-900 h-8"></div>
      </div>
      <div className="bg-zinc-900 h-16 abolute sticky z-10 top-0"></div>
    </>
  );
};

const Level = ({ current, text, msg, points }: { current: number, text: string, msg: string | JSX.Element, points: number }) => {
  const { reward } = useReward(`reward-${text.toLowerCase()}`, 'confetti');
  const [control, setControl] = useState<boolean>(true)

  useEffect(() => {
    if (control) {
      if (current >= points) {
        reward();
        setControl(false);
      }
    }
  }, [current, points])

  return (
    <div className="flex flex-col relative w-[250px] text-center justify-start items-center min-h-[64px]" id={`reward-${text.toLowerCase()}`}>
      <div className="relative text-md md:text-xl">{text}</div>
      {current >= points && <motion.p animate={{ opacity: [0, 1], y: [10, 0] }} transition={{ duration: .2 }} className='text-yellow-500  mx-auto text-sm md:text-md font-bold whitespace-pre'>{msg}</motion.p>}
    </div>
  )
}