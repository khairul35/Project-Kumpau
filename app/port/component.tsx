import { Button, Card, Col, Divider, Row, Select, Skeleton, Tag } from "antd"
import Search from "antd/es/input/Search";
import { ComponentProps } from "./props";
import { States } from "@/app/constant/states";
import style from "./index.module.css";
import { LoadingOutlined, ReloadOutlined } from "@ant-design/icons";

const Component = ({
    ports,
    loading,
    search,
    state,
    setSearch,
    setState,
    onRefresh,
    onCreatePort,
}: ComponentProps) => {
    return (
        <>
            <Row gutter={16}>
                <Col lg={12} md={12} sm={24}>
                    <h4>Port Memancing</h4>
                    <p>Kenali spot memancing menarik di kawasan anda</p>
                </Col>
                <Col lg={8} md={6} sm={24} className="text-right">
                    <Search placeholder="Cari.." value={search} onChange={(e) => setSearch(e.target.value)} />
                </Col>
                <Col lg={4} md={6} sm={24} className="text-right">
                    <Select placeholder="Kawasan" style={{width: '150px'}} value={state == '' ? undefined : state} onChange={(e) => setState(e)}>
                        {
                            States.map((e) => {
                                return (
                                    <Select.Option key={e?.id} value={e?.name}>
                                        {e?.name}
                                    </Select.Option>
                                );
                            })
                        }
                    </Select>
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
                    }
                    {' '}
                    <Button type="primary" onClick={onCreatePort}>
                        + Kongsi Port
                    </Button>
                </Col>
            </Row>
            <Row gutter={16}>
                <Skeleton loading={loading} active />
                {
                    ports.map(port => {
                        return (
                            <Col lg={8} md={12} sm={24} key={port.id} className="p-2">
                                <Card>
                                    <h6>{port.name}</h6>
                                    <p>
                                        {port.state}
                                        <span className="pl-2">
                                            {port.fees ?
                                                <Tag color="red">RM {port.fees}</Tag>
                                                :
                                                <Tag color="green">FREE</Tag>
                                            }
                                        </span>
                                        {
                                            !port?.isLegal ?
                                                <Tag color="red-inverse">
                                                    KAWASAN LARANGAN
                                                </Tag>
                                                : null
                                        }
                                    </p>
                                    <Divider />
                                    <b>Perkongsian:</b>
                                    <p>{port.description || '-'}</p>
                                    <Divider />
                                    <b>Target:</b>
                                    <p>
                                        {
                                            port.target.map(e => {
                                                return (
                                                    <span key={e}>
                                                        <Tag color="blue">{e}</Tag>
                                                    </span>
                                                );
                                            })
                                        }
                                    </p>
                                    <Divider />
                                    <b>Umpan:</b>
                                    <p>
                                        {
                                            port.bait.map(e => {
                                                return (
                                                    <span key={e}>
                                                        <Tag color="blue">{e}</Tag>
                                                    </span>
                                                )
                                            })
                                        }
                                    </p>
                                    <Divider />
                                    <b>Technique:</b>
                                    <p>
                                        {
                                            port.technique.map(e => {
                                                return (
                                                    <span key={e}>
                                                        <Tag color="blue">{e}</Tag>
                                                    </span>
                                                )
                                            })
                                        }
                                    </p>
                                </Card>
                            </Col>
                        );
                    })
                }
            </Row>
        </>
    );
};

export default Component;
