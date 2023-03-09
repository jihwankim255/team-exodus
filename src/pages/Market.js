import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import styled from "styled-components";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex: 1;
`;

const SidebarCol = styled.div`
  position: sticky;
  top: 100px;
  font-weight: 600;
  font-size: 18px;
  height: 100%;
`;

const Col = styled.div`
  margin: 30px 100px;
  width: 80%;

  height: 2000px;
  display: flex;
  flex-direction: column;
`;

const LoadingContainer = styled(Col)`
  margin-left: 400px;
  margin-bottom: 500px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ColTitle = styled.div`
  font-size: 65px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const ColLists = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 10px;
  height: 250px;
`;

const NftBox = styled.div`
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
`;

const NftImg = styled.img`
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 400px;
`;

const NftName = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const NftOwner = styled.div`
  font-size: 20px;
  opacity: 0.8;
`;

function Market() {
  console.log("1");
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const result = [];
    const options = {
      method: "GET",
      headers: { accept: "application/json" },
    };
    fetch(
      "https://testnets-api.opensea.io/v2/orders/goerli/seaport/listings?limit=16",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        response.orders.map((el) => {
          const { image_url, name, description, owner } =
            el?.maker_asset_bundle.assets[0].asset_contract;
          // console.log("el: ", image_url, name, description);

          result.push({ image_url, name, description, owner });
          // setLists((prev) => [
          //     ...prev,
          //     { image_url, name, description },
          // ]);
          setLists(result);

          setLoading(false);
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <SidebarCol>
        {" "}
        <Sidebar>
          <Menu>
            <SubMenu label="NFT Collections">
              <MenuItem> Drawing & Painting </MenuItem>
              <MenuItem> Gaming Art </MenuItem>
              <MenuItem> Digital Art </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> About Us </MenuItem>
          </Menu>
        </Sidebar>
      </SidebarCol>
      <Col>
        <ColTitle>NFT Market</ColTitle>
        <ColLists>
          {loading ? (
            <LoadingContainer>
              <PulseLoader
                color={"#36d7b7"}
                loading={loading}
                cssOverride={override}
                style={{ marginTop: "150px" }}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
                speedMultiplier={1}
              />
            </LoadingContainer>
          ) : (
            <>
              {lists?.map((data) => (
                <NftBox>
                  <NftImg src={data?.image_url} />
                  <NftOwner>{data?.owner ? data.owner : `Unnamed`}</NftOwner>
                  <NftName>{data?.name}</NftName>
                </NftBox>
              ))}
            </>
          )}
        </ColLists>
      </Col>

      {/* <Row>
        <RowName>ARTS</RowName>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <RowPics>
            {lists?.map((data) => (
              <RowPic>
                <Img src={data.image_url} />
                <div>{data.name}</div>
              </RowPic>
            ))}
          </RowPics>
        )}
      </Row> */}
    </Container>
  );
}

export default Market;
