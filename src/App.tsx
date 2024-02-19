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
  oneShotPersonalization,
  multicomposition
} from "./const";
import Organization from "./Organization";
import AbstractBox from "./AbstractBox";
import Analytics from "./Analytics";
function App() {
  return (
    <>
      <Analytics />
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
            title={"My Subject in My style Generation"}
            backgroundColor={bgColor}
            textColor={"white"}
          >
            <Markdown text={mySubjectMyStyle} />
          </TextBox>
          <SlideImageBox images={msmsImages} backgroundColor={"white"} />
          {/* FIXME: MSMS*/}
          <TextBox
            title={"Compositional Generation of My Subject in My Style"}
            backgroundColor={bgColor}
            textColor={"white"}
          >
            <Markdown text={multicomposition} />
          </TextBox>
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
          <TextBox
            title={"Acknowledgements"}
            backgroundColor={bgColor}
            textColor={"white"}
            last={true}
          >
            <div>
              This work is supported in part by Google University Relations
              program and Google Cloud Platform credit grant. We express our
              gratitude to Nataniel Ruiz and Viraj Shah for their help on
              ZipLoRA implementation and Meera Hahn for their feedback on the
              presentation of our paper. Finally, we thank Jinyeop Kim and
              Younghyun Kim for their feedback and support on our manuscript and
              project page. We provide{" "}
              <a
                href="https://github.com/dco-t2i/dco-t2i.github.io/blob/main/assests/data.md"
                className="text-#4cc9f0 no-underline font-italic"
              >
                custom link
              </a>{" "}
              to image assets used in our experiments.
            </div>
            {/* <Markdown text={acknowledgements} /> */}
          </TextBox>
        </div>
      </WindowSizeContextProvider>
    </>
  );
}

export default App;
