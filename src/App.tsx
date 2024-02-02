import SlideImageBox from "./SlideImageBox";
import TextBox from "./TextBox";
import { WindowSizeContextProvider } from "./contexts/WindowSizeContext";
import Markdown from "./Markdown";
import {
  bgColor,
  tldr,
  abstract,
  cmpWithPriorWorks,
  styleImages,
  subjectImages,
  msmsImages,
  multiImages,
  oneShotImages,
  subjectPersonalization,
  stylePersonalization,
  mySubjectMyStyle,
  oneShotPersonalization,
  multiCompositional
} from "./const";
import OneImage from "./OneImage";
import Organization from "./Organization";

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
        <TextBox
          title={"Abstract"}
          backgroundColor={"white"}
          textColor={"black"}
        >
          <Markdown text={abstract} />
        </TextBox>
        {/* FIXME: Subject Personalization*/}
        <TextBox
          title={"Subject Personalization"}
          backgroundColor={bgColor}
          textColor={"white"}
        >
          <Markdown text={subjectPersonalization} />
        </TextBox>
        <SlideImageBox images={subjectImages} backgroundColor={"white"} />
        {/* FIXME: Style Personalization*/}
        <TextBox
          title={"Style Personalization"}
          backgroundColor={bgColor}
          textColor={"white"}
        >
          <Markdown text={stylePersonalization} />
        </TextBox>
        <SlideImageBox images={styleImages} backgroundColor={"white"} />
        {/* FIXME: MSMS*/}
        <TextBox
          title={"My Subject My Style"}
          backgroundColor={bgColor}
          textColor={"white"}
        >
          <Markdown text={mySubjectMyStyle} />
        </TextBox>
        <SlideImageBox images={msmsImages} backgroundColor={"white"} />
        {/* FIXME: Multi compositional*/}
        <TextBox
          title={"Compositional Generation"}
          backgroundColor={bgColor}
          textColor={"white"}
        >
          <Markdown text={multiCompositional} />
        </TextBox>
        <SlideImageBox images={multiImages} backgroundColor={"white"} />
        {/* FIXME: One shot */}
        <TextBox
          title={"One Shot Personalization"}
          backgroundColor={bgColor}
          textColor={"white"}
        >
          <Markdown text={oneShotPersonalization} />
        </TextBox>
        <SlideImageBox images={oneShotImages} backgroundColor={"white"} />
        {/* FIXME: Comparison with other methods */}
        <TextBox
          title={"Comparison with prior works"}
          backgroundColor={bgColor}
          textColor={"white"}
        >
          <Markdown text={cmpWithPriorWorks} />
        </TextBox>
        <OneImage
          image={{
            url: "/full_cmp.png"
          }}
        />
        <TextBox
          title={"ICML 2024 Submission"}
          backgroundColor={bgColor}
          textColor={"white"}
          last={true}
        />
      </div>
    </WindowSizeContextProvider>
  );
}

export default App;
