import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { colRefItems} from "../firebase";

function ItemDetails() {
    const [items, setItems]: any = useState([]);
    const [currentItem,setCurrentItem]:any=useState();
    const [quantity, setQuantity]: any = useState(Number);
    const [itemTotal, setItemTotal]: any = useState(Number)

    const handleItemNameChange = (e:any) => {
        //geting the current item that matches item id
        let item=items.find((item:any) => {
            return item.id === e.target.value
        })
        setCurrentItem(item)    
    }
    
    useEffect(()=>{
        // console.log('curent_item',currentItem);
        
    },[currentItem])

    useEffect(() => {
        setItemTotal(quantity*currentItem?.price)
    }, [quantity, currentItem])
    
    
    useEffect(() => {
        getDocs(colRefItems)
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

                <td>
                    <input className='quantityInput' type='number' 
                        onChange={e => {setQuantity(e.target.value)}} value={quantity} >
                    </input>
                </td>

                <td>{itemTotal}</td>
                
              </tr>

  )
}

export default ItemDetails;

