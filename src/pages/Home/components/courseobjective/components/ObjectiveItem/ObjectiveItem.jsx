const ObjectItem = ({ item, i }) => {
    return (
        <li key={i} className="objective-item">
            {item}
        </li>
    )
}

export default ObjectItem