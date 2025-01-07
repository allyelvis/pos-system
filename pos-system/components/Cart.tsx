// Cart component code
export default function Cart({ cart, removeFromCart, checkout, selectedCustomer }) {
  return (
    <div>
      <h2 className="text-xl font-bold">Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={item.id} className="flex justify-between mb-2">
            <span>{item.name} (x{item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <span className="font-semibold">Total: </span>
        <span>${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</span>
      </div>
      <button onClick={checkout} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Checkout
      </button>
    </div>
  );
}
