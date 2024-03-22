import loader_css from './Loader.module.scss'
import loader_gif from '@/assets/common/loader.gif'
import Image from "next/image";
const LoaderComponent = () => {
    return (
        <div className={loader_css.div}>
            <Image src={loader_gif} alt={'loader gif'} width={0} height={0}/>
        </div>
    )
}

export default LoaderComponent
