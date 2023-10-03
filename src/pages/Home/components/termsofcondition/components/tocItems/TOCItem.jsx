import './TOCItem.css'

const TOCListItem = ({ item, k }) => {
    return (
        <li key={k} className="toc-item">
            <p>{item}</p>
        </li>
    )
}

export default TOCListItem