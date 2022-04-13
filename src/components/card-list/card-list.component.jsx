import './card-list.style.css'
import Card from '../card/card.component'


const CardList = (props) => {
        // console.log(this.props)
        const {monsters} = props;
        // console.log(monsters)
        return (
            <div className='card-list'>
                {monsters.map(monster=>{
                    const {name,email,id} = monster
                   return (
                       <Card monster={monster}/>
                   )
                })}
            </div>
        )
}

export default CardList