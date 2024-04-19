'use client';

import { Col, Form, Modal, Row, Input, Select, Radio, Divider, Button } from "antd";
import { ComponentProps } from "./props";
import { States } from "@/app/constant/states";
import TextArea from "antd/es/input/TextArea";

const Component = ({
    showForm,
    onCancelForm,
    onFinish,
}: ComponentProps) => {
    return (
        <>
            <Modal
                title="Kongsi Port"
                open={showForm}
                onCancel={onCancelForm}
                footer={null}
                width={800}
                destroyOnClose
                centered
            >
                <Form
                    name="wrap"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    labelWrap
                    colon={false}
                    onFinish={onFinish}
                >
                    <Divider />
                    <Row gutter={16} style={{ height: 'calc(100vh - 230px)', overflow: 'auto', paddingLeft: '15px', paddingRight: '15px' }}>
                        <Col span="24">
                            <Form.Item
                                label="Nama Port"
                                name="name"
                                rules={[{ required: true, message: 'Kasi tau nama port!' }]}
                            >
                                <Input
                                    placeholder="Nama Port"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                label="Negeri"
                                name="state"
                                rules={[{ required: true, message: 'Kasi tau negeri mana!' }]}
                            >
                                <Select placeholder="Negeri">
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
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                label="Perkongsian"
                                name="description"
                                rules={[{ required: true, message: "Kongsi sikit tentang tempat ini" }]}
                            >
                                <TextArea placeholder="Tentang tempat ini.." size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Bayaran Minimum (RM)"
                                name="fees"
                                initialValue={0}
                            >
                                <Input type="number" placeholder="0" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Jenis Kawasan"
                                name="isLegal"
                                initialValue={true}
                            >
                                <Radio.Group
                                    options={[
                                        { label: "Kawasan Larangan", value: false },
                                        { label: "Bebas", value: true },
                                    ]}
                                    optionType="button"
                                    buttonStyle="solid"
                                />
                            </Form.Item>
                        </Col>
                        <Col span="24">
                            <Form.Item
                                label="Target"
                                name="target"
                            >
                                <Select
                                    mode="tags"
                                    style={{ width: '100%' }}
                                    placeholder="Spesis Target yang menghuni kawasan ini.. eg: Talang, Gelama, Loban, Kitang, Cencaru, Tetuka"
                                />
                            </Form.Item>
                        </Col>
                        <Col span="24">
                            <Form.Item
                                label="Umpan"
                                name="bait"
                            >
                                <Select
                                    mode="tags"
                                    style={{ width: '100%' }}
                                    placeholder="Umpan anti kumpau memikat si penghuni.. eg: Isi Ikan, Udang, Soft Plastic"
                                />
                            </Form.Item>
                        </Col>
                        <Col span="24">
                            <Form.Item
                                label="Teknik"
                                name="technique"
                            >
                                <Select
                                    mode="tags"
                                    style={{ width: '100%' }}
                                    placeholder="Kongsi sikit tips atau teknik bagi kami yang masih belajar.. eg: Bottom, Pelampung, Jigging"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider />
                    <Row gutter={16}>
                        <Col span={12}>
                            <Button onClick={onCancelForm} className="w-full">Batal</Button>
                        </Col>
                        <Col span={12}>
                            <Button type="primary" htmlType="submit" className="w-full">Kongsi</Button>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    );
};

export default Component;
