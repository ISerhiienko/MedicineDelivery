const DrugCard = () => {
  return (
    <div className="w-[300px] flex flex-col bg-emerald-100">
      <img
        src="https://as1.ftcdn.net/v2/jpg/03/20/34/04/1000_F_320340450_JXPE1MHyx1Bl9Hl6hYWn8Myb3OUhwog5.jpg"
        alt="paracetamol"
      />
      <div className="flex justify-between p-3">
        <h2 className="font-bold">Paracetamol</h2>
        <p className="italic">price: 100$</p>
      </div>
      <div className="flex justify-center mb-2">
        <button className="font-bold fill-amber-300">Add to cart</button>
      </div>
    </div>
  );
};

export default DrugCard;
