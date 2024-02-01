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
  msmsImages
} from "./const";
import OneImage from "./OneImage";
import Organization from "./Organization";

function App() {
  return (
    <WindowSizeContextProvider>
      <div className="w-screen h-screen min-w-[1340px]">
        {/* FIXME: Top Image */}
        {/* <TopImageBox backgroundColor={"white"} textColor={"black"} /> */}
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
        />
        <SlideImageBox images={subjectImages} backgroundColor={"white"} />

        {/* FIXME: Style Personalization*/}
        <TextBox
          title={"Style Personalization"}
          backgroundColor={bgColor}
          textColor={"white"}
        />
        <SlideImageBox images={styleImages} backgroundColor={"white"} />
        {/* FIXME: MSMS*/}
        <TextBox
          title={"My Subject My Style"}
          backgroundColor={bgColor}
          textColor={"white"}
        />
        <SlideImageBox images={msmsImages} backgroundColor={"white"} />
        {/* FIXME: MSMS*/}
        <TextBox
          title={"Compositional Generation"}
          backgroundColor={bgColor}
          textColor={"white"}
        />
        <SlideImageBox images={styleImages} backgroundColor={"white"} />
        {/* <TextBox
          title={"My Subject My Style"}
          backgroundColor={bgColor}
          textColor={"white"}
        />
        <SubjectStyleImageBox
          subjectImages={subjectSelect}
          styleImages={styleSelect}
          backgroundColor={"white"}
        /> */}
        {/* FIXME: One shot */}
        {/* subject personalization */}
        <TextBox
          title={"One Shot Personalization"}
          backgroundColor={bgColor}
          textColor={"white"}
        />
        <SlideImageBox images={styleImages} backgroundColor={"white"} />
        {/* style personalization */}
        {/* FIXME: How does it work? */}
        {/* <TextBox
          title={"How does it work?"}
          backgroundColor={"white"}
          textColor={"black"}
        >
          <HighlightBox
            leftImage={hightlightImages[0]}
            rightImage={hightlightImages[1]}
            leftText={highlightTexts[0]}
            rightText={highlightTexts[1]}
            backgroundColor={"white"}
          />
        </TextBox> */}
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
          title={"Acknowledgements"}
          backgroundColor={bgColor}
          textColor={"white"}
        >
          This template was originally borrowed from xxx.
        </TextBox>
      </div>
    </WindowSizeContextProvider>
  );
}

export default App;
