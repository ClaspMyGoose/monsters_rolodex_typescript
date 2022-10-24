import Card from '../card/card.component'; 
import './card-list.styles.css';
import { Monster } from '../../App';

interface ICardListProps {
  items: Monster[]

}


const CardList = ({ items }: ICardListProps) => (
    <div className="card-list">
      {items.map((item) => {
        return <Card key={item.id} item={item}/>
      })}
    </div>
  )


export default CardList; 