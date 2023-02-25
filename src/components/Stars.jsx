import etoile_vide from "../assets/star-regular.svg"
import etoile_pleine from "../assets/star-solid.svg"

function Stars({rating}) {
    let chaine = ""
    if (rating > 0) {
        chaine = `<img src=${etoile_pleine} alt="${rating}" />`.repeat(rating)
    }
    if (rating < 5) {
        chaine += `<img src=${etoile_vide} alt="${rating}" />`.repeat(5-rating)
    }

    return (<div>{chaine}</div>)
}

export default Stars