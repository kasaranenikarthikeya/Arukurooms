import React, { createContext, useContext, useEffect, useState } from 'react'


const CartContext = createContext()


export function CartProvider({ children }){
const [cart, setCart] = useState(()=>{
try{ return JSON.parse(localStorage.getItem('araku_cart')) || [] }catch{ return [] }
})


useEffect(()=>{ localStorage.setItem('araku_cart', JSON.stringify(cart)) },[cart])


function add(item){
setCart(prev=>{
const found = prev.find(p=>p.id===item.id)
if(found) return prev.map(p=> p.id===item.id? {...p, nights: p.nights+item.nights}:p)
return [...prev, item]
})
}
function remove(id){ setCart(prev=> prev.filter(p=>p.id!==id)) }
function updateQty(id, nights){ setCart(prev=> prev.map(p=> p.id===id? {...p, nights}: p)) }
function clear(){ setCart([]) }
const total = cart.reduce((s,c)=> s + c.price * c.nights, 0)


return <CartContext.Provider value={{cart, add, remove, updateQty, clear, total}}>{children}</CartContext.Provider>
}
export const useCart = ()=> useContext(CartContext)