


const Chip = ({ icon, label }) => {

    return (
        <li className="bg-gray-200 flex items-center mr-3 mb-2 px-3 py-2 rounded-full text-sm">
            { icon }
            { label }
        </li>
    );
};

export default Chip