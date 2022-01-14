import React from "react";
import "./News.scss";
import image from "../../assets/image/thongbao.jpg";
import { Breadcrumb, Pagination } from "semantic-ui-react";
const News = () => {
    return (
        <div className="container news__container">
            <div className="row news__breadcumb">
                <div className="col-sm-10 offset-sm-1">
                    <Breadcrumb>
                        <Breadcrumb.Section link>Trang chủ</Breadcrumb.Section>
                        <Breadcrumb.Divider />
                        <Breadcrumb.Section active>
                            Thông báo
                        </Breadcrumb.Section>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <div className="news__list">
                        <div className="news__wrapper">
                            <div className="news__image">
                                <img src={image} alt="" />
                            </div>
                            <div className="news__content">
                                <div className="news__title">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Lorem ipsum dolor sit amet
                                    consectetur, adipisicing elit. Lorem ipsum
                                    dolor sit amet consectetur, adipisicing
                                    elit. Lorem ipsum dolor sit amet
                                    consectetur, adipisicing elit.
                                </div>
                                <div className="news__date__wrapper">
                                    <span className="news__date">
                                        18-11-2021
                                    </span>
                                    <span className="news__latest">Mới</span>
                                </div>
                            </div>
                        </div>
                        <div className="news__wrapper">
                            <div className="news__image">
                                <img src={image} alt="" />
                            </div>
                            <div className="news__content">
                                <div className="news__title">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit.
                                </div>
                                <div className="news__date__wrapper">
                                    <span className="news__date">
                                        18-11-2021
                                    </span>
                                    <span className="news__latest">Mới</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ marginTop: "2rem" }}>
                <div className="col-sm-12">
                    {/* {totalPages >= 2 && (
                        <Pagination
                            defaultActivePage={page}
                            totalPages={totalPages}
                        />
                    </div>
                )} */}
                </div>
            </div>
        </div>
    );
};

export default News;
