import { Col, Form, Modal, Row, Input, Select } from "antd";
import { ComponentProps } from "./props";
import { States } from "@/app/constant/states";

const Component = ({
    showForm,
    onCancelForm,
}: ComponentProps) => {
    return (
        <>
            <Modal
                title="Kongsi Port"
                open={showForm}
                footer={null}
                width={800}
                centered
            >
                <Form
                    name="wrap"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    labelWrap
                    colon={false}
                >
                    <Row gutter={16}>
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
                    </Row>
                </Form>
            </Modal>
        </>
    );
};

export default Component;
