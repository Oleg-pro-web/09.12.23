export function RecipeInfo({ name, time, servings, calories, img, difficulty }) {
    return (
        <li>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>Number of servings{servings}</p>
            <p>Number of calories{calories} Cal</p>
            <p>{difficulty}</p>
            <p>Сooking time{time} min</p>
        </li>
    )
}