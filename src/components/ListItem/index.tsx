import * as C from './styles';
import { Item } from '../../types/item'
import { useState } from 'react';

type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {

    const [isCheked, setIsCheked] = useState(item.done);

  
    

    return (
        <C.Container done={isCheked}>
            <div className='image'>✖️</div>
            <input 
                type="checkbox" 
                name="" 
                checked={isCheked}
                onChange={e => setIsCheked(e.target.checked)}
            />
            <label>{item.name}</label>
        </C.Container>
    );
}