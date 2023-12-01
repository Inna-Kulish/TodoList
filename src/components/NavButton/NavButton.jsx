export const NavButton = ({name, disabled, onBtnClick}) => {
    return (
        <button className="nav-btn" type='button' disabled={disabled} onClick={()=>onBtnClick()}>{name}</button> 
    )
}