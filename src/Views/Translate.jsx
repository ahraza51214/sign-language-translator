/*
const Translate = () => {
    return(
        <h1>Translate</h1>
    )
}

export default Translate;
*/
import { useParams } from 'react-router-dom';

const Translate = () => {
    const { username } = useParams();

    return (
        <div>
            <h1>Welcome to your translation page, {username}</h1>
        </div>
    );
};

export default Translate;
