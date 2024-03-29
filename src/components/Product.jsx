import { LocalMallOutlined, SearchOutlined, FavoriteBorderOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    background-color: rgba(0,0,0,0.1);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${'' /* background-color: #f5fbfd; */}
    ${'' /* object-fit: cover; */}
    position: relative;
${'' /* Info should be initialized before use */}
${'' /* "hover" alone will only change the container, pass Info component instead */}
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;

    &:hover{
        background-color: #A2DBFA;
        transform: scale(1.1);
        transition: 0.5s all ease;
    }
`;

export default function Product({ item }) {
    
    return (
        <Container>
            <Circle />
            <Image src={item.imgUrl} />
            <Info>
                <Icon>
                    <LocalMallOutlined />
                </Icon>
                <Icon>
                    <Link to={`/productdetails/${item._id}`}>
                        <SearchOutlined />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}
