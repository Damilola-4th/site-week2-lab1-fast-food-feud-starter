import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  const menuItemObj = props.currentMenuItemObj
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>
      {console.log(props.currentMenuItemObj)}
      {console.log(menuItemObj.item_name)}

      <h4 className="item-name">{menuItemObj.item_name}</h4>

      <ul className="fact-list">{ nutritionFacts.map((nutritionFact, index) =>(
        console.log(nutritionFact.id),
        <NutritionalLabelFact key= {nutritionFact.id} label= { nutritionFact.label } attribute = { nutritionFact.attribute } menuItem = { menuItemObj } />
      ) )}</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  const attribute = props.attribute
  
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{/* WRITE CODE HERE */ props.label }</span>{" "}
      <span className="fact-value">{/* WRITE CODE HERE */ props.menuItem[attribute]}</span>
    </li>
  )
}

export default NutritionalLabel
