const CapsLockIspejimas = () => {
  const arCapsLock = (event) => {
    console.log(event.key);
    let key = event.key;
    key === key.toUpperCase() ? alert("Ijungtas CAPSLOCK") : "";
  };
  return (
    <div>
      <h2>CapsLockIspejimas</h2>
      <input type="password" onKeyDown={arCapsLock} />
    </div>
  );
};

export default CapsLockIspejimas;
