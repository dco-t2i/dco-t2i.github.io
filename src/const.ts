export const bgColor = `#0065a2`;

export const subjectImages = [
  { url: "/subject/0.jpeg" },
  { url: "/subject/1.jpeg" },
  { url: "/subject/2.jpeg" },
  { url: "/subject/3.jpeg" },
  { url: "/subject/4.jpeg" },
  { url: "/subject/5.jpeg" },
  { url: "/subject/6.jpeg" },
  { url: "/subject/7.jpeg" },
  { url: "/subject/8.jpeg" }
];

export const styleImages = [
  { url: "/style/0.jpeg" },
  { url: "/style/1.jpeg" },
  { url: "/style/2.jpeg" },
  { url: "/style/3.jpeg" },
  { url: "/style/4.jpeg" },
  { url: "/style/5.jpeg" },
  { url: "/style/6.jpeg" },
  { url: "/style/7.jpeg" }
];

export const msmsImages = [
  { url: "/msms/0.jpeg" },
  { url: "/msms/1.jpeg" },
  { url: "/msms/2.jpeg" },
  { url: "/msms/3.jpeg" },
  { url: "/msms/4.jpeg" }
];

export const multiImages = [
  { url: "/multicomposition/0.jpeg" },
  { url: "/multicomposition/1.jpeg" },
  { url: "/multicomposition/2.jpeg" },
  { url: "/multicomposition/3.jpeg" },
  { url: "/multicomposition/4.jpeg" },
  { url: "/multicomposition/5.jpeg" }
];

export const oneShotImages = [
  { url: "/oneshot/0.jpeg" },
  { url: "/oneshot/1.jpeg" },
  { url: "/oneshot/2.jpeg" },
  { url: "/oneshot/3.jpeg" }
];

export const tldr = `DCO enhances compositionality of personalized text-to-image models by preserving pretrained knowledge`;

export const abstract = `Text-to-image (T2I) diffusion models, when fine-tuned on few personal images, are able to generate visuals with high degree of consistency. 
  However, they still lacks in synthesizing images of different scenario or styles that are possible in the original pretrained models. 
  To address this, we propose to fine-tune T2I model by maximizing consistency to reference images, while penalizing the deviation from the pretrained model.
  We devise a novel training objective for T2I diffusion models that minimally fine-tunes the pretrained model to achieve consistency.
  Our method, dubbed ***Direct Consistency Optimization***, is as simple as regular diffusion loss, while significantly enhances the compositionality of personalized T2I models.
  Also, our approach induces a new sampling method that controls the tradeoff between image fidelity and prompt fidelity.
  Lastly, we emphasize the necessity of using a comprehensive caption for reference images to further enhance the image-text alignment.
  We show the efficacy of proposed method on the T2I personalization for subject, style, or both.
  In particular, our method results in superior Pareto frontier to the baselines.`;

export const subjectPersonalization = `DCO generates consistent images of a subject given by reference images, composed with textual prompts, *e.g.*, changing the outfits, backgrounds, attributes (top row) or converting into various styles (bottom row).`;

export const stylePersonalization = `DCO generates style-consistent images of various contents, given a single reference image.`;

export const mySubjectMyStyle = `The high compositionality of DCO enables merging independently trained subject \n\nand style personalized models without any distraction.`;

export const oneShotPersonalization = ` Our method enables subject consistent text-to-image generation with a single reference image.`;

export const acknowledgements = `We thank David Salesin for their valuable feedback on our manuscript. Specifically, we express our gratitude to Nataniel Ruiz and Viraj Shah for their help on ZipLoRA implementation and feedback on the presentation of our paper. Finally, a special thanks to Jinyeop Kim and Younghyun Kim for their feedback and support on our manuscript and project page.`;
