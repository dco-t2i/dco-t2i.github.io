import SlideImageBox from "./SlideImageBox";
import TextBox from "./TextBox";
import { WindowSizeContextProvider } from "./contexts/WindowSizeContext";
import SubjectStyleImageBox from "./SubjectStyleImageBox";
import TopImageBox from "./TopImageBox";
import { abstract } from "./abstract";
import Markdown from "./Markdown";
import {
  highlightTexts,
  hightlightImages,
  slideImages,
  styleImages,
  subjectImages,
} from "./const";
import HighlightBox from "./HighlightBox";

function App() {
  return (
    <WindowSizeContextProvider>
      <div className="w-screen h-screen min-w-[1340px]">
        <TopImageBox backgroundColor={"white"} textColor={"black"} />

        <TextBox
          title={
            "Direct Consistency Optimization for Compositional Text-to-Image Personalization"
          }
          backgroundColor={"white"}
          textColor={"black"}
        ></TextBox>

        <TextBox
          title={"Highlight"}
          backgroundColor={"gray"}
          textColor={"white"}
        >
          <Markdown text={abstract} />
        </TextBox>

        <HighlightBox
          leftImage={hightlightImages[0]}
          rightImage={hightlightImages[1]}
          leftText={highlightTexts[0]}
          rightText={highlightTexts[1]}
          backgroundColor={"white"}
        />

        <TextBox
          title={"Abstract"}
          backgroundColor={"gray"}
          textColor={"white"}
        >
          <Markdown text={abstract} />
        </TextBox>

        <SubjectStyleImageBox
          subjectImages={subjectImages}
          styleImages={styleImages}
          backgroundColor={"white"}
        />

        <TextBox
          title={"Personalized Text-to-image Generation from a Singel Image"}
          backgroundColor={"gray"}
          textColor={"white"}
        >
          DCO generates high-quality novel images from text prompts in any
          background, style and etc by a single referecne images.
        </TextBox>

        <SlideImageBox images={slideImages} backgroundColor={"white"} />

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
