import { flatten } from "./globals";
import { supabase } from "./supabase";

const loadHomepage = async () => {
  let { data: page_data } = await supabase.from("page_data").select("*").eq('page','home');
  const data = flatten(page_data)
  return(data)
};

const loadAboutPage = async ()=>{
  let { data: page_data } = await supabase.from("page_data").select("*").eq('page','about');
  const data = flatten(page_data)
  return(data)
}

const loadExperiencePage = async ()=>{
  let { data : work_data } = await supabase.from("experience").select("*").eq("type","work");
  let { data : personal_data } = await supabase.from("experience").select("*").eq("type","personal");
  return {work_data,personal_data}
}

const loadFooterData = async ()=>{
  let { data: page_data } = await supabase.from("page_data").select("*").eq('page','global');
  const data = flatten(page_data)
  return({'email':data.email,'github':data.github,'linkedin':data.linkedin})
}

export { loadHomepage , loadFooterData ,loadAboutPage,loadExperiencePage};
