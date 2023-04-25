import { Link } from "react-router-dom"
export default function BtnGeneral({ type="button", action, text="", url="", properties }) {
    return (
        {
            "Link":(
                <Link to={url} className={`btn-general ${properties}`}>
                    {text}
                </Link>
            )
        }[type]
    )
}