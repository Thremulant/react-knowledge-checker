import { ReactLevel } from "./components/ReactLevel";
import { ReactCheckList } from "./components/ReactCheckList";
import { Formik } from "formik";
import { ITopics } from "./models";
import { topicsCollection } from "./data";

export default function App() {

  const model: ITopics = {
    topics: topicsCollection
  };

  return (
    <div className="bg-zinc-900 h-100 w-[75%] mx-auto py-32 break-normal text-white">
      <h1 className=" mx-auto text-slate-600 text-5xl  xl:text-6xl font-vol text-center mb-16 text-blue-500 ">
        What level of React are you in?
      </h1>
      <div className="w-[100%] mx-auto font-wor font-light">
        <Formik
          initialValues={model}
          onSubmit={() => { return }}>
          <>
            <ReactLevel />
            <ReactCheckList />
          </>
        </Formik>
      </div>
    </div>
  );
}
