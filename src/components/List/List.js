import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

const StyledArticles = styled.ul`
  position: relative;
  padding-bottom: 20px;

  &:after {
    content: "";
    border-bottom: 1px solid #ccc;
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 15px;
  }
`;

const StyledArticle = styled.li`
  font-size: 20px;

  a,
  a:hover {
    color: inherit;
  }

  .icon {
    flex: 0 60px;
    font-size: 24px;
  }
`;

const StyledTotal = styled.span`
  font-size: 20px;
`;

const StyledArticleName = styled.span`
  flex: 100;
`;

const StyledCheckboxContainer = styled.div`
  flex: 0 20px;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
`;

const StyledPrice = styled.span`
  flex: 0 105px;
`;

const List = () => {
  const list = useSelector((state) => state.list);

  const total = () => {
    let finalPrice = 0;
    list.forEach((item) => {
      finalPrice += item.price;
    });
    return finalPrice;
  };

  return (
    <>
      {list.map((item) => {
        return (
          <StyledArticles className="list-unstyled col-12">
            <StyledArticle className="row">
              <StyledCheckboxContainer className="col">
                <input type="checkbox" />
              </StyledCheckboxContainer>
              <StyledArticleName className="px-0 col">
                {item.name}
              </StyledArticleName>
              <StyledPrice className="col">{item.price}€</StyledPrice>
              <a href="delete-article" className="col">
                <FaTimes className="icon" />
              </a>
            </StyledArticle>
          </StyledArticles>
        );
      })}
      <StyledTotal className="col-12 text-end">{total()}€</StyledTotal>
    </>
  );
};

export default List;
