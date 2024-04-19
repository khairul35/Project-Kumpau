'use client';

import { useEffect, useState } from "react";
import Component from "./component";
import PortApi from '@/app/api/port/call';
import PortForm from "./form/page";
import { Port } from "./props";

const Ports = () => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [ports, setPorts] = useState<Port[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const [state, setState] = useState<string>('');

    const findAllPorts = async () => {
        setLoading(true);
        const { data } = await PortApi.findAllPort();
        setPorts(data || []);
        setLoading(false)
    };
    
    const filtrate = (arr: Port[]) => {
        if (state === '' && search === '') {
            return arr;
        } else {
            return arr.filter((e: Port) => {
                const { state: portState, name, description, target, bait, technique } = e;
                const isState = state.length > 0 ? state === portState : true;
                const isName = name.toLowerCase().includes(search.toLowerCase());
                const isStateSearch = state.toLowerCase().includes(search.toLowerCase());
                const isDescription = description.toLowerCase().includes(search.toLowerCase());
                const isTarget = target.some((e: string) => e.toLowerCase().includes(search.toLowerCase()));
                const isBait = bait.some((e: string) => e.toLowerCase().includes(search.toLowerCase()));
                const isTechnique = technique.some((e: string) => e.toLowerCase().includes(search.toLowerCase()));
                return isState && search === '' || (isName || isDescription || isTarget || isBait || isTechnique || isStateSearch);
            });
        }
    };

    const onCreatePort = () => {
        setShowForm(true);
    };

    const onCancelForm = () => {
        setShowForm(false);
    };

    // const ports = [
    //     {
    //         id: 1,
    //         name: 'Tanjung Harapan - Pelabuhan Klang',
    //         state: 'Selangor',
    //         description: `Terletak bersempadan dengan Perlabuhan Klang Golf Resort,
    //             lokasi ni memang menjadi pilihan ramai kerana pemandangannya yang sangat cantik.
    //             Lagi-lagi waktu matahari terbenam. Disebabkan ianya terletak di perlabuhan jadi ada banyak kapal
    //             di kawasan ni memberikan feel yang best untuk memancing kat sini.`,
    //         fees: 0,
    //         target: ['Talang', 'Gelama', 'Loban', 'Kitang', 'Cencaru', 'Tetuka'],
    //         bait: ['udang', 'umpun - umpun', 'sotong', 'jig 10g', 'belanak', 'roti'],
    //         isLegal: true,
    //         technique: ['Surfcast', 'Bottom', 'Pelampung'],
    //     },
    //     {
    //         id: 2,
    //         name: 'Pantai Jeram - Kuala Selangor',
    //         state: 'Selangor',
    //         description: `Inginkan cabaran semasa melakukan aktiviti berfaedah? Anda boleh mengunjungi Pantai Jeram
    //             yang terletak di Kuala Selangor untuk memancing kerana laluan ke kawasan memancing agak mencabar.
    //             Pantai ini juga sangat terkenal dan sentiasa penuh dengan pengunjung terutamanya ketika hujung minggu.
    //             Anda boleh memancing dengan tenang di lokasi santai dan cantik ini sambil melihat pemandangan pantai yang mengasyikkan.`,
    //         fees: 0,
    //         target: ['Belukang', 'Sembilang', 'Gelama'],
    //         bait: ['umpun - umpun', 'udang', 'umang - umang'],
    //         isLegal: true,
    //         technique: ['Bottom'],
    //     },
    //     {
    //         id: 3,
    //         name: 'Lombong The Mines',
    //         state: 'Selangor',
    //         description: `Lombong paling dalam dengan cerita yang agak menakutkan,
    //             namun jangan disangka tiada ikan. walaupun kawasan ini kawasan larangan,
    //             namun masih terdapat pemancing - pemancing degil yang ceroboh kawasan ini.
    //             anda boleh di denda RM300 atas kesalahan pencorobohan dan boleh diserahkan kepada pihak polis
    //             sekirangya ditangkap.`,
    //         fees: 0,
    //         target: ['Puyu', 'Keli', 'Lampam', 'Rohu'],
    //         bait: ['Roti', 'dedak', 'cengkerik'],
    //         isLegal: false,
    //         technique: ['Bottom', 'Sembat'],
    //     },
    //     {
    //         id: 4,
    //         name: 'Laguna Park - Pulau Indah',
    //         state: 'Selangor',
    //         description: `Dibuka kepada orang awam untuk pelbagai aktiviti riadah. Terdapat laluan catwalk beserta restoran yang dibuka di
    //             sini untuk aktiviti - aktiviti istirehat bersama keluarga.
    //             anda akan lihat jeti dipenuhi ramai pemancing.`,
    //         fees: 0,
    //         target: ['Gelama', 'Gelama Pisang', 'Duri', 'Belukang', 'Malong', 'Senangin'],
    //         bait: ['udang kopek', 'isi ikan', 'umpun - umpun', 'apollo'],
    //         isLegal: true,
    //         technique: ['Bottom', 'Apollo', 'Casting'],
    //     },
    //     {
    //         id: 5,
    //         name: 'Pantai Acheh',
    //         state: 'Selangor',
    //         description: `Untuk korang yang lebih suka memancing di pantai, Pantai Acheh adalah pilihan yang tepat untuk Tempat Memancing di Selangor.
    //             Pantai ni terletak di Selangor dan menawarkan pelbagai spesies ikan yang boleh korang tangkap.
    //             Selain memancing, korang juga boleh menikmati keindahan pantai dan angin sepoi-sepoi di sini.`,
    //         fees: 0,
    //         target: ['Gelama', 'Gelama Pisang', 'Duri', 'Belukang', 'Senangin'],
    //         bait: ['umpun - umpun', 'udang', 'umang - umang'],
    //         isLegal: true,
    //         technique: ['Bottom'],
    //     },
    //     {
    //         id: 6,
    //         name: 'Kelong Greenway',
    //         state: 'Selangor',
    //         description: `Kelong Greenway merupakan destinasi popular untuk memancing di Selangor.
    //             Tempat ni terletak di tengah laut dan menawarkan pengalaman memancing yang unik.
    //             RM 10 untuk perjalan menaiki bot kesana, RM 30 tanpa bermalam, Caj bermalam adalah RM60`,
    //         fees: 60,
    //         target: ['Jenahak', 'Ikan Merah', 'Gelama', 'Kerapu', 'Loban', 'Duri', 'Daun Baru', 'Tuka', 'Apollo'],
    //         bait: ['Udang Hidup', 'Udang Kopek', 'Anak Ikan', 'Sotong', 'Isi Ikan'],
    //         isLegal: true,
    //         technique: ['Jigging', 'Bottom', 'Apollo'],
    //     },
    // ];

    const onRefresh = () => {
        findAllPorts();
    };

    useEffect(() => {
        findAllPorts();
    }, []);

    return (
        <>
            <Component
                ports={filtrate(ports)}
                loading={loading}
                onCreatePort={onCreatePort}
                onRefresh={onRefresh}
                setSearch={setSearch}
                setState={setState}
                search={search}
                state={state}
            />
            <PortForm
                onCancelForm={onCancelForm}
                onRefresh={onRefresh}
                showForm={showForm}
            />
        </>
    );
};

export default Ports;
