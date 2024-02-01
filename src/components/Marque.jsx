function Marque({ imgArr }) {
  return (
    <div className="flex w-full py-8 gap-20 overflow-hidden whitespace-nowrap">
      {imgArr.map((url, ind) => (
        <img key={ind} src={url} className="w-[6vw] flex-shrink-0" />
      ))}
      {imgArr.map((url, ind) => (
        <img key={ind} src={url} className="w-[6vw] flex-shrink-0" />
      ))}
    </div>
  );
}

export default Marque;
