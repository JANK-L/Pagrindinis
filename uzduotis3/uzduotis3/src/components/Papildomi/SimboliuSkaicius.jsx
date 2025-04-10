const SimboliuSkaicius = () => {
  const simboliuSkaicius = (event) => {
    console.log(event.target.textLength);
  };
  return (
    <div>
      <h2>SimboliuSkaicius</h2>
      <input type="text" onInput={simboliuSkaicius} />
    </div>
  );
};

export default SimboliuSkaicius;
