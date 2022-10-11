import React from 'react'

export const Menu = () => {
  return (
    <div className="container my-4">
            <h1 className="food-heading text-center">Menu</h1>
            <table className="table table-bordered table-hover table-primary my-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Items</th>
                        <th scope="col">Rates</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colspan="3" className="text-center text-bg-primary"> Delicious Ice Cream</th>

                    </tr>

                    <tr>
                        <th scope="row">1</th>
                        <td>Pishawari Ice Cream</td>
                        <td>Rs 120</td>

                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Chocolate Ice Cream</td>
                        <td>Rs 120</td>

                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Strawberry Ice Cream</td>
                        <td>Rs 120</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Mango Ice Cream</td>
                        <td>Rs 120</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Kulfa Ice Cream</td>
                        <td>Rs 120</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Pishawari Pista Ice Cream</td>
                        <td>Rs 120</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Faalooda</td>
                        <td>Rs 120</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Special Faalooda</td>
                        <td>Rs 120</td>
                    </tr>
                    <tr>
                        <th colspan="3" className="text-center text-bg-primary">Milk Shakes</th>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>Mango Milk Shake</td>
                        <td>Rs 100</td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>Dates Milk Shake</td>
                        <td>Rs 120</td>
                    </tr>
                    <tr>
                        <th scope="row">11</th>
                        <td>Banana Milk Shake</td>
                        <td>Rs 100</td>
                    </tr>
                    <tr>
                        <th scope="row">12</th>
                        <td>Rose Milk Shake</td>
                        <td>Rs 100</td>
                    </tr>
                    <tr>
                        <th colspan="3" className="text-center text-bg-primary">Fresh Juices</th>
                    </tr>
                    <tr>
                        <th scope="row">13</th>
                        <td>Pomegranates Juice</td>
                        <td>Rs 100</td>
                    </tr>
                    <tr>
                        <th scope="row">14</th>
                        <td>Orrange Juice</td>
                        <td>Rs 90</td>
                    </tr>
                    <tr>
                        <th scope="row">15</th>
                        <td>Grapes Juice</td>
                        <td>Rs 90</td>
                    </tr>
                    <tr>
                        <th scope="row">16</th>
                        <td>apple Juice</td>
                        <td>Rs 90</td>
                    </tr>
                    <tr>
                        <th colspan="3" className="text-center text-bg-primary">Fast Foods</th>
                    </tr>
                    <tr>
                        <th scope="row">17</th>
                        <td>Zinger Burger</td>
                        <td>Rs 260</td>
                    </tr>
                    <tr>
                        <th scope="row">18</th>
                        <td>Braost</td>
                        <td>Rs 280</td>
                    </tr>
                    <tr>
                        <th scope="row">19</th>
                        <td>Chicken Club Sandwitche</td>
                        <td>Rs 200</td>
                    </tr>
                    <tr>
                        <th scope="row">20</th>
                        <td>Shawarma</td>
                        <td>Rs 90</td>
                    </tr>
                </tbody>
            </table>
        </div>
  )
}
