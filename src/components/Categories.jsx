import React, {useState} from 'react'


export function Categories() {
    const [activeCategory, setActiveCategory] = useState(0)
    const categoryArray = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const setCategory = (index) => {
        setActiveCategory(index)
    }

    return (
        <div className="categories">
            <ul>
                {categoryArray.map((category, index) => {
                    return <li key={index}
                               className={activeCategory === index ? "active" : ''}
                               onClick={() => setCategory(index)}>{category}</li>
                })}
            </ul>
        </div>
    )
}