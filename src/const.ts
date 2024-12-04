// export const bgColor = `#0065a2`;
export const bgColor = `#d3d3d3`;

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

export const abstract = `Text-to-image (T2I) diffusion models, when fine-tuned on a few personal images, can generate visuals with a high degree of consistency. 
                          However, such fine-tuned models are not robust; they often fail to compose with concepts of pretrained model or other fine-tuned models. 
                          To address this, we propose a novel fine-tuning objective, dubbed Direct Consistency Optimization, which controls the deviation between fine-tuning and pretrained models to retain the pretrained knowledge during fine-tuning.
                          Through extensive experiments on subject and style customization, we demonstrate that our method positions itself on a superior Pareto frontier between subject (or style) consistency and image-text alignment over all previous baselines; it not only outperforms regular fine-tuning objective in image-text alignment, but also shows higher fidelity to the reference images than the method that fine-tunes with additional prior dataset.
                          More importantly, the models fine-tuned with our method can be merged without interference, allowing us to generate custom subjects in a custom style by composing separately customized subject and style models.
                          Notably, we show that our approach achieves better prompt fidelity and subject fidelity than those post-optimized for merging regular fine-tuned models.`;

export const subjectPersonalization = `DCO generates images with a high degree of subject consistency and text alignment. It is possible to change the outfits, backgrounds, or visual attributes of the subject (top row) or convert the subject into different styles (bottom row).`;

export const stylePersonalization = `Given a single reference image, DCO successfully extracts the style of the image without interfering with the content of the reference image, and generates style-consistent images of different content.`;

export const mySubjectMyStyle = `DCO's fine-tuned subject and style models can be easily merged (i.e., arithmetically merged) without any post-processing, producing subject and style-consistent images.`;

export const multicomposition = `It is also possible to generate the image of a custom subject in a custom style with various visual attributes, backgrounds, or actions guided by text prompts.`;

export const oneShotPersonalization = `Our method enables subject consistent text-to-image generation with a single reference image. Users can use synthetic images from different sources for the reference and generate subject consistent images with different attributes and styles.`;

export const acknowledgements = `This work is supported in part by Google University Relations program and Google Cloud Platform credit grant. We express our gratitude to Nataniel Ruiz and Viraj Shah for their help on ZipLoRA implementation and Meera Hahn for their feedback on the presentation of our paper. Finally, we thank Jinyeop Kim and Younghyun Kim for their feedback and support on our manuscript and project page. We provide <a href="https://www.google.com/" style="color: black; text-decoration: underline;text-decoration-style: dotted;">custom link</a> to image assets used in our experiments.`;
