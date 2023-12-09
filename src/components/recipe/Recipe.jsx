import { RecipeInfo } from "../RecipeInfo/RecipeInfo"
export function Recipe({ recipe }) {
    return (
        < ul >
            {recipe.map(({ name, time, servings, calories, difficulty, img }) => {
                return <RecipeInfo
                    key={name}
                    name={name}
                    time={time}
                    servings={servings}
                    calories={calories}
                    difficulty={difficulty}
                    img={img}
                />
            })}
        </ul >
    )
}