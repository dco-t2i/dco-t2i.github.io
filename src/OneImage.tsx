interface Props {
  image: { url: string };
}

const OneImage = ({ image }: Props) => (
  <div className="text-center pt-2">
    <img src={image.url} alt={image.url} width="1000px" />
  </div>
);

export default OneImage;
