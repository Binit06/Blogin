import "./Image.css";
interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Image;
