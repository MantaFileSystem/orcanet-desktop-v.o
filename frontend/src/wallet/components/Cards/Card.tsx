import React, { FC, ReactNode } from 'react';

interface CardProps {
  title?: string;
  subTitle?: string;
  children?: ReactNode;
  imageSlot?: ReactNode;
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
}

const Card: FC<CardProps> = ({ title, subTitle, children, imageSlot, headerSlot, footerSlot }) => {
  return (
    <div className="card">
      {imageSlot && <div className="card-image">{imageSlot}</div>}
      {(headerSlot || title) && (
        <div className="card-header">
          {headerSlot ? headerSlot : (
            <>
              <h4 className="card-title">{title}</h4>
              {subTitle && <p className="card-category">{subTitle}</p>}
            </>
          )}
        </div>
      )}
      <div className="card-body">{children}</div>
      {footerSlot && (
        <div className="card-footer">
          <hr />
          {footerSlot}
        </div>
      )}
    </div>
  );
};

export default Card;
