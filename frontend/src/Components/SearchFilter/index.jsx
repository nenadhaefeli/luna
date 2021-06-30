import styled from "styled-components"
import {useHistory, useLocation} from "react-router-dom";

export const SearchFilterMain = styled.div`
width: 43.75%;
height: 57px;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid ${props => props.theme.DetailsGrey};
`
const SearchButton = styled.button`
height: 100%;
width 33.33%;
display: flex;
justify-content: center;
align-items: center;
border: none;
background: none;
font-weight: 700;
font-size: ${props => props.theme.textSizeM};
border-bottom: 3px solid transparent;

    :hover {
    border-bottom: 3px solid ${props => props.theme.orange};
    }

border-bottom: ${props => props.borderBottom};   
`

const SearchFilter = () => {
    const history = useHistory();
    const location = useLocation();

    return (
        <SearchFilterMain>
            <SearchButton onClick={() => location.pathname !== "/search/restaurants" ? history.push("/search/restaurants") : null}
                          borderBottom={location.pathname === "/search/restaurants" ? "3px solid #E47D31" : "3px solid transparent"}>RESTAURANTS</SearchButton>
            <SearchButton onClick={() => location.pathname !== "/search/reviews" ? history.push("/search/reviews") : null}
                          borderBottom={location.pathname === "/search/reviews" ? "3px solid #E47D31" : "3px solid transparent"}>REVIEWS</SearchButton>
            <SearchButton onClick={() => location.pathname !== "/search/users" ? history.push("/search/users") : null}
                          borderBottom={location.pathname === "/search/users" ? "3px solid #E47D31" : "3px solid transparent"}>USERS</SearchButton>
        </SearchFilterMain>
    )
}

export default SearchFilter;