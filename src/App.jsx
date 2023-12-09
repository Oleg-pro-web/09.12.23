import { Recipe } from "./components/recipe/Recipe"
import data from "./../data.json"
export function App() {
    return (
        <>
            <Recipe recipe={data} />
        </>
    )
}