import SlideImageBox from "./SlideImageBox";
import TextBox from "./TextBox";
import { WindowSizeContextProvider } from "./contexts/WindowSizeContext";
import Markdown from "./Markdown";
import {
  bgColor,
  tldr,
  abstract,
  styleImages,
  subjectImages,
  msmsImages,
  multiImages,
  oneShotImages,
  subjectPersonalization,
  stylePersonalization,
  mySubjectMyStyle,
  oneShotPersonalization
} from "./const";
import Organization from "./Organization";
import AbstractBox from "./AbstractBox";

function App() {
  return (
    <WindowSizeContextProvider>
      <div className="w-screen h-screen min-w-[1400px]">
        {/* FIXME: Title, Author */}
        <TextBox
          title={
            <>
              Direct Consistency Optimization for
              <br />
              Compositional Text-to-Image Personalization
            </>
          }
          backgroundColor={"white"}
          textColor={"black"}
          titleFontSize={"text-5xl"}
        >
          <Organization />
        </TextBox>
        {/* FIXME: TL;DR */}
        <TextBox
          title={`TL;DR: ${tldr}`}
          backgroundColor={bgColor}
          textColor={"white"}
          titleFontSize={"text-3xl"}
        />
        {/* FIXME: Abstract */}
        <AbstractBox
          title={"Abstract"}
          backgroundColor={"white"}
          textColor={"black"}
        >
          <Markdown text={abstract} />
        </AbstractBox>
        {/* FIXME: Subject Personalization*/}
        <TextBox
          title={"Subject Consistent Text-to-Image Generation"}
          backgroundColor={bgColor}
          textColor={"white"}
        >
          <Markdown text={subjectPersonalization} />
        </TextBox>
        <SlideImageBox images={subjectImages} backgroundColor={"white"} />
        {/* FIXME: Style Personalization*/}
        <TextBox
          title={"Style Consistent Text-to-Image Generation"}
          backgroundColor={bgColor}
          textColor={"white"}
        >
          <Markdown text={stylePersonalization} />
        </TextBox>
        <SlideImageBox images={styleImages} backgroundColor={"white"} />
        {/* FIXME: MSMS*/}
        <TextBox
          title={"Custom Subject in Custom Style Generation"}
          backgroundColor={bgColor}
          textColor={"white"}
        >
          <Markdown text={mySubjectMyStyle} />
        </TextBox>
        <SlideImageBox images={msmsImages} backgroundColor={"white"} />
        <SlideImageBox images={multiImages} backgroundColor={"white"} />
        {/* FIXME: One shot */}
        <TextBox
          title={"One Shot Subject Personalization"}
          backgroundColor={bgColor}
          textColor={"white"}
        >
          <Markdown text={oneShotPersonalization} />
        </TextBox>
        <SlideImageBox images={oneShotImages} backgroundColor={"white"} />
        {/* <TextBox
          title={"ICML 2024 Submission"}
          backgroundColor={bgColor}
          textColor={"white"}
          last={true}
        /> */}
      </div>
    </WindowSizeContextProvider>
  );
}

export default App;
