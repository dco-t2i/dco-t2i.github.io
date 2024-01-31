import SlideImageBox from "./SlideImageBox";
import TextBox from "./TextBox";
import { WindowSizeContextProvider } from "./contexts/WindowSizeContext";
import SubjectStyleImageBox from "./SubjectStyleImageBox";
import TopImageBox from "./TopImageBox";
import Markdown from "./Markdown";
import {
  tldr,
  abstract,
  highlightTexts,
  mySubjectMyStyle,
  oneShotPersonalization,
  multiCompositional,
  hightlightImages,
  mainImage,
  slideImages,
  styleImages,
  subjectImages
} from "./const";
import HighlightBox from "./HighlightBox";
import OneImage from "./OneImage";
import Organization from "./Organization";

function App() {
  return (
    <WindowSizeContextProvider>
      <div className="w-screen h-screen min-w-[1340px]">
        {/* FIXME: Top Image */}
        <TopImageBox backgroundColor={"white"} textColor={"black"} />

        {/* FIXME: Title, Author */}
        <TextBox
          title={
            <div className="text-5xl">
              Direct Consistency Optimization for
              <br />
              Compositional Text-to-Image Personalization
            </div>
          }
          backgroundColor={"white"}
          textColor={"black"}
          titleFontSize={"5xl"}
        >
          <Organization />
        </TextBox>

        {/* FIXME: TL;DR */}
        <TextBox
          title={`TL;DR: ${tldr}`}
          backgroundColor={"gray"}
          textColor={"white"}
          titleFontSize={"3xl"}
        ></TextBox>

        {/* Section1 */}
        {/* FIXME: Abstract */}
        <TextBox
          title={"Abstract"}
          backgroundColor={"white"}
          textColor={"black"}
          titleFontSize={"4xl"}
        >
          <Markdown text={abstract} />
          <OneImage image={mainImage} />
        </TextBox>

        {/* Section2 */}
        {/* FIXME: Main figures */}
        {/* subject personalization */}
        <TextBox
          title={"Subject Personalization"}
          backgroundColor={"gray"}
          textColor={"white"}
          titleFontSize={"4xl"}
        >
          <SlideImageBox images={slideImages} backgroundColor={"gray"} />
        </TextBox>
        <div className="border-b border-white h-1"></div>
        {/* style personalization */}
        <TextBox
          title={"Style Personalization"}
          backgroundColor={"gray"}
          textColor={"white"}
          titleFontSize={"4xl"}
        >
          <SlideImageBox images={slideImages} backgroundColor={"gray"} />
        </TextBox>

        {/* Section3 */}
        {/* FIXME: How does it work? */}
        <TextBox
          title={"How does it work?"}
          backgroundColor={"white"}
          textColor={"black"}
          titleFontSize={"4xl"}
        >
          <HighlightBox
            leftImage={hightlightImages[0]}
            rightImage={hightlightImages[1]}
            leftText={highlightTexts[0]}
            rightText={highlightTexts[1]}
            backgroundColor={"white"}
          />
        </TextBox>

        {/* Section4 */}
        {/* FIXME: 1-shot personalization */}
        <TextBox
          title={"1 shot Personalization"}
          backgroundColor={"gray"}
          textColor={"white"}
          titleFontSize={"4xl"}
        >
          <Markdown text={oneShotPersonalization} />
        </TextBox>

        {/* FIXME: My style My object */}
        <TextBox
          title={"My Subject, My Style"}
          backgroundColor={"white"}
          textColor={"black"}
          titleFontSize={"4xl"}
        >
          <Markdown text={mySubjectMyStyle} />
          <SubjectStyleImageBox
            subjectImages={subjectImages}
            styleImages={styleImages}
            backgroundColor={"white"}
          />
        </TextBox>

        {/* FIXME: Multiple Compositional */}
        <TextBox
          title={"Multi-compositional Image Generation"}
          backgroundColor={"gray"}
          textColor={"white"}
          titleFontSize={"4xl"}
        >
          <Markdown text={multiCompositional} />
          <SlideImageBox images={slideImages} backgroundColor={"gray"} />
        </TextBox>

        {/* FIXME: Comparison with other methods */}
        <TextBox
          title={"Comparison with other methods"}
          backgroundColor={"white"}
          textColor={"black"}
          titleFontSize={"4xl"}
        >
          <Markdown text={multiCompositional} />
          <SlideImageBox images={slideImages} backgroundColor={"white"} />
        </TextBox>

        {/* FIXME: Comparison with other methods */}
        <TextBox
          title={"Quantitative Results"}
          backgroundColor={"gray"}
          textColor={"white"}
          titleFontSize={"4xl"}
        >
          <Markdown text={multiCompositional} />
          <SlideImageBox images={slideImages} backgroundColor={"gray"} />
        </TextBox>

        <TextBox
          title={"Acknowledgements"}
          backgroundColor={"white"}
          textColor={"black"}
          titleFontSize={"4xl"}
        >
          This template was originally borrowed from xxx.
        </TextBox>
      </div>
    </WindowSizeContextProvider>
  );
}

export default App;
