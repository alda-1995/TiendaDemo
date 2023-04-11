import BtnAdd from "./BtnAdd";

export default function CardProducto({ id, nombre, imgUrl, addAction }) {
    return (
        <div className="flex flex-col">
            {imgUrl &&
                <div className="h-[300px] xl:h-[400px] flex items-center justify-center">
                    <img src={imgUrl} className="max-h-[80%]" alt={`img ${id}`} />
                </div>
            }
            <h3 className="text-primary mb-4">{nombre}</h3>
            <BtnAdd text="Agregar" item={{ "id": id, "nombre": nombre }} action={addAction} />
        </div>
    );
}