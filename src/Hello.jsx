function Hello({name, age, city,siblings}) {
    return (
        <>
            <h1>Name :- {name}</h1>
            <h2>Age :- {age}</h2>
            <h3>City:- {city}</h3>
            <hr />
            <li>Array Data</li>
            {siblings.map((sibling, index) => (
                <ul key={index}>{index+1} - {sibling}</ul>
            ))}

        </>
    )
}
export default Hello