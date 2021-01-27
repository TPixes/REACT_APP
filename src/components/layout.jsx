import l from './layout.module.css';

const Layout = ({title, descr, id ,url, color}) => { 
    return (

    <section className={l.root} id={id}>

    <div className={l.wrapper}>
        <article>
            <div className={l.title}>
                <h3>{title}</h3>
                {
                    url ?  <img src={url} alt={descr} /> : null
                }
                <span className={l.separator}></span>
            </div>
            <div className={l.desc.full}>
                <p>{descr}</p>
            </div>
        </article>
    </div>
</section>

    );
  }
  export default Layout;
  