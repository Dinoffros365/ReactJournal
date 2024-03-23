import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

export default function App() {
  let cards = data.map((item) => {
    return (
    <Card 
      key = {item.id}
      {...item} 
    />);
  })
  return (
    <div className='main'>
      <Navbar />
      <section className='section-cards main__section-cards'>
        {cards}
        {cards}
        {cards}
        {cards}
        {cards}
        {cards}
      </section>
    </div>
  )
}
