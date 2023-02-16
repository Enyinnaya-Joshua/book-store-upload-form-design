import React from "react";
import styled from "styled-components";

const UploadPage = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <First>
            <CoverImage>
              <Icon></Icon>
              <NewImage />
            </CoverImage>
            <UploadInput id="pix" type="file" />
            <UploadLabel htmlFor="pix">Upload Cover Image</UploadLabel>
          </First>
          <Second>
            <Title placeholder="title" />
            <Author placeholder="author" />
            <Summary placeholder="summary" />
            <Category>
              <option value="" id="select">
                --select--
              </option>
              <option value="comedy">Comedy</option>
              <option value="tragedy">Tragedy</option>
              <option value="poem">Poem</option>
            </Category>
            <Button>Summit</Button>
          </Second>
        </Wrapper>
      </Container>
    </div>
  );
};

export default UploadPage;

const Button = styled.button`
  width: 170px;
  height: 50px;
  background-color: palevioletred;
  color: white;
  font-size: 17px;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  transition: all 360ms;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const Category = styled.select`
  outline: none;
  width: 400px;
  height: 50px;
  padding-left: 10px;
  border-radius: 7px;
  border: 1px solid silver;
  margin-bottom: 20px;
  :hover {
    box-shadow: 1px 1px 10px 0px rgba(129, 129, 129, 0.4);
  }

  #select {
    display: none;
  }
`;

const Summary = styled.textarea`
  outline: none;
  width: 400px;
  height: 70px;
  padding-left: 10px;
  padding-top: 10px;
  border-radius: 7px;
  border: 1px solid silver;
  resize: none;
  margin: 20px 0px;
  :hover {
    box-shadow: 1px 1px 10px 0px rgba(129, 129, 129, 0.4);
  }
`;

const Author = styled.input`
  outline: none;
  width: 400px;
  height: 50px;
  padding-left: 10px;
  border-radius: 7px;
  border: 1px solid silver;
  :hover {
    box-shadow: 1px 1px 10px 0px rgba(129, 129, 129, 0.4);
  }
`;

const Title = styled.input`
  width: 400px;
  height: 50px;
  padding-left: 10px;
  border-radius: 7px;
  border: 1px solid silver;
  margin-bottom: 20px;
  outline: none;
  :hover {
    box-shadow: 1px 1px 10px 0px rgba(129, 129, 129, 0.4);
  }
`;

const Second = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: 400px;
`;

const NewImage = styled.img`
  height: 100%;
  width: 100%;
`;

const UploadLabel = styled.label`
  background-color: black;
  height: 50px;
  width: 250px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  font-weight: 500;
  font-size: 20px;
  margin: 20px 0px;
`;

const UploadInput = styled.input`
  display: none;
`;

const Icon = styled.div`
  font-size: 100px;
  color: silver;
`;

const CoverImage = styled.div`
  width: 90%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 1px 1px 10px 0px rgba(129, 129, 129, 0.4);
`;

const First = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  box-shadow: 1px 1px 10px 0px rgba(129, 129, 129, 0.4);
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
