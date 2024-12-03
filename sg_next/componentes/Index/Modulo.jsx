import Link from "next/link";

export default function Modulo({h3,p,href}) {
    return (
        <div>
            <h3>{h3}</h3>
            <p>{p}</p>
            <Link href={href}>Acessar</Link>
        </div>
    )
}