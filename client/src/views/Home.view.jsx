import {useState} from 'react'
import OperationList from '../components/OperationList'
import CurrentBalance from '../components/CurrentBalance'

export default function Home(){

    const [data, setData] = useState([
        {
            concept: 'Cobre mi sueldo',
            mount: 60000,
            date: '30 abr 2021',
            type: 'income',
            category: 'Job'
        },
        {
            concept: 'Cobre mi sueldo',
            mount: 60000,
            date: '30 abr 2021',
            type: 'income',
            category: 'Job'
        },
        {
            concept: 'Cobre mi sueldo',
            mount: 60000,
            date: '30 abr 2021',
            type: 'income',
            category: 'Job'
        },
        {
            concept: 'Cobre mi sueldo',
            mount: 60000,
            date: '30 abr 2021',
            type: 'income',
            category: 'Job'
        },
        {
            concept: 'Cobre mi sueldo',
            mount: 60000,
            date: '30 abr 2021',
            type: 'expense',
            category: 'Job'
        },
        {
            concept: 'Cobre mi sueldo',
            mount: 60000,
            date: '30 abr 2021',
            type: 'income',
            category: 'Job'
        },
        {
            concept: 'Cobre mi sueldo',
            mount: 60000,
            date: '30 abr 2021',
            type: 'income',
            category: 'Job'
        },
        {
            concept: 'Cobre mi sueldo',
            mount: 60000,
            date: '30 abr 2021',
            type: 'income',
            category: 'Job'
        },
        {
            concept: 'Cobre mi sueldo',
            mount: 60000,
            date: '30 abr 2021',
            type: 'income',
            category: 'Job'
        },
        {
            concept: 'Cobre mi sueldo',
            mount: 60000,
            date: '30 abr 2021',
            type: 'income',
            category: 'Job'
        },
    ])

    function getCurrentBalance(){
        let total=0
        data.forEach(item => {
            if(item.type==="income") total += item.mount
            else total -= item.mount
        })
        return total
    }

    return(
        <div>
            <OperationList data={data} options={false}/>
            <CurrentBalance balance={getCurrentBalance()}/>
        </div>
    )
}
