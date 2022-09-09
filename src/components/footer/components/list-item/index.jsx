
import Link from "src/components/link";

const ListItem = ({ href, label }) => (
    <li className="mb-3 mr-3 sm:mr-4 last:mr-0">
        <Link className="font-medium text-black text-sm hover:underline" href={href}>
            { label }
        </Link>
    </li>
);

export default ListItem;