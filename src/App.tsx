import SlideImageBox from "./SlideImageBox";
import TextBox from "./TextBox";
import { WindowSizeContextProvider } from "./contexts/WindowSizeContext";
import SubjectStyleImageBox from "./SubjectStyleImageBox";
import TopImageBox from "./TopImageBox";
import Markdown from "./Markdown";
import {
  abstract,
  highlightTexts,
  hightlightImages,
  mainImage,
  slideImages,
  styleImages,
  subjectImages,
} from "./const";
import HighlightBox from "./HighlightBox";
import OneImage from "./OneImage";

function App() {
  return (
    <WindowSizeContextProvider>
      <div className="w-screen h-screen min-w-[1340px]">
        {/* FIXME: Top Image */}
        <TopImageBox backgroundColor={"white"} textColor={"black"} />

        {/* FIXME: Title, Author */}
        <TextBox
          title={
            <div>
              Direct Consistency Optimization for
              <br />
              Compositional Text-to-Image Personalization
            </div>
          }
          backgroundColor={"white"}
          textColor={"black"}
        ></TextBox>

        {/* FIXME: TL;DR */}
        <TextBox title={"TL;DR"} backgroundColor={"gray"} textColor={"white"}>
          <Markdown text={abstract} />
          <OneImage image={mainImage} />
        </TextBox>

        {/* FIXME: Main figures */}
        <SlideImageBox images={slideImages} backgroundColor={"white"} />

        {/* FIXME: Abstract */}
        <TextBox title={"TL;DR"} backgroundColor={"gray"} textColor={"white"}>
          <Markdown text={abstract} />
        </TextBox>

        {/* FIXME: How does it work? */}
        <HighlightBox
          leftImage={hightlightImages[0]}
          rightImage={hightlightImages[1]}
          leftText={highlightTexts[0]}
          rightText={highlightTexts[1]}
          backgroundColor={"white"}
        />

        {/* FIXME: Quantitative Results */}
        <TextBox
          title={"Abstract"}
          backgroundColor={"gray"}
          textColor={"white"}
        >
          <Markdown text={abstract} />
        </TextBox>

        {/* FIXME: My style My object */}
        <SubjectStyleImageBox
          subjectImages={subjectImages}
          styleImages={styleImages}
          backgroundColor={"white"}
        />

        {/* FIXME: 1-shot personalization */}
        <TextBox
          title={"Personalized Text-to-image Generation from a Singel Image"}
          backgroundColor={"gray"}
          textColor={"white"}
        >
          DCO generates high-quality novel images from text prompts in any
          background, style and etc by a single referecne images.
        </TextBox>

        {/* FIXME: Multiple Compositional */}
        <TextBox
          title={"Effect of Comprehensive Captioning"}
          backgroundColor={"gray"}
          textColor={"white"}
        >
          Comprehensive Captioning in model personalization enables to better
          disentangle desirable componenets within the image. For example, "a
          dog in the yellow background" helps to disentangle background
          knowledge from the reference image and induce to implant only a dog
          feature into the model.
        </TextBox>

        <TextBox
          title={"Acknowledgements"}
          backgroundColor={"white"}
          textColor={"black"}
        >
          This template was originally borrowed from xxx.
        </TextBox>
      </div>
    </WindowSizeContextProvider>
  );
}

export default App;
