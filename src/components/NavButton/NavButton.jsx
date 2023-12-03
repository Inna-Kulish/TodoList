// Button Prev and Next to navigate between pages
export const NavButton = ({ name, disabled, onBtnClick }) => {
    return (
        <button className="nav-btn" type='button' disabled={disabled} onClick={()=>onBtnClick()}>{name}</button> 
    )
}