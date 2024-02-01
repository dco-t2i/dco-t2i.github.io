export const bgColor = `#0065a2`;

export const mainImage = { url: "/main.png" };

export const represents = ["/rep1.png", "/main.png", "main.png", "main.png"];

export const slideImages = [
  { url: "/sp.png" },
  { url: "/sp.png" },
  { url: "/sp.png" }
];

export const subjectImages = [
  { url: "/msms/subject1.png" },
  { url: "/msms/subject2.png" },
  { url: "/msms/subject3.png" },
  { url: "/msms/subject4.png" },
  { url: "/msms/subject5.png" },
  { url: "/msms/subject6.png" }
];

export const styleImages = [
  { url: "/msms/style1.png" },
  { url: "/msms/style2.png" },
  { url: "/msms/style3.png" },
  { url: "/msms/style4.png" },
  { url: "/msms/style5.png" },
  { url: "/msms/style6.png" }
];

export const hightlightImages = [{ url: "/main.png" }, { url: "/main.png" }];

export const tldr = `Direct Consistency Optimization (DCO) enables generating enhanced compositional images with controllable sampling method.`;

export const abstract = `Text-to-image (T2I) diffusion models, when fine-tuned on few personal images, are able to generate visuals with high degree of consistency. 
  However, they still lacks in synthesizing images of different scenario or styles that are possible in the original pretrained models. 
  To address this, we propose to fine-tune T2I model by maximizing consistency to reference images, while penalizing the deviation from the pretrained model.
  We devise a novel training objective for T2I diffusion models that minimally fine-tunes the pretrained model to achieve consistency.
  Our method, dubbed ***Direct Consistency Optimization***, is as simple as regular diffusion loss, while significantly enhances the compositionality of personalized T2I models. 
  Also, our approach induces a new sampling method that controls the tradeoff between image fidelity and prompt fidelity.
  Lastly, we emphasize the necessity of using a comprehensive caption for reference images to further enhance the image-text alignment. 
  We show the efficacy of proposed method on the T2I personalization for subject, style, or both. 
  In particular, our method results in superior Pareto frontier to the baselines.`;

export const highlightTexts = [
  `Personalization: By casting T2I diffusion model fine-tuning problem as a constrained policy optimization problem, we propose DCO loss which regularlizes the KL divergence with respect to the reference images.
  DCO loss does not require auxiliary dataset while preventing the model from catastorphic forgetting problem.`,
  `Reward Guidance: To contorl the tradeoff between image fidelity and prompt fidelity, reward guidance adds the amount of change from pretraiend distribution by controling with guidance scale.`
];

export const oneShotPersonalization = `DCO generates high-quality novel images from text prompts in any background, style and etc with only a single referecne image.`;

export const mySubjectMyStyle = `Personalization: By casting T2I diffusion model fine-tuning problem as a constrained policy optimization problem, we propose DCO loss which regularlizes the KL divergence with respect to the reference images.
  DCO loss does not require auxiliary dataset while preventing the model from catastorphic forgetting problem.`;

export const multiCompositional = `Personalization: By casting T2I diffusion model fine-tuning problem as a constrained policy optimization problem, we propose DCO loss which regularlizes the KL divergence with respect to the reference images.
  DCO loss does not require auxiliary dataset while preventing the model from catastorphic forgetting problem`;

export const cmpWithPriorWorks = `DCO enables generating images with enhanced subject identity preservation and prompt alignment. For example, prior works fail to generate either <dog> or blueprint style while DCO maintains <dog> in blueprint style.`;
