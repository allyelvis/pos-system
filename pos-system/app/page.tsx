'use client'

import { useState, useEffect } from 'react'
import { signOut } from 'next-auth/react'
import ProductList from '@/components/ProductList'
import Cart from '@/components/Cart'
import Inventory from '@/components/Inventory'
import SalesReport from '@/components/SalesReport'
import CustomerManagement from '@/components/CustomerManagement'
import BarcodeScanner from '@/components/BarcodeScanner'
import Receipt from '@/components/Receipt'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function POS({ user, store }) {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [view, setView] = useState('pos')
  const [customers, setCustomers] = useState([])
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [lastSale, setLastSale] = useState(null)

  useEffect(() => {
    fetchProducts()
    fetchCustomers()
  }, [])

  const fetchProducts = async () => {
    const res = await fetch(`/api/products?storeId=${store.id}`)
    const data = await res.json()
    setProducts(data)
  }

  const fetchCustomers = async () => {
    const res = await fetch('/api/customers')
    const data = await res.json()
    setCustomers(data)
  }

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (index) => {
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  }

  const handleBarcodeScan = (barcode) => {
    const product = products.find(p => p.barcode === barcode)
    if (product) {
      addToCart(product)
    } else {
      alert('Product not found')
    }
  }

  const checkout = async () => {
    const saleData = {
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      userId: user.id,
      customerId: selectedCustomer ? selectedCustomer.id : null,
      storeId: store.id,
    }

    const saleRes = await fetch('/api/sales', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(saleData),
    })

    if (saleRes.ok) {
      const sale = await saleRes.json()
      setLastSale(sale)

      // Record sale in accounting
      await fetch('/api/accounting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ saleId: sale.id, total: sale.total }),
      })

      alert('Sale completed and recorded in accounting!')
      setCart([])
      fetchProducts()
      setSelectedCustomer(null)
    } else {
      alert('Error completing sale')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <Button onClick={() => setView('pos')} className="mr-2">POS</Button>
        {user.role === 'manager' && (
          <>
            <Button onClick={() => setView('inventory')} className="mr-2">Inventory</Button>
            <Button onClick={() => setView('sales')} className="mr-2">Sales Report</Button>
            <Button onClick={() => setView('customers')}>Customers</Button>
          </>
        )}
        <Button onClick={() => signOut()} className="ml-4">Logout</Button>
      </div>
      {view === 'pos' && (
        <div className="flex">
          <div className="w-2/3">
            <BarcodeScanner onScan={handleBarcodeScan} />
            <ProductList products={products} addToCart={addToCart} />
          </div>
          <div className="w-1/3">
            <div className="mb-4">
              <select
                value={selectedCustomer ? selectedCustomer.id : ''}
                onChange={(e) => setSelectedCustomer(customers.find(c => c.id === e.target.value) || null)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Customer</option>
                {customers.map(customer => (
                  <option key={customer.id} value={customer.id}>{customer.name}</option>
                ))}
              </select>
            </div>
            <Cart 
              cart={cart} 
              removeFromCart={removeFromCart} 
              checkout={checkout}
              selectedCustomer={selectedCustomer}
            />
            {lastSale && (
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">Last Sale Receipt</h3>
                <Receipt sale={lastSale} store={store} />
              </div>
            )}
          </div>
        </div>
      )}
      {view === 'inventory' && user.role === 'manager' && <Inventory storeId={store.id} />}
      {view === 'sales' && user.role === 'manager' && <SalesReport storeId={store.id} />}
      {view === 'customers' && user.role === 'manager' && <CustomerManagement />}
    </div>
  )
}
