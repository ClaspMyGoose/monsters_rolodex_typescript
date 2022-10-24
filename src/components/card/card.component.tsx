import './card.styles.css';
import { Monster } from '../../App';

interface ICardProps {
  item: Monster
}


const Card = ({ item }: ICardProps) => {
  const {id, name, email} = item;
  return (
    <div className="card-container">
      <img alt={`monster ${name}`} src={`https://robohash.org/${id}/?set=set2&size=180x180`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}


export default Card