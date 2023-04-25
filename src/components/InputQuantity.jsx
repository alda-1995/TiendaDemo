export default function InputQuantity({id, cantidad, handleChange}){
    return(
        <input className="font-button max-w-[80px] 2xl:[100px] border-primary border-2 text-primary px-3"
        type="number"
        min="1"
        max="50"
        onChange={event => handleChange(event, id) }
        value={cantidad} />
    )
}