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

export const subjectPersonalization = `***DCO*** generates subject consistent images with high image-text alignment, *e.g.*, changing the outfits, backgrounds, attributes (top row) or converting into various styles (bottom row). `;

export const stylePersonalization = ``;

export const mySubjectMyStyle = ``;

export const multiCompositional = ``;

export const oneShotPersonalization = ` `;

export const cmpWithPriorWorks = `DCO enables generating images with enhanced subject identity preservation and prompt alignment compared to prior works. 
For example, prior works fail to generate either dog or blueprint style while DCO maintains dog in blueprint style (see 2nd row).`;
