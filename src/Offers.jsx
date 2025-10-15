import Footer from "./Footer";
import styles from "./Offers.module.css";
function Offers() {
    return(
        <>
           <div className={styles.mainDiv}>
               <h1> See our current offers, </h1>
               <table>
                <tr>
                  <th colSpan={4}> Offers at Rahisi shop </th>
                </tr>
                  <tr>
                    <th> Cost of goods </th>
                    <th> Percentage discount </th>
                    <th> Added Item </th>
                    <th> Other services </th>
                  </tr>
                  <tr>
                    <td> 500 - 1000 </td>
                    <td> 2% </td>
                    <td> none </td>
                    <td> None </td>
                  </tr>
                  <tr>
                    <td> 1001 - 1500 </td>
                    <td> 2.3% </td>
                    <td> 1/2 kg Sugar </td>
                    <td> None </td>
                  </tr>
                  <tr>
                    <td> 1501 - 3000 </td>
                    <td> 2.5% </td>
                    <td> 1 kg Sugar </td>
                    <td> Carriage </td>
                  </tr>
                  <tr>
                    <td> 3001 and over </td>
                    <td> 5% </td>
                    <td> Voucher </td>
                    <td> Transport </td>
                  </tr>
               </table>
           </div>
           <Footer/>
        </>
    );
}

export default Offers;