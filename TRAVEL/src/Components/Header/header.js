import './header.css'
import Headerimg from '../../images/header.jpg'
const Header = () => {
    return (
        // Header
        <>
            
            <div className="header">
                <div className="img">
                    <div>
                        <img src={Headerimg}     alt="" />
                    </div>
                    <div className="Overlay"></div>
                </div>     
                <div className="Content">
                    <h6>Love The Places</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quos esse et tenetur saepe dolores, perferendis corporis id laborum ipsam, nostrum ex! Temporibus possimus excepturi ex, quae quia earum sed. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae provident alias vitae dolor! Nam dolor, explicabo, a cumque commodi architecto iste, modi quam maxime doloribus quia animi quaerat? In, dolorum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio possimus soluta tempore magni recusandae laborum illo modi ut aut excepturi? Hic rerum, exercitationem amet ea consequuntur eos repudiandae nemo nobis!</p>
                </div>
             </div>

        </>
    )
}
export default Header