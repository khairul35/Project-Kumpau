'use client';

import { Button, Col, Divider, Row, Skeleton } from "antd";
import { ComponentProps } from "./props";
import { LoadingOutlined, ReloadOutlined } from "@ant-design/icons";

const Component = ({
    loading,
    onRefresh,
}: ComponentProps) => {
    return (
        <>
            <Row gutter={16}>
                <Col lg={12} md={12} sm={24}>
                    <h4>Komplot</h4>
                    <p>Tiada geng nak ajak mengail? Kenali rakan baru dengan berkomplot</p>
                </Col>
            </Row>
            <Divider />
            <Row gutter={16}>
                <Col span={24} className="text-right">
                    {loading ?
                        <LoadingOutlined style={{ fontSize: '20px', paddingRight: '20px' }} />
                        :
                        <a onClick={onRefresh}>
                            <ReloadOutlined style={{ fontSize: '20px', paddingRight: '20px' }} />
                        </a>
                    }{' '}
                    <Button type="primary">
                        + Cipta Komplot
                    </Button>
                </Col>
            </Row>
            <Row gutter={16}>
                <Skeleton loading={loading} active />
            </Row>
        </>
    );
};

export default Component;
