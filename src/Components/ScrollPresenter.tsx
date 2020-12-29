import React, { Fragment, MutableRefObject } from "react";
import { GridBox, Overlay, Wrapper } from "../styles/styles";
import { img } from "../ImageData";

interface IProps {
  scrollRef: MutableRefObject<any>;
  handleScroll: (e: React.UIEvent<HTMLElement>) => void;
  count: number;
  loading: boolean;
}

const ScrollPresenter = ({
  scrollRef,
  handleScroll,
  count,
  loading,
}: IProps) => {
  return (
    <Fragment>
      {loading ? <Overlay /> : null}
      <Wrapper
        height={"100vh"}
        width={"100%"}
        padding="25px 100px"
        onScroll={(e) => handleScroll(e)}
        ref={scrollRef}
      >
        <GridBox>
          {img.map((item, index) => {
            if (index < count) {
              return (
                <img
                  style={{
                    borderRadius: 10,
                    width: "100%",
                  }}
                  src={item.src}
                />
              );
            }
          })}
        </GridBox>
      </Wrapper>
    </Fragment>
  );
};

export default ScrollPresenter;
