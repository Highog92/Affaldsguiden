import wave from '../../assets/Images/Layout/bg-waves-1.svg'
import waveStyle from './BgWaves.module.scss'
export function BgWaves() {

    return (
        <img className={waveStyle.BgWave} src={wave} alt="background wave" />

    )
}
