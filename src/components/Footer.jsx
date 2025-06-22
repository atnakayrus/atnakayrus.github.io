import { useEffect, useState } from "react";
import { loadFooterData } from "../logic/supabase_page_data";

export default function Footer() {

    const [data,setData] = useState({})

    useEffect(()=>{
        loadData();
    }
    ,[]);

    const loadData = async () => {
        const data = await loadFooterData();
        setData(data);
        console.log(data)
    }

    return (
        <div className="Footer">
            <a  href={data?.linkedin} className="desktop">LinkedIn</a>
            <a  href={data?.github} className="desktop">Github</a>
            <a  href={data?`mailto:${data?.email}`:"" } className="desktop" >{data?data?.email:""}</a>
            <p >Surya Kanta Ghosh</p>
            <div className="mobile">
                <a href={data?.linkedin}><img src="/linkedin.png" alt="linkedin" className="linkedin" /></a>
                <a href={data?.github}><img src="/github.png" alt="github" className="github" /></a>
                <a href={data?`mailto:${data?.email}`:""}><img src="/email.png" alt="email" className="email" /></a>
            </div>
        </div>
    );
}