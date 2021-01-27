import foo from './footer.module.css';

const Footer = () => {
    return ( 
<footer>
    <div className={foo.wrapper}>
        <h3>THANKS FLOPPA</h3>
        <p>© 2021 #ReactMarathon.</p>
    </div>
</footer>
    );
}
 export default Footer;
