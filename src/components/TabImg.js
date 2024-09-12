
import './TabImg.css'

export const TabImg = ()=>{

return (
  <div className="contain">
    <h1>Example</h1>
     <div className="head">
        <h1 className="even">FirstName</h1><h1 className="even">FirstName</h1><h1 className="odd">Email</h1>
     </div>
     <div class="firstR">
        <p className="even box">John</p><p className="even box">Doe</p><p className="odd box">John@email.com</p>

     </div>
     <div className="secondR">
        <p className="even box">Mary</p><p className="even box">Moe</p><p className="odd box">Mary@email.com</p>
     </div>
     <div className="thirdR">
        <p className="even box">July</p><p className="even box">Dooley</p><p className="odd box">July@gmail.com</p>
     </div>
  
    <div>
        <img src="salad.jpeg" alt="salad" className="image"/>
    </div>
  </div>
/*boder on the table
    thumbnail around the picture*/
     

)
}


