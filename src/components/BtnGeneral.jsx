import { Link } from "react-router-dom"
export default function BtnGeneral({ type="button", action = () => {} , text="", url="", properties }) {
    return (
        {
            "Link":(
                <Link to={url} className={`btn-general ${properties}`}>
                    {text}
                </Link>
            ),
            "button":(
                <button onClick={action} className={`btn-general ${properties}`}>{text}</button>
            )
        }[type]
    )
}