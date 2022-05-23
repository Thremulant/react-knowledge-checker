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
    <div className="bg-zinc-900 h-100 w-100 px-8 mx-auto py-32 break-words text-white whitespace-normal">
      <h1 className=" mx-auto text-5xl xl:text-6xl font-vol text-center mb-16 font-vol text-white" style={{ textShadow: 'rgb(0 0 0 / 51%) 5px 20px 15px' }}>
        What level of React are you in?
      </h1>
      <div className="w-100 mx-auto font-wor font-light">
        <Formik
          initialValues={model}
          onSubmit={() => { return }}>
          <div className="lg:w-[75%] mx-auto pb-16">
            <ReactLevel />
            <ReactCheckList />
          </div>
        </Formik>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <p className="">Hey there! I'm <a href="https://www.linkedin.com/in/daniel-pescador/" target={'_blank'} className="text-yellow-500 font-bold font-vol" rel="noreferrer">Daniel Pescador,</a> I've created this to get my next learning goal in React!</p>
        <p className="mb-8">Feel free to fork it and improve it.</p>
        <div className="flex flex-row">

          <a href="https://github.com/Thremulant/react-knowledge-checker">
            <svg height="48" width="48" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" className="octicon octicon-mark-github v-align-middle mr-8">
              <path fill="white" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
          <a href="https://www.buymeacoffee.com/danielp">
            <img src="yellow-button.png" alt='' className="w-[150px] md:w-[200px]" />
          </a>
        </div>
      </div>
    </div>
  );
}
