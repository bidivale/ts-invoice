import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { colRef} from "../firebase";



export default function Table() {
const [items, setItems]: any = useState([]);
const [itemName, setItemName]:any = useState ("banana");
const [itemUnitPrice, setItemUnitPrice] = useState(10);
const [itemCode, setItemCode] = useState(20349);





const handleItemNameChange = (e:any) => {
    e.preventDefault();
    
    console.log("this is e", e);
    
    { setItemName(e.target.value)}
    
    {items.length != 0 && itemName != undefined && autofillItemDetails(items, itemName)}
    
    
    
}


function autofillItemDetails(itms:any, itmName:string) {
    console.log("autofill fuction ran");
    
    let i
    for(i = 0; i<items.length; i++){
        if (items[i].fruitname === itemName) {
                
                setItemUnitPrice(items[i].price)
                setItemCode(items[i].code)
                console.log("this is i", i);
                console.log("this is fruitname", items[i].fruitname);
                console.log("this is price", items[i].price);
                // break
            }
    }
}

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


// {items.length != 0 && itemName != undefined && autofillItemDetails()}

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
                    <select  onChange={handleItemNameChange} value={itemName}>
                        {items.map((item:any) => (
                            <option key = {item.id}> {item.fruitname} </option>
                            
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
    
    }
