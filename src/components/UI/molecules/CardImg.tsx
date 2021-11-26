import React from "react";
import styled from "styled-components";

import emptyImg from "image/emptyImg.png";

export interface Img {
  imgUrl: string;
  uuid: string;
  name: string;
  size: number;
  contentType: string;
}

interface PropTypes {
  attachment: Img[];
}

function CardImg({ attachment }: PropTypes) {
  return (
    <Wrapper>
      {attachment.length > 0 ? (
        attachment.map(
          (attachment) =>
            attachment && (
              <img
                width="100%"
                height="100%"
                key={attachment.uuid}
                src={attachment.imgUrl}
                alt="poster"
              />
            )
        )
      ) : (
        <img src={emptyImg} alt="empty" width="100%" height="100%" />
      )}
    </Wrapper>
  );
}

export default CardImg;

const Wrapper = styled.div`
  width: auto;
  height: 25rem;
`;
