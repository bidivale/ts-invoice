import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { colRef } from "../firebase";



export default function Table() {
const [items, setItems]: any = useState([]);
const [itemName, setItemName]:any = useState ();
const [itemUnitPrice, setItemUnitPrice] = useState();
const [itemCode, setItemCode] = useState();

useEffect(() => {
    getDocs(colRef)
    .then((snapshot) => {
        let itemsFirebase:any = []
        snapshot.docs.forEach((doc) => {
            
            itemsFirebase.push({...doc.data(), id:doc.id});
            // console.log("this is itemsfirebase",itemsFirebase)
            setItems(itemsFirebase)
            
        })
    })

}, [])
console.log("this is items",items)
// {items.length != 0 && console.log("itemslength =", items.length)}
// {items.length != 0 && console.log("itemsfruitname =", items[1].fruitname)}

function autofill () {
    let i
    for(i = 0; i = items.length; i++){
        if (items[i].fruitname == itemName) {
                setItemUnitPrice(items[i].Price)
                setItemCode(items[i].code)
            }
    }
}
{items.length != 0 && itemName != undefined &&autofill()}



console.log("this is itemname", itemName)
    return (
        <table width='100%'>
            <thead>
                <tr>
                    <td>Item Code</td>
                    <td>Item Name</td>
                    <td>Unit Price</td>
                    <td>Qty</td>
                    <td>Total</td>
                </tr>
            </thead>
            <tbody>
              <tr className="h-10">
                <td>{itemCode}</td>
                <td>
                    <select>
                        {items.map((item:any) => (
                            <option key={item.id} value={itemName} onChange={(e:any) => { setItemName(e.target.value) }}>{item.fruitname} </option>
                        ))}
                        {/* <option>Grapefruit</option>
                        <option>Mango</option>
                        <option>coconut</option>
                        <option>Litchi</option>
                        <option>Banana</option> */}
                    </select>
                </td>
                <td>{itemUnitPrice}</td>
                <td>129</td>
                <td>1032</td>
              </tr>
            </tbody>
        </table>
    )
    console.log("itemname buttom", itemName)
    }
