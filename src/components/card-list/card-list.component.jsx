import Card from '../card/card.component'; 
import './card-list.styles.css';

const CardList = ({ items }) => (
    <div className="card-list">
      {items.map((item) => {
        return <Card key={item.id} item={item}/>
      })}
    </div>
  )


export default CardList; 