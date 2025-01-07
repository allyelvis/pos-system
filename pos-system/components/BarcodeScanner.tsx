// BarcodeScanner component code
export default function BarcodeScanner({ onScan }) {
  // Implement barcode scanning logic
  return (
    <div>
      <input 
        type="text" 
        placeholder="Scan barcode"
        onChange={(e) => onScan(e.target.value)} 
      />
    </div>
  );
}
