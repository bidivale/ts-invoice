import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { colRef} from "../firebase";



export default function Table() {
const [items, setItems]: any = useState([]);
const [itemName, setItemName]:any = useState ("select");
const [itemUnitPrice, setItemUnitPrice] = useState(10);
// const [itemCode, setItemCode] = useState();
const [currentItem,setCurrentItem]:any=useState()


// inital 




const handleItemNameChange = (e:any) => {

    //geting the current item that matches item id
    let item=items.find((item:any)=>{
        return item.id===e.target.value
    })

    setCurrentItem(item)
    
}

useEffect(()=>{
    // console.log('curent_item',currentItem);
},[currentItem])


useEffect(() => {
    getDocs(colRef)
    .then((snapshot) => {
        let itemsFirebase:any = []
        snapshot.docs.forEach((doc) => {
            
            itemsFirebase.push({...doc.data(), id:doc.id});
            // console.log("this is itemsfirebase",itemsFirebase)
            setItems(itemsFirebase)
            setCurrentItem(itemsFirebase[0])
            
        })
    })
    

}, [])


console.log("this is items",items)


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
                <td>{currentItem?.code}</td>
                <td>
                    <select  onChange={handleItemNameChange} >
                    <option>Select</option>
                        {items.map((item:any) => (
                            <option key = {item.id} value={item.id} selected={item.id===currentItem?.id}> {item.fruitname} </option>
                            
                        ))} 
                        {/* <option>Grapefruit</option>
                        <option>Mango</option>
                        <option>coconut</option>
                        <option>Litchi</option>
                        <option>Banana</option> */}
                    </select>

                </td>
               
                <td>{currentItem?.price}</td>
                <td>129</td>
                <td>1032</td>
                
              </tr>
              
            </tbody>
            
        </table>
       
    )
    
    }
