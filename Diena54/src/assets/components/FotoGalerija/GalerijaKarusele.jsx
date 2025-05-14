const GalerijaKarusele = (props) => {
  const { images, selectPhoto, newSelect } = props;

  const selectedImageClass = (image) => {
    return image === newSelect ? "selected" : "notSelected";
  };

  return (
    <>
      {images.map((image, i) => (
        <img
          key={i}
          className={selectedImageClass(image)}
          src={image}
          alt=""
          onClick={() => selectPhoto(image)}
        />
      ))}
    </>
  );
};

export default GalerijaKarusele;
