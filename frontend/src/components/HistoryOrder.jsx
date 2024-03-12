const HistoryOrder = ({ orderList, orderId, totalPrice }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <h2 className="text-lg font-semibold">Order Details</h2>
        </div>
        <div className="flex-grow ml-4">
          <p className="text-sm text-gray-500">Order ID: {orderId}</p>
          <p className="text-gray-500 text-xm">
            Total Price: <span className="font-bold">${totalPrice}</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {orderList.map(({ name, price, image, quantity }) => (
          <div
            key={name}
            className="flex items-center border border-gray-200 p-4 rounded-lg"
          >
            <img
              src={image}
              alt="Product Image"
              className="h-20 w-20 mr-4 object-contain"
            />
            <div className="flex flex-col mx-4">
              <p className="text-lg font-semibold mb-2">{name}</p>
              <p className="text-gray-600 mb-2">Price: ${price}</p>
            </div>
            <div className="flex flex-col mx-4">
              <p className="text-gray-600 mb-2">Quantity: {quantity}</p>
              <p className="text-gray-600 mb-2">Total: ${price * quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryOrder;
