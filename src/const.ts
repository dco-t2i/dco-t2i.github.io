export const bgColor = `#0065a2`;

export const subjectImages = [
  { url: "/1_subject/0.jpeg" },
  { url: "/1_subject/1.jpeg" },
  { url: "/1_subject/2.jpeg" },
  { url: "/1_subject/3.jpeg" },
  { url: "/1_subject/4.jpeg" },
  { url: "/1_subject/5.jpeg" },
  { url: "/1_subject/6.jpeg" },
  { url: "/1_subject/7.jpeg" },
  { url: "/1_subject/8.jpeg" }
];

export const styleImages = [
  { url: "/2_style/0.jpeg" },
  { url: "/2_style/1.jpeg" },
  { url: "/2_style/2.jpeg" },
  { url: "/2_style/3.jpeg" },
  { url: "/2_style/4.jpeg" },
  { url: "/2_style/5.jpeg" },
  { url: "/2_style/6.jpeg" },
  { url: "/2_style/7.jpeg" },
  { url: "/2_style/8.jpeg" },
  { url: "/2_style/9.jpeg" },
  { url: "/2_style/10.jpeg" },
  { url: "/2_style/11.jpeg" },
  { url: "/2_style/12.jpeg" },
  { url: "/2_style/13.jpeg" },
  { url: "/2_style/14.jpeg" }
];

export const msmsImages = [
  { url: "/3_moms/0.jpeg" },
  { url: "/3_moms/1.jpeg" },
  { url: "/3_moms/2.jpeg" },
  { url: "/3_moms/3.jpeg" },
  { url: "/3_moms/4.jpeg" },
  { url: "/3_moms/5.jpeg" },
  { url: "/3_moms/6.jpeg" },
  { url: "/3_moms/7.jpeg" }
];

export const multiImages = [
  { url: "/4_multicomposition/0.jpeg" },
  { url: "/4_multicomposition/1.jpeg" },
  { url: "/4_multicomposition/2.jpeg" },
  { url: "/4_multicomposition/3.jpeg" },
  { url: "/4_multicomposition/4.jpeg" },
  { url: "/4_multicomposition/5.jpeg" },
  { url: "/4_multicomposition/6.jpeg" },
  { url: "/4_multicomposition/7.jpeg" }
];

export const oneShotImages = [
  { url: "/5_1shot/0.jpeg" },
  { url: "/5_1shot/1.jpeg" },
  { url: "/5_1shot/2.jpeg" },
  { url: "/5_1shot/3.jpeg" }
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

export const subjectPersonalization = `DCO generates images with a high degree of subject consistency and text alignment. It is possible to change the outfits, backgrounds, or visual attributes of the subject (top row) or convert the subject into different styles (bottom row).`;

export const stylePersonalization = `Given a single reference image, DCO successfully extracts the style of the image without interfering with the content of the reference image, and generates style-consistent images of different content.`;

export const mySubjectMyStyle = `DCO's fine-tuned subject and style models can be easily merged (i.e., arithmetically merged) without any post-processing, producing subject and style-consistent images.`;

export const multicomposition = `It is also possible to generate the image of a custom subject in a custom style with various visual attributes, backgrounds, or actions guided by text prompts.`;

export const oneShotPersonalization = `Our method enables subject consistent text-to-image generation with a single reference image. Users can use synthetic images from different sources for the reference and generate subject consistent images with different attributes and styles.`;

export const acknowledgements = `This work is supported in part by Google University Relations program and Google Cloud Platform credit grant. We express our gratitude to Nataniel Ruiz and Viraj Shah for their help on ZipLoRA implementation and Meera Hahn for their feedback on the presentation of our paper. Finally, we thank Jinyeop Kim and Younghyun Kim for their feedback and support on our manuscript and project page. We provide <a href="https://www.google.com/" style="color: black; text-decoration: underline;text-decoration-style: dotted;">custom link</a> to image assets used in our experiments.`;
