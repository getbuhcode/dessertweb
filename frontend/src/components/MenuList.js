const MenuList = ({menu}) => {
    
    return (
        <div className="menulist">
            <img src={ menu.img } alt="" />
            <h3>{ menu.name }</h3>
            <p>{ menu.price.toFixed(2) + "/" + menu.unit }</p>
        </div>
    );
}
 
export default MenuList;