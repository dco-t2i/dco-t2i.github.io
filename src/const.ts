export const mainImage = { url: "/main.png" };

export const slideImages = [
  { url: "/main.png" },
  { url: "/main.png" },
  { url: "/cat1.png" },
];

export const subjectImages = [
  { url: "/dog1.png" },
  { url: "/dog2.png" },
  { url: "/dog3.png" },
  { url: "/dog5.png" },
];

export const styleImages = [
  { url: "/wood.png" },
  { url: "/child.png" },
  { url: "/dog6.png" },
  { url: "/dog8.png" },
];

export const hightlightImages = [{ url: "/wood.png" }, { url: "/child.png" }];

export const highlightTexts = [
  `DCO generates high-quality novel images from text prompts in any
  background, style and etc by a single referecne images.`,
  `Comprehensive Captioning in model personalization enables to better
  disentangle desirable componenets within the image. For example, "a
  dog in the yellow background" helps to disentangle background
  knowledge from the reference image and induce to implant only a dog
  feature into the model.`,
];

export const abstract = `In this work, we present Direct Consistency Optimization (DCO), a
novel training objective for low-shot fine-tuning of text-to-image
(T2I) diffusion models, inspired by the constrained policy
optimization of reinforcement **learning**. Unlike a regular fine-tuning,
DCO optimizes the model to be consistent with the pretrained model
while adding minimal information about new concepts, and as such it
mitigates knowledge forgetting and improves the compositional
generation ability of personalized T2I models. In addition, we
emphasize the importance of using a comprehensive and visually
grounded caption for reference training images to further enhance the
image-text alignment of personalized T2I generation. We showcase the
efficacy of our method on a T2I model personalization for subject or
style, or both. We show improved image-text alignment of low-shot
fine-tuned T2I models while retaining the competitive subject fidelity
over baselines. The source code will be released.`;
