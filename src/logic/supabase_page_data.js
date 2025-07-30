import { flatten } from "./globals";
import { supabase } from "./supabase";

const loadHomepage = async () => {
  let { data: page_data } = await supabase.from("page_data").select("*").eq('page','home');
  const data = flatten(page_data)
  return(data)
};

const loadAboutPage = async ()=>{
  let { data: page_data } = await supabase.from("page_data").select("*").eq('page','about');
  let { data: edu_data } = await supabase.from("education").select("*");
  const about_data = flatten(page_data)
  console.log(about_data,edu_data)
  return {about_data,edu_data}
}

const loadExperiencePage = async ()=>{
  let { data : work_data } = await supabase.from("experience").select("*").eq("type","work");
  let { data : personal_data } = await supabase.from("experience").select("*").eq("type","personal");
  return {work_data,personal_data}
}

const loadSkills = async ()=>{
  let { data : page_data } = await supabase.from("page_data").select("*").eq("page","skills");
  const data = flatten(page_data)
  return (data)
}

const loadFooterData = async ()=>{
  let { data: page_data } = await supabase.from("page_data").select("*").eq('page','global');
  const data = flatten(page_data)
  return({'email':data.email,'github':data.github,'linkedin':data.linkedin})
}

const loadAllPages = async ()=>{
let { data: page_data } = await supabase.from("page_data").select("*");
  const data = flatten(page_data)
  return(data)

} 

export { loadHomepage , loadFooterData ,loadAboutPage,loadExperiencePage , loadSkills , loadAllPages};
