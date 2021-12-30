import { useParams } from 'react-router-dom';

const DetailRecommend = () => {
    const { id } = useParams();
    return <p>{id}</p>;
};

export default DetailRecommend;
