'use client';

import { message } from "antd";
import Component from "./component";
import { FormProps } from "./props";
import PortApi from "@/app/api/port/call";

const PortForm = (props: FormProps) => {
    const onFinish = async (values: any) => {
        message.loading("Sedang Memuatkan...");
        await PortApi.createPort(values)
            .then(() => {
                props.onRefresh();
                message.success('Terima Kasih! Port anda telah berjaya dikongsikan');
                props.onCancelForm();
            })
            .catch((err) => {
                message.error('Oopss! Terdapat masalah dengan kongsikan port anda');
                console.log(err?.response);
            })
    };

    return (
        <>
            <Component 
                onCancelForm={props.onCancelForm}
                onFinish={onFinish}
                showForm={props.showForm}
            />
        </>
    );
};

export default PortForm;
