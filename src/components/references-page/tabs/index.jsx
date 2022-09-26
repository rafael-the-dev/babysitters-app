import Button from "../button"

const Container = () => {

    return (
        <div className="border-b border-gray-300 border-solid flex mt-4">
            <Button href="/references">Pedir</Button>
            <Button href="/references/received">Sobre si</Button>
            <Button href="/references/sent">Por si</Button>
        </div>
    );
};

export default Container;