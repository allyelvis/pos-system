// Receipt component code
export default function Receipt({ sale, store }) {
  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{store.name} - Receipt</h2>
      <div className="mb-4">
        <span className="font-semibold">Transaction ID: </span>
        {sale.transactionId}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Customer: </span>
        {sale.customerName}
      </div>
      <ul className="mb-4">
        {sale.items.map(item => (
          <li key={item.id} className="flex justify-between">
            <span>{item.name} (x{item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="font-semibold text-lg">
        Total: ${sale.total.toFixed(2)}
      </div>
    </div>
  );
}
