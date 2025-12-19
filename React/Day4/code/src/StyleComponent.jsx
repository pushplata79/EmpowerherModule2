// How to Style React Component With CSS

//  1.Global or External 
//  2. Modules/ Modular big apps
//  3. Inline/Internal
import styles from "./StyleComponent.module.css"  //global
function StyleComponent(){

  return(<button className={styles.btn}>click me</button>)
  

}

export default StyleComponent