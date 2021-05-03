import OperationList from '../components/OperationList'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function Operations() {

    const [type, setType] = useState('income')
    const [data, setData] = useState([
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
            type: 'expense',
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
            type: 'expense',
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
    ])
    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        let result = data.filter(item => item.type === type)
        setFilterData(result)
    }, [])

    function onClick(e) {
        e.preventDefault()
        if (type === 'income') {
            setType('expense')
            setFilterData(data.filter(item => item.type === 'expense'))
        } else {
            setType('income')
            setFilterData(data.filter(item => item.type === 'income'))
        }
    }

    return (
        <div className="text-primary">
            <Menu />
            <OperationList data={filterData} options={true}/>
        </div>
    )

    function Menu() {
        return (
            <div className="w-full py-4 bg-bg_1 text-center font-semibold sticky top-0">
                <div className="flex justify-evenly content-center|">
                    <div className="flex">
                        <h3 className="mr-1">Filter by:</h3>
                        <div onClick={onClick} className="flex cursor-pointer">
                            <h4>{type}</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 self-center mb-1 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                    </div>
                    <Link to="/create_operation">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Link>
                </div>
            </div>
        )
    }
}