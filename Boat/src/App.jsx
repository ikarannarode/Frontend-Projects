import './App.css';

function App() {
  const products = [
    { 'Category': "Electronic", 'Product': ["TV", "Mobile", "Watch"] },
    { 'Category': "Footwear", 'Product': ["Shoes", "Boots", "Sneakers"] },
    { 'Category': "Furniture", 'Product': ["Chair", "Table", "Wardrobe"] },
    { 'Category': "Furniture", 'Product': ["Chair", "Table", "Wardrobe"] },
    { 'Category': "Furniture", 'Product': ["Chair", "Table", "Bed"] },
    { 'Category': "Furniture", 'Product': ["Chair", "Table", "Wardrobe"] },
    { 'Category': "Furniture", 'Product': ["Chair", "Table", "Wardrobe"] },
    { 'Category': "Furniture", 'Product': ["Chair", "Table", "Wardrobe"] },
    { 'Category': "Furniture", 'Product': ["Chair", "Table", "Wardrobe"] },
  ]
  const topics = [
    { 'topic': "HTML", 'description': 'It is a markup language' },
    { 'topic': "CSS", 'description': 'It is a styling language' },
    { 'topic': "Javascript", 'description': 'It is a scripting language' },
  ]
  const numbers = [[10, 20, 30], [40, 50, 60]]

  return (
    <>
      <div className='flex flex-col w-full h-full   container'>
        {/* <select className="w-10">
          {
            products.map(item => <optgroup label={item['Category']}>{item['Product'].map(product => <option>{product}</option>)}</optgroup>)
          }
        </select> */}



        {/* <dl>
          {
            topics.map((item) => { <dt>{item['topic']}</dt> })
          }
        </dl> */}



        {/* {
          numbers.map(item => <h1>{item.map(num => <span> {num} </span>)}</h1>)
        } */}


        <table>
          {
            numbers.map(num => <tr>{num.map(item => <td>{item}</td>)}</tr>)
          }
        </table>


      </div>
    </>
  )
}

export default App
