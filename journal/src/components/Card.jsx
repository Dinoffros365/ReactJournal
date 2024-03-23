export default function Card(props){
    return (
        <div className="main__card card">
            <img src={"./src/assets/" + props.imageUrl} alt={`${props.imageUrl}`} className="card__img"/>
            <div className="card__container">
                <div className="card__country">{props.location} <a href="" className="card__link">View on Google Maps</a></div>
                <h2 className="card__title">{props.title}</h2>
                <h3 className="card__subtitle">{props.startDate +  ' - ' + props.endDate}</h3>
                <p className="card__text">{props.description}</p>
            </div>
        </div>
    )
}