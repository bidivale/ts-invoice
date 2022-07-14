import ItemDetails from "./ItemDetails";
import { addDoc } from "firebase/firestore";
import { colRefInvoices } from "../firebase";


export default function Table() {
    const saveInvoice = (e:any)=> {
        addDoc(colRefInvoices, {
            inv_code: 'INV-4',
            inv_date: '13/07/22',
            inv_item_array: [
                {
                inv_item_name: "Banana",
                inv_item_code: 20349,
                inv_item_qty: 3,
                inv_line_total: 30
                },
                {
                inv_item_name: "Litchi",
                inv_item_code: 20347,
                inv_item_qty: 2,
                inv_line_total: 10
                }
            ]

        })

    }
    return (
        <>
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
                <ItemDetails/>
                <ItemDetails/>
                <ItemDetails/>
                <ItemDetails/>
                <ItemDetails/>
            </tbody>    
        </table>
       <div>
        <button type="button" onClick={saveInvoice}>Save Invoice</button>
       </div>
       </>
    )
    
    }
