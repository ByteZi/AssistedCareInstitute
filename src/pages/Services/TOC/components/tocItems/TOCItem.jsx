import './TOCItem.css'

const TOCListItem = ({ item, k }) => {
    return (
        <li key={k} className="toc-item">
            <h3>{item.header}</h3>
            <p>{item.txt}</p>
        </li>
    )
}

export default TOCListItem