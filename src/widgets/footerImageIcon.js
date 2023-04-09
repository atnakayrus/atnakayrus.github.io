const FooterImageIcon = (props) => {
    return ( 
        <div className="h-12 w-12 flex p-2">
            <a href={props.href}>
                <img alt={props.alt} src={props.src}></img>
            </a>
        </div>
     );
}
 
export default FooterImageIcon;