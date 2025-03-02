
function Tile({className,value ,onClick ,playerTurn}){
   let hoverclass = null;
 if(value ==null && playerTurn!=null){
    hoverclass = `${playerTurn.toLowerCase()}-hover`;
 }

    return (
        <div onClick={onClick} className={`tile ${className} x-hover ${hoverclass}`}>{value}</div>
    );
}

export default Tile;