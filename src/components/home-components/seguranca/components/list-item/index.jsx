
import Image from 'next/image';

const ListItem = ({ url, text}) => {

    return (
        <li className='font-medium flex items-center mb-4 segura__list-item sm:text-left'>
            <div className='image-container mr-4 relative'>
                <Image
                    alt=""
                    layout="fill"
                    src={url} 
                />
            </div>
            { text }
            <style jsx>
                {
                    `   
                        .image-container {
                            height: 40px;
                            width: 40px;
                        }

                        @media screen and (min-width: 600px) {
                            .segura__list-item {
                                width: 48%;
                            }
                        }

                        @media screen and (min-width: 1024px) {
                            .segura__list-item {
                                width: 32%;
                            }
                        }
                    `
                }
            </style>
        </li>
    );
};

export default ListItem;