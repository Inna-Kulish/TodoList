export const NavButton = ({name, disabled, onBtnClick}) => {
    return (
        <button type='button' disabled={disabled} onClick={()=>onBtnClick()}>{name}</button> 
    )
}