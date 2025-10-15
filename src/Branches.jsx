import { Link } from "react-router-dom";

function Branches() {
    return(
        <>
            <div>
                <h1> See Our branch near you </h1>
                <table>
                    <tr>
                        <th colSpan={2}> Rahisi Shop Branches </th>
                        <th>
                            <Link to ='/Juja'> Visit main branch </Link>
                        </th>
                    </tr>
                    <tr>
                        <th> Province </th>
                        <th> County </th>
                        <th> Branch </th>
                        
                    </tr>
                    <tr>
                        <td rowSpan={3}> Central </td>
                        <td> Kiambu </td>
                        <td> Juja Rahisi General shop </td>
                        
                    </tr>

                    <tr>
                        
                        <td> Nyeri </td>
                        <td> Uthaya Rahisi  shop </td>
                    </tr>

                    <tr>
                        
                        <td> Nyandarua </td>
                        <td> Ol-Kalou Rahisi  shop </td>
                    </tr>

                    <tr>
                        <td> Nyanza </td>
                        <td> Siaya </td>
                        <td> Bondo Rahisi General shop </td>
                    </tr>

                    <tr>
                        <td rowSpan={2}> Rift valley </td>
                        <td> Nakuru </td>
                        <td> Bahati Rahisi General shop </td>
                    </tr>

                    <tr>
                        
                        <td> Nakuru </td>
                        <td> Njoro Rahisi General shop </td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default Branches;